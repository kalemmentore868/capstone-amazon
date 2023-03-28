import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/ProductCard2.css';
import { ProductType } from '../helper/types';
import { useAddToCart } from '../helper/UsefulFuntions';


interface props {
    product: ProductType
}

const ProductCard2: React.FC<props> = ({ product }) => {
    const [showIcons, setShowIcons] = useState(false);
    const { addToCart } = useAddToCart(product)

    const handleMouseEnter = () => {
        setShowIcons(true);
    };

    const handleMouseLeave = () => {
        setShowIcons(false);
    };

    return (
        <Card
            className="product-card rubiks-font text-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="product-card-img-container">
                <Card.Img
                    variant="top"
                    src={product.img_url}
                    className="product-card-img"
                />
                {showIcons && (
                    <div className="product-card-overlay">
                        <Link to={`products/${product.id}`}>
                            <FaEye size={50} className="product-card-overlay-icon me-4" />
                        </Link>
                        <FaShoppingCart size={50} onClick={addToCart} className="product-card-overlay-icon" />
                    </div>
                )}
            </div>
            <Card.Body>
                <Card.Title className="product-card-title">{product.title}</Card.Title>
                <Card.Text className="product-card-rating">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="product-card-star">&#9733;</span>
                    ))}
                </Card.Text>
                <Card.Text className="product-card-price text-muted">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard2;
