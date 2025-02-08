import React from "react";
import userData  from "../../data/data.js";
import UserCard from "../../common/userCard/UserCard.jsx";
import Header from "../../common/header/Header.jsx";

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-10">
        {userData.map((user, index) => (
          <UserCard key={index} userData={user} />
        ))}
    </div>
    </div>
  );
};

export default Home;
