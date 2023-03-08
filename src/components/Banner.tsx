import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTruck, FaHome, FaStar } from 'react-icons/fa';
import "../assets/css/banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className="align-items-center ">
                    <Col md={4} className="text-center d-flex justify-content-center mb-3">
                        <FaTruck className="banner-icon green me-3 " />
                        <h4>Free Shipping <br /> with 2 referrals</h4>
                    </Col>
                    <Col md={4} className="text-center d-flex justify-content-center mb-3">
                        <FaHome className="banner-icon green me-3 " />
                        <h4>Never have to<br /> leave your home</h4>
                    </Col>
                    <Col md={4} className="text-center d-flex justify-content-center mb-3">
                        <FaStar className="banner-icon green me-3" />
                        <h4>Excellent <br /> customer service</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;