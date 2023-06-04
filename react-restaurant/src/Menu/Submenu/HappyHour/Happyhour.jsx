import React, { useState, useEffect } from "react";
import "./Happyhour.css";
import HappyComponent from "./HappyComponent";

// I'm defining the methods outside the component to prevent error message `Too many re-renders`.

const handleSortDescending = (offers, setOffers) => {
  const sortedArray = [...offers].sort((a, b) => (a.title < b.title ? 1 : -1));
  setOffers(sortedArray);
};
const handleSortAscending = (offers, setOffers) => {
  const sortedArray = [...offers].sort((a, b) => (a.title > b.title ? 1 : -1));
  setOffers(sortedArray);
};
const handlePriceDescending = (offers, setOffers) => {
  const sortedArray = [...offers].sort((a, b) => (a.price < b.price ? 1 : -1));
  setOffers(sortedArray);
};
const handlePriceAscending = (offers, setOffers) => {
  const sortedArray = [...offers].sort((a, b) => (a.price > b.price ? 1 : -1));
  setOffers(sortedArray);
};

const Happyhour = () => {
  const [offers, setOffers] = useState([]); // state will be used to store the fetched data.

  useEffect(() => {
    // Fetch the data from the API endpoint
    fetch("http://localhost:3004/happyhour")
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        setOffers(data);
      });
  }, []);

  return (
    <>
      <h1 className="text-center mt-4">Happy Hour</h1>
      <h4 className="text-center mt-4">`16:00 - 18:00`</h4>
      <div className="container happyhour">
        <HappyComponent
          offers={offers}
          handleSortAscending={() => handleSortAscending(offers, setOffers)}
          handleSortDescending={() => handleSortDescending(offers, setOffers)}
          handlePriceAscending={() => handlePriceAscending(offers, setOffers)}
          handlePriceDescending={() => handlePriceDescending(offers, setOffers)}
        />
      </div>
    </>
  );
};

export default Happyhour;
