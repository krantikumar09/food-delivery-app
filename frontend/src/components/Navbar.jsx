import { useContext } from "react";
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
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden relative">
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
            <Link to="/">Home</Link>
            <Link to="#explore-menu">Explore Menu</Link>
            <Link to="#mobile-app">Mobile App</Link>
            <Link to="#contact-us">Contact Us</Link>
          </ul>
        </div>
        {/* logo */}
        <Link
          to="/"
        className="logo text-md xs:text-xl sm:text-2xl md:text-3xl font-bold text-tomato"
        >
          The Kitchn<span className="text-black">.</span>
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
            <button className="text-black rounded-md capitalize border border-tomato text-medium px-2.5 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2 text-sm xs:text-base hover:bg-tomato hover:text-white transition-all" onClick={() => setShowLogin(true)}>
              sign in
            </button>
          ) : (
            <div>
              {/* dropdown avatar */}
              <div className="dropdown dropdown-hover dropdown-end">
                <div className="avatar" tabIndex={0}>
                  <div className="w-10 rounded-full ring ring-tomato ring-offset-2">
                    <img src={assets.avatar} alt="avatar" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-50 menu p-2 shadow bg-white rounded-box w-52"
                >
                  <li>
                    <Link to="/myorders">
                      <img
                        className="w-4 h-4"
                        src={assets.shopping_bag}
                        alt="shopping pag"
                      />
                      <p className="text-sm">Orders</p>
                    </Link>
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
