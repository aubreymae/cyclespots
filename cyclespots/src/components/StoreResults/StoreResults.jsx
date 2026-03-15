import "./StoreResults.css";

function Results() {
  return (
    <>
      <section id="store-results-section" className="main-section framed-box">
        <table id="store-results-tb">
          <tr className="store-results-tb__h">
            <th>Index</th>
            <th>Store Name</th>
            <th>Address</th>
            <th>Services</th>
            <th>Rating</th>
          </tr>
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
