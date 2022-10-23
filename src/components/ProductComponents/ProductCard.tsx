import React, { FC } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

interface Card {
    prodObj: any
}

const ProductCard: FC<Card> = ({ prodObj }) => {
    return (
        <Card className="mb-3">
            <Card.Img variant="top" src={prodObj.imgUrl} />
            <Card.Body>
                <Card.Title className="text-center">{prodObj.title}</Card.Title>
                <hr />
                <Card.Text>
                    {prodObj.description}
                </Card.Text>
                <hr />
                <Card.Text>
                    <small className="text-muted">${prodObj.price}</small>
                </Card.Text>
                <hr />
                <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard