import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../../context/ProductsContext';
import '../primary/PrimaryHeader.css';

const PrimaryHeader = () => {

    const {cartItems} = useProducts();

    return (
        <div className="primary-header">
            <span className="burger-menu-icon"></span>
            <p className="primary-header-text">Swag Labs</p>
            <Link to={`/cart`}>
                <div className="cart-icon-container">
                    <span className="cart-icon"></span>
                     {cartItems.length > 0 && <span className="item-count">{cartItems.length}</span>}  
                 </div>
            </Link>
        </div>
    );
}

export default PrimaryHeader;
