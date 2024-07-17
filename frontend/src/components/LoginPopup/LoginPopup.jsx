import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login-popup absolute z-10 w-full h-full bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="place-self-center max-w-[360px] w-full text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 text-base animation-fadeIn rounded-md"
      >
        <div className="flex items-center justify-between text-black">
          <h2 className="text-xl font-medium">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            className="w-[16px] cursor-pointer"
            src={assets.cross_icon}
            alt="close icon"
          />
        </div>

        <div className="flex flex-col gap-4">
          {currentState === "Login" ? (
            <></>
          ) : (
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow text-black font-[500]"
                placeholder="Name"
                name="name"
                onChange={onChangeHandler}
                value={data.name}
              />
            </label>
          )}

          {/* email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow text-black font-[500]"
              placeholder="Email"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
            />
          </label>

          {/* password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow text-black font-[500]"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
              value={data.password}
            />
          </label>
        </div>

        {/* button */}
        <button
          type="submit"
          className="btn btn-wide bg-tomato text-white w-full text-sm hover:bg-tomato border-none"
        >
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* checkbox */}
        <div>
          <label className="label cursor-pointer flex items-start">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox w-4 h-4 rounded-none"
            />
            <p className="text-sm ms-2 text-para-color">
              By continuing, i agree to the terms of use & privacy policy.
            </p>
          </label>
        </div>

        {/*  */}
        {currentState === "Login" ? (
          <p className="text-sm text-para-color text-center">
            Create a new account?{" "}
            <span
              className="text-tomato font-medium hover:underline cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm text-para-color text-center">
            Already have an account?{" "}
            <span
              className="text-tomato font-medium hover:underline cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
