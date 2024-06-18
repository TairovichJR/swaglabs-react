import React from 'react'
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import './Cart.css';
import CartItem from './CartItem';

const Cart = () => {

    const {cartItems} = useProducts();
    
    return (
        <div className="cart-container">
            {cartItems.length === 0 ? (<div className="empty-cart-container">
                <img src={require('./../../icons/empty-cart.png')} alt="" className="empty-cart" />
                <Link to={`/`}>
                        <button className="continue-shopping-btn">Continue Shopping</button>
                </Link>
            </div>) : (
            <>
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
            </>)}
        </div>
    )
}

export default Cart;
