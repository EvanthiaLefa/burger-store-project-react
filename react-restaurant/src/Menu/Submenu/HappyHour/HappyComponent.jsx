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

  //<i class="fa-solid fa-sort-down" style="color: #000000;"></i>
  //<i class="fa-solid fa-sort-up" style="color: #000000;"></i>

  return (
    <table class="table shadow-lg">
      <thead>
        <tr>
          <th scope="col">
            <button type="button" onClick={toggleSorting}>
              Title {sortingOrder === "descending" ? <i  class="fa-solid fa-arrow-down-wide-short" style={{ color: "#000000;" }}></i> : <i  class="fa-solid fa-arrow-up-wide-short" style={{ color: "#000000;" }}></i>}
            </button>
          </th>
          <th scope="col">
            <button>Description</button>
          </th>
          <th scope="col">
            <button type="button" onClick={togglePriceSorting}>
              Price {priceOrder === "descending" ? <i  class="fa-solid fa-arrow-down-wide-short" style={{ color: "#000000;" }}></i> : <i  class="fa-solid fa-arrow-up-wide-short" style={{ color: "#000000;" }}></i>}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr>
            <td>{offer.title}</td>
            <td>{offer.description}</td>
            <td>{offer.price}&euro;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HappyComponent;
