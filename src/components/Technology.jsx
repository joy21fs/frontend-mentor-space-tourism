import React from "react";
import data from "../data.json";
import { handleClick, handleKeyDown, showActiveButton } from "./selectContent";

function Technology() {
  const toKebabCase = (str) =>
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-");

  const technology = data.technology;

  showActiveButton();

  return (
    <div className="grid-container grid-container--technology flow">
      <h1
        id="main"
        className="numbered-title uppercase fs-500 ls-500 ff-sans-condensed text-white"
      >
        <span>03</span> Space Launch 101
      </h1>
      {technology.map((technology, index) => (
        <picture
          key={index}
          id={"num" + index}
          className={
            index === 0
              ? "active image technology-image"
              : "image technology-image"
          }
        >
          <img
            src={
              window.screen.width < 880
                ? require("../assets/technology/image-" +
                    toKebabCase(technology.name) +
                    "-landscape.jpg")
                : require("../assets/technology/image-" +
                    toKebabCase(technology.name) +
                    "-portrait.jpg")
            }
            alt={technology.name}
          />
        </picture>
      ))}

      <nav role="tablist" className="tablist flex">
        {technology.map((technology, index) => (
          <button
            className={
              index === 0 ? "active  tab number-tab" : "tab number-tab"
            }
            key={index}
            id={index}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            {index + 1}
          </button>
        ))}
      </nav>
      {technology.map((technology, index) => (
        <article
          key={index}
          id="main"
          role="tabpanel"
          className={index === 0 ? "active flow" : "flow"}
        >
          <header className="flex">
            <h2 className="technology-role uppercase fs-300 ls-300 ff-sans-condensed text-light">
              The technology...
            </h2>
            <p className="technology-name uppercase fs-700 ff-serif text-white">
              {technology.name}
            </p>
          </header>
          <p className="technology-description">{technology.description}</p>
        </article>
      ))}
    </div>
  );
}

export default Technology;
