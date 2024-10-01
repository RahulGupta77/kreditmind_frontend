import React from "react";
import ChatBox from "./ChatBox/ChatBox";

const UserPage = () => {
  return (
    <div className="h-screen flex pt-20">
      <div className="w-[70%] border-t-2 border-r-2">user details</div>
      <div className="w-[30%] border-t-2">
        <ChatBox />
      </div>
    </div>
  );
};

export default UserPage;
