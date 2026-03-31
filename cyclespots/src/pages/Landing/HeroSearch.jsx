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
        <form action="" id="hero-form" className="form-container">
          <div className="form-container__item">
            <input type="text" placeholder="Enter your address" />
          </div>
          <div className="form-container__item custom-select">
            <select name="" id="select-container">
              <option value="" disabled selected>
                Choose a category
              </option>
              <option value="">Sales</option>
              <option value="">Repairs</option>
            </select>
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
              className="icon-nav-down-arrow"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <button>Find shops</button>
        </form>
      </section>
    </>
  );
}

export default HeroSearch;
