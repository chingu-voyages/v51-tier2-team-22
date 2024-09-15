// import { GoBell } from "react-icons/go";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-stone-200">
      <div>
        <h1 className="text-xs">Welcome</h1>
        <p className="text-xl font-semibold">Alexia</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600" type="text" placeholder="Search" />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600">
            {/* <GoBell size={28} /> */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-5 rounded-full border-1 border-white">9</span>
          </button>
          <img className="w-8 g-8 rounded-full border-2 border-indigo-400" src='https://www.shutterstock.com/image-photo/woman-ok-hand-sign-260nw-459717091.jpg' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
