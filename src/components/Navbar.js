import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>AI-Edumate</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/demo">AI Demo</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
