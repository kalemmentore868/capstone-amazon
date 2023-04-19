import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-start">
                        <p>&copy; 2023 What Tuh Eat</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <p>
                            Designed by{' '}
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                Kalem Mentore
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
