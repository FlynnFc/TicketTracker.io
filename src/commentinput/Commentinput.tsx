import React from "react";

const Commentinput = () => {
  return (
    <div className="flex w-full flex-row">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-lg rounded-r-none"
      />
      <button className="btn btn-square rounded-l-none border-l-0 bg-primary text-white">
        Send
      </button>
    </div>
  );
};

export default Commentinput;
