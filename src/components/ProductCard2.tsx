import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import '../assets/css/ProductCard2.css';

const ProductCard2 = () => {
    const [showIcons, setShowIcons] = useState(false);

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
                    src="https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWVzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="product-card-img"
                />
                {showIcons && (
                    <div className="product-card-overlay">
                        <FaEye size={50} className="product-card-overlay-icon me-4" />
                        <FaShoppingCart size={50} className="product-card-overlay-icon" />
                    </div>
                )}
            </div>
            <Card.Body>
                <Card.Title className="product-card-title">Product Title</Card.Title>
                <Card.Text className="product-card-rating">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="product-card-star">&#9733;</span>
                    ))}
                </Card.Text>
                <Card.Text className="product-card-price text-muted">
                    $19.99
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard2;
