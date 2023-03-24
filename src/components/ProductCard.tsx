import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addItemToCart, postAddToCart, setBill, setCart } from '../redux/cart';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import "../assets/css/ProductCard.css"
import { ProductType } from '../helper/types';
import { successfulToast } from '../helper/toasties';


interface props {
  product: ProductType
}

const ProductCard: React.FC<props> = ({ product }) => {

  const dispatch = useAppDispatch();
  let cartItem = {
    productId: product.id,
    name: product.title,
    quantity: 1,
    price: product.price,
    img_url: product.img_url
  }

  const user = useAppSelector((state) => state.user.user)

  const addToCart = () => {
    if (user && user.token) {
      const cartData = {
        productId: product.id,
        userId: user.id,
        token: user.token,
        quantity: 1
      }
      dispatch(postAddToCart(cartData))

    } else {
      dispatch(addItemToCart(cartItem))
      dispatch(setBill())
    }
    successfulToast("Added to cart!")
  }

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