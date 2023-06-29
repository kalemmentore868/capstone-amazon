import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesList from "./components/RoutesList";
import { fetchCartItems, setCart } from "./redux/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "./redux/user";
import { useAppDispatch } from "./redux/redux-hooks";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./helper/api";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let cart = localStorage.getItem("cart");

    if (cart) {
      cart = JSON.parse(cart);
      //@ts-ignore
      dispatch(setCart(cart));
    }

    let userString = localStorage.getItem("user");
    if (userString === null) {
      dispatch(setUser(null));
      return;
    }

    const user = JSON.parse(userString);

    dispatch(setUser(user));

    dispatch(fetchCartItems(user));
  }, [dispatch]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <RoutesList />
          <ToastContainer />
          {/* <LiveChat /> */}
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
