import { useEffect, useState } from "react";
import { getStoreBySlug } from "../../api/storeService.js";
import "./StoreDetailView.css";

export default function StoreDetail({ slug }) {
  const [store, setSingleStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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
          <div className="store-title-wrapper">
            <h1>{store.store_name}</h1>
            <span className="store-rating-bubble">{store.rating}</span>
          </div>
          <div className="store-services-wrapper">
            <span className="services-list-title">Services offered:</span>
            {store.store_services?.map((s) => (
              <span className="services-list-item" key={s.id}>
                {s.services.service_name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="store-container main-section framed-box">
        <h2>Street Address</h2>
        <p>{store.street_address}</p>
      </section>
      <section className="two-col-grid">
        <div className="grid-col grid-col-1">
          <section className="store-container main-section framed-box">
            <h2>Phone</h2>
            <p>{store.phone}</p>
          </section>
          <section className="store-container main-section framed-box">
            <h2>Store Hours</h2>
            {store.store_hours?.length ? (
              store.store_hours.map((h) => {
                const day = dayOfWeek[h.day_of_week] ?? `Day ${h.day_of_week}`;
                const hours =
                  h.open_time && h.close_time
                    ? `${h.open_time} - ${h.close_time}`
                    : "Closed";

                return (
                  <div
                    key={h.store_hours_id ?? h.day_of_week}
                    className="store-hours-item-container"
                  >
                    <p>{day}</p>
                    <p>{hours}</p>
                  </div>
                );
              })
            ) : (
              <p>Hours not available</p>
            )}
          </section>
        </div>
        <div className="grid-col grid-col-2">
          <section className="store-container main-section framed-box">
            <h2>Website</h2>
            <a href={store.website} target="_blank" rel="noopener noreferrer">
              {store.website}
            </a>
          </section>
          <section className="store-container main-section framed-box">
            <h2>Maps</h2>
            <iframe
              src={store.google_maps_url}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="google-maps-container"
            ></iframe>
          </section>
        </div>
      </section>
    </>
  );
}
