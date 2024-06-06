import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import CheckoutComplete from './components/checkout/CheckoutComplete';
import CheckoutStepOne from './components/checkout/CheckoutStepOne';
import CheckoutStepTwo from './components/checkout/CheckoutStepTwo';
import ProductDetails from './components/details/ProductDetails';
import Footer from './components/footer/Footer';
import ProductsList from './components/products-list/ProductsList';
import Header from './components/top-navbar/header/Header';
import SecondaryHeader from './components/top-navbar/header/secondary/SecondaryHeader';
import SideMenu from './components/top-navbar/side-menu/SideMenu';
import { useProducts } from './context/ProductsContext';

function App() {

  const{burgerMenu} = useProducts();
  return (
    <div className="App">
      <Header> 
        <SecondaryHeader />
      </Header>

      {burgerMenu && <SideMenu />} 

      <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-step-one" element={<CheckoutStepOne />} />
        <Route path="/checkout-step-two" element={<CheckoutStepTwo />} />
        <Route path="/checkout-complete" element={<CheckoutComplete />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
