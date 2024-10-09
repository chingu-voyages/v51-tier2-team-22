import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // Call the parent handler to filter groups
  };

  return (
    <div className=" relative w-full max-w-xs">
      <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search groups"
        className="pl-10 pr-4 py-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-primary
        dark:bg-black dark:placeholder:text-dark-text"
      />
    </div>
  );
}

export default SearchBar;
