import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContentFrom() {
    return (
        <>
            <Form className="content-form">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3 website" controlId="formBasicWebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="website" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ContentFrom
