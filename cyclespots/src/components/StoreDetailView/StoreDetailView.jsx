import { useEffect, useState } from "react";
import { getStoreBySlug } from "../../api/storeService.js";

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
    <div>
      <h1>{store.store_name}</h1>
      <p>{store.street_address}</p>
      <p>{store.rating}</p>
    </div>
  );
}
