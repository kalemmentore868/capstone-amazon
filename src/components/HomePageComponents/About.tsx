import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Logo from '../Logo';

const About = () => {
    return (
        <Container className="my-5 py-5">
            <Row className="my-5 py-5">
                <Col md={6}>
                    <Logo width={300} />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body className=" py-4">
                            <Card.Title className="text-center py-2">About Trinizon</Card.Title>
                            <Card.Text>
                                Trinizon is a local e-commerce platform that serves the Trinidad and Tobago market. We aim to provide a convenient and secure shopping experience for our customers, offering a wide range of products at competitive prices. Our mission is to bring the best of Trinidad and Tobago to the world, and make shopping easy and accessible for everyone.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;