import React from "react";
import { FiMessageSquare } from "react-icons/fi";

const TypingIndicator = () => {
  return (
    <div className="flex justify-between items-start my-7">
      <div className="h-12 w-12 border-2 rounded-full bg-white flex justify-center items-center">
        <FiMessageSquare className="h-6 w-6 text-gray-400" />
      </div>
      <div className="min-h-12 h-auto w-[85%] mt-2 bg-gray-200 rounded-r-2xl rounded-bl-2xl px-4 py-2 text-lg text-gray-800">
        <div className="relative flex items-center mt-1">
          <span className="dot animate-blink bg-green-600 rounded-full h-2.5 w-2.5 mr-1"></span>
          <span className="dot animate-blink bg-green-600 rounded-full h-2.5 w-2.5 mr-1 delay-200"></span>
          <span className="dot animate-blink bg-green-600 rounded-full h-2.5 w-2.5 delay-400"></span>
          <style jsx>{`
            @keyframes blink {
              0%,
              100% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
            }
            .animate-blink {
              animation: blink 1.5s infinite both;
            }
            .delay-200 {
              animation-delay: 0.2s;
            }
            .delay-400 {
              animation-delay: 0.4s;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
