import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import Listings from "./pages/Listings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/listings" element={<Listings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
