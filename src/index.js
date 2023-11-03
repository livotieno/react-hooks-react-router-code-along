import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from './About';
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>About
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
