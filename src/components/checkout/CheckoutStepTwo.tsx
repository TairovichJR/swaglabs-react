import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import { IProduct } from '../../model';
import CartItem from '../cart/CartItem';

const CheckoutStepTwo = () => {

    const {cartItems, resetAppState} = useProducts();

    const totalBeforeTax = cartItems.reduce((a: number, b: IProduct) => a + b.price, 0);
    const totalAfterTax = totalBeforeTax + 3.20;

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

            <div className="summary-info">
                <div className="summary_info_label">Payment Information</div>
                <div className="summary_value_label">SauceCard #31337</div>
                <div className="summary_info_label">Shipping Information:</div>
                <div className="summary_value_label">Free Pony Express Delivery!</div>
                <div className="summary_info_label">Price Total</div>
                <div className="summary_value_label">Item total: ${totalBeforeTax}</div>
                <div className="summary_value_label">Tax: $3.20</div>
                <div className="summary_total_label">Total: ${totalAfterTax}</div>
            </div>

            <div className="cart-footer">
                <Link to={`/`}>
                    <button className="continue-shopping-btn">Cancel</button>
                </Link>
                <Link to={`/checkout-complete`} onClick={resetAppState}>
                    <button className="checkout-btn">Finish</button>
                </Link>
            </div>
            
        </div>
    )
}

export default CheckoutStepTwo;
