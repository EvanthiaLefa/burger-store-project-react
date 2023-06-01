import React from "react";
import { Link, Router } from "react-router-dom";
import "./Navmenu.css";
import Daily from "./Submenu/Daily";
import { Route, Routes } from "react-router-dom";

{
  /* This component represents the navigation menu within the Menu page */
}

const NavMenu = () => {
  return (
    <>
      {" "}
      <div className="navMenu">
        <div className="buttons">
          {/* Link to the Specials page */}
          <Link to="specials">
            <button type="button" className="btn">
              Specials
            </button>
          </Link>
          {/* Link to the Daily Offers page */}
          <Link to="daily">
            <button type="button" className="btn">
              Daily Offers
            </button>
          </Link>
          {/* Link to the Happy Hour page */}
          <Link to="happy">
            <button type="button" className="btn">
              Happy Hour
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
