import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>maisonette</h1>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/Shopping">
        Produkte
      </Link>
      <Link className="link" to="/About">
        About
      </Link>
      <Link className="link" to="/Store">
        Store
      </Link>
      <Link className="link" to="/Presse">
        Presse
      </Link>
      <Link className="link" to="/Newsletter">
        Newsletter
      </Link>
    </div>
  );
};

export default Navbar;
