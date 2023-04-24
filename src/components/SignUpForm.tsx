import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaUser, FaLock, FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import { signUpUser } from '../redux/user';
import { errorToast, successfulToast } from '../helper/toasties';
import { AiOutlinePhone } from 'react-icons/ai';


const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //@ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault()

        if (confirmPassword !== password) {
            return errorToast("Passwords do not match")
        }

        const formValues = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            phone_number: phone

        }


        // @ts-ignore
        dispatch(signUpUser(formValues))
            .then(result => {
                if (result.payload) {
                    setEmail('');
                    setPassword('');
                    successfulToast("You Have Successfully Logged In!")
                    navigate("/")
                } else {
                    errorToast("Something went wrong, Try again")
                }
            })


    };


    return (
        <Container className="h-100 my-5">
            <Row className="d-flex justify-content-center align-items-center h-100">
                <Col lg={12} xl={11}>
                    <Card className="text-black" style={{ borderRadius: "25px" }} >
                        <Card.Body className="p-md-5">
                            <Row className="justify-content-center">
                                <Col md={10} lg={6} xl={5} className="order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                    <Form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <FaUser className="me-3" size="20px" />
                                            <Form.Group className="form-outline flex-fill mb-0"  >
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter username" value={firstName}
                                                    onChange={(event) => setFirstName(event.target.value)} required />

                                            </Form.Group>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <FaUser className="me-3" size="20px" />
                                            <Form.Group className="form-outline flex-fill mb-0" >
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter username" value={lastName}
                                                    onChange={(event) => setLastName(event.target.value)} required />

                                            </Form.Group>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <GrMail size="20px" className="me-3 " />
                                            <Form.Group className="form-outline flex-fill mb-0" >
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" value={email}
                                                    onChange={(event) => setEmail(event.target.value)} required />
                                            </Form.Group>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <AiOutlinePhone size="20px" className="me-3 " />
                                            <Form.Group className="form-outline flex-fill mb-0" >
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control type="text" placeholder="Enter phone number" value={phone}
                                                    onChange={(event) => setPhone(event.target.value)} required />
                                            </Form.Group>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <FaLock size="20px" className="me-3" />
                                            <Form.Group className="form-outline flex-fill mb-0" >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" value={password}
                                                    onChange={(event) => setPassword(event.target.value)} required />
                                            </Form.Group>
                                        </div>


                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <FaKey size="20px" className="me-3" />
                                            <Form.Group className="form-outline flex-fill mb-0" >
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" value={confirmPassword}
                                                    onChange={(event) => setConfirmPassword(event.target.value)} required />
                                            </Form.Group>
                                        </div>


                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <Button variant="primary" size="lg" type="submit">
                                                Register
                                            </Button>
                                        </div>


                                    </Form>
                                </Col>
                                <Col md={10} lg={6} xl={7} className="d-flex align-items-center order-1 order-lg-2">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        className="img-fluid" alt="Sample image" />

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>

    )
}

export default SignUpForm