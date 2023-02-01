import React from 'react';
import logo from '../../images/Logo.svg';
import menu from '../../images/menu1.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="nav-bar">
                <img src={logo} className="first-logo" alt="" />
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/buy">Buy</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
                <img src={menu} alt="" className='menu-icon' />
            </div>
        </div>
    );
};

export default Header;