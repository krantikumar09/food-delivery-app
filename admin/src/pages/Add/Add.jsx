import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
// import "url-polyfill";
import { toast } from "react-toastify";

const Add = () => {
  
  const url = "http://localhost:4000"

  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData)

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "",
      });
      setImage(false);
      toast.success(response.data.message);
    }else {
      console.log("Error in sending add data");
      toast.error(response.data.message);
    }
  }

  return (
    <div className="">
      <h2 className="font-bold text-black text-3xl mb-8 text-center">
        Add Item
      </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-5">
          <p className="text-sm mb-1 text-black">Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.image_upload}
              alt=""
              className="w-[200px] h-auto mb-2"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className="file-input file-input-bordered w-full max-w-md text-sm text-black"
            required
          />
        </div>

        <div className="mb-5">
          <p className="text-sm mb-1 text-black">Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full max-w-md text-sm text-black font-medium"
          />
        </div>

        <div className="mb-5">
          <p className="text-sm mb-1 text-black">Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="Type here"
            rows={5}
            className="textarea textarea-bordered textarea-sm max-w-[448px] w-full text-sm text-black font-medium"
          />
        </div>

        <div>
          <div className="mb-5">
            <p className="text-sm mb-1 text-black">Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="text"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md text-sm text-black font-medium"
            />
          </div>

          <div className="mb-5">
            <p className="text-sm mb-1 text-black">Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="select select-bordered w-full max-w-md text-sm text-black font-medium"
            >
              <option disabled selected>
                Category
              </option>
              <option>Salad</option>
              <option>Rools</option>
              <option>Deserts</option>
              <option>Sandwich</option>
              <option>Cake</option>
              <option>Pure Veg</option>
              <option>Pasta</option>
              <option>Noodles</option>
            </select>
          </div>
        </div>

        <button className="btn btn-wide bg-tomato text-white hover:bg-tomato">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
