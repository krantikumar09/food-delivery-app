import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./output.css";
import "swiper/css";
import "swiper/css/navigation";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoginPopup from "./components/LoginPopup";

export const rupeeSign = "&#8377";

function App() {

  const [ isLoginPopOpen, setIsLoginPopOpen] = useState(false);
  useEffect(() => {
    console.log(isLoginPopOpen)
  }, [])

  return (
    <>
      { isLoginPopOpen ? <LoginPopup isOpen={isLoginPopOpen}
        onClose={() => setIsLoginPopOpen(false)}/> : <></> }
      <Header setIsLoginPopOpen={setIsLoginPopOpen} />
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
