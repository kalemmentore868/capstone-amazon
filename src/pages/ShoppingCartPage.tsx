import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import CartItem from '../components/ShoppingCartComponents/CartItem';
import CartHeading from '../components/ShoppingCartComponents/CartHeading';
import CartTotal from '../components/ShoppingCartComponents/CartTotal';


import { useAppSelector } from "../redux/redux-hooks";
import { useDispatch } from 'react-redux';
import { removeItemFromCart, setBill } from '../redux/cart';
import { Button, Card } from 'react-bootstrap';


const ShoppingCartPage = () => {
    const cart = useAppSelector((state) => state.cart.cart)
    const dispatch = useDispatch()



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
                            <Button size="lg" variant="warning" className="btn-block text-light" >Proceed to Pay</Button>
                        </Card.Body>
                    </Card>
                </Row>



            </Container>

        </section>
    )
}

export default ShoppingCartPage