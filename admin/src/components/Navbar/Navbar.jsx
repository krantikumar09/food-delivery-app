import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <header className="py-4 px-5">
      <nav>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base xs:text-xl sm:text-2xl md:text-3xl font-bold text-tomato">
              The Kitchn
            </h2>
            <p className="text-xs text-para-color">Admin</p>
          </div>
          <img
            src={assets.profile}
            alt="profile"
            className="w-14 h-14 rounded-full cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
