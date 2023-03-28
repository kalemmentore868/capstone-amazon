import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/css/ProductCard.css"
import { ProductType } from '../helper/types';
import { useAddToCart } from '../helper/UsefulFuntions';


interface props {
  product: ProductType
}

const ProductCard: React.FC<props> = ({ product }) => {
  const { addToCart } = useAddToCart(product)


  return (
    <Card className="product-card1">
      <Card.Img className="product-card1-img" variant="top" src={product.img_url} />
      <Card.Body className="rubiks-font">
        <Row className="mb-3">
          <Col xs={9}>
            <Card.Title className="product-card1-text ">{product.title}</Card.Title>
          </Col>
          <Col>
            <Card.Text className="product-card1-price">${product.price}</Card.Text>
          </Col>
        </Row>

        <Button variant="primary me-3 mb-3" onClick={addToCart}>Add to Cart</Button>
        <Link to={`products/${product.id}`}>
          <Button variant="success mb-3" >See More</Button>
        </Link>

      </Card.Body>
    </Card>
  )
}

export default ProductCard