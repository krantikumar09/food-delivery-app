import React, { useState } from "react";
import Hero from "../components/Hero";
import ExploreMenu from "../components/ExploreMenu";

const Home = () => {

  const [category, setCategory] = useState("All");
  
  return (
    <>
      <Hero/>
      <div className="container">
        <ExploreMenu category={category} setCategory={setCategory}/>
      </div>
    </>
  );
};

export default Home;
