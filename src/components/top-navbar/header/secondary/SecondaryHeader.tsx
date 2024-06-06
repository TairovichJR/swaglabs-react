import React from 'react';
import { useMemo } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useProducts } from '../../../../context/ProductsContext';
import './SecondaryHeader.css';

const SecondaryHeader = () => {

    const location = useLocation();
    const {setSelected} = useProducts(); 
    
    const getText = useMemo(() => {
        if (matchPath({ path: "/", end: true }, location.pathname)) {
            return "products";
          } else if (matchPath({ path: "/product/:id" }, location.pathname)) {
            return "details";
          }else if(matchPath({path: "/cart"}, location.pathname)) {
            return "cart";
          }else if(matchPath({path: "/checkout-step-one"}, location.pathname)){
            return "checkout-one";
          }else if(matchPath({path: "/checkout-step-two"}, location.pathname)){
            return "checkout-two";
          }
          else if(matchPath({path: "/checkout-complete"}, location.pathname)){
            return "checkout-complete";
          }
          else {
            return "Welcome";
          }
    }, [location]);

    return (
        <div className="secondary-nav">

            {getText === "products" && 
              <>
                <p className="secondary-header">Products</p>
                <select className="product-filter" onChange={(e) => setSelected(e.target.value)}>
                    <option value="az">Name (A to Z)</option>
                    <option value="za">Name (Z to A)</option>
                    <option value="lohi">Price (low to high)</option>
                    <option value="hilo">Price (high to low)</option>
                </select>
              </>
            }
            {getText === "details" && <Link className="back-to-products" to={`/`}>Back to products</Link>}
            {getText === "cart" && <p className="secondary-header">Your Cart</p>}
            {getText === "checkout-one" && <p className="secondary-header">Checkout: Your Information</p>}
            {getText === "checkout-two" && <p className="secondary-header">Checkout: Overview</p>}
            {getText === "checkout-complete" && <p className="secondary-header">Checkout: Complete!</p>}
        </div>
    )
}

export default SecondaryHeader;
