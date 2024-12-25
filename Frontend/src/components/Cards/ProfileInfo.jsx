import React from "react";

const ProfileInfo = () => {
  return (
    <div className=" flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-black bg-slate-300 ">Rami Fayad</div>
      

      <div >
        <p className="text-sm  font-medium dark:text-gray-400"> Rami</p>
         <button className="text-sm text-slate-700 underline" >
            Logout
         </button>
    
       </div>
      </div>

    
  );
};

export default ProfileInfo;
