import React from 'react'

function ContentNav() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">News</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Form inline className="form-search">
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Go</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default ContentNav
