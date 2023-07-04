import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";

//A component that's rendering a side navigation menu
const SideNav = () => {
  return (
    <div className="sidenav">
      <h6 class="mt-4">OPEN 7 DAYS A WEEK!</h6>
      <h6 class="mt-2">11:30 AM - 9 PM </h6>
      <ul class="list-group list-group-flush mt-3">
        <span class="mt-1">
          <u>Monday:</u>
        </span>
        <li class="list-group-item">An item</li>
        <span class="mt-1">
          <u>Monday:</u>
        </span>
        <li class="list-group-item">A second item</li>
        <span class="mt-1">
          <u>Monday:</u>
        </span>
        <li class="list-group-item">A third item</li>
        <span class="mt-1">
          <u>Monday:</u>
        </span>
        <li class="list-group-item">A fourth item</li>
        <span class="mt-1">
          <u>Monday:</u>
        </span>
        <li class="list-group-item">A fourth item</li>
        <span class="mt-1">
          <u>Monday:</u>
        </span>
        <li class="list-group-item">A fourth item</li>
        <span class="mt-1">
          <u>Monday:</u>
        </span>
        <li class="list-group-item">And a fifth one</li>
        <li class="list-group-item"></li>
      </ul>
      <div className="buttons">
        <Link to="subscribe">
          <button type="button" className="btn">
            SUBSCRIBE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
