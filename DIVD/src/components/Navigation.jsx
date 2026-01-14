import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search for:', searchQuery);
        // Add search functionality here
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">
                    <img src="/favicon.ico" alt="DIVD Logo" className="favicon" />
                    <span>Academy</span>
                </Link>
            </div>

            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Projects" className="nav-link">News</Link>
                <Link to="/AboutUs" className="nav-link">About</Link>
                <Link to="/FAQ" className="nav-link">FAQ</Link>
                <Link to="/Careers" className="nav-link">Careers</Link>
                <Link to="/Course" className="nav-link">Courses</Link>

                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-btn">🔍</button>
                </form>
            </div>
        </nav>
    );
}