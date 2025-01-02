import React from "react";
import { MdAdd, MdClose } from "react-icons/md";

import { useState } from "react";
const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const hanldeInputchange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTag = () => {
    if (input.trim() !== "") {
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTag();
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white px-3 py-1 rounded-full flex items-center gap-1"
            >
              <span>{tag}</span>
              <button
               onClick={()=>handleRemoveTag(tag)}
              >
                <MdClose className="text-sm" 
                on/>
              </button>
            </div>
          ))}
        </div>
      )}
      <div className=" gap-2 flex items-center sm:gap-4 mt-3 outline-none">
        <input
          type="text"
          className="px-1 dark:text-gray-100 text-sm  bg-transparent border sm:px-3 py-2 rounded outline-none "
          placeholder="Add tags"
          onChange={hanldeInputchange}
          onKeyDown={handleKeyDown}
        />

        <button
          className="bg-blue-100 hover:bg-blue-600 dark:hover:bg-blue-200 sm:p-2 rounded flex items-center justify-center border-blue-700 border"
          onClick={handleAddTag}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
