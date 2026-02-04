import React from "react";
import { Link } from "react-router-dom";

export const NetflixShowsComponent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Shows Component</h1>
      <ul>
        <li>
          <Link to="/watch/peakyblinder">Peaky blinder</Link>
        </li>
        <li>
          <Link to="/watch/moneyheist">Money Heist</Link>
        </li>
        <li>
          <Link to="/watch/breakingbad">Breaking Bad</Link>
        </li>
      </ul>
    </div>
  );
};
