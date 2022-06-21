import React from "react";
import BgHome from "./BgHome";
import CategoryHome from "./CategoryHome";
import Footer from "./Footer";
import Header from "./Header";


export default function ShoppApp(){
    return(
        <div className="shop_app">
            <Header/>
            <BgHome/>
            <CategoryHome/>
            <Footer/>
        </div>
    )
}