import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import CartItem from '../components/ShoppingCartComponents/CartItem';
import CartHeading from '../components/ShoppingCartComponents/CartHeading';
import CartTotal from '../components/ShoppingCartComponents/CartTotal';
import CheckoutButton from '../components/ShoppingCartComponents/CheckoutButton';


const ShoppingCartPage = () => {
    return (
        <section className="h-100">
            <Container className='h-100 py-5'>
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <CartHeading />
                    <CartItem />
                    <CartTotal />
                    <CheckoutButton />
                </Row>

            </Container>

        </section>
    )
}

export default ShoppingCartPage