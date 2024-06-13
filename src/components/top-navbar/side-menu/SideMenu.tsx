import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useProducts } from '../../../context/ProductsContext';
import './SideMenu.css';

const SideMenu = () => {

    const{closeBurgerMenu, resetAppState} = useProducts();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };


    return (
        <div className="side-menu-wrapper">
            <div className="side-menu-container">
                <span className="close-btn" onClick={closeBurgerMenu}></span>
                <nav className="side-menu-nav">
                    <Link to={'/'} className="menu-item-link">All Items</Link>
                    <a href="https://saucelabs.com/" target="_blank" className="menu-item-link">About</a>
                    <Link to={'/login'} onClick={handleLogout} className="menu-item-link">Logout</Link>
                    <a className="menu-item-link" onClick={resetAppState}>Reset App State</a>
                </nav>
            </div>
        </div>
    )
}

export default SideMenu
