import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CheckoutButton = () => {
    return (
        <Card className="mb-4">
            <Card.Body className="d-grid p-4">
                <Button size="lg" variant="warning" className="btn-block text-light">Proceed to Pay</Button>
            </Card.Body>
        </Card>
    )
}

export default CheckoutButton