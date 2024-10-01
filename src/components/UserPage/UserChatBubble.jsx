import { FaRegUser } from "react-icons/fa";

import React from "react";

const UserChatBubble = ({query}) => {
  return (
    <div className="flex justify-between items-start">
      <div className="min-h-12 h-auto w-[85%] mt-2 bg-[#58c163] rounded-l-2xl rounded-br-2xl px-4 py-2 text-lg text-white">
        {query}
      </div>
      <div className="h-12 w-12 border-2 rounded-full bg-white flex justify-center items-center">
        <FaRegUser className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  );
};

export default UserChatBubble;
