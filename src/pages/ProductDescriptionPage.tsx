import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row'
import "../assets/css/productDetails.css"
import ProductImages from '../components/ProductDescription/ProductImages'
import ProductInfo from '../components/ProductDescription/ProductInfo'
import RelatedProducts from '../components/ProductDescription/RelatedProducts'

const ProductDescriptionPage = () => {
    return (
        <Container className="mb-5">
            <Col lg={8} className="border p-3 main-section bg-white">
                <Row className="hedding m-0 pl-3 pt-0 pb-3">
                    Product Name
                </Row>
                <Row className="m-0">
                    <ProductImages />
                    <ProductInfo />
                </Row>
                <RelatedProducts />
            </Col>
        </Container>
    )
}

export default ProductDescriptionPage