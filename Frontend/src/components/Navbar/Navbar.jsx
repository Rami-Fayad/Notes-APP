import React, { useEffect, useState } from "react";
import {FiMoon , FiSun, FiX ,FiMenu} from 'react-icons/fi';
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const LogOut = () => {
    navigate('/login')
  }

  return (
    <div className="bg-white dark:bg-gray-800 flex items-center justify-between py-4 px-6 drop-shadow">
      <h2 className="text-2xl  dark:text-white font-medium text-black py-2">Notes</h2>
      <div className="hidden md:flex md:items-center md:justify-between gap-7">
      <ProfileInfo onLogOut ={LogOut}/> 
      <div
        className="py-2 px-4 bg-gray-200 dark:bg-gray-600 rounded text-black dark:text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FiSun size={24}/> : <FiMoon size={24}/>}
      </div>
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="text-black dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-slate-700 rounded-lg shadow-md p-4 w-60">
          <div className="mb-4">
            <ProfileInfo onLogOut={LogOut} />
          </div>
          <div className="flex items-center gap-4">
          <div>
            <p className="dark:text-gray-400">Switch Theme </p>
          </div>
          <div
            className="py-2 px-4 bg-gray-200 dark:bg-gray-600 rounded text-black dark:text-white cursor-pointer "
            onClick={toggleDarkMode}
          >
            
            {darkMode ? <FiSun size={24}/> : <FiMoon size={24}/>}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
