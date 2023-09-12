import React from "react";
import "../styles/header.css";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header
      className="site-header"
      role="banner"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <h1
        className="site-title"
        itemScope
        itemType="http://schema.org/Organization"
      >
        10up Blog
      </h1>

      <Navbar />
    </header>
  );
};

export default Header;
