import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import { getStore } from "../../api/storeService";
import "./SearchController.css";

export default function SearchController() {
  const [stores, setStores] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function loadAll() {
      try {
        const result = await getStore();
        setStores(result);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    }
    loadAll();
  }, []);

  const updateResults = (newStores) => {
    setStores(newStores);
    setIsSearching(true);
  };

  return (
    <div id="store-listings-container">
      <SearchBar onSearchComplete={updateResults} />
      <SearchResults stores={stores} />
    </div>
  );
}
