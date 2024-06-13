import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import CheckoutComplete from './components/checkout/CheckoutComplete';
import CheckoutStepOne from './components/checkout/CheckoutStepOne';
import CheckoutStepTwo from './components/checkout/CheckoutStepTwo';
import ProductDetails from './components/details/ProductDetails';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import ProductsList from './components/products-list/ProductsList';
import Header from './components/top-navbar/header/Header';
import SecondaryHeader from './components/top-navbar/header/secondary/SecondaryHeader';
import SideMenu from './components/top-navbar/side-menu/SideMenu';
import { useProducts } from './context/ProductsContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';

function App() {
  
  const { burgerMenu } = useProducts();
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <AuthProvider>
      <div className="App">
      {!isLoginPage && (
          <>
            <Header>
              <SecondaryHeader />
            </Header>
            {burgerMenu && <SideMenu />}
          </>
        )}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><ProductsList /></ProtectedRoute>} />
          <Route path="/product/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/checkout-step-one" element={<ProtectedRoute><CheckoutStepOne /></ProtectedRoute>} />
          <Route path="/checkout-step-two" element={<ProtectedRoute><CheckoutStepTwo /></ProtectedRoute>} />
          <Route path="/checkout-complete" element={<ProtectedRoute><CheckoutComplete /></ProtectedRoute>} />
        </Routes>

        {!isLoginPage && (
          <>
            <Footer />
          </>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;