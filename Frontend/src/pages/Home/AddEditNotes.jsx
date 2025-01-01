import React from "react";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <label className="input-label">Title</label>
        <input
          type="text"
          className=" text-sm sm:text-2xl text-slate-950 outline-none dark:text-white"
          placeholder="Go to Gym"
        />
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <label className="input-label">Content</label>
        <textarea
          className="block p-2.5 w-fulltext-sm outline-none text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Go to Gym"
          rows={10}
        />
      </div>

      <div className="mt-4">
        <label className="input-label">Tags</label>
        <button className="btn-primary font-medium mt-5 p-3"
         onClick={() => {}}>
         ADD
        </button>
      </div>
    </div>
  );
};

export default AddEditNotes;
