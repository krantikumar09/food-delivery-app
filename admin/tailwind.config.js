/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/Navbar/Navbar.jsx",
    "./src/components/Sidebar/Sidebar.jsx",
    "./src/pages/Add/Add.jsx",
    "./src/pages/List/List.jsx",
    "./src/pages/Orders/Orders.jsx",
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
    },
  },
  plugins: [daisyui],
};
