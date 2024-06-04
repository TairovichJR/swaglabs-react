import React from 'react'
import { useProducts } from '../../context/ProductsContext';
import Product from './product/Product';
import './Products.css';

const ProductsList = () => {

    const {filtered} = useProducts(); 

    return (
        <div className="products-container">
             <div className="products-list">
                {filtered.map((p) => {
                return <Product key={p.id} product={p}/>
                })}
            </div>
        </div>
    )
}

export default ProductsList;
