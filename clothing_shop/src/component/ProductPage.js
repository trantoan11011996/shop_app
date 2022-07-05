
import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, Row, Col, Button, NavLink, Nav } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/productcate.css"
import "../css/productall.css"
import { getItembyCate, getProductFormLocal } from "./data";

export default function ProductPage({category}){
    const {name} = useParams()
    let navigate = useNavigate()
    const [product , setProduct] = useState([])
    const [noOfelement, setnoOfElement] = useState(6)
    useEffect(()=>{
        getItembyCate(name)
        const productByCate = getProductFormLocal()
        setProduct(productByCate)
    },[name])

    const loadmore = () => {
        setnoOfElement(noOfelement + noOfelement)
    }
    const sliceProduct = product.slice(0, noOfelement)
    
    
    
    const handleChangeURL = (value)=>{
        navigate(`/product/${value}`)
        value = ""
    }
    return (
        <div className="product-cate-container">
            <Container>
            <div className="header">
                    <h1>Products</h1>
                </div>
                <div className="filter-product">
                    <Row>
                        <Col md={3}>
                            <Form.Label className="text-muted">Filter</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={e=>handleChangeURL(e.target.value)}>
                                <option value="All">All</option>
                                {category.map((item, index) => {
                                    return (
                                        <>
                                        <option key={index} value={item.cate} >{item.cate}</option>
                                        </>
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
                        {sliceProduct.map((product, index) => {
                            return (
                                <Col key={index} md={4} sm={6} className="item">
                                    <Link to={"/itemDetail/" + product.product} className="link-item">
                                        <div className="bg-image hover-zoom">
                                            <img src={product.img1} className="w-100 img-product"
                                                onMouseOver={e => e.currentTarget.src = `${product.img2}`}
                                                onMouseOut={e => e.currentTarget.src = `${product.img1}`}></img>
                                        </div>
                                        <p className="product-name">{product.product}</p>
                                        <p className="product-price">{product.price} đ</p>
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                    <div className="btn-loadmore">
                        <Button onClick={loadmore}  variant="dark" className="btn"> Load More </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}