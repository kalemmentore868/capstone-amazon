import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi"
import { addItemToCart, postDeleteCartItem, postUpdateCart, reduceItemQuantity, removeItemFromCart, setCart } from '../../redux/cart';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { CartItemType } from '../../helper/types';
import { useWindowSize } from 'react-use';


interface props {
    item: CartItemType
}

const CartItem: React.FC<props> = ({ item }) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user)
    const { width } = useWindowSize()

    const updateCartItem = (action: string) => {

        let qty: number = 1
        if (user && user.token) {
            if (action === "+") {
                qty = item.quantity + 1
            } else if (action === "-") {
                qty = item.quantity - 1
            }
            const cartData = {
                productId: item.productId,
                userId: user.id,
                token: user.token,
                quantity: qty
            }
            dispatch(postUpdateCart(cartData))
        } else {

            if (action === "+") {
                dispatch(addItemToCart(item))

            } else if (action === "-") {
                dispatch(reduceItemQuantity(item.productId))

            }

        }
    }

    const deleteCartItem = () => {
        if (user && user.token) {

            const cartData = {
                productId: item.productId,
                userId: user.id,
                token: user.token,
                quantity: 0
            }

            dispatch(postDeleteCartItem(cartData))
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
                        <p className={width > 600 ? "lead fw-normal mb-2" : "lead fw-normal my-3 text-center"}>{item.name}</p>
                        {/* <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
                    </Col>
                    <Col md={3} lg={3} xl={2} className="d-flex" >
                        <Button variant="link" className="px-2">
                            <BiMinus size={30} onClick={() => updateCartItem("-")} />
                        </Button>
                        <input id="form1" min="0" name="quantity" value={item.quantity} readOnly type="number"
                            className="form-control form-control-sm" />
                        <Button variant="link" className="px-2">
                            <BiPlus size={30} onClick={() => updateCartItem("+")} />
                        </Button>
                    </Col>
                    {width > 600 ? (
                        <>
                            <Col md={3} lg={2} xl={2} className="offset-lg-1" >
                                <h5 className="mb-0">${item.price}</h5>
                            </Col>
                            <Col md={1} lg={1} xl={1} className="text-end" >
                                <BiTrash className="hover" color='red' size={30} onClick={deleteCartItem} />
                            </Col>
                        </>
                    ) : (
                        <div className="d-flex px-4 mt-2 justify-content-between align-items-center">

                            <h5 className="mt-3">${item.price}</h5>

                            <BiTrash className="hover" color='red' size={30} onClick={deleteCartItem} />

                        </div>
                    )}

                </Row>

            </Card.Body>
        </Card>
    )
}

export default CartItem