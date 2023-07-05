import React, { useState } from "react";
import "./Subscribe.css";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Subscription successful");
        // Optionally, you can perform additional actions upon successful subscription
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      // Handle the error or display an error message to the user
    }
    handleSubscribe()
  };

  const handleSubscribe = () => {
    setSubscription(true);
  };
  return (
    <div className="subscribe">
      {subscription ? (
        <div class="card card-subscribe" style={{ width: "30rem" }}>
          <h5 class="card-title mt-2">Thank you for your subscription!!</h5>
          <p class="mt-2" style={{ width: "20rem" }}>
            Check your email you will receive your discount code.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-center mt-4">Subscribe And Get A 15% Discount</h3>
          <p className="text-center mt-4">
            Our newsletter is sent when something new and tasty arrives at our
            store or when we have amazing offers for you. So, subscribe to get a
            15% discount and stay up to date with upcoming offers.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn mb-3"
                onClick={handleSubmit}
              >
                Subscribe
              </button>
            </div>
            <Link to="/">
              <p>No thanks</p>
            </Link>
          </form>
        </>
      )}
    </div>
  );
};

export default Subscribe;
