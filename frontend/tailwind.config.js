/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
    "./src/pages/Cart/Cart.jsx",
    "./src/pages/PlaceOrder/PlaceOrder.jsx",
    "./src/pages/Home/Home.jsx",
    "./src/components/ExploreMenu/ExploreMenu.jsx",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "tomato",
        "light-blue": "#49557e",
        "heading-color": "#262626",
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
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
