import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // run once on mount (important!)
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <NavLink to="/" className="nav__title-name">
              <h1>CycleSpots</h1>
            </NavLink>
          </div>
          <div
            id="nav__icons"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                id="menu-icon-x"
                className={menuOpen ? "fixed" : ""}
              >
                <path
                  d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                id="menu-icon"
                className={menuOpen ? "open" : ""}
              >
                <path
                  d="M3 5H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </div>
        </div>
        <ul id="nav__menu" className={menuOpen ? "open" : ""}>
          <li className="nav__menu-item">
            <NavLink to="/" className="nav__menu-item-link">
              Home
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/listings" className="nav__menu-item-link">
              Store Listings
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/contact" className="nav__menu-item-link">
              Questions?
            </NavLink>
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
