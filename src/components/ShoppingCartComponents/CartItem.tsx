import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi"
import { addItemToCart, CartItem as CartItemType, reduceItemQuantity, removeItemFromCart, setCart } from '../../redux/cart';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';

interface props {
    item: CartItemType
}

const CartItem: React.FC<props> = ({ item }) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user)

    const updateCartItem = (action: string) => {
        let qty: number = 1
        if (user && user.token) {
            if (action === "+") {
                qty = item.quantity + 1
            } else if (action === "-") {
                qty = item.quantity - 1
            }

            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ productId: item.productId, qty }),
            };
            fetch(`http://localhost:5000/api/cart/${user._id}`,
                requestOptions)
                .then(response => response.json())

                .then(data => {
                    console.log(data)
                    dispatch(setCart(data))
                })
                .catch(err => console.log(err))
        } else {
            if (action === "+") {
                reduceItemQuantity(item.productId)
            } else if (action === "-") {
                addItemToCart(item)
            }

        }
    }

    const deleteCartItem = () => {
        if (user && user.token) {
            const requestOptions = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${user.token}`
                },
            };
            fetch(`http://localhost:5000/api/cart/${user._id}/${item.productId}`,
                requestOptions)
                .then(response => response.json())

                .then(data => {
                    console.log(data)
                    dispatch(setCart(data))
                })
                .catch(err => console.log(err))
        } else {
            dispatch(removeItemFromCart(item.productId))
        }
    }

    return (
        <Card className="rounded-3 mb-4">
            <Card.Body className="p-4">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col md={2} lg={2} xl={2}>
                        <img
                            src={item.img_url}
                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                    </Col>
                    <Col md={3} lg={3} xl={3} >
                        <p className="lead fw-normal mb-2">{item.name}</p>
                        <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                    </Col>
                    <Col md={3} lg={3} xl={2} className="d-flex" >
                        <Button variant="link" className="px-2">
                            <BiMinus onClick={() => updateCartItem("-")} />
                        </Button>
                        <input id="form1" min="0" name="quantity" value={item.quantity} readOnly type="number"
                            className="form-control form-control-sm" />
                        <Button variant="link" className="px-2">
                            <BiPlus onClick={() => updateCartItem("+")} />
                        </Button>
                    </Col>
                    <Col md={3} lg={2} xl={2} className="offset-lg-1" >
                        <h5 className="mb-0">${item.price}</h5>
                    </Col>
                    <Col md={1} lg={1} xl={1} className="text-end" >
                        <BiTrash className="hover" color='red' size={30} onClick={deleteCartItem} />
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}

export default CartItem