import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContentCarousel from "./ContentCarousel";
import ContentAccordion from "./ContentAccordion";
import ContentTabs from "./ContentTabs";


function Home() {
    return (
        <>
            <ContentCarousel />
            <Container>
                <h2>We do YAY things</h2>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <ContentAccordion />
                        <div className="d-none d-md-block">
                            <ContentTabs />
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer>
                <div>

                </div>
            </footer>
        </>
    )
}

export default Home;
