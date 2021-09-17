import React from 'react'
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


function ContentNav() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <div className="nav-links">
                                <Nav.Link className="active" href="#home">Home</Nav.Link>
                                <Nav.Link href="#news">News</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </div>
                            <Form inline className="form-search">
                                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                                <Button className="nav-button" variant="outline-success">Go</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default ContentNav
