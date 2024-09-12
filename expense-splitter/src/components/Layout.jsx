import { Outlet } from "react-router-dom";

// components
import Sidebar from "./Sidebar";
// import Header from "./Header";

// unstyled components
// import GroupSmallExpenseCard from "./GroupSmallExpenseCard";

// regarding unstyled components: they are left commented out on purpose. to work on them, comment out all the other components in down below (like sidebar and header), then uncomment the components you want to style. its like a temporary testing. later they will be put into their place

function Layout() {
  return (
    <div className="flex">
      {/* <GroupSmallExpenseCard /> */}
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
