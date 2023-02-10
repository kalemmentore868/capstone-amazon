import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ProductCard from '../ProductCard';

export interface Product {
    title: string;
    description: string;
    price: number;
    img_url: string;
    _id: string;
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://capstone-server-production.up.railway.app/api/products');
            const data = await res.json();
            setProducts(data.data.slice(0, 4));
        };

        fetchProducts();
    }, []);

    return (
        <Container className="my-5">
            <h2 className="my-5 text-center">Take A Look At Some Of Our Products</h2>
            <Row>
                {products.map((product) => (
                    <Col md={6} lg={3} key={product._id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;