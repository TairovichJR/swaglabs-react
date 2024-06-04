import React from 'react'
import PrimaryHeader from './primary/PrimaryHeader'
import './Header.css';

interface HeaderProps{
    children: React.ReactNode;
}

const Header = ({children}: HeaderProps) => {
    return (
        <div className="header-container">
            <PrimaryHeader />
            {children}
        </div>
    );
}

export default Header;
