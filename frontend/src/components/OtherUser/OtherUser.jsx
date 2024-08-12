import React from "react";

const OtherUser = (props) => {
  const {username,profilePhoto,fullName} = props?.user;

  return (
    <div className="flex items-center gap-4 hover:bg-slate-300 rounded-sm  cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          {/* <h2>{username}</h2> */}
          <img
            src={profilePhoto}
            alt=''
          />
        </div>
      </div>
      <div>
        <h2>{fullName}</h2>
      </div>
    </div>
  );
};

export default OtherUser;
