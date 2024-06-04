import React from 'react'
import { useMemo } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import './Cart.css';
import CartItem from './CartItem';

const Cart = () => {

    const {cartItems} = useProducts();
    
    return (
        <div className="cart-container">
            <div className="cart-header">
                <span>QTY</span>
                <span>Description</span>
            </div>
            <div className="cart-list">
                {cartItems.map((cartItem) => {
                    return <CartItem cartItem={cartItem} />
                })}
            </div>

            <div className="cart-footer">
                <Link to={`/`}>
                    <button className="continue-shopping-btn">Continue Shopping</button>
                </Link>
                <Link to={`/checkout-step-one`}>
                    <button className="checkout-btn">Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart;
