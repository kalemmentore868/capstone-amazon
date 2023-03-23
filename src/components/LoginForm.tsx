import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import "../assets/css/login.css"
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../redux/redux-hooks';
import { setUser } from '../redux/user';
import { errorToast, successfulToast } from '../helper/toasties';
import { CartType } from '../helper/types';
import { setCart } from '../redux/cart';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //@ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault()
        const formValues = {
            email,
            password
        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues),
        };

        fetch(
            `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                const user = data.data
                if (user) {
                    dispatch(setUser(user))
                    setEmail('');
                    setPassword('');
                    localStorage.setItem("user", JSON.stringify(user))
                    fetch(`${process.env.REACT_APP_API_ENDPOINT}/cart/${user.id}`)
                        .then(response => response.json())
                        .then(data => {
                            let cartObj: CartType = data.data
                            dispatch(setCart(cartObj))
                        })
                    successfulToast("You have successfully Logged in")
                    navigate("/")
                } else {
                    console.log(data)
                    if (data.error) {
                        errorToast(data.error.message)
                    } else {
                        errorToast(data.message)
                    }
                }

            })
            .catch((err) => console.log(err));

    };

    return (
        <Container fluid className="h-custom">
            <Row className="d-flex justify-content-center align-items-center h-100">
                <Col md={9} lg={6} xl={5}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image" />
                </Col>
                <Col md={8} lg={6} xl={4} className="offset-xl-1">
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="form-outline mb-4" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}
                                onChange={(event) => setEmail(event.target.value)} required />
                        </Form.Group>

                        <Form.Group className="form-outline mb-4" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange={(event) => setPassword(event.target.value)} required />
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center">
                            <Form.Group className="form-check mb-0">
                                <Form.Check className="me-2" type="checkbox" value="" id="form2Example3" />
                                <Form.Label className="form-check-label" htmlFor="form2Example3">
                                    Remember me
                                </Form.Label>
                            </Form.Group>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <Button size="lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} variant="primary" type="submit">
                                Login
                            </Button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                className="link-danger">Register</a></p>
                        </div>
                    </Form>
                </Col>


            </Row>


        </Container>
    )
}

export default LoginForm