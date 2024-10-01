import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
const SupportChatBubble = ({ response }) => {
  return (
    <div className="flex justify-between items-start my-7">
      <div className="h-12 w-12 border-2 rounded-full bg-white flex justify-center items-center">
        <FiMessageSquare className="h-6 w-6 text-gray-400" />
      </div>
      <div className="min-h-12 h-auto w-[85%] mt-2 bg-gray-200 rounded-r-2xl rounded-bl-2xl px-4 py-2 text-lg text-gray-800">
        {response}
      </div>
    </div>
  );
};

export default SupportChatBubble