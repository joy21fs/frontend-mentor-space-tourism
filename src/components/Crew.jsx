import React from "react";
import data from "../data.json";
import { handleClick, handleKeyDown, showActiveButton } from "./selectContent";

function Crew() {
  const toKebabCase = (str) =>
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-");

  const crew = data.crew;
  showActiveButton();

  return (
    <div className="grid-container grid-container--crew">
      <h1
        id="main"
        className="numbered-title uppercase fs-500 ls-500 ff-sans-condensed text-white"
      >
        <span>02</span> Meet Your Crew
      </h1>
      {crew.map((crew, index) => (
        <picture
          key={index}
          id={"num" + index}
          className={
            index === 0 ? "active image crew-image" : "image crew-image"
          }
        >
          <source
            srcSet={require("../assets/crew/image-" +
              toKebabCase(crew.name) +
              ".webp")}
            type="images/webp"
          />
          <img
            src={require("../assets/crew/image-" +
              toKebabCase(crew.name) +
              ".png")}
            alt={crew.name}
          />
        </picture>
      ))}

      <nav role="tablist" className="tablist flex">
        {crew.map((crew, index) => (
          <button
            className={index === 0 ? "active tab dot-tab" : "tab dot-tab"}
            key={index}
            id={index}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <span className="sr-only">{crew.role}</span>
          </button>
        ))}
      </nav>
      {crew.map((crew, index) => (
        <article
          key={index}
          role="tabpanel"
          id="main"
          className={index === 0 ? "active flow" : "flow"}
        >
          <header className="flex">
            <h2 className="crew-role uppercase fs-600 ff-serif">{crew.role}</h2>
            <p className="crew-name uppercase fs-700 ff-serif text-white">
              {crew.name}
            </p>
          </header>
          <p className="crew-bio">{crew.bio}</p>
        </article>
      ))}
    </div>
  );
}

export default Crew;
