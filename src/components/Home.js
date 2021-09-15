import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Home() {
    return (
        <>
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">News</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Form inline className="form-search">
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Go</Button>
                </Form>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h2>We do YAY things</h2>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="first" title="First">

                            </Tab>
                            <Tab eventKey="second" title="Second">

                            </Tab>
                            <Tab eventKey="third" title="Third" disabled>

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
