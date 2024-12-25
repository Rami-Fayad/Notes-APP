import React from 'react'
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const SearchBar = ({value, onChange , handleSearch , onSetClear}) => {
  return (
    <div className='  w-40 sm:w-80 flex items-center px-4 bg-slate-100 rounded-md'  >
      <input 
      className='w-full py-[11px] text-sm bg-transparent outline-none'
      type="text" 
      placeholder='Search Notes'
      value={value}
      onChange={onChange}/>
     {value && 
     <IoMdClose className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3'
     onClick={onSetClear}/>}
      <FiSearch className='text-slate-400 cursor-pointer  hover:text-black'
      onClick={handleSearch}
      />
    </div>
  
  )
}

export default SearchBar
