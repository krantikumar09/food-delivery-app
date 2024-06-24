import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu mt-24" id="explore-menu">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-heading-color capitalize">
        Explore our menu
      </h1>
      <p className="text-sm sm:text-base leading-normal text-section-para max-w-full md:max-w-[60%]">
        Choose from a diverse menu featurin ga delecatble array of dishes
        creafed with finest ingredients and culinary experties. Our mission is
        to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>

      <div className="explore-menu-list flex justify-between items-center gap-10 md:gap-12 text-center my-8 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p className="text-sm sm:text-base mt-3 text-section-para cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>

      <hr className="my-3 h-.5 bg-[#e2e2e2] rounded-none" />
    </div>
  );
};

export default ExploreMenu;
