import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./components/App";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

window.addEventListener("load", function () {
  const pages = document.querySelectorAll(".nav-link");

  pages.forEach(
    (page) =>
      page.pathname === window.location.pathname && page.classList.add("active")
  );
});

function skipToContent() {
  document.querySelector("#main").scrollIntoView();
}

ReactDOM.render(
  <BrowserRouter basename="/space-tourism">
    <button className="skip-to-content-btn" onClick={skipToContent}>
      Skip to Content
    </button>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
