import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const { pathname } = useLocation();
  return (
    <div>
      <div className={`${pathname == "/" || "h-16 bg-slate-300"}`}>
        <Navbar pathname={pathname} />
      </div>
      <div className="min-h-[calc(100vh-452px)] py-4 px-4">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
