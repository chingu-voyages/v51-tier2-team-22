import { Outlet } from "react-router-dom";


// components
import Sidebar from "./Sidebar";
// import Header from "./Header";

function Layout() {
  return (
    <section className="flex bg-blizzard-blue dark:bg-dark-bg overflow-auto">
      <Sidebar />

      <div className="w-full ml-16 mr-8 md:ml-56">
        <Outlet />
      </div>
    </section>
  );
}

export default Layout;
