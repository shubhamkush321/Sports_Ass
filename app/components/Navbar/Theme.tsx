import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.style.backgroundColor = 'black';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.documentElement.style.backgroundColor = 'white';
    }
  }, [darkMode]);

  return (
    <div className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-white border-2 border-gray-500 cursor-pointer rounded-full p-1' onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <BsSunFill className="text-yellow-500" size={18} /> : <FaMoon className="text-white" size={18} />}
      <div className='absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-all duration-300' style={darkMode ? { right: "2px" } : { left: "2px" }}></div>
      {darkMode ? <FaMoon className="text-white ml-auto" size={18} /> : <BsSunFill className="text-yellow-400 ml-auto" size={18} />}
    </div>
  );
};

export default Theme;
