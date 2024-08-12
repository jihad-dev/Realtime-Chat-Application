import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div
      onClick={() => selectedUserHandler(user)}
      className={`${
        selectedUser?._id === user?._id ? "bg-green-400" : ""
      } flex items-center gap-4 hover:bg-slate-300 rounded-sm  cursor-pointer`}
    >
      <div className="avatar online">
        <div className="w-12 rounded-full">
          {/* <h2>{username}</h2> */}
          <img src={user?.profilePhoto} alt="" />
        </div>
      </div>
      <div>
        <h2>{user?.fullName}</h2>
      </div>
    </div>
  );
};

export default OtherUser;
