import React from "react";
import { IoSend } from "react-icons/io5";
const SendInput = () => {
  return (
    <div>
      <form  className="px-4 my-3">
        <div className="w-full relative">
          <input
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Send a message..."
            className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
          />
          <button
            type="submit"
            className="absolute flex inset-y-0 end-0 items-center pr-4"
          >
            <IoSend/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendInput;
