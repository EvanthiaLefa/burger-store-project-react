import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

{
  /* This component represents the navigation bar of the website.
It contains links to various sections of the website and a logo.
The <Link> tag is a component provided by React Router, It is used to create clickable links enabling navigation between different views
*/
}

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h2>
          <span className="badge">Burger House</span>
        </h2>
      </Link>
      <div className="buttons">
        <Link to="menu">
          <button type="button" className="btn">
            Menu
          </button>
        </Link>
        <Link to="location">
          <button type="button" className="btn">
            Location
          </button>
        </Link>
        <Link to="menu/daily">
          <button type="button" className="btn">
            Special Offer
          </button>
        </Link>
        <Link to="subscribe">
          <button type="button" className="btn">
            Subscribe And Win
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
