import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import faviconImg from '../assets/Divd-academy.svg';

export default function Navigation() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search for:', searchQuery);
        // Add search functionality here
    };

    const handleSearchClick = () => {
        setIsSearchActive(!isSearchActive);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <Link to="/" className="navbar-brand" onClick={closeMenu}>
                        <img src={faviconImg} alt="DIVD Logo" className="favicon" />
                    </Link>
                </div>

                <div className="navbar-right">
                    {!isSearchActive && (
                        <>
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/News" className="nav-link">News</Link>
                            <Link to="/AboutUs" className="nav-link">About</Link>
                            <Link to="/FAQ" className="nav-link">FAQ</Link>
                            <Link to="/Careers" className="nav-link">Careers</Link>
                            <Link to="/Courses" className="nav-link">Courses</Link>
                        </>
                    )}

                    <form onSubmit={handleSearch} className={`search-form ${isSearchActive ? 'active' : ''}`}>
                        {isSearchActive && (
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />
                        )}
                        <button type="button" onClick={handleSearchClick} className="search-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="mobile-menu-link" onClick={closeMenu}>Home</Link>
                    <Link to="/News" className="mobile-menu-link" onClick={closeMenu}>News</Link>
                    <Link to="/AboutUs" className="mobile-menu-link" onClick={closeMenu}>About</Link>
                    <Link to="/FAQ" className="mobile-menu-link" onClick={closeMenu}>FAQ</Link>
                    <Link to="/Careers" className="mobile-menu-link" onClick={closeMenu}>Careers</Link>
                    <Link to="/Courses" className="mobile-menu-link" onClick={closeMenu}>Courses</Link>
                </div>
            )}
        </>
    );
}