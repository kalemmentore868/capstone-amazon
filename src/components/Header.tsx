import React from 'react'
import Container from 'react-bootstrap/Container';
import Logo from './Logo'
import SearchBar from './SearchBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShopping } from "react-icons/ai"


const Header = () => {

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

                        <Nav.Link href="/products" >Products</Nav.Link>
                        {/* <Nav.Link href="/categories" >Categories</Nav.Link> */}
                        {/* <Nav.Link href="/best-sellers" >Best Sellers</Nav.Link> */}
                        <Nav.Link href="/signup" >Sign Up</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/checkout"> <AiOutlineShopping size="30px" /> </Nav.Link>
                    </Nav>


                </Navbar.Collapse>


            </Container >
        </Navbar >
    )
}

export default Header