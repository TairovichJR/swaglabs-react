import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import { useProducts } from '../../../context/ProductsContext';
import { IProduct } from '../../../model'
import './Product.css';

interface ProductProps {
    product: IProduct;
}

const Product = ({product}: ProductProps) => {

    const {addItemToCart, removeItemFromCart, cartItems} = useProducts();

    const added = useMemo(() => cartItems.some(item => item.id === product.id), [cartItems, product.id]);

    return (
        <div className="product-item">
            <div className="product-img-container">
                <img className="product-img" src={require(`../../../images/${product.image}`)} alt=""/>
            </div>
            <div className="product-item-details">
                <div className="product-item-label">

                    <Link className="product-item-title" to={`/product/${product.id}`}>
                        {product.title}
                    </Link>

                    <p className="product-item-description">
                    {product.description}
                    </p>
                </div>
                
                <div className="product-item-pricebar">
                    <span className="product-item-price">${product.price}</span>
                    {!added && <button className="add-to-cart-btn" onClick={() => {
                        addItemToCart(product);
                    }} >Add to cart</button>}
                    {added && <button className="add-to-cart-btn remove" onClick={() => {
                        removeItemFromCart(product.id);
                    }}>Remove</button>}   
                </div>
            </div>
        </div>
    )
}

export default Product;
