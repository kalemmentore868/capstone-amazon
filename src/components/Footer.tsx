import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SocialMediaLinks from './SocialMediaLinks'

const Footer = () => {
    return (
        <footer>
            <SocialMediaLinks />
            <Container className="p-4">
                <Row >
                    <Col >
                        <h6 className="text-uppercase fw-bold mb-4">
                            Trinizon
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>

                    </Col>
                </Row>
            </Container>
            <div className="text-center p-4" style={{ backgroundColor: "gray" }}>
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Trinizon.com</a>
            </div>
        </footer>
    )
}

export default Footer