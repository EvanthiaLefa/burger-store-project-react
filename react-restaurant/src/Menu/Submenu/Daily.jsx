import React, { useEffect, useState } from "react";
import DailyComponent from "./DailyComponent";
import "./Daily.css";

const Daily = () => {
  // Define state to store the fetched daily data
  const [daily, setDaily] = useState([]);
  useEffect(() => {
    // Fetch the daily data from the API endpoint
    fetch("http://localhost:3004/dailly")
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        setDaily(data);
      });
  }, []);

  return (
    <>
      <div className="daily">
        <h1 className="text-center mt-4">Daily Offers</h1>
        {/* Render the DailyComponent and pass the daily data as a prop */}
        <DailyComponent daily={daily} />
      </div>
    </>
  );
};

export default Daily;
