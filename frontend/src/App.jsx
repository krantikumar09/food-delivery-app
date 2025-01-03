import Header from "./components/Header";
import Hero from "./components/Hero";
import "./output.css";
import "swiper/css";
import "swiper/css/navigation";

export const rupeeSign = '&#8377';

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
      </div>
      <Hero />
    </>
  );
}

export default App;
