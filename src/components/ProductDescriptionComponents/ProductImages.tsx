import React from 'react'
import Col from 'react-bootstrap/Col'

const ProductImages = () => {
    return (
        <Col lg={4} className="left-side-product-box pb-3">
            <img src="http://nicesnippets.com/demo/pd-image1.jpg" className="border p-3" />
            <span className="sub-img" >
                <img src="http://nicesnippets.com/demo/pd-image2.jpg" className="border p-2" />
                <img src="http://nicesnippets.com/demo/pd-image3.jpg" className="border p-2" />
                <img src="http://nicesnippets.com/demo/pd-image4.jpg" className="border p-2" />
            </span>
        </Col>
    )
}

export default ProductImages