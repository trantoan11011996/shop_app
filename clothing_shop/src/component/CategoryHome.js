import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/home.css"

export default function CategoryHome({ category }) {
    return (
        <div className="category">
            <Row className="category_list">
                {category.map((item, index) => {
                    return (
                        <Col key = {index} className="category_item" xl={2} md={12}>
                            <img src={item.img} className="w-100"></img>
                            <h1>{item.cate}</h1>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}