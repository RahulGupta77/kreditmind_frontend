import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { BACKEND_API } from "../../../constants";
import SupportChatBubble from "./SupportChatBubble";
import TypingIndicator from "./TypingIndicator";
import UserChatBubble from "./UserChatBubble";

const ChatBox = () => {
  const [pastConversations, setPastConversations] = useState([]);
  const [currentConversations, setCurrentConversations] = useState([]);
  const [dummyCurrentConversations, setDummyCurrentConversations] = useState(
    []
  );
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const fetchAllConversations = async () => {
      try {
        const getAPI = BACKEND_API + "/conversations";
        const response = await fetch(getAPI, { credentials: "include" });
        const data = await response.json();
        setPastConversations(data);
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchAllConversations();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentConversations, dummyCurrentConversations]);

  const getUserResponseQuery = async (user_query) => {
    try {
      const putAPI = BACKEND_API + "/conversations";
      const response = await fetch(putAPI, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_query: user_query }),
        credentials: "include",
      });
      const data = await response.json();
      setDummyCurrentConversations([]);
      setCurrentConversations((prev) => [
        ...prev,
        { user_query: user_query, sender_response: data.sender_response },
      ]);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const user_query = e.target.elements["user_query"].value;
    if (!user_query.trim()) return;
    setDummyCurrentConversations((prev) => [
      ...prev,
      { user_query: user_query, sender_response: null },
    ]);
    e.target.elements["user_query"].value = "";
    getUserResponseQuery(user_query);
  };

  return (
    <div className="px-6 h-full">
      <div className="text-2xl font-semibold py-4">
        <p>Chat with us</p>
      </div>
      <div className="relative flex justify-center items-center h-8">
        <div className="bg-gray-200 h-[1px] w-full"></div>
        <div className="bg-white w-[40%] mx-auto flex justify-center absolute text-lg text-gray-600">
          <span>Today</span>
        </div>
      </div>
      <div
        className="h-[37rem] overflow-y-scroll mt-3 scroll-smooth"
        ref={chatContainerRef}
      >
        {Boolean(pastConversations.length)
          ? pastConversations.map((conversation) => (
              <div key={conversation._id}>
                <UserChatBubble query={conversation.user_query} />
                <SupportChatBubble response={conversation.sender_response} />
              </div>
            ))
          : null}

        {Boolean(currentConversations.length)
          ? currentConversations.map((conversation, index) => (
              <div key={"Current convo " + index}>
                <UserChatBubble query={conversation.user_query} />
                <SupportChatBubble response={conversation.sender_response} />
              </div>
            ))
          : null}

        {Boolean(dummyCurrentConversations.length)
          ? dummyCurrentConversations.map((conversation, index) => (
              <div key={index}>
                <UserChatBubble query={conversation.user_query} />
                <TypingIndicator />
              </div>
            ))
          : null}
      </div>
      <form
        onSubmit={formSubmit}
        className="border-2 rounded-lg w-96 mt-3 border-gray-300 h-14 overflow-hidden flex justify-center items-center"
      >
        <input
          id="user_query"
          name="user_query"
          type="text"
          className="w-10/12 h-full px-1 focus:outline-none text-gray-800"
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="border-2 p-[10px] cursor-pointer hover:bg-green-700 bg-[#58c163] rounded-full"
        >
          <FiSend className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
