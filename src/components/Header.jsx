import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Header.css';

import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import download from '../assets/download.svg';

const Header = () => {
  const { t, i18n } = useTranslation();

  const resumeUrl = i18n.language === 'en' 
    ? '/resumes/resume-en.pdf' 
    : '/resumes/resume-ptbr.pdf';

  return (
    <header className="header">
      <div className="text-section">
        <h1>{t('name')}</h1>
        <h2>{t('title')}</h2>
      </div>
      <div className='social-resume'>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/gabriel-lisboa05/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Ga5000" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
      </div>
      <a href={resumeUrl} download className="resume-button">
        {t('downloadResume')} <img src={download} alt="" />
      </a>
      </div>
    </header>
  );
}

export default Header;
