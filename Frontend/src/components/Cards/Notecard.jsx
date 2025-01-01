import React from "react";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
const Notecard = ({
  title,
  date,
  content,
  tags,
  ispinned,
  onEdit,
  onDelete,
  OnPin,
}) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <span className="text-sm text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin
          size={20}
          className={`icon-btn ${ ispinned ? "text-sm text-gray-500 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-300": "text-slate-300 dark:text-slate-600"  } `}
          onClick={OnPin}
        />
      </div>
      <p className="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400">
        {content?.slice(0, 60)}
      </p>
      <div className="flex flex-wrap mt-2 -mx-1">
        <span className="px-2 py-1 mb-1 mr-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-200 dark:text-blue-900">
          {tags}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <MdCreate
          size={20}
          className="icon-btn text-sm text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-gray-100"
          onClick={onEdit}
        />

        <MdDelete
          size={20}
          className="icon-btn ml-3 text-sm text-red-500 dark:text-red-300 hover:text-red-600 dark:hover:text-red-100"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default Notecard;
