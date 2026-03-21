import "./SearchListing.css";

export default function SearchListing() {
  return (
    <>
      <section id="search-listing-section" className="main-section framed-box">
        <div className="listing-wrapper">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M12 11.5V16.5"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 7.51L12.01 7.49889"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className="listing-body">
            <h2>You are looking at shops around</h2>
            <h2>158 Queen Street East, Toronto, Canada</h2>
            <h2>About 40 shops were found in your search</h2>
          </div>
        </div>
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
