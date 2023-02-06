import React from 'react'
import Container from 'react-bootstrap/Container';
import Logo from './Logo'
import SearchBar from './SearchBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShopping } from "react-icons/ai"
import { useAppSelector } from '../redux/redux-hooks';
import { Link } from 'react-router-dom';


const Header = () => {

    const cart = useAppSelector((state) => state.cart)

    const path = window.location.href
    console.log(path)
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="bg-light">
            <Container>
                <Navbar.Brand href="/">
                    Trinizon
                </Navbar.Brand>
                <SearchBar />
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navberScroll" className="justify-content-evenly">

                    <Nav>

                        <Link to="/products" >
                            <span className="nav-link">Products</span> </Link>
                        <Link to="/signup" ><span className="nav-link" >Sign Up</span></Link>
                        <Link to="/login"><span className="nav-link">Login</span></Link>
                        <Link to="/checkout">
                            <span className="nav-link"><AiOutlineShopping size="30px" />{cart.items.length}</span>
                        </Link>

                    </Nav>


                </Navbar.Collapse>


            </Container >
        </Navbar >
    )
}

export default Header