import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  function handleClick(event) {
    document
      .querySelectorAll(".active")
      .forEach((element) => element.classList.remove("active"));
    event.target.classList.add("active");
  }

  return (
    <li className="uppercase ff-sans-condensed fs-300 ls-300">
      <Link
        className="nav-link text-white"
        to={props.title === "home" ? "/" : "/" + props.title}
        onClick={handleClick}
      >
        <span>{props.index}</span>
        {props.title}
      </Link>
    </li>
  );
}

export default NavLink;
