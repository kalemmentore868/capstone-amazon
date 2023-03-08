import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import "../../assets/css/newProducts.css"
import ProductCard2 from '../ProductCard2';

const NewProducts = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} md={6}>
                    <h2 className="curly big-font">New Products</h2>
                </Col>
                <Col xs={12} md={6} className="text-right rubiks-font hover text-muted mt-4">
                    <span className="me-4 active-cat">All</span>
                    <span className="me-4">Dairy</span>
                    <span className="me-4">Fruits</span>
                    <span className="me-4">Snacks</span>
                    <span>Meat</span>
                </Col>
            </Row>
            <Row className="mt-4">
                {[...Array(6)].map((_, index) => (
                    <Col key={index} xs={12} md={4} className="mb-4">
                        <Card>
                            <ProductCard2 />

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewProducts;