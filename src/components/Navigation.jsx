import React from "react";
import Logo from "../assets/shared/logo.svg";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

function Navigation() {
  function handleClick() {
    document.querySelector(".navbar").classList.toggle("active");
    document.querySelector(".nav-btn").classList.toggle("active");
  }

  return (
    <div className="top-section flex">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>

      <button className="nav-btn" onClick={handleClick}>
        <span className="sr-only">Menu</span>
      </button>
      <nav className="navbar flex">
        <NavLink index="00" title="home" />
        <NavLink index="01" title="destination" />
        <NavLink index="02" title="crew" />
        <NavLink index="03" title="technology" />
      </nav>
    </div>
  );
}

export default Navigation;
