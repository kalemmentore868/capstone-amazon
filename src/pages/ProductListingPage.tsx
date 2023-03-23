import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { ProductType } from '../helper/types';


const ProductListing: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://capstone-server-production.up.railway.app/api/products');
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
                        <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ProductListing;