import React from 'react';
import { useTranslation } from 'react-i18next';

function DarkModeToggle() {
  const { t } = useTranslation();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-white text-green-700 px-4 py-2 rounded dark:bg-gray-600 dark:text-white transition-colors duration-300"
    >
      {t('nav.darkmode')}
    </button>
  );
}

export default DarkModeToggle;