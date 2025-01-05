import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./output.css";
import "swiper/css";
import "swiper/css/navigation";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";

export const rupeeSign = "&#8377";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
