import React, { useEffect } from "react";
import { BACKEND_API } from "../constants";

const UserPage = () => {
  useEffect(() => {
    const fetchAllConversations = async () => {
      try {
        const getAPI = BACKEND_API + "/conversations";
        const response = await fetch(getAPI, { credentials: "include" });
        const data = await response.json();
        console.log(data);
      } catch (error) {}
    };

    fetchAllConversations();
  }, []);

  return <div>UserPage</div>;
};

export default UserPage;
