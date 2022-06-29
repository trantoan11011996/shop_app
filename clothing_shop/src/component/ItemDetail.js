import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getItem } from "./data";
import "../css/itemdetail.css"
export default function ItemDetail({amount,inCrease,deCrease}) {
    const { itemName } = useParams()
    const [itemDetail, setItemDetail] = useState([])

    useEffect(() => {
        const detail = getItem(itemName)
        setItemDetail(detail)
        window.scrollTo(0, 0)
    }, [itemName])
    const itemSize = getItem(itemName)

    const handleIncrease = () =>{
        inCrease()
        console.log('++++')
    }
    const handleDecrease = () =>{
        console.log("----")
        deCrease()
    }
    return (
        <div className="item-detail-container">
            <Container>
                <Row>
                    <Col md={6} sm={12} className="img">
                        <Row>
                            <Col md={12} className="img-item">
                                <img src={itemDetail.img1} className="w-100"></img>
                            </Col>
                            <Col className="img-item">
                                <img src={itemDetail.img2} className="w-100"></img>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="detail">
                        <div className="item-detail">
                            <h1 className="item-name">
                                {itemDetail.product}
                            </h1>
                            <p className="item-price">
                                {itemDetail.price} đ
                            </p>
                            <div className="item-size">
                                {itemSize.size.map((item) => {
                                    return (
                                        <div className="size">
                                            <p>{item}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="add-cart">
                                <div className="amount">
                                    <input type="number" value={amount} min={1} placeholder={1} className="input-amount"></input>
                                    <div className="btn-amount-item">
                                        <div className="btn-amount" onClick={handleIncrease}>+</div>
                                        <div className="btn-amount" onClick={handleDecrease}>-</div>
                                    </div>
                                </div>
                                <div className="add">
                                    <p className="add-title">Thêm vào giỏ hàng</p>
                                </div>
                            </div>
                        </div>
                        <ul className="item-function">
                            <li>
                                - THÀNH PHẦN VẢI: 90% COTTON, 10% SPANDEX
                            </li>
                            <li>
                                - QUẦN ĐƯỢC GIẶT HẤP KHÔ ĐỂ GIẢM TÌNH TRẠNG PHAI MÀU.
                            </li>
                            <li>
                                - QUẦN CÓ FORM REGULAR FIT QUẦN ĐƯỢC XẢ LAI CÙNG CẮT RÁP Ở PHẦN ỐNG, ĐỦ ĐỂ PHỦ GIÀY, KÈM THEO ĐÓ LÀ CHE ĐƯỢC CÁC KHUYẾT ĐIỂM CỦA CHÂN VÀ SẼ GIÚP CHÂN BẠN TRÔNG DÀI HƠN.
                            </li>
                            <li>
                                - VẢI DENIM CO GIÃN NHẸ, QUẦN SỰ ĐỨNG FORM KHÁ TỐT.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}