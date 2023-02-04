import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Product } from '../components/HomePageComponents/DisplayProducts';
import ProductCard from '../components/ProductCard';


const ProductListing: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('http://localhost:5000/api/products');
            const data = await res.json();
            setProducts(data.data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <Container>
                <h1 className="my-5 text-center">Take A Look At Our Products</h1>
                <Row>
                    {products.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={product._id}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ProductListing;