import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ProductInfo = () => {
    return (
        <Col lg={8}>
            <div className="right-side-pro-detail border p-3 m-0">
                <Row>
                    <Col lg={12}>
                        <span>Product categorey</span>
                        <p className="m-0 p-0">Product Name</p>
                    </Col>
                    <Col lg={12}>
                        <p className="m-0 p-0 price-pro">$30</p>
                        <hr className="p-0 m-0" />
                    </Col>
                    <Col lg={12} className="pt-2">
                        <h5>Product Detail</h5>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris.</span>
                        <hr className="m-0 pt-2 mt-2" />
                    </Col>
                    <Col lg={12}>
                        <h6>Left in Stock: quantity</h6>
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