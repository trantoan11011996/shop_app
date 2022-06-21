import React, { useState } from "react";
import { Col, Container, Row, Nav, NavDropdown, Navbar, Form, Button, Badge, Offcanvas } from "react-bootstrap";
import "../css/home.css"
import { BsSearch } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"
import { FaRegCopyright } from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
export default function Header() {
    const [sideCart, setSideCart] = useState(false)

    const openSideCart = () => {
        setSideCart(!sideCart)
        console.log('alo')
    }
    const closeSideCart = () => {
        setSideCart(!sideCart)
        console.log('alo')
    }
    return (
        <>
            <div className="header_app">
                <Container fluid>
                    <Row>
                        <Col md={3} sm={4}>
                        </Col>
                        <Col className='nav_header' md={6} sm={4}>
                            <div className="header_logo">
                                <h1>TUMS</h1>
                                <FaRegCopyright className="icon_logo"></FaRegCopyright>
                            </div>
                            <Nav>
                                <Nav.Link className="nav_link" href="#home">HOME</Nav.Link>
                                <Nav.Link className="nav_link" href="#link">STORE</Nav.Link>
                                <Nav.Link className="nav_link" href="#home">ABOUT US</Nav.Link>
                            </Nav>
                        </Col>
                        <Col className="search_cart" md={3} sm={4}>
                            <div className="search_home">
                                <BsSearch></BsSearch>
                            </div>
                            <div className="cart_home" onClick={openSideCart}>
                                <FiShoppingCart className="cart_icon"></FiShoppingCart>
                                <Badge pill bg="dark" text="light">0</Badge>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={sideCart ? "show_side-cart shadow-sm" : "side_cart"}>
                <div className="side_cart-top">
                    <div className="cart_home cart_home-sidebar" onClick={openSideCart}>
                        <FiShoppingCart className="cart_icon"></FiShoppingCart>
                        <Badge pill bg="dark" text="light">0</Badge>
                    </div>
                    <AiOutlineClose className="close_sidebar" onClick={closeSideCart}></AiOutlineClose>
                </div>
            </div>
        </>

    )
}