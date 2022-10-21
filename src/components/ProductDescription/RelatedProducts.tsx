import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const RelatedProducts = () => {
    return (
        <>
            <Row>
                <Col lg={12} className="text-center pt-3">
                    <h4>More Products</h4>
                </Col>
            </Row>
            <Row className="mt-3 p-0 text-center pro-box-section">
                <Col lg={3} className="pb-2">
                    <div className="pro-box border p-0 m-0">
                        <img src="http://nicesnippets.com/demo/pd-b-image1.jpg" />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default RelatedProducts