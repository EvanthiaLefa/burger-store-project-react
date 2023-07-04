import React from 'react'
import './Subscribe.css'
import { Link, Router } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h3 className="text-center mt-4">Subscribe And Get A 15% Discount</h3>
        <p className="text-center mt-4">        
        Our newsletter are only when something new and really tasty has came to our store or when we're willing to give you amazing offers.
        So Subscribe get a 15% and stay up to date with the upcomming offers.
        </p>
      <form>
        <div >
          <label for="email" > Email address </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        {/* <div>
          <label for="firstName" class="form-label"> firstName </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="firstName"
          />
        </div>
        <div>
          <label for="lastName" class="form-label"> lastName </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="name@example.com"
          />
        </div> */}
        <div >
          <button type="submit" class="btn mb-3">
            Subscribe
          </button>
        </div>
        <Link to="/">
        <p> No thanks </p>
        </Link>
      </form>
    </div>
  );
}

export default Subscribe