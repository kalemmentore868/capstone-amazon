import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CartItem from '../components/ShoppingCartComponents/CartItem';
import CartHeading from '../components/ShoppingCartComponents/CartHeading';
import CartTotal from '../components/ShoppingCartComponents/CartTotal';
import { useAppSelector } from "../redux/redux-hooks";
import { useDispatch } from 'react-redux';
import { removeItemFromCart, setBill } from '../redux/cart';
import { Button, Card, Form } from 'react-bootstrap';
import ModalC from '../components/Modal';


const ShoppingCartPage = () => {
    const [show, setShow] = useState(false);
    const [notes, setNotes] = useState("")


    const cart = useAppSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        for (let item of cart.items) {
            if (item.quantity === 0) {
                dispatch(removeItemFromCart(item.productId))
            }
        }

        dispatch(setBill())

    }, [cart, dispatch])



    return (
        <section >
            <Container className=' py-5'>
                <Row className="d-flex justify-content-center align-items-cente">
                    <CartHeading />
                    {cart.items.map((item) => {
                        return (
                            <CartItem key={item.productId} item={item} />
                        )
                    })}

                    <CartTotal total={cart.bill} />

                    <Form.Label  >Notes:</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a note here for any other items"
                        className='mb-4'
                        style={{ height: '100px' }}
                        onChange={(e) => setNotes(e.target.value)}
                    />


                    <Card className="mb-4">
                        <Card.Body className="d-grid p-4">
                            <Button size="lg" variant="warning" onClick={handleShow} className="btn-block text-light" >Proceed to Pay</Button>
                        </Card.Body>
                    </Card>
                </Row>

                <ModalC total={cart.bill} show={show} handleClose={handleClose} notes={notes} />

            </Container>

        </section>
    )
}

export default ShoppingCartPage