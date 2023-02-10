import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { addItemToCart, setCart } from '../../redux/cart'
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks'
import { Product } from '../HomePageComponents/DisplayProducts'

interface props {
    product: Product
}

const ProductInfo: React.FC<props> = ({ product }) => {

    const dispatch = useAppDispatch()

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
            dispatch(addItemToCart({
                productId: product._id,
                name: product.title,
                quantity: 1,
                price: product.price,
                img_url: product.img_url
            }))
        }
    }
    return (
        <Col lg={8}>
            <div className="right-side-pro-detail border p-3 m-0">
                <Row>
                    <Col lg={12}>
                        {/* <span>Product categorey</span> */}
                        <p className="m-0 p-0">{product.title}</p>
                    </Col>
                    <Col lg={12}>
                        <p className="m-0 p-0 price-pro">${product.price}</p>
                        <hr className="p-0 m-0" />
                    </Col>
                    <Col lg={12} className="pt-2">
                        <h5>Description</h5>
                        <span>{product.description}</span>
                        <hr className="m-0 pt-2 mt-2" />
                    </Col>
                    <Col lg={12}>
                        <h6>in Stock: <Button variant="success">Yes</Button> </h6>
                    </Col>
                    <Col lg={12} className="mt-3">
                        <Row>
                            <Col lg={6} className="pb-2">
                                <a href="#" className="btn btn-success w-100" onClick={addToCart}>Add To Cart</a>
                            </Col>
                            <Col lg={6} >
                                <Link to="/checkout">
                                    <Button variant='primary'>Buy now</Button>
                                </Link>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default ProductInfo