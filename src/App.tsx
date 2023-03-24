import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import RoutesList from './components/RoutesList';
import { setCart } from './redux/cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from './redux/user';
import { useAppDispatch } from './redux/redux-hooks';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let cart = localStorage.getItem("cart")

    if (cart != null) {
      cart = JSON.parse(cart)
      //@ts-ignore
      dispatch(setCart(cart))
    }

    let user = localStorage.getItem("user")
    if (user != null) {
      user = JSON.parse(user)
      //@ts-ignore
      dispatch(setUser(user))
    }


  }, [])


  return (
    <>

      <BrowserRouter>
        <Header />
        <RoutesList />
        <ToastContainer />
        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
