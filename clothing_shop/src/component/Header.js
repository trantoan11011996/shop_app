import React, { useState } from "react";
import { Col, Container, Row, Nav, NavDropdown, Navbar, Form, Button, Badge, Offcanvas } from "react-bootstrap";
import "../css/home.css"
import { BsSearch } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"
import { FaRegCopyright } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { useParams, Link, NavLink } from "react-router-dom";
import Modalsearch from "./Modalsearch";
export default function Header() {
    const [sideCart, setSideCart] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }



    const openSideCart = () => {
        setSideCart(!sideCart)
        console.log('open')
    }
    const closeSideCart = () => {
        setSideCart(!sideCart)
        console.log('close')
    }
    return (
        <>
        <div className={show ? "header display-none" : "header"}>
            <div className="header_app">
                <Container fluid>
                    <Row>
                        <Col md={3} sm={4}>
                        </Col>
                        <Col className='nav_header' md={6} sm={4}>
                            <Link className="header_logo" to="/">
                                <h1>TUMS</h1>
                                <FaRegCopyright className="icon_logo"></FaRegCopyright>
                            </Link>
                            <Nav className="link">
                                <Link className="nav_link" to="/">HOME</Link>
                                <Link className="nav_link" to="/allproduct">STORE</Link>
                                <Link className="nav_link" to="/about">ABOUT US</Link>
                            </Nav>
                        </Col>
                        <Col className="search_cart" md={3} sm={4}>
                            <div className="search_home" onClick={handleShow}>
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
        </div>
            <Modalsearch handleClose={handleClose} handleShow={handleShow} show={show} />
        </>

    )
}