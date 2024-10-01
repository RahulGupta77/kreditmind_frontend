import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const UserDetails = () => {
  return (
    <div className=" h-full w-[85%] mx-auto">
      <div className="">
        <p>Welcome Rahul</p>
        <p>
          Thank you for submitting your application. Please complete the
          following steps
        </p>
      </div>
      <div className="flex  justify-between items-center">
        <p>
          Your application has been submitted. Track and manage your submissions
          here.
        </p>
        <div className="flex gap-x-2 items-center ">
          <span>Show Progress</span>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-8">
        <div className=" h-[2px] bg-gray-400 w-full"></div>
        <div className="absolute text-xs font-semibold text-gray-900 flex justify-between w-full">
          <span className="bg-white border rounded-3xl border-gray-300 px-2 py-2">
            Indentification Documents
          </span>
          <span className="bg-white border rounded-3xl border-gray-300 px-2 py-2">
            Financial Statements
          </span>
          <span className="bg-white border rounded-3xl border-gray-300 px-2 py-2">
            Bank Statements
          </span>
          <span className="bg-white border rounded-3xl border-gray-300 px-2 py-2">
            GST Information
          </span>
          <span className="bg-white border rounded-3xl border-gray-300 px-2 py-2">
            Bureau Data
          </span>
        </div>
      </div>
      <div className="">Big box</div>
    </div>
  );
};

export default UserDetails;
