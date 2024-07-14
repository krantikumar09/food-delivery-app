import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[18%] p-4 min-h-screen border-e-[1px] border-black border-solid hidden sm:block">
      <div className="mt-5">
        <NavLink
          to="/add"
          className="flex items-center gap-2 mb-5 cursor-pointer sidebar-option transition-all"
        >
          <img src={assets.add_icon} alt="add icon" className="w-5 h-5" />
          <p className="text-sm">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className="flex items-center gap-2 mb-5 cursor-pointer sidebar-option transition-all"
        >
          <img src={assets.list_icon} alt="add icon" className="w-5 h-5" />
          <p className="text-sm">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-2 mb-5 cursor-pointer sidebar-option transition-all"
        >
          <img src={assets.order_icon} alt="add icon" className="w-5 h-5 " />
          <p className="text-sm">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
