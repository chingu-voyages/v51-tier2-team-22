import { Outlet } from "react-router-dom";


// components
import Sidebar from "./Sidebar";
// import Header from "./Header";

function Layout() {
  return (
    <section className="flex bg-blizzard-blue dark:bg-dark-bg">
      <Sidebar />
      
      <div className="w-full ml-16 md:ml-56">
        <Outlet />
      </div>
    </section>
  );
}

export default Layout;
