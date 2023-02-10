import React from 'react'
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { addItemToCart, setCart } from '../redux/cart';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import { Product } from './HomePageComponents/DisplayProducts';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 450px;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardImg = styled(Card.Img)`
  height: 300px;
  object-fit: center;
  border-bottom: 1px solid grey;
`

const StyledCardTitle = styled(Card.Title)`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
`;

const StyledCardText = styled(Card.Text)`
  font-size: 0.9em;
  color: #555;
`;

interface props {
  product: Product
}

const ProductCard: React.FC<props> = ({ product }) => {
  const dispatch = useAppDispatch();
  let cartItem = {
    productId: product._id,
    name: product.title,
    quantity: 1,
    price: product.price,
    img_url: product.img_url
  }

  const user = useAppSelector((state) => state.user)

  const addToCart = () => {
    if (user && user.token) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ productId: product._id, quantity: 1 }),
      };
      fetch(`http://localhost:5000/api/cart/${user._id}`,
        requestOptions)
        .then(response => response.json())

        .then(data => {

          dispatch(setCart(data))
        })
        .catch(err => console.log(err))
    } else {
      dispatch(addItemToCart(cartItem))
    }
  }

  return (
    <StyledCard>
      <StyledCardImg variant="top" src={product.img_url} />
      <Card.Body>
        <StyledCardTitle>{product.title}</StyledCardTitle>
        <StyledCardText>{product.description}</StyledCardText>
        <Button variant="primary me-3" onClick={addToCart}>Add to Cart</Button>
        <Button variant="success" href={`products/${product._id}`}>See More</Button>
      </Card.Body>
    </StyledCard>
  )
}

export default ProductCard