import React, { useEffect } from "react";
import SendInput from "../SendInput/SendInput";
import Messages from "../Messages/Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../redux/userSlice";

const MessageContainer = () => {
  const { selectedUser,authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);
  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex items-center gap-4  ">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="profilePhoto" />
              </div>
            </div>
            <div>
              <h1 className="text-red-50">{selectedUser?.fullName}</h1>
            </div>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold">
            Hi,{authUser?.username}{" "}
          </h1>
          <h1 className="text-2xl text-white">Let's start conversation</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
