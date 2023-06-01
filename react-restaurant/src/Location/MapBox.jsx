import React, { useRef, useEffect, useState } from "react";
import "./Mapbox.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXZhLWwiLCJhIjoiY2xhdGpjMDl2MDE4aTNvbzY4c29xMGt2cCJ9.u79AybQgq3MZuvFWj_ncPQ";

//The MapBox component is responsible for rendering a map using Mapbox GL.
//centered on specific coordinates and with a marker indicating a specific location.

const MapBox = () => {
  //useRef can store a mutable element/variable and does not cause a component to re-render when the value changes
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(22.93908);
  const [lat, setLat] = useState(40.63273);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    new mapboxgl.Marker().setLngLat([23.060512, 40.730269]).addTo(map.current);
  }, []);

  return (
    <div className="location">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapBox;
