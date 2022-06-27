import React, { useState } from "react";
import { Container, Form, FormControl, Modal, Button, ModalBody } from "react-bootstrap";
import "../css/modalsearch.css"
export default function Modalsearch({ handleClose, show }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} className="modal"
                centered    >
                <input type="text" placeholder="Search Product..." className="search-input" />
            </Modal>
        </>
    )
}