import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "India",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 49,
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      }
    } catch (error) {
      console.log(error);
      alert("Sowething went wrong.");
    }
  };

  return (
    <div className="order my-10">
      <div className="container mx-auto px-3">
        <form
          onSubmit={placeOrder}
          className="flex flex-col sm:flex-row items-start justify-between gap-[50px]"
        >
          <div className="left w-full">
            <h2 className="text-2xl md:text-3xl font-bold">
              Delivery Infomartion
            </h2>

            <div className="flex flex-col gap-5 mt-6">
              <div className="flex items-center gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={onChangeHandler}
                  value={data.firstName}
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={onChangeHandler}
                  value={data.lastName}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                className="input input-bordered w-full"
                required
              />

              <input
                type="text"
                placeholder="Street"
                name="street"
                onChange={onChangeHandler}
                value={data.street}
                className="input input-bordered w-full"
                required
              />

              <div className="flex items-center gap-5">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={onChangeHandler}
                  value={data.city}
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={onChangeHandler}
                  value={data.state}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="flex items-center gap-5">
                <input
                  type="text"
                  placeholder="Zip code"
                  name="zipcode"
                  onChange={onChangeHandler}
                  value={data.zipcode}
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  defaultValue="India"
                  name="country"
                  onChange={onChangeHandler}
                  value={data.country}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Phone number"
                name="phone"
                onChange={onChangeHandler}
                value={data.phone}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="right w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Cart Totals</h2>

            <div className="cart-total-details flex items-center justify-between mb-2">
              <p className="text-sm sm:text-base">Subtotal</p>
              <p>&#8377; {getTotalCartAmount()}</p>
            </div>

            <div className="cart-total-details flex items-center justify-between mb-2">
              <p className="text-sm sm:text-base">Delivery Fee</p>
              <p>&#8377; {getTotalCartAmount() === 0 ? 0 : 49}</p>
            </div>

            <hr className="my-1" />

            <div className="cart-total-details flex items-center justify-between mb-2">
              <b className="text-sm sm:text-base">Total</b>
              <b>
                &#8377;{" "}
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 49}
              </b>
            </div>

            <button
              type="submit"
              className="btn btn-wide bg-tomato text-white hover:bg-tomato mt-3"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
