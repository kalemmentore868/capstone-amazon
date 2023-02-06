import React from 'react'
import Card from 'react-bootstrap/Card';

interface props {
    total: number
}

const CartTotal: React.FC<props> = ({ total }) => {
    return (
        <Card className="mb-4">
            <Card.Body className=" p-4">
                <h3>Total: ${total}</h3>
            </Card.Body>
        </Card>
    )
}

export default CartTotal