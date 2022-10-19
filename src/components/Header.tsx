import React from 'react'
import Container from 'react-bootstrap/Container';
import Logo from './Logo'
import SearchBar from './SearchBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShopping } from "react-icons/ai"

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <Logo width={50} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navberScroll" className="justify-content-evenly">

                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/checkout"> <AiOutlineShopping size="30px" /> </Nav.Link>
                    <SearchBar />
                </Navbar.Collapse>


            </Container >
        </Navbar >
    )
}

export default Header