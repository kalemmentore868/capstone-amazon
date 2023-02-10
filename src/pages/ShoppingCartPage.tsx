import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import CartItem from '../components/ShoppingCartComponents/CartItem';
import CartHeading from '../components/ShoppingCartComponents/CartHeading';
import CartTotal from '../components/ShoppingCartComponents/CartTotal';


import { useAppSelector } from "../redux/redux-hooks";
import { useDispatch } from 'react-redux';
import { removeItemFromCart, setBill } from '../redux/cart';
import { Button, Card, Modal } from 'react-bootstrap';
import PaymentForm from '../components/PaymentForm';

const ShoppingCartPage = () => {
    const cart = useAppSelector((state) => state.cart)
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        cart.items.map(item => {
            if (item.quantity === 0) {
                dispatch(removeItemFromCart(item.productId))
            }
        })

        dispatch(setBill())

    }, [cart])



    return (
        <section className="h-100">
            <Container className='h-100 py-5'>
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <CartHeading />
                    {cart.items.map((item) => {
                        return (
                            <CartItem key={item.productId} item={item} />
                        )
                    })}

                    <CartTotal total={cart.bill} />
                    <Card className="mb-4">
                        <Card.Body className="d-grid p-4">
                            <Button size="lg" variant="warning" className="btn-block text-light" onClick={handleShow}>Proceed to Pay</Button>
                        </Card.Body>
                    </Card>
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Pay With Your Credit Card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PaymentForm />
                    </Modal.Body>
                    <Modal.Footer>



                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Container>

        </section>
    )
}

export default ShoppingCartPage