import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="cart mt-5 mb-10">
      <div className="container mx-auto px-2">
        <div className="overflow-x-auto">
          <table className="table text-c">
            <thead>
              <th className="text-base font-medium">Items</th>
              <th className="text-base font-medium">Title</th>
              <th className="text-base font-medium">Price</th>
              <th className="text-base font-medium">Quantity</th>
              <th className="text-base font-medium">Total</th>
              <th className="text-base font-medium">Remove</th>
            </thead>

            <tbody>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <>
                      <tr>
                        <th>
                          <img className="w-20" src={item.image} alt="" />
                        </th>
                        <th>{item.name}</th>
                        <th>${item.price}</th>
                        <th>{cartItems[item._id]}</th>
                        <th>{item.price * cartItems[item._id]}</th>
                        <th>
                          <svg
                            className="cursor-pointer"
                            onClick={() => removeFromCart(item._id)}
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                          >
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                          </svg>
                        </th>
                      </tr>
                    </>
                  );
                }
              })}
            </tbody>
          </table>
        </div>

        <div className="cart-bottom mt-8">
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-center gap-10">
            <div className="cart-total flex-1">
              <h2 className="text-2xl font-bold mb-3">Cart Totals</h2>

              <div className="cart-total-details flex items-center justify-between mb-2">
                <p className="text-sm sm:text-base">Subtotal</p>
                <p>$ {getTotalCartAmount()}</p>
              </div>

              <div className="cart-total-details flex items-center justify-between mb-2">
                <p className="text-sm sm:text-base">Delivery Fee</p>
                <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>

              <hr className="my-1" />

              <div className="cart-total-details flex items-center justify-between mb-2">
                <b className="text-sm sm:text-base">Total</b>
                <b>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>

              <button
                onClick={() => navigate("/order")}
                className="btn btn-wide bg-tomato text-white hover:bg-tomato mt-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            {/* promocode div */}
            <div className="cart-promocode">
              <div>
                <p className="text-sm sm:text-base mb-2">
                  If you have a promo code, Enter it here
                </p>
                <div className="flex items-center gap-4 flex-col sm:flex-row">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <button className="btn border-none bg-black text-white hover:bg-black w-full sm:w-auto">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
