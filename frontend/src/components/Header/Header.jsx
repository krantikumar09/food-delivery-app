import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2 className="text-white font-bold text-2xl leading-normal capitalize sm:text-4xl md:text-6xl md:leading-relaxed">Order your favourite food here</h2>
        <p className="text-[10px] sm:text-base md:text-md md:leading-normal text-white leading-tight">
          Choose from a diverse menu featurin ga delecatble array of dishes
          creafed with finest ingredients and culinary experties. Our mission is
          to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button className="text-tomato btn btn-xs sm:btn-sm md:btn-md">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
