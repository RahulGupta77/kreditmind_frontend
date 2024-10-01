import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../constants";

const LoginRegisterPage = () => {
  const [currentButtonTab, setCurrentButtonTab] = useState("register");
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let postAPI = BACKEND_API;
    if (currentButtonTab === "login") {
      postAPI += "/auth/login";
    } else {
      postAPI += "/auth/signup";
    }

    try {
       await fetch(postAPI, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ ...formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // if (!response.ok) throw new Error("Error 404: Client Side Error");
      setLoading(false);
      if (currentButtonTab === "register") {
        setCurrentButtonTab("login");
      } else {
        navigate("/user");
      }
      toast.success(`User ${currentButtonTab} successful`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const changeCurrentButtonTab = (currentClickedBtn) => {
    if (currentButtonTab === currentClickedBtn) return;
    if (currentClickedBtn === "login") {
      setCurrentButtonTab("login");
    } else {
      setCurrentButtonTab("register");
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="h-[80%] w-[60%] border-2 rounded-xl">
        <div className="mt-10 flex justify-center items-center gap-x-10">
          <button
            key={"login"}
            onClick={() => {
              changeCurrentButtonTab("login");
            }}
            className={
              "px-16 py-1 font-semibold rounded-md cursor-pointer m-2 " +
              [
                currentButtonTab === "login"
                  ? " bg-[#58c163] text-white"
                  : "text-gray-800 bg-gray-100 hover:bg-gray-200",
              ]
            }
          >
            Login
          </button>
          <button
            key={"register"}
            onClick={() => {
              changeCurrentButtonTab("register");
            }}
            className={
              "px-16 py-1 font-semibold rounded-md cursor-pointer m-2 " +
              [
                currentButtonTab === "register"
                  ? " bg-[#58c163] text-white"
                  : "text-gray-800 bg-gray-100 hover:bg-gray-200",
              ]
            }
          >
            Register
          </button>
        </div>

        <div className="h-[70%] mt-4 flex justify-center items-center">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white h-[70%] w-[40%] flex flex-col gap-y-3  rounded px-8 pt-6 pb-8 mb-4  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="name"
                name="name"
              >
                Username
              </label>
              <input
                id="name"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-[#58c163] mt-2 hover:bg-green-600 text-white font-bold py-2 px-14 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {currentButtonTab === "login"
                  ? [
                      loading ? (
                        <svg
                          key={"spinner-1"}
                          aria-hidden="true"
                          className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-500 fill-gray-500 dark:fill-gray-100"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      ) : (
                        "Login"
                      ),
                    ]
                  : [
                      loading ? (
                        <svg
                          key={"spinner-2"}
                          aria-hidden="true"
                          className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-500 fill-gray-500 dark:fill-gray-100"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      ) : (
                        "Sign Up"
                      ),
                    ]}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
