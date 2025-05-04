
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navbar component for site-wide navigation
const Navbar = () => {
  const location = useLocation(); // Hook to access current URL path

  return (
    <header className="navbar">
      {/* Brand/logo section */}
      <div className="brand">مُسترد</div>

      {/* Navigation menu */}
      <nav className="nav-menu">
        {/* Each link checks if it's the active page based on the current path */}
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>الصفحة الرئيسية</Link>
        <Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>الإبلاغ عن المفقودات</Link>
        <Link to="/lost" className={location.pathname === '/lost' ? 'active' : ''}>المفقودات</Link>
        <Link to="/support" className={location.pathname === '/support' ? 'active' : ''}>الدعم الفني</Link>
      </nav>

      {/* Profile/account icon (redirects to account page) */}
      <Link to="/account" className="profile-icon">
        <i className="fas fa-user"></i> {/* Font Awesome user icon */}
      </Link>
    </header>
  );
};

export default Navbar;
