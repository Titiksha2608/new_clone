import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Home = ({ sideBar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar
        sideBar={sideBar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sideBar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
