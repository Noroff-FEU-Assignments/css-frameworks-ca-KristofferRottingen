import React from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function ContentTabs() {
    return (
        <>
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="first" title="First">
                    <div>

                    </div>
                    <div>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <i>#</i>
                        <i>#</i>
                        <i>#</i>
                    </div>
                </Tab>
                <Tab eventKey="second" title="Second">
                    <div>

                    </div>
                    <div>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <i>#</i>
                        <i>#</i>
                        <i>#</i>
                    </div>
                </Tab>
                <Tab eventKey="third" title="Third">
                    <div>

                    </div>
                    <div>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <i>#</i>
                        <i>#</i>
                        <i>#</i>
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}

export default ContentTabs
