import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import RoutesList from './components/RoutesList';
import { setCart } from './redux/cart';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let cart = localStorage.getItem("cart")

    if (cart != null) {
      cart = JSON.parse(cart)
      //@ts-ignore
      dispatch(setCart(cart))
    }


  }, [])


  return (
    <>

      <BrowserRouter>
        <Header />
        <RoutesList />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
