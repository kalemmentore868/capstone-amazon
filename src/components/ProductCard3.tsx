import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../assets/css/ProductCard3.css';
import { ProductType } from '../helper/types';
import { useAddToCart } from '../helper/UsefulFuntions';

interface props {
  product: ProductType
}

const ProductCard3: React.FC<props> = ({ product }) => {
  const { addToCart } = useAddToCart(product)
  return (
    <Card className="product-card-3 mb-5">
      <div className="product-card-3-image">
        <Link to={`${product.id}`}>
          <Card.Img src={product.img_url} />
        </Link>

      </div>
      <Card.Body className="product-card-3-body">
        <div>
          <Link to={`${product.id}`}>
            <Card.Title className="product-card-3-title">{product.title}</Card.Title>
          </Link>

          <Card.Text className="product-card-3-description">{product.description}</Card.Text>
          <Card.Text className="product-card-3-price">${product.price.toFixed(2)}</Card.Text>
        </div>


        <RiShoppingBasketLine size={35} className='shop-icon' onClick={addToCart} />

      </Card.Body>
    </Card>
  );
};

export default ProductCard3;
