import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Header from './components/Header';
import RoutesList from './components/RoutesList';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </>
  );
}

export default App;
