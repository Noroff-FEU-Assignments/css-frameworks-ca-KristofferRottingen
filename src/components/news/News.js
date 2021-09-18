import React from 'react'
import Container from "react-bootstrap/Container";
import Footer from "../home/ContentFooter";
import Pagination from './Pagination';

function News() {
    return (
        <>
            <Container>
                <h1>News</h1>
                <Pagination />
            </Container>
            <Footer />
        </>
    )
}

export default News;
