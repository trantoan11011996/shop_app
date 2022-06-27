import React, { useState,useRef } from "react";
import { Container, Form, FormControl, Row, Col, Button } from "react-bootstrap";
import "../css/productall.css"
import { getAllProduct,getAllProductFormLocal, GetData } from "./data";
getAllProduct()
getAllProductFormLocal()
export default function ProductPageAll({ allProduct,category,categoryItem, setCategoryItem,productBycate,filterByCategory }) {
    console.log(productBycate)
    const [noOfelement, setnoOfElement] = useState(6)
    const loadmore = () => {
        setnoOfElement(noOfelement + noOfelement)
    }
    const sliceProduct = productBycate.slice(0, noOfelement)
    const hanldeFilter = (e)=>{
        setCategoryItem(e.target.value)
    }
    return (
        <div className="product-page-all">
            <Container>
                <div className="header">
                    <h1>Products</h1>
                </div>
                <div className="filter-product">
                    <Row>
                        <Col md={3}>
                            <Form.Select aria-label="Default select example" onChange={hanldeFilter}>
                                <option value="all">All</option>
                                {category.map((item,index)=>{
                                    return(
                                        <option key={index} value={item.cate} >{item.cate}</option>
                                    )
                                })}
                            </Form.Select>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </div>
                <div className="product-field">
                    <Row>
                        {sliceProduct.map((product,index) => {
                            return (
                                <Col key = {index} md={4} sm={6}>
                                    <div className="bg-image hover-zoom">
                                    <img src={product.img1} className="w-100 img-product"
                                    onMouseOver={e=>e.currentTarget.src = `${product.img2}`}
                                    onMouseOut={e=>e.currentTarget.src = `${product.img1}`}></img>
                                    </div>
                                    <p className="product-name">{product.product}</p>
                                    <p className="product-price">{product.price} đ</p>
                                </Col>
                            )
                        })}
                    </Row>
                    <div className="btn-loadmore">
                        <Button onClick={loadmore} variant="dark" className="btn"> Load More </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}