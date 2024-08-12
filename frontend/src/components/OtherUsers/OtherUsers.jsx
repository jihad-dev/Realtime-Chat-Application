import React from "react";
import OtherUser from "../OtherUser/OtherUser";
import useGetOtherUsers from "../../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";
const OtherUsers = () => {
  useGetOtherUsers();
  const { OtherUsers } = useSelector(store =>store.user)
  if (!OtherUsers) return;

  return (
    <div className="overflow-auto ">
      {OtherUsers?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
};

export default OtherUsers;
