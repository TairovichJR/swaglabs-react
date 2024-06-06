import React from 'react'
import { Link } from 'react-router-dom';
import './Checkout.css';

const CheckoutComplete = () => {
    return (
            <div className="checkout_complete_container">
                <img src={require(`../../images/download.png`)} className="complete-img" alt=""/>
                <h2 className="complete-header">Thank you for your order!</h2>
                <div className="complete-text">Your order has been dispatched, and will arrive just as fast as the pony can get there!</div>
                
                <Link to={'/'}>
                <button className="back-to-products-btn">Back Home</button>
                </Link>
                
            </div>
            );
}

export default CheckoutComplete;