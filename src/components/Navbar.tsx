// Import dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import hooks
import { useAuth } from "../hooks/useAuth";

/**
 * Navbar component for site navigation.
 *
 * @returns {JSX.Element} The Navbar component.
 * @component
 */
function Navbar(): JSX.Element {
  // Retrieve authentication status and logout function from AuthContext
  const { authenticated, logout } = useAuth();

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

      <ul id="menu-main-nav" className="primary-menu">
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
          <Link to="/pages/about">About</Link>
        </li>

        {/*
          If authenticated, display logout button.
          If not, display login link.
        */}
        {authenticated ? (
          <li
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915"
            onClick={logout}
          >
            <a href="/">Logout</a>
          </li>
        ) : (
          <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
