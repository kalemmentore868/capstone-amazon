import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { addItemToCart, postAddToCart, setBill, setCart } from '../redux/cart';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import { Link } from 'react-router-dom';
import '../assets/css/ProductCard2.css';
import { ProductType } from '../helper/types';
import { successfulToast } from '../helper/toasties';


interface props {
    product: ProductType
}

const ProductCard2: React.FC<props> = ({ product }) => {
    const [showIcons, setShowIcons] = useState(false);

    const handleMouseEnter = () => {
        setShowIcons(true);
    };

    const handleMouseLeave = () => {
        setShowIcons(false);
    };

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
                quantity: 1,
                token: user.token,
            }
            dispatch(postAddToCart(cartData))

        } else {
            dispatch(addItemToCart(cartItem))
            dispatch(setBill())
        }
        successfulToast("Added To Cart")
    }

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
