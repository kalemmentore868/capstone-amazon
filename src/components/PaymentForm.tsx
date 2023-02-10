import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useAppSelector } from "../redux/redux-hooks";

function PaymentForm() {

    const user = useAppSelector((state) => state.user)
    const cart = useAppSelector((state) => state.cart)

    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvc, setCVC] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [paymentSent, setPaymentSent] = useState(false)

    //@ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add code to handle the form submission and process the payment
        const formValues = {
            cardNumber,
            cardHolderName,
            expiryDate,
            cvc,
            address,
            city,
            state,
            zipCode
        }

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(formValues),
        };

        fetch(`http://localhost:5000/api/order/${user._id}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPaymentSent(true)
                setAddress("")
                setZipCode("")
                setCVC("")
                setCardNumber("")
                setCardHolderName("")
                setExpiryDate("")
                setState("")
                setCity("")
            })

    };

    return (
        <Container>
            <Row >
                <Col >
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={6}>
                                <Form.Group controlId="formCardNumber" className="mb-2">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter card number"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCardHolderName" className="mb-2">
                                    <Form.Label>Card Holder Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter card holder name"
                                        value={cardHolderName}
                                        onChange={(e) => setCardHolderName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formExpiryDate" className="mb-2">
                                    <Form.Label>Expiry Date</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="MM/YY"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCVC">
                                    <Form.Label>CVC</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="CVC"
                                        value={cvc}
                                        onChange={(e) => setCVC(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group controlId="formAddress" className="mb-2">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCity" className="mb-2">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formState" className="mb-2">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formCity">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter zip"
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>


                        <Button className="mt-4" type="submit" variant="primary">{paymentSent ? "Payment Received !" : `Make Payment of $${cart.bill}`} </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default PaymentForm
