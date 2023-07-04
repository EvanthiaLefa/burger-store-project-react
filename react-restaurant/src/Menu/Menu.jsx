import React from "react";
import "./Menu.css";
import NavMenu from "./NavMenu";

{
  /*
This component represents the Menu page of the Burger House website.
It displays menu items and additional information about the restaurant.
The component imports and includes the NavMenu component for navigation.
*/
}

const Menu = () => {
  // Component implementation...
  return (
    <>
      <div className="menu">
        <h1>Menus</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          veritatis pariatur ratione corrupti explicabo aliquam necessitatibus
          error, alias ut sed accusantium! Id rem nostrum sit illo sed debitis
          mollitia molestias! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quaerat debitis, soluta dignissimos facere quae
          fugit quidem culpa pariatur. Dicta nobis officia eius placeat animi
          rem nisi esse facilis quibusdam! Dolorum. l
        </p>
        <NavMenu />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          debitis, soluta dignissimos facere quae fugit quidem culpa pariatur.
          Dicta nobis officia eius placeat animi rem nisi esse facilis
          quibusdam! Dolorum.
        </p>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-sm-6" style={{ width: "40rem" }}>
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
                class="card-img-top"
                alt="..."
                style={{ height: "25rem" }}
              />
            </div>
          </div>
          <div class="col-sm-6" style={{ width: "40rem" }}>
            <div class="card">
              <div class="card-body">
                <h2>Special title treatment</h2>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <h2>Special title treatment</h2>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <h3 class="card-title">Lorem ipsum dolor sit amet</h3>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="row">
          <div class="col-sm-6" style={{ width: "40rem" }}>
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Special title</h3>
                <p class="card-text">
                  Welcome to Burger House Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Laborum minima ullam voluptatem
                </p>
                <h3 class="card-title">Special title</h3>
                <p class="card-text">
                  Welcome to Burger House Lorem ipsum dolor sit amet
                  consectetur, adipisicing
                </p>
                <h3 class="card-title">Special title</h3>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <h3 class="card-title">Special title</h3>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <h3 class="card-title">Special title</h3>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <h3 class="card-title">Special title</h3>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <h3 class="card-title">Special title</h3>
                <p class="card-text">Welcome to Burger House</p>
                <h3 class="card-title">Special title</h3>
                <p class="card-text">
                  Welcome to Burger House Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Laborum minima
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6" style={{ width: "40rem" }}>
            <div class="card">
              <div class="card-body">
                <u>
                  <h2>Special title treatment</h2>
                </u>
                <p class="card-text">
                  {" "}
                  Atque ad tenetur dicta mollitia? Quaerat unde numquam maiores!
                  Consectetur.
                </p>
                <p class="card-text">
                  {" "}
                  Atque ad tenetur dicta mollitia? Quaerat unde numquam maiores!
                  Consectetur.
                </p>
                <h3 class="card-title mt-2">
                  <u>Special</u>{" "}
                </h3>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;