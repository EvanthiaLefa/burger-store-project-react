import React from "react";
import "./App.css";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import HomePage from "./Main/HomePage";
import {  Route, Switch , Routes } from 'react-router-dom';
import Menu from "./Menu/Menu";
import Location from "./Location/Location";
import Daily from "./Menu/Submenu/Daily";
import Special from "./Menu/Submenu/Special/Special";
import Happyhour from "./Menu/Submenu/HappyHour/Happyhour";
function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route exact path="menu/daily" element={<Daily />} />
          <Route exact path="menu/specials" element={<Special/>}/>
          <Route exact path="menu/happy" element={<Happyhour/>}/>
          </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
