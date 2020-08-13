import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item nav-list-item--1">
          <NavLink exact to="/">
            Main
          </NavLink>
        </li>
        <li className="nav-list-item nav-list-item--2">
          <NavLink to="/titles">Lite</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
