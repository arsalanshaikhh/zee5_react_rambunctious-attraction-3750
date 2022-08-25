import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Tvshows from './Tvshows';
import Movies from './Movies';


function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tvshows" element={<Tvshows />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default Allroutes;
