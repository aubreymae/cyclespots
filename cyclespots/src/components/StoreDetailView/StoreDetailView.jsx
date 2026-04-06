import { useEffect, useState } from "react";
import { getStoreBySlug } from "../../api/storeService.js";
import "./StoreDetailView.css";

export default function StoreDetail({ slug }) {
  const [store, setSingleStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadStore() {
      try {
        const result = await getStoreBySlug(slug);
        setSingleStore(result);
      } catch (error) {
        console.error("Error fetching store details:", error);
      }
    }

    if (slug) loadStore();
  }, [slug]);

  if (error) return <div>Error: {error}</div>;
  if (!store) return <div>Store not found</div>;

  return (
    <>
      <section className="store-container main-section framed-box">
        <div className="store-title-container">
          <h1>{store.store_name}</h1>
          <span className="store-rating-bubble">{store.rating}</span>
        </div>
        <p>{store.street_address}</p>
      </section>
    </>
  );
}
