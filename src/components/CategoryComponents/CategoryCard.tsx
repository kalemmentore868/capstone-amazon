import React, { FC } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

interface Card {
    prodObj: any
}

const CategoryCard: FC<Card> = ({ prodObj }) => {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={prodObj.imgUrl} />
            <Card.Body>

                <Button variant="primary" size="lg">{prodObj.title}</Button>
            </Card.Body>
        </Card>
    )
}

export default CategoryCard