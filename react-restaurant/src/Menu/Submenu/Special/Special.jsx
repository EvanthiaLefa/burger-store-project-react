import React, { useEffect, useState } from "react";
import SpecialComponent from "./SpecialComponent";
import "./Special.css";

const Special = () => {
  const [specials, setSpecials] = useState([]); // state will be used to store the fetched data.

  useEffect(() => {
    // Fetch the data from the API endpoint
    fetch("http://localhost:3004/specials")
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        setSpecials(data);
      });
  }, []);
  const handleSortClick = () => {
    const sortedArray = [...specials].sort(
      (
        a,
        b // creates a new sorted array based on the specials state, sorting the objects by their title property in ascending order.
      ) => (a.title > b.title ? 1 : -1)
    );
    setSpecials(sortedArray); //stores the sorted array on specials state
  };

  return (
    <>
      <h1 className="text-center mt-4">Specials</h1>
      <div className="special">
        {/*  passing the specials data as a prop to the <SpecialComponent/>*/}
        <SpecialComponent specials={specials} />
        <button type="button" className="btn" onClick={handleSortClick}>
          Sort by name (A - Z)
        </button>
      </div>
    </>
  );
};

export default Special;
