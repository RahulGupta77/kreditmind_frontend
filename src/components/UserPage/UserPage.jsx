import React, { useEffect } from "react";
import { BACKEND_API } from "../../constants";
import toast from "react-hot-toast";
import ChatBox from "./ChatBox";

const UserPage = () => {
  useEffect(() => {
    const fetchAllConversations = async () => {
      try {
        const getAPI = BACKEND_API + "/conversations";
        const response = await fetch(getAPI, { credentials: "include" });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        toast.error(error.message); 
      }
    };

    fetchAllConversations();
  }, []);

  return (
    <div className="h-screen flex pt-20">
      <div className="w-[70%] border-t-2 border-r-2">user details</div>
      <div className="w-[30%] border-t-2"><ChatBox/></div>
    </div>
  );
};

export default UserPage;
