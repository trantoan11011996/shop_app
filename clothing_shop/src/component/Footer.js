import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare,FaRegCopyright } from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
export default function Footer(){
    return(
        <div className="footer_home">
            <Container className="footer">
            <Row>
                <Col className="contact" xl={6} md={12}>
                    <h1>CONTACT</h1>
                    <ul className="contact_info">
                        <li className="email_footer">tummachines@gmail.com</li>
                        <li className="contact_icon">
                            <FaFacebookSquare></FaFacebookSquare>
                            <BsInstagram></BsInstagram>
                        </li>
                    </ul>
                </Col>
                <Col className="more"  xl={6} md={12}>
                    <h1>MORE</h1>
                    <ul>
                        <li>Contact</li>
                        <li>About Us</li>
                        <li>Terms</li>
                        <li>Recruitment</li>    
                    </ul>
                </Col>
            </Row>
            <Row>
            <Col>
            <FaRegCopyright></FaRegCopyright>
            2012 Tum Machines
            </Col>
            </Row>
            </Container>
        </div>
    )
}