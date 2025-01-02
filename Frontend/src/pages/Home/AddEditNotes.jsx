import React from "react";
import TagInput from "../../components/Input/TagInput";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, closeModal }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState("");
const handleAddNote = () => {
    if (!title)
    {
        setError("Title is required");
        return;
    }
    if (!content)
    {
        setError("Content is required");
        return;
    }
    setError("");
    // Add note API call
};
  return (
    <div className="relative">
      <button
        className=" w-5 h-5 absolute sm:w-10 sm:h-10 rounded-full dark:bg-slate-500 bg-primary -top-4 -right-3  flex justify-center items-center hover:bg-blue-200 dark:hover:bg-slate-600  "
        onClick={() => {
          closeModal();
        }}
      >
        <MdClose className="text-[24-px] sm:text-[32-px] text-white" />
      </button>
      <div className="flex flex-col gap-3">
        <label className="input-label">Title</label>
        <input
          type="text"
          className=" text-sm sm:text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Go to Gym"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <label className="input-label">Content</label>
        <textarea
          className="block p-2.5 w-fulltext-sm outline-none text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Go to Gym"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddEditNotes;
