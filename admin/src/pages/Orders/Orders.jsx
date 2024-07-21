import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Something went wrong!");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
        orderId, 
        status: event.target.value
    });

    if (response.data.success) {
        await fetchAllOrders()
    }

  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="all-orders">
      <h3 className="text-xl font-bold text-black mb-5">All Orders</h3>

      <div className="all-order-wrapper">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center font-bold text-black"></th>
                <th className="text-center font-bold text-black">Items</th>
                <th className="text-center font-bold text-black">Name</th>
                <th className="text-center font-bold text-black">Address</th>
                <th className="text-center font-bold text-black">Phone</th>
                <th className="text-center font-bold text-black">Total items</th>
                <th className="text-center font-bold text-black">Total amount</th>
                <th className="text-center font-bold text-black">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>
                    <img src={assets.parcel_icon} alt="parcel icon" />
                  </td>

                  {/* items */}
                  <td>
                    <p className="text-sm text-section-para">
                      {order.items.map((item, index) => {
                        if (index == order.items.length - 0) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })}
                    </p>
                  </td>

                  {/* name */}
                  <td>
                    <p className="text-sm text-section-para">
                      {order.address.firstName + " " + order.address.lastName}
                    </p>
                  </td>

                  <td>
                    <p className="text-sm text-section-para">
                      {order.address.street +
                        ", " +
                        order.address.city +
                        ", " +
                        order.address.state +
                        ", " +
                        order.address.country +
                        " - " +
                        order.address.zipcode}
                    </p>
                  </td>

                  <td>
                    <p className="text-sm text-section-para">{order.address.phone}</p>
                  </td>

                  <td className="text-center">
                    <p className="text-sm text-section-para">{order.items.length}</p>
                  </td>

                  <td className="text-center">
                    <p className="text-sm text-section-para">&#8377; {order.amount}</p>
                  </td>

                  <td>
                    <select onChange={(event) => statusHandler(event, order._id)} value={order.status} name="" id="" className="border border-tomato px-3 py-2 rounded outline-none">
                      <option value="Food Processing">Food Processing</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
