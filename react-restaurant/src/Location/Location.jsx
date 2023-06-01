import React from "react";
import MapBox from "./MapBox";
import SideNav from "./SideNav";

const Location = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {/* Render the SideNav component */}
          <SideNav />
        </div>
        <div className="col">
          {/* Render the MapBox component */}
          <MapBox />
        </div>
      </div>
    </div>
  );
};

export default Location;
