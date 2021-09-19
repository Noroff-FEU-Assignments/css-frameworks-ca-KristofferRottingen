import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../home/ContentFooter";
import ContentForm from "./ContentFrom";
import ContentInfo from "./ContentInfo";


function Contact() {
    return (
        <>
            <Container>
                <Row className="contact-row">
                    <Col className="contact-form">
                        <h1>Submit your details</h1>
                        <ContentForm />
                    </Col>
                    <Col>
                        <ContentInfo />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Contact

