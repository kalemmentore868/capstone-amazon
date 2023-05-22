import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShopping } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/user";
import { successfulToast } from "../helper/toasties";
import { resetCart } from "../redux/cart";
import HeaderSearch from "./HeaderSearch";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const location = useLocation();
  const cart = useAppSelector((state) => state.cart.cart);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");

    successfulToast("Successfully logged out!");
    dispatch(logout());
    dispatch(resetCart());
  };

  return (
    <Navbar expand="lg" sticky="top" className="grey-bg rubiks-font p-3">
      <Container>
        {!showMobileSearch && (
          <Navbar.Brand href="/" className="green">
            What Tuh Eat
          </Navbar.Brand>
        )}

        <HeaderSearch
          displayMobileSearch={() => setShowMobileSearch(true)}
          showMobileSearch={showMobileSearch}
          hideMobileSearch={() => setShowMobileSearch(false)}
        />

        {!showMobileSearch && (
          <>
            <Link to={`/user-dashboard/${user?.id}`}>
              <RiAccountCircleLine
                size={35}
                className="ms-4 me-2 hover green"
              />
            </Link>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse
              id="navberScroll"
              className="justify-content-evenly"
            >
              <Nav>
                <Link to="/">
                  <span
                    className={
                      location.pathname === "/" ? "nav-link green" : "nav-link"
                    }
                  >
                    Home
                  </span>
                </Link>

                <Link to="/products">
                  <span
                    className={
                      location.pathname === "/products"
                        ? "nav-link green"
                        : "nav-link"
                    }
                  >
                    Shop
                  </span>
                </Link>

                <Link to="/best-sellers">
                  <span
                    className={
                      location.pathname === "/best-sellers"
                        ? "nav-link green"
                        : "nav-link"
                    }
                  >
                    Best Sellers
                  </span>
                </Link>

                <Link to="/categories">
                  <span
                    className={
                      location.pathname === "/categories"
                        ? "nav-link green"
                        : "nav-link"
                    }
                  >
                    Categories
                  </span>
                </Link>

                {user && user.token ? (
                  <Nav.Link onClick={logoutUser}> Log out</Nav.Link>
                ) : (
                  <>
                    <Link to="/signup">
                      <span
                        className={
                          location.pathname === "/signup"
                            ? "nav-link green"
                            : "nav-link"
                        }
                      >
                        Sign Up
                      </span>
                    </Link>
                    <Link to="/login">
                      <span
                        className={
                          location.pathname === "/login"
                            ? "nav-link green"
                            : "nav-link"
                        }
                      >
                        Login
                      </span>
                    </Link>
                  </>
                )}

                <Link to="/checkout">
                  <span
                    className={
                      location.pathname === "/checkout"
                        ? "nav-link green"
                        : "nav-link"
                    }
                  >
                    <AiOutlineShopping size="30px" />{" "}
                    <span className="item-count">
                      {cart ? cart.items.length : 0}
                    </span>{" "}
                  </span>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
