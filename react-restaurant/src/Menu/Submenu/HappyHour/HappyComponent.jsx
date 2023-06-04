import React, { useState, useEffect } from "react";

const HappyComponent = ({
  offers,
  handleSortDescending,
  handleSortAscending,
  handlePriceAscending,
  handlePriceDescending,
}) => {
  const [sortingOrder, setSortingOrder] = useState("descending");
  const [priceOrder, setPriceOrder] = useState("descending");

  const toggleSorting = () => {
    if (sortingOrder === "descending") {
      setSortingOrder("ascending");
      handleSortAscending(); // Call the ascending sorting function
    } else {
      setSortingOrder("descending");
      handleSortDescending(); // Call the descending sorting function
    }
  };

  const togglePriceSorting = () => {
    if (priceOrder === "descending") {
      setPriceOrder("ascending");
      handlePriceAscending(); // Call the ascending sorting function
    } else {
      setPriceOrder("descending");
      handlePriceDescending(); // Call the descending sorting function
    }
  };

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            <button type="button" onClick={toggleSorting}>
              Title
            </button>
          </th>
          <th scope="col">
            <button>Description</button>
          </th>
          <th scope="col">
            <button type="button" onClick={togglePriceSorting}>
              Price
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr>
            <td>{offer.title}</td>
            <td>{offer.description}</td>
            <td>{offer.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HappyComponent;
