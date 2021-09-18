import React from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabImage1 from "../../Images/Tab images/tab-1.jpg";
import TabImage2 from "../../Images/Tab images/tab-2.jpg";
import TabImage3 from "../../Images/Tab images/tab-3.jpg";

function ContentTabs() {
    return (
        <>
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="first" title="First">
                    <div>
                        <img src={TabImage1} className="tab-img" alt="tab-img" />
                    </div>
                    <div>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <i>SHARE</i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </Tab>
                <Tab eventKey="second" title="Second">
                    <div>
                        <img src={TabImage2} className="tab-img" alt="tab-img" />
                    </div>
                    <div>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <i>SHARE</i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </Tab>
                <Tab eventKey="third" title="Third">
                    <div>
                        <img src={TabImage3} className="tab-img" alt="tab-img" />
                    </div>
                    <div>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <i>SHARE</i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}

export default ContentTabs;
