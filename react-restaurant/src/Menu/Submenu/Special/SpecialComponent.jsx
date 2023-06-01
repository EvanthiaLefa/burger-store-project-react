import React, { useState } from "react";

const SpecialComponent = ({ specials }) => {
  //The component accepts a prop named specials that contains the fetched data of Special.jsx component
  return (
    <>
      {/* Render the data based on the filtered categories */}
      <div className="specialCard shadow-lg p-3">
        {specials.map((special) => (
          <div key={special.id}>
            <h4
              data-toggle="tooltip"
              data-placement="top"
              title={special.title}
            >
              {/* change tooltip based on category*/}
              {special.title}
            </h4>
            <p>{special.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpecialComponent;
