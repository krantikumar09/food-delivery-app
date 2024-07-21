import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders mt-10 mb-20">
      <div className="container mx-auto">
        <h2 className="text-2xl text-black font-bold mb-5">My Orders</h2>

        <div className="order-wrapper">
          {data.map((order, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-6 w-full items-center justify-start gap-6 border-[1px] border-gray-500 p-2 mb-5"
              >
                <img src={assets.parcel_icon} className="w-12" alt="icon" />
                <p className="text-sm font-medium text-black">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 0) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p className="text-sm font-medium text-black">&#8377; {order.amount}</p>
                <p className="text-sm font-medium text-black">Items: {order.items.length}</p>
                <p className="text-sm font-medium text-black">
                  <span>&#x25cf;</span> <b>{order.status}</b>
                </p>
                <button onClick={fetchOrders} className="btn btn-info text-white bg-tomato border-none hover:bg-tomato text-sm font-medium">Track Order</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
