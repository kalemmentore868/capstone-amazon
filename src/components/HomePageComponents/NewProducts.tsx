import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import "../../assets/css/newProducts.css"
import ProductCard2 from '../ProductCard2';
import { dummyData2 } from '../../helper/heroData';
import { useFetchAllProducts } from '../../helper/UsefulFuntions';

const NewProducts = () => {

    const { isLoading, apiError, apiData } = useFetchAllProducts(
        "GET",
        `${process.env.REACT_APP_API_ENDPOINT}/products`,
        {}
    );

    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} md={6}>
                    <h2 className="curly big-font">New Products</h2>
                </Col>
                <Col xs={12} md={6} className="text-right rubiks-font hover text-muted mt-4">
                    <span className="me-4 active-cat">All</span>
                    <span className="me-4">Burgers</span>
                    <span className="me-4">Combos</span>
                    <span className="me-4">Veggie</span>
                    <span>Subs</span>
                </Col>
            </Row>
            <Row className="mt-4">
                {apiData.slice(0, 3).map((product, index) => (
                    <Col key={index} xs={12} md={4} className="mb-4">
                        <Card>

                            <ProductCard2 product={product} />

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewProducts;