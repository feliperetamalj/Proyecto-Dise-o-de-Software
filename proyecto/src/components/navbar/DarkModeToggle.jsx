import React from 'react';

function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-white text-green-700 px-4 py-2 rounded dark:bg-gray-600 dark:text-white transition-colors duration-300"
    >
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeToggle;