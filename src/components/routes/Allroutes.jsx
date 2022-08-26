import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tvshows from "./Tvshows";
import Movies from "./Movies";
import Product from "./Product";
import { Login } from "./../Pages/Login";
import { Signup } from "./../Pages/Signup";
import { ProtectedRoute } from "./../Context/ProtectedRoute";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />
      <Route path="/tvshows" element={<Tvshows />} />
      <Route path="/movies" element={<Movies />} />

      <Route path="/login" element={<Login />}>
        LogIn
      </Route>
      <Route path="/signup" element={<Signup />}>
        SignUp
      </Route>
    </Routes>
  );
}

export default Allroutes;
