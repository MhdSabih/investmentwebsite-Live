import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const getUserStatus = localStorage.getItem("userStatus");
    setIsLoggedIn(accessToken ? true : false);
    setUserStatus(getUserStatus === "ACTIVE" ? true : false);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userStatus");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-[#161211] border-gray-200 dark:bg-[#161211] font-montserrat">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-6 lg:p-8">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap text-white">
            ZarFi
          </span>
        </NavLink>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#161211] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#161211] dark:bg-[#161211] md:dark:bg-[#161211] dark:border-gray-700">
            <li>
              <NavLink
                exact="true"
                to="/"
                className="block py-2 px-3 text-white rounded hover:text-gold md:p-0 dark:text-white md:dark:text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-300 rounded  hover:text-gold md:p-0 dark:text-white md:dark:text-blue-500"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-gray-300 rounded hover:text-gold md:p-0 dark:text-white md:dark:text-blue-500"
              >
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-3 text-gray-300 rounded hover:text-gold md:p-0 dark:text-white md:dark:text-blue-500"
                  >
                    Logout
                  </button>
                </li>
                {userStatus && (
                  <li>
                    <NavLink
                      to="/forecaster"
                      className="block py-2 px-3 text-gray-300 rounded hover:text-gold md:p-0 dark:text-white md:dark:text-blue-500"
                    >
                      Forecaster
                    </NavLink>
                  </li>
                )}
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="block py-2 px-3 text-gray-300 rounded hover:text-gold md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Client Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
