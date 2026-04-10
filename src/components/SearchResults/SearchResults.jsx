import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./SearchResults.css";

function Results({ stores }) {
  const [sortedStores, setSortedStores] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    ascending: true,
  });

  useEffect(() => {
    setSortedStores(stores);
  }, [stores]);

  const sortData = (key) => {
    let ascending = true;

    if (sortConfig.key == key) {
      ascending = !sortConfig.ascending;
    }

    const sorted = [...sortedStores].sort((a, b) => {
      if (key === "store_id") {
        return ascending ? a[key] - b[key] : b[key] - a[key];
      }
      if (key === "store_name") {
        return ascending
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
      if (key === "rating") {
        return ascending ? a[key] - b[key] : b[key] - a[key];
      }
    });

    setSortedStores(sorted);
    setSortConfig({ key, ascending });
  };

  let navigate = useNavigate();

  return (
    <>
      <section id="store-results-section" className="framed-box">
        <table id="store-results-tb">
          <thead>
            <tr className="store-results-tb__h">
              <th className="th-index" onClick={() => sortData("store_id")}>
                Index
              </th>
              <th
                className="th-store-name"
                onClick={() => sortData("store_name")}
              >
                Store Name
              </th>
              <th className="th-address">Address</th>
              <th className="th-services">Services</th>
              <th className="th-rating" onClick={() => sortData("rating")}>
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStores.map((store) => (
              <tr
                key={store.store_id}
                className="store-results-tb__h"
                onClick={() => navigate(`/stores/${store.slug}`)}
              >
                <td className="th-index">{store.store_id}</td>
                <td className="th-store-name">{store.store_name}</td>
                <td className="th-address">{store.street_address}</td>
                <td className="th-services">
                  {store.services
                    ? store.services.map((s) => s.name).join(", ")
                    : store.store_services
                        ?.map((ss) => ss.services.service_name)
                        .join(", ") || " "}
                </td>
                <td className="th-rating">{store.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default function SearchResults({ stores }) {
  return (
    <>
      <Results stores={stores} />
    </>
  );
}
