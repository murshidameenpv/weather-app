import { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const previousSearches = ["New York", "London", "Tokyo"];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="text-xl">Weather.IO</a>
      </div>
      <div className="form-control sm:block hidden">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-40 h-8 md:w-auto "
        />
      </div>
      <div className="navbar-end">
        <button
          className="sm:hidden btn rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaSearch />
        </button>
        <button className="btn rounded-full hover:bg-gray-600">
          <FaLocationCrosshairs />
        </button>
        {isOpen && (
          <div className="drawer drawer-end">
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
            />
            <div className="drawer-content"></div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="p-4 w-full min-h-full bg-base-200 text-base-content">
                <div className="flex justify-start gap-4 items-center">
                  <button onClick={() => setIsOpen(false)}>
                    <FaArrowLeft />
                  </button>
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <hr className="my-4" />
                <div className="text-center">
                  {previousSearches.map((search, index) => (
                    <p key={index}>{search}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
