import React from 'react'
import Container from 'react-bootstrap/Container';
import Logo from './Logo'
import SearchBar from './SearchBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShopping } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import { Link } from 'react-router-dom';
import { logout } from '../redux/user';


const Header = () => {

    const cart = useAppSelector((state) => state.cart)
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    const logoutUser = () => {
        localStorage.removeItem("user")
        dispatch(logout())

    }

    return (
        <Navbar expand="lg" sticky="top" className="grey-bg rubiks-font" >
            <Container>
                <Navbar.Brand href="/" className="green">
                    OroBites
                </Navbar.Brand>
                <SearchBar />
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navberScroll" className="justify-content-evenly">

                    <Nav>

                        <Link to="/">
                            <span className="nav-link green">Home</span>
                        </Link>

                        <Link to="/products" >
                            <span className="nav-link">Shop</span>
                        </Link>

                        <Link to="/best-seller">
                            <span className="nav-link">Best Sellers</span>
                        </Link>

                        <Link to="/categories">
                            <span className="nav-link">Categories</span>
                        </Link>

                        {user && user.token ? (
                            <Nav.Link onClick={logoutUser} > Log out</Nav.Link>
                        ) : (
                            <>
                                <Link to="/signup" ><span className="nav-link" >Sign Up</span></Link>
                                <Link to="/login"><span className="nav-link">Login</span></Link>
                            </>
                        )}




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