import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductType } from '../helper/types';
import Loader from './Loader'
import ProductCard from './ProductCard';

interface props {
    isLoading: boolean;
    bestSellers: ProductType[]
}

const BestSellerContainer: React.FC<props> = ({ isLoading, bestSellers }) => {
    return (
        <Container className="py-3 my-4">
            <h1 className="mb-5 text-left curly">Browse Best Sellers </h1>

            <Row>
                {isLoading ? <Loader /> : (
                    <>
                        {bestSellers.map(product => (
                            (
                                <Col lg={4} md={12} key={product.id}>
                                    <ProductCard product={product} />
                                </Col>
                            )
                        ))}
                    </>
                )}
            </Row>



        </Container>
    )
}

export default BestSellerContainer