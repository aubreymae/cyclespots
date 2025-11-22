import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Menu() {
  return (
    <>
      <nav id="nav">
        <div id="nav__title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 124 124"
            fill="none"
          >
            <rect width="100%" height="100%" rx="100" fill="#E5380D" />
          </svg>
          <h1 class="nav__title-name">CycleSpots</h1>
        </div>
        <ul id="nav__menu">
          <li className="nav__menu-item">
            <NavLink to="/search">Find listings</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/contact">Reach out to us</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/faq">Read our FAQs</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default function Header() {
  return (
    <section>
      <Menu />
    </section>
  );
}
