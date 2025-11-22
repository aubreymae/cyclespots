import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div id="main-grid">
      <Header />
      <Outlet />
    </div>
  );
}
