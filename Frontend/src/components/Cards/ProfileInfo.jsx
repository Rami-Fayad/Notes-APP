import React from "react";
import { UserInitials } from "../../utils/validate";

const ProfileInfo = ({onLogOut, userInfo}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-black bg-slate-300">
        {UserInitials(userInfo?.Name)}
      </div>

      <div>
        <p className="text-sm font-medium dark:text-gray-400">{userInfo?.Name}</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
