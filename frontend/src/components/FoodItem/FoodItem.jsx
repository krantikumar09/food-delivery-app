import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, } =
    useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-[15px] shadow-food-item animate-fadeIn delay-100">
      <div className="relative">
        {/* img */}
        <div className="relative">
          <img
            className="w-full rounded-t-lg"
            src={image}
            alt="food image"
            loading="lazy"
          />
          {!cartItems[id] ? (
            <img
              onClick={() => addToCart(id)}
              className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="absolute bottom-[15px] right-[15px] flex items-center gap-2 p-2 rounded-[50px] bg-white">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                className="w-[24px]"
              />
              <p className="font-medium text-sm">{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
                className="w-[24px]"
              />
            </div>
          )}
        </div>

        <div className="p-5">
          {/* rating */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-medium text-pri-color">{name}</p>
            <img src={assets.rating_starts} alt="stars" className="w-[70px]" />
          </div>
          <p className="text-sm text-para-color mb-2">{description}</p>
          <p className="text-tomato text-xl font-medium">&#8377; {price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
