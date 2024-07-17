import  { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 container mx-auto py-3 md:py-5">
      {/* navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* mobile menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5"
          >
            <a href="/">Home</a>
            <a href="#explore-menu">Explore Menu</a>
            <a href="#mobile-app">Mobile App</a>
            <a href="#contact-us">Contact Us</a>
          </ul>
        </div>
        {/* logo */}
        <Link
          to="/"
          className="text-base xs:text-xl sm:text-2xl md:text-3xl font-bold text-tomato"
        >
          The Kitchn
        </Link>
      </div>

      {/* navbar center */}
      <div className="navbar-center hidden md:flex z-50">
        <ul className="menu menu-horizontal px-1 gap-8">
          <a href="/">home</a>
          <a href="#explore-menu">menu</a>
          <a href="#app-download">mobile-app</a>
          <a href="#footer">contact us</a>
        </ul>
      </div>

      {/* navbar end */}
      <div className="navbar-end">
        <div className="navbar-right flex items-center gap-3 xs:gap-4 sm:gap-6 md:gap-10">
          <img src={assets.search_icon} alt="search" className="w-[22px]" />
          <div className="navbar-search-icon relative">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="cart" className="w-[22px]" />
            </Link>
            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-h-[10px] min-w-[10px] bg-tomato rounded-full -top-[8px] -right-[8px] text-white text-[12px] p-[2px]"
              }
            ></div>
          </div>

          {!token ? (
            <button className="pri-btn" onClick={() => setShowLogin(true)}>
              sign in
            </button>
          ) : (
            <div>
              {/* dropdown avatar */}
              <div className="dropdown dropdown-hover dropdown-end">
                <div className="avatar" tabIndex={0}>
                  <div className="w-10 rounded-full ring ring-primary ring-tomato ring-offset-2">
                    <img src={assets.avatar} alt="avatar" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-50 menu p-2 shadow bg-white rounded-box w-52"
                >
                  <li>
                    <a>
                      <img
                        className="w-4 h-4"
                        src={assets.shopping_bag}
                        alt="shopping pag"
                      />
                      <p className="text-sm">Orders</p>
                    </a>
                  </li>
                  <li>
                    <a onClick={logout}>
                      <img
                        className="w-4 h-4"
                        src={assets.exit}
                        alt="shopping pag"
                      />
                      <p className="text-sm">Log Out</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
