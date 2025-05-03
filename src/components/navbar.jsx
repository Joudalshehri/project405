// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="brand">مُسترد</div>
      <nav className="nav-menu">
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>الصفحة الرئيسية</Link>
        <Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>الإبلاغ عن المفقودات</Link>
        <Link to="/lost" className={location.pathname === '/lost' ? 'active' : ''}>المفقودات</Link>
        <Link to="/support" className={location.pathname === '/support' ? 'active' : ''}>الدعم الفني</Link>
      </nav>
      <Link to="/account" className="profile-icon">
        <i className="fas fa-user"></i>
      </Link>
    </header>
  );
};

export default Navbar;
