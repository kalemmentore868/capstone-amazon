import Col from 'react-bootstrap/Col'

const CartHeading = () => {
    return (
        <Col md={10}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>
        </Col>
    )
}

export default CartHeading