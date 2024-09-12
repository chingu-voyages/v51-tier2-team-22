import { MdGroups } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: MdGroups },
    { id: 2, path: "/groups", name: "Groups", icon: IoMdPerson },
    { id: 3, path: "/product", name: "Product", icon: IoWalletSharp },
  ];

  (isActive) => "nav-link" + (!isActive ? " unselected" : "");

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px4 bg-white">
      <div className="mb-8 flex justify-center">
        <img
          src="./src/assets/logo.png"
          alt="logo"
          className="hidden md:flex"
        />
        <img
          src="./src/assets/logo.png"
          alt="logo"
          className="mr-1 flex md:hidden"
        />
      </div>

      {/* Navigation */}
      <nav className="">
        {SIDEBAR_LINKS.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex justify-center md:justify-start items-center px-5 md:space-x-5 py-5 ${
                isActive ? "bg-red-100" : "bg-blue-50"
              }`
            }
          >
            <span>{link.icon()}</span>
            <span className="text-sm text-gray-500 hidden md:flex">
              {link.name}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          <span>?</span>
          <span className="hidden md:flex">Need help</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
