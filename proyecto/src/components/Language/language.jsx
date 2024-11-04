import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './language.css';

const Language = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage);
  }, [i18n]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    setSelectedLanguage(language);
  };

  return (
    <div className="language-container" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <button className="language-button">{t('language.idioma')} <span>▼</span></button>
      {showDropdown && (
        <div className="language-dropdown">
          <label>
            <input type="radio" name="language" value="en" checked={selectedLanguage === 'en'} onChange={() => changeLanguage('en')} />
            <img src="/src/assets/flags/us.svg" alt="English" className="flag-icon" /> English - EN
          </label>
          <label>
            <input type="radio" name="language" value="es" checked={selectedLanguage === 'es'} onChange={() => changeLanguage('es')} />
            <img src="/src/assets/flags/cl.svg" alt="Español" className="flag-icon" /> Español - ES
          </label>
          <label>
            <input type="radio" name="language" value="ar" checked={selectedLanguage === 'ar'} onChange={() => changeLanguage('ar')} />
            <img src="/src/assets/flags/arab.svg" alt="العربية" className="flag-icon" /> العربية - AR
          </label>
          <label>
            <input type="radio" name="language" value="de" checked={selectedLanguage === 'de'} onChange={() => changeLanguage('de')} />
            <img src="/src/assets/flags/de.svg" alt="Deutsch" className="flag-icon" /> Deutsch - DE
          </label>
        </div>
      )}
    </div>
  );
};

export default Language;