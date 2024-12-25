import React, { useEffect, useState } from "react";
import {FiMoon , FiSun} from 'react-icons/fi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
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

  return (
    <div className="bg-white dark:bg-gray-800 flex items-center justify-between py-4 px-6 drop-shadow">
      <h2 className="text-2xl  dark:text-white font-medium text-black py-2">Notes</h2>
      <div
        className="py-2 px-4 bg-gray-200 dark:bg-gray-600 rounded text-black dark:text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FiSun size={24}/> : <FiMoon size={24}/>}
      </div>
    </div>
  );
};

export default Navbar;
