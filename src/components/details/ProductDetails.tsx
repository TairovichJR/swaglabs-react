import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import './ProductDetails.css';

const ProductDetails = () => {

    const { id } = useParams();
    const { products, cartItems, addItemToCart, removeItemFromCart } = useProducts();
    const product = products.find(p => p.id === Number(id));
    
    // Ensure `added` is derived unconditionally
    const added = useMemo(() => {
        if (!product) return false;
        return cartItems.some(item => item.id === product.id);
    }, [cartItems, product]);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="products-container">
            <div className="product-details-container">
                <div className="product-details-img-container">
                    <img className="product-details-img" src={require(`../../images/${product.image}`)} alt=""/>
                </div>
                <div className="product-details-decs-container">
                    <p className="product-details-decs-title">{product.title}</p>
                    <p className="product-details-decs-text">{product.description}</p>
                    <span className="product-details-decs-price">${product.price}</span>
                    {!added && (
                        <button className="add-to-cart-btn" onClick={() => addItemToCart(product)}>
                        Add to cart
                        </button>
                            )}
                    {added && (
                        <button className="add-to-cart-btn remove" onClick={() => removeItemFromCart(product.id)}>
                        Remove
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
