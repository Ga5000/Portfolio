import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/LanguageSwitcher.css'; 

import ptbr from '../assets/brazilFlag.svg';
import en from '../assets/usaFlag.png';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={
            i18n.language === 'en'
              ? en
              : ptbr
          }
          alt="Language"
          className="dropdown-toggle"
        />
        
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => handleLanguageChange('en')}>
              <img src={en} alt="English" />
            </div>
            <div className="dropdown-item" onClick={() => handleLanguageChange('pt')}>
              <img src={ptbr} alt="Português" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
