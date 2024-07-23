import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#161211] font-sans">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
              Subscribe our newsletter to get an update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none  border-2 border-gold rounded-lg hover:bg-gold hover:text-black focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <NavLink
                exact="true"
                to="/"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gold"
              >
                Home
              </NavLink>
              <NavLink
                exact="true"
                to="/about"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gold"
              >
                About
              </NavLink>
              <NavLink
                exact="true"
                to="/contact"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gold"
              >
                Contact
              </NavLink>
              <NavLink
                exact="true"
                to="/forecaster"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gold"
              >
                Forecaster
              </NavLink>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Importants</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <NavLink
                exact="true"
                to="/login"
                className="text-gray-300 transition-colors duration-300  hover:cursor-pointer hover:text-gold"
              >
                <span className="font-bold">Client Login</span>
              </NavLink>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600 md:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
          </div>
        </div>
        <p className="font-sans p-8 text-start text-gray-300 md:text-center md:text-lg md:p-4">
          © 2023 Investment Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
