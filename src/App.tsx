import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import RoutesList from './components/RoutesList';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
