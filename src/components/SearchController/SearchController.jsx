import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import { getStores } from "../../api/storeService";
import "./SearchController.css";

export default function SearchController() {
  const [stores, setStores] = useState([]);
  const [coords, setCoords] = useState({ lat: 43.6532, lng: -79.3832 }); // Default Toronto
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const loadStores = async (currentCoords, currentPage) => {
    try {
      const result = await getStores({
        lat: currentCoords.lat,
        lng: currentCoords.lng,
        page: currentPage,
        size: 12,
      });

      setStores(result);

      if (result.length > 0) {
        setTotalCount(result[0].total_count);
      }
    } catch (error) {
      console.error("Error fetching stores:", error);
    }
  };

  useEffect(() => {
    loadStores(coords, page);
  }, [coords, page]);

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(1, p - 1));

  return (
    <div id="store-listings-container">
      <SearchBar
        onSearchComplete={(newCoords) => {
          setCoords(newCoords);
          setPage(1); // Reset to page 1 on new search
        }}
      />

      <SearchResults stores={stores} />

      <div className="pagination-controls">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="pagination-arrow-btn"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#ffffff"
          >
            <path
              d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <span>
          Page {page} of {Math.ceil(totalCount / 12)}
        </span>
        <button
          onClick={nextPage}
          disabled={page * 12 >= totalCount}
          className="pagination-arrow-btn"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#ffffff"
          >
            <path
              d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
