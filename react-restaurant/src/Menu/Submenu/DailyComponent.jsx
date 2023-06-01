import React from "react";
const DailyComponent = ({ daily }) => {
  // function checkCategory(category){
  // } να δημιουργήσω ενα function to check categories  if obj.category === category create new array me to category name
  // kai katw pali na valw dunamika to category

  // Filter the daily data based on the category "dessert"
  const desert = daily.filter((obj) => obj.category == "dessert");
  // Filter the daily data based on the category "appetizers"
  const appetizers = daily.filter((obj) => obj.category == "appetizers");
  // Filter the daily data based on the category "main"
  const main = daily.filter((obj) => obj.category == "main");
  return (
    <>
      {/* Render the daily data based on the filtered categories */}
      <div class="card dailyCard shadow-lg p-3 mb-5  rounded">
        <div class="card-body">
          <h3 class="card-title">Desert:</h3>
          {desert.map((obj) => (
            <p class="card-text">
              {obj.title}: {obj.description}
            </p>
          ))}
          <h3 class="card-title mt-4">Appetizers:</h3>
          {appetizers.map((obj) => (
            <p class="card-text">
              {obj.title}: {obj.description}
            </p>
          ))}
          <h3 class="card-title mt-4">Main Entrees:</h3>
          {main.map((obj) => (
            <p class="card-text">
              {obj.title}: {obj.description}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default DailyComponent;
