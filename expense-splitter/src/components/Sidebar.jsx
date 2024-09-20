import { MdGroups } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Home", icon: MdGroups },
    { id: 2, path: "/groups", name: "Groups", icon: IoMdPerson },
    { id: 3, path: "/friends", name: "Friends", icon: IoWalletSharp },
  ];

  (isActive) => "nav-link" + (!isActive ? " unselected" : "");

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px4 bg-white ">
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
              `flex items-center px-4 py-5 space-x-5 text-xl font-extrabold ${
                isActive ? "text-primary bg-blizzard-blue " : "text-gray-500"
              }`
            }
          >
            <span>{link.icon()}</span>
            <span className="text-md text-gray-500 font-medium hidden md:flex">
              {link.name}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p
          className="w-full flex items-center justify-center space-x-2 text-sm text-white py-2 px-4
        bg-primary rounded-xl hover:bg-secondary hover:text-blizzard-blue transition duration-300 ease-in-out"
        >
          <span>?</span>
          <span className="hidden md:flex">Need help</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
