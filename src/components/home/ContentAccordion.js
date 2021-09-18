import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import TabImage1 from "../../Images/Tab images/tab-1.jpg";
import TabImage2 from "../../Images/Tab images/tab-2.jpg";
import TabImage3 from "../../Images/Tab images/tab-3.jpg";

function ContentAccordion() {
    return (
        <>
            <Accordion defaultActiveKey="0" className="d-md-none">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>First</Accordion.Header>
                    <Accordion.Body>
                        <div className="accrodion-content">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <img src={TabImage1} className="tab-img" alt="tab-img" />
                            <div className="icons-accordion">
                                <i>SHARE</i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Second</Accordion.Header>
                    <Accordion.Body>
                        <div className="accrodion-content">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <img src={TabImage2} className="tab-img" alt="tab-img" />
                            <div className="icons-accordion">
                                <i>SHARE</i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Third</Accordion.Header>
                    <Accordion.Body>
                        <div className="accrodion-content">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <img src={TabImage3} className="tab-img" alt="tab-img" />
                            <div className="icons-accordion">
                                <i>SHARE</i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default ContentAccordion
