import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    return (
        <Container className="vh-100 mt-5">
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter username/email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container>
    )
}

export default LoginForm