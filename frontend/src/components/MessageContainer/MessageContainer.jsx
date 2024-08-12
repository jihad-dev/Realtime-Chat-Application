import React from "react";
import SendInput from "../SendInput/SendInput";
import Messages from "../Messages/Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const {selectedUser} = useSelector(store =>store.user)
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="flex items-center gap-4  ">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={selectedUser.profilePhoto}
              alt="profilePhoto"
            />
          </div>
        </div>
        <div>
          <h1 className="text-red-50">{selectedUser?.fullName}</h1>
        </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  );
};

export default MessageContainer;
