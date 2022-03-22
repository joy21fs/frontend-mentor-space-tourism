import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid-container grid-container--home">
      <main id="main" className="flex ">
        <h1 className="home-title fs-500 ls-500 text-light uppercase">
          So, you want to travel to
          <span className="d-block fs-900 ff-serif text-white uppercase">
            Space
          </span>
        </h1>
        <p className="home-text text-light">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </main>
      <button className="explore-btn fs-600 ff-serif uppercase">
        <Link className="text-dark" to="/destination">
          Explore
        </Link>
      </button>
    </div>
  );
}

export default Home;
