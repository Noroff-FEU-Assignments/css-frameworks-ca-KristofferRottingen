import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import TabImage1 from "../Images/Tab images/tab-1.jpg";
import TabImage2 from "../Images/Tab images/tab-2.jpg";
import TabImage3 from "../Images/Tab images/tab-3.jpg";

function ContentAccordion() {
    return (
        <>
            <Accordion defaultActiveKey="0" className="d-md-none">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            First
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="accrodion-content">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <img src={TabImage1} className="tab-img" alt="tab-img" />
                                <div className="icons-accordion">
                                    <i>SHARE</i>
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Second
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <div className="accrodion-content">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <img src={TabImage2} className="tab-img" alt="tab-img" />
                                <div className="icons-accordion">
                                    <i>SHARE</i>
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Third
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <div className="accrodion-content">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <img src={TabImage3} className="tab-img" alt="tab-img" />
                                <div className="icons-accordion">
                                    <i>SHARE</i>
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}

export default ContentAccordion
