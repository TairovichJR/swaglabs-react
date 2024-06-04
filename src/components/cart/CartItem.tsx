import React from 'react'
import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext'
import { IProduct } from '../../model'

interface CartItemProps {
    cartItem: IProduct;
}

const CartItem = ({cartItem}: CartItemProps) => {
    const {removeItemFromCart} = useProducts();
    const location = useLocation();

    const getText = useMemo(() => {
        if(matchPath({path: "/cart"}, location.pathname)) {
            return "cart";
        }else {
            return "overview";
        }
    }, [location]);
    
    return (
        <div className="cart-item">
            <div className="cart-item-quantity">
                1
            </div>
            <div className="cart-item-details">
                <p className="cart-item-title">{cartItem.title}</p>
                <p className="cart-item-desc">{cartItem.description}</p>
                <div className="cart-item-pricebar">
                    <span className="cart-item-price">${cartItem.price}</span>

                   {getText === "cart" && <button className="add-to-cart-btn remove" onClick={() => removeItemFromCart(cartItem.id)}>Remove</button>}

                </div>
            </div>
        </div>
    )
}

export default CartItem
