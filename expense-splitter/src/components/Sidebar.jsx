// import { LuBox, LuMessageSquare } from "react-icons/lu";
// import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);

  function handleClick(index) {
    setActiveLink(index);
  }

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard" },
    { id: 2, path: "/members", name: "Members" },
    { id: 3, path: "/product", name: "Product" },
  ];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px4 bg-white">
      <div className="mb-8">
        <img src="/vite.svg" alt="logo" className="w-28 hidden md:flex" />
        <img src="/vite.svg" alt="logo" className="w-8 flex md:hidden" />
      </div>

      {/* Navigation */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
            >
              {/* <span>{link.icon()}</span> */}
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

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
