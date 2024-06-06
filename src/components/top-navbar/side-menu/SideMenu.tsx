import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useProducts } from '../../../context/ProductsContext';
import './SideMenu.css';

const SideMenu = () => {

    const{closeBurgerMenu, resetAppState} = useProducts();


    return (
        <div className="side-menu-wrapper">
            <div className="side-menu-container">
                <span className="close-btn" onClick={closeBurgerMenu}></span>
                <nav className="side-menu-nav">
                    <Link to={'/'} className="menu-item-link">All Items</Link>
                    <a href="https://saucelabs.com/" target="_blank" className="menu-item-link">About</a>
                    <Link to={'/login'} className="menu-item-link">Logout</Link>
                    <a className="menu-item-link" onClick={resetAppState}>Reset App State</a>
                </nav>
            </div>
        </div>
    )
}

export default SideMenu
