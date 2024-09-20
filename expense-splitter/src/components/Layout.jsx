import { Outlet } from "react-router-dom";

// components
import Sidebar from "./Sidebar";
// import Header from "./Header";

function Layout() {
  return (
    <div className="flex  bg-blizzard-blue">

      <Sidebar />
      {/* <Members /> */}
      <div className="w-full ml-16 md:ml-56">
        {/* <Header /> */}

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
