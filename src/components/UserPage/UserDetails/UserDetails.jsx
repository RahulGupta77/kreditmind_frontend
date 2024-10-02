import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BACKEND_API, DOCUMENTS } from "../../../constants";
import Spinner from "../Spinner";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const getUserAPI = BACKEND_API + "/user";
        const response = await fetch(getUserAPI, { credentials: "include" });
        const data = await response.json();
        setUserDetails(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className=" h-full w-[85%] mx-auto flex flex-col gap-y-10">
      {loading ? (
        <div className="h-full w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="mt-8">
            <p className="capitalize text-3xl font-semibold">
              Welcome {userDetails?.name}
            </p>
            <p className="text-gray-500 mt-3">
              Thank you for submitting your application. Please complete the
              following steps
            </p>
          </div>
          <div className="flex border rounded-xl px-6 py-6  justify-between items-center">
            <p className="text-gray-700">
              Your application has been submitted. Track and manage your
              submissions here.
            </p>
            <div className="flex items-center text-[#58c163] cursor-pointer">
              <span>Show Progress</span>
              <span>
                <MdOutlineKeyboardArrowRight className="h-5 w-5" />
              </span>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-8">
            <div className=" h-[2px] bg-gray-400 w-full"></div>
            <div className="absolute text-xs font-semibold text-gray-900 flex justify-between w-full">
              {DOCUMENTS.map((document) => (
                <span
                  key={document}
                  className="bg-white border cursor-pointer rounded-3xl flex  items-center border-gray-300 gap-x-2 px-2 py-2"
                >
                  <span>{document}</span>
                  <span className="border rounded-full bg-[#58c163] h-fit p-[2px] text-white">
                    <TiTick />
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="border rounded-xl h-[50%] px-4">
            <div className="mt-8">
              <p className="text-2xl font-bold">Identification Documents</p>
              <p className="text-gray-500 mt-2">Please upload clear copies of your Pan and Aadhar to verify your identity. Ensure that the documents are up-to-date and legible.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
