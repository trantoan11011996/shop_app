import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import BgHome from "./BgHome";
import CategoryHome from "./CategoryHome";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import Modalsearch from "./Modalsearch";
import ProductPageAll from "./ProductPageAll";
import { getAllProduct, getAllProductFormLocal, GetData } from "./data";
import ItemDetail from "./ItemDetail";

export default function ShoppApp() {
    const [category, setCategory] = useState(GetData())
    const [allProduct, setAllProduct] = useState(getAllProductFormLocal())
    const [categoryItem, setCategoryItem] = useState("all")
    const [productBycate, setProductByCate] = useState(getAllProductFormLocal())
    const [amount,setAmount] = useState(1)

    const inCrease = ()=>{
        setAmount((amount+1))
    }
    const deCrease = ()=>{
        setAmount(amount-1)
        if(amount<2){
            setAmount(1)
            return
        }
    }
    
    useEffect(() => {
        filterByCategory()
    }, [categoryItem])

    useEffect(() => {
        getAllProduct()
        getAllProductFormLocal()
    },[])

    const filterByCategory = () => {
        switch (categoryItem) {
            case "all":
                setProductByCate(allProduct.filter(item => item.typeAll == "All"))
                break
            case categoryItem:
                setProductByCate(allProduct.filter(item => item.type == categoryItem))
                break
        }
    }
    console.log(productBycate)
    return (
        <BrowserRouter>
            <div className="shop_app">
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage category={category} />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/allproduct" element={<ProductPageAll
                        productBycate={productBycate}
                        category={category}
                        categoryItem={categoryItem}
                        setCategoryItem={setCategoryItem}
                        filterByCategory={filterByCategory} />}></Route>
                        <Route path="/itemDetail/:itemName" element={<ItemDetail amount = {amount} inCrease = {inCrease} deCrease = {deCrease}/>}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}