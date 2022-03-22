import React from "react";
import data from "../data.json";
import { handleClick, handleKeyDown, showActiveButton } from "./selectContent";

function Destination() {
  const destinations = data.destinations;

  showActiveButton();

  return (
    <div className="grid-container grid-container--destination">
      <h1 className="numbered-title uppercase fs-500 ls-500 ff-sans-condensed text-white">
        <span>01</span> Pick your destination
      </h1>
      {destinations.map((destination, index) => (
        <picture
          key={index}
          className={
            index === 0
              ? "active image destination-image"
              : "image destination-image"
          }
        >
          <source
            srcSet={require("../assets/destination/image-" +
              destination.name.toLowerCase() +
              ".webp")}
            type="images/webp"
          />
          <img
            src={require("../assets/destination/image-" +
              destination.name.toLowerCase() +
              ".png")}
            alt={destination.name}
          />
        </picture>
      ))}

      <nav role="tablist" className="tablist flex">
        {destinations.map((destination, index) => (
          <button
            role="tab"
            className={
              index === 0
                ? "active tab text-tab uppercase fs-300 ls-300 ff-sans-condensed text-light"
                : "tab text-tab uppercase fs-300 ls-300 ff-sans-condensed text-light"
            }
            key={index}
            id={index}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            {destination.name}
          </button>
        ))}
      </nav>
      {destinations.map((destination, index) => (
        <article
          key={index}
          role="tabpanel"
          id="main"
          className={index === 0 ? "active flow" : "flow"}
        >
          <h2 className="uppercase fs-800 ff-serif text-white">
            {destination.name}
          </h2>
          <p className="destination-description">{destination.description}</p>
          <div className="stats-box flex ">
            <div className="flow">
              <h3 className="uppercase fs-200 ls-200 ff-sans-condensed text-light">
                avg. distance
              </h3>
              <p className="stat uppercase ff-serif text-white">
                {destination.distance}
              </p>
            </div>
            <div className="flow">
              <h3 className="uppercase fs-200 ls-200 ff-sans-condensed text-light">
                est. travel time
              </h3>
              <p className="stat uppercase ff-serif text-white">
                {destination.travel}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Destination;
