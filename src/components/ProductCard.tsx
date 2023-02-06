import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { FaProductHunt } from 'react-icons/fa';
import styled from 'styled-components';
import { addItemToCart } from '../redux/cart';
import { useAppDispatch } from '../redux/redux-hooks';
import { Product } from './HomePageComponents/DisplayProducts';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

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
    return (
        <StyledCard>
            <Card.Img variant="top" src={product.img_url} />
            <Card.Body>
                <StyledCardTitle>{product.title}</StyledCardTitle>
                <StyledCardText>{product.description}</StyledCardText>
                <Button variant="primary me-3" onClick={() => dispatch(addItemToCart(cartItem))}>Add to Cart</Button>
                <Button variant="success" href={`products/${product._id}`}>See More</Button>
            </Card.Body>
        </StyledCard>
    )
}

export default ProductCard