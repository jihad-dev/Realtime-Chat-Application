import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MessageContainer from "../MessageContainer/MessageContainer";

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default HomePage;
