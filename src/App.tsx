import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import CheckoutStepOne from './components/checkout/CheckoutStepOne';
import CheckoutStepTwo from './components/checkout/CheckoutStepTwo';
import ProductDetails from './components/details/ProductDetails';
import Footer from './components/footer/Footer';
import ProductsList from './components/products-list/ProductsList';
import Header from './components/top-navbar/header/Header';
import SecondaryHeader from './components/top-navbar/header/secondary/SecondaryHeader';

function App() {

  return (
    <div className="App">
      <Header> 
        <SecondaryHeader />
      </Header>

      <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-step-one" element={<CheckoutStepOne />} />
        <Route path="/checkout-step-two" element={<CheckoutStepTwo />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
