import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"

const InputPassword = ( {value, onchange,placeholder }) => {
    const [isShowPassword, setIsShowPassword] =useState(false);
    const togglepassword = () => {
        setIsShowPassword(!isShowPassword);
    }
  return (
    <div className='flex items-center rounded mb-4 border-[1.5px] bg-transparent px-5'>
      <input 
      value = {value}
      type= {isShowPassword ? 'text' : 'password'}
      placeholder={placeholder || 'Password'}
      className='w-full text-sm py-3 mr-3 rounded outline-null bg-transparent outline-none'/>
      {isShowPassword ?
      <FaRegEye 
       size={22}
       className='text-primary cursor-pointer'
       onClick={()=>{
        togglepassword()
       }}
      />
      : <FaRegEyeSlash
      size ={22}
      className='text-slate-400' 
      onClick={()=>{
        togglepassword()
      }}/>
}
    </div>
  )
}

export default InputPassword
