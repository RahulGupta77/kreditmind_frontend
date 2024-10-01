import React from "react";
import { FiSend } from "react-icons/fi";
import SupportChatBubble from "./SupportChatBubble";
import UserChatBubble from "./UserChatBubble";

const ChatBox = () => {
  return (
    <div className="px-6 h-full">
      <div className="text-2xl font-semibold py-4  ">
        <p>Chat with us</p>
      </div>
      <div className="relative flex justify-center items-center h-8">
        <div className=" bg-gray-200 h-[1px] w-full"></div>
        <div className="bg-white  w-[40%] mx-auto flex justify-center absolute text-lg text-gray-600">
          <span>Today</span>
        </div>
      </div>
      <div className=" h-[37rem] overflow-y-scroll mt-3">
        <UserChatBubble query="Where is my bank statement" />
        <SupportChatBubble response={"Hello this is chat support"} />
        <UserChatBubble query="Where is my bank statement" />
        <SupportChatBubble response={"Hello this is chat support"} />
        <UserChatBubble query="Where is my bank statement" />
        <SupportChatBubble response={"Hello this is chat support"} />
        <UserChatBubble query="Where is my bank statement" />
        <SupportChatBubble response={"Hello this is chat support"} />
        <UserChatBubble query="Where is my bank statement" />
        <SupportChatBubble response={"Hello this is chat support"} />
        <UserChatBubble query="Where is my bank statement" />
        <SupportChatBubble response={"Hello this is chat support"} />
      </div>
      <div className="border-2 rounded-lg w-96 mt-3 border-gray-300 h-14 overflow-hidden flex justify-center items-center ">
        <input
          type="text"
          className="w-10/12 h-full px-1 focus:outline-none bg-slate-50 text-gray-800"
          placeholder="Write a message"
        />
        <div className="border-2 p-[10px] cursor-pointer hover:bg-green-700 bg-[#58c163] rounded-full">
          <FiSend className="text-white " />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
