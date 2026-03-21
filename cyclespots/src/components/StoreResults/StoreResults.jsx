import { useEffect, useState } from "react";
import "./StoreResults.css";
import { getStore } from "../../api/storeService";

function Results() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fetchStores() {
      try {
        const result = await getStore();
        setStores(result);
        // console.log("Fetched stores:", result);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    }

    fetchStores();
  }, []);

  return (
    <>
      <section id="store-results-section" className="main-section framed-box">
        <table id="store-results-tb">
          <thead>
            <tr className="store-results-tb__h">
              <th>Index</th>
              <th>Store Name</th>
              <th>Address</th>
              <th>Services</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.store_id} className="store-results-tb__h">
                <td>{store.store_id}</td>
                <td>{store.store_name}</td>
                <td>{store.street_address}</td>
                <td>
                  {store.store_services
                    ?.map((ss) => ss.services.service_name)
                    .join(", ") || " "}
                </td>
                <td>{store.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default function StoreResults() {
  return (
    <>
      <Results />
    </>
  );
}
