import React from "react";

const Commentinput = () => {
  return (
    <div className="flex w-full flex-row items-stretch justify-center">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-lg rounded-r-none focus:outline-none"
      />
      <button className="btn btn-square rounded-l-none border-l-0 bg-primary text-white">
        Send
      </button>
    </div>
  );
};

export default Commentinput;
