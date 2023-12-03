import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      {/* Layout Ke children routes will be shown here */}
      <div className="container mt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
