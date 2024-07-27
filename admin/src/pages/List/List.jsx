import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { data } from "autoprefixer";

const List = ({ url }) => {


  const [list, setList] = useState();

  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`);

    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const res = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();

    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h2>All Foods List</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list ? (
                list.map((item, index) => (
                  <tr key={index}>
                    <th>
                      <img
                        src={`${url}/images/` + item.image}
                        alt=""
                        className="w-20 h-20"
                      />
                    </th>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>
                      <img
                        onClick={() => removeFood(item._id)}
                        src={assets.close_icon}
                        alt="close icon"
                        className="w-5 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <p>No data available</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
