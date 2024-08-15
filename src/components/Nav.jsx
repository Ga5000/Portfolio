import React from 'react';
import './styles/Nav.css';
import LanguageSwitcher from './LanguageSwitcher'; './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import navIcon from '../assets/g.svg';

const Nav = () => {
    const { t } = useTranslation();
    return(
        <div className='nav-pt'>
          <img className='logo' src={navIcon} alt="" />
        <nav>
        <ul>
        <li><a href="#about">{t('aboutMe')}</a></li>
          <li><a href="#skills">{t('skills')}</a></li>
          <li><a href="#projects">{t('projects')}</a></li>
          <li><a href="#education">{t('education')}</a></li>
          <li><a href="#experience">{t('experience')}</a></li>
          <li><a href="#contact">{t('contact')}</a></li>
          <li><LanguageSwitcher /></li>
        </ul>
      </nav>
      </div>
    );

}
export default Nav;