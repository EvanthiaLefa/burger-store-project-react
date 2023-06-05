import React from "react";
import "./Footer.css";

// This component represents the footer bar of the website.

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
      <a href="#">
      <i class="fa fa-facebook" aria-hidden="true"></i></a>
      <a href="#">
      <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="#">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      </div>
      <span>&copy;evanthia.lefa</span>
      <h4>Burger House</h4>
    </div>
  );
};

export default Footer;
