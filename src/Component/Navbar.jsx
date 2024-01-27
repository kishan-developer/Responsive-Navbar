// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Logo</div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                   
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <span className="bar">1</span>
                    <span className="bar">2</span>
                    <span className="bar">3</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;