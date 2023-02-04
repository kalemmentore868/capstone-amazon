import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Product } from '../HomePageComponents/DisplayProducts'

interface props {
    product: Product
}

const ProductInfo: React.FC<props> = ({ product }) => {
    return (
        <Col lg={8}>
            <div className="right-side-pro-detail border p-3 m-0">
                <Row>
                    <Col lg={12}>
                        {/* <span>Product categorey</span> */}
                        <p className="m-0 p-0">{product.title}</p>
                    </Col>
                    <Col lg={12}>
                        <p className="m-0 p-0 price-pro">${product.price}</p>
                        <hr className="p-0 m-0" />
                    </Col>
                    <Col lg={12} className="pt-2">
                        <h5>Description</h5>
                        <span>{product.description}</span>
                        <hr className="m-0 pt-2 mt-2" />
                    </Col>
                    <Col lg={12}>
                        <h6>in Stock: <Button variant="success">Yes</Button> </h6>
                    </Col>
                    <Col lg={12} className="mt-3">
                        <Row>
                            <Col lg={6} className="pb-2">
                                <a href="#" className="btn btn-success w-100">Add To Cart</a>
                            </Col>
                            <Col lg={6} >
                                <a href="#" className="btn btn-primary w-100">Buy now</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default ProductInfo