import React from "react";
function Button() {
  return (
    <div className="flex justify-center items-center bg-[#F5F9FC] ">
      <button
        onClick={() => navigate("/submit-event")}
        className="bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:opacity-90 cursor-pointer"
      >
        Event einsenden
      </button>
    </div>
  );
}
export default Button;