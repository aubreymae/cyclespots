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
          </div>
          <button>Find shops</button>
        </form>
      </section>
    </>
  );
}

export default HeroSearch;
