import React from 'react';
import './styles/Nav.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import navIcon from '../assets/g.svg';

const Nav = () => {
    const { t } = useTranslation();
    return (
        <div className='nav-pt'>
            <img className='logo' src={navIcon} alt="" />
            <nav>
                <ul>
                    <li><Link to="about" smooth={true} duration={500}>{t('aboutMe')}</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>{t('skills')}</Link></li>
                    <li><Link to="pj" smooth={true} duration={500}>{t('projects')}</Link></li>
                    <li><Link to="education" smooth={true} duration={500}>{t('education')}</Link></li>
                    <li><Link to="experience" smooth={true} duration={500}>{t('experience')}</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>{t('contact')}</Link></li>
                    <li><LanguageSwitcher /></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
