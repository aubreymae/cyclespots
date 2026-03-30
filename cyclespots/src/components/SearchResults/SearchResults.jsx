import "./SearchResults.css";

function Results({ stores }) {
  return (
    <>
      <section id="store-results-section" className="framed-box">
        <table id="store-results-tb">
          <thead>
            <tr className="store-results-tb__h">
              <th className="th-index">Index</th>
              <th className="th-store-name">Store Name</th>
              <th className="th-address">Address</th>
              <th className="th-services">Services</th>
              <th className="th-rating">Rating</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.store_id} className="store-results-tb__h">
                <td className="th-index">{store.store_id}</td>
                <td className="th-store-name">{store.store_name}</td>
                <td className="th-address">{store.street_address}</td>
                <td className="th-services">
                  {store.store_services
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
