import { NavLink } from "react-router-dom";
import "./HeroSearch.css";

function HeroSearch() {
  return (
    <>
      <section id="hero-section" className="main-section framed-box">
        <h2>
          Discover local, trusted bike shops curated for your city and your
          needs. <br />
          Free to use, easy to explore.
        </h2>
        <NavLink to="/listings" className="hero-btn">
          Start searching now
        </NavLink>
      </section>
    </>
  );
}

export default HeroSearch;
