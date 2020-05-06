import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
