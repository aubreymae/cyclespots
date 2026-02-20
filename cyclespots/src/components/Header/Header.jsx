import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav id="nav">
        <div id="nav--mobile">
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
            <h1 className="nav__title-name">CycleSpots</h1>
          </div>
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="menu-icon"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <path
              d="M3 5H21"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 12H21"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <ul id="nav__menu" className={menuOpen ? "open" : ""}>
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
