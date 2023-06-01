import React from "react";
import "./Homepage.css";

// The component for the Home Page of the website
const HomePage = ({}) => {
  return (
    <>
      <div className="container">
        <div class="card" style={{ width: "30rem" }}>
          <img
            src="https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn ">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "30rem" }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Special title treatment</h2>
                <p class="card-text">
                  Welcome to Burger Haven, where we believe that burgers are
                  more than just a meal – they're a culinary experience! Step
                  into our vibrant and welcoming restaurant, where we serve up
                  the juiciest, most mouthwatering burgers in town. At Burger
                  Haven, we're all about quality. Every burger is meticulously
                  crafted using only the freshest, highest-quality ingredients.
                  From the moment you take your first bite, you'll taste the
                  difference. Sink your teeth into our hand-pressed, perfectly
                  seasoned patties, made from 100% premium beef or your choice
                  of vegetarian or vegan options. We cater to all taste
                  preferences because we believe everyone deserves to indulge in
                  a burger they love.
                </p>
                <a href="#" class="btn">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
                class="card-img-top"
                alt="..."
                style={{ height: "30rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1576488489579-6967c02c56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                class="card-img-top"
                alt="..."
                style={{ height: "30rem" }}
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Special title treatment</h2>
                <p class="card-text">
                  Whether you're looking for a quick lunch, a casual dinner, or
                  a place to gather with friends, Burger Haven is the ultimate
                  destination. Our friendly and attentive staff is always ready
                  to serve you with a smile, ensuring that your dining
                  experience is nothing short of exceptional. So, come on over
                  and experience the burger revolution at Burger Haven. Each
                  visit is a chance to embark on a flavorful journey that will
                  leave you craving more. Your taste buds deserve the best, and
                  we're here to deliver.
                </p>
                <a href="#" class="btn">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
