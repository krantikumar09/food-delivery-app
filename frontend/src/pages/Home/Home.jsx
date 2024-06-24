import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="home">
      <div className="container mx-auto px-3">
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
    </div>
  );
};

export default Home;
