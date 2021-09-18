import React from 'react'
import Container from "react-bootstrap/Container";
import Footer from "../home/ContentFooter";
import Pagination from "./ContentPagination";
import ContentNewsCards from "./ContentNewsCards";

function News() {
    return (
        <>
            <Container>
                <h1>News</h1>
                <Pagination />
                <ContentNewsCards />
                <Pagination />
            </Container>

            <Footer />
        </>
    )
}

export default News;
