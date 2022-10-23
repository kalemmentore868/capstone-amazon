import React from 'react'
import Card from 'react-bootstrap/Card';

const CartTotal = () => {
    return (
        <Card className="mb-4">
            <Card.Body className=" p-4">
                <h3>Total: $499</h3>
            </Card.Body>
        </Card>
    )
}

export default CartTotal