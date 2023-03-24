import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import SearchBar from './SearchBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShopping } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import { Link } from 'react-router-dom';
import { logout } from '../redux/user';
import { successfulToast } from '../helper/toasties';
import { fetchCartItems, resetCart, setCart } from '../redux/cart';


const Header = () => {

    const cart = useAppSelector((state) => state.cart.cart)
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()


    useEffect(() => {
        if (cart) {
            localStorage.setItem("cart", JSON.stringify(cart))
        } else {
            localStorage.removeItem("cart")
        }



    }, [cart])


    const logoutUser = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("cart")

        successfulToast("Successfully logged out!")
        dispatch(logout())
        dispatch(resetCart())

    }

    return (
        <Navbar expand="lg" sticky="top" className="grey-bg rubiks-font" >
            <Container>
                <Navbar.Brand href="/" className="green">
                    What Tuh Eat
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