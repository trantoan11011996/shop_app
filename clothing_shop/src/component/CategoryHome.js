import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "../css/home.css"

    export default function CategoryHome(){
        return(
            <div className="category">
                <Row className="category_list">
                    <Col className="category_item" xl={2} md = {12}>
                        <img src="https://tummachines.com/wp-content/uploads/2022/04/top-683x1024.jpg" className="w-100"></img>
                        <h1>TOPS</h1>
                    </Col>
                    <Col className="category_item" xl={2} md = {12}>
                        <img className="w-100" src="https://tummachines.com/wp-content/uploads/2022/04/denim-683x1024.jpg"></img>
                        <h1>DENIM</h1>
                    </Col>
                    <Col className="category_item" xl={2} md = {12}>
                        <img className="w-100" src="https://tummachines.com/wp-content/uploads/2022/04/bottom-683x1024.jpg"></img>
                        <h1>BOTTOMS</h1>
                    </Col>
                    <Col className="category_item" xl={2} md = {12}>
                        <img className="w-100" src="https://tummachines.com/wp-content/uploads/2022/04/outwear-683x1024.jpg"></img>
                        <h1>OUTWEAR</h1>
                    </Col>
                    <Col className="category_item" xl={2} md = {12}>
                        <img className="w-100" src="https://tummachines.com/wp-content/uploads/2022/04/accessories-683x1024.jpg"></img>
                        <h1>ACCESSORIES</h1>
                    </Col>
                </Row>
            </div>
        )
    }