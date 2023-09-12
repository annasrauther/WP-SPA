import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="site-navigation"
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <a href="#menu-main-nav" id="js-menu-toggle" className="site-menu-toggle">
        <span className="screen-reader-text">Primary Menu</span>
        <span aria-hidden="true">☰</span>
      </a>

      {/* Update menu links as needed */}
      <ul id="menu-main-nav" className="primary-menu">
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
          <Link to="/pages/about">About</Link>
        </li>

        {/* Show this when the user is logged out */}
        <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
          <Link to="/login">Login</Link>
        </li>

        {/* Show this when the user is logged in */}
        <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
