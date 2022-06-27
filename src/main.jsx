import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Find from "./Find";
import Navbar from "./Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
