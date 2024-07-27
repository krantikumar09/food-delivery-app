/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Header/Header.jsx",
    "./src/pages/Cart/Cart.jsx",
    "./src/pages/PlaceOrder/PlaceOrder.jsx",
    "./src/pages/Home/Home.jsx",
    "./src/components/ExploreMenu/ExploreMenu.jsx",
    "./src/components/FoodDisplay/FoodDisplay.jsx",
    "./src/components/FoodItem/FoodItem.jsx",
    "./src/components/Footer/Footer.jsx",
    "./src/components/LoginPopup/LoginPopup.jsx",
    "./src/components/AppDownload/AppDownload.jsx",
    "./src/pages/PlaceOrder/PlaceOrder.jsx",
    "./src/pages/Verify/Verify.jsx",
    "./src/pages/MyOrders/MyOrders.jsx",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "tomato",
        "light-blue": "#49557e",
        "pri-color": "#272d2f",
        "section-para": "#808080",
        "para-color": "#676767",
      },
      screens: {
        xs: "465px",
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1920px",
      },
      backgroundImage: {
        "header-bg": "url('./public/header_img.png')",
      },
      boxShadow: {
        "food-item": "0px 0px 10px #00000015",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
