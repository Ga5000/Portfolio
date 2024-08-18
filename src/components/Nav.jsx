import React, { useState } from 'react';
import './styles/Nav.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import navIcon from '../assets/g.svg';
import menuIcon from '../assets/menu.svg';

const Nav = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <div className='nav-pt'>
            <img className='logo' src={navIcon} alt="Logo" />
            <img className='menu-icon' src={menuIcon} alt="Menu" onClick={toggleMenu} />
            <nav>
                <ul className={isMenuOpen ? 'show' : ''}>
                    <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>{t('aboutMe')}</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>{t('skills')}</Link></li>
                    <li><Link to="pj" smooth={true} duration={500} onClick={toggleMenu}>{t('projects')}</Link></li>
                    <li><Link to="education" smooth={true} duration={500} onClick={toggleMenu}>{t('education')}</Link></li>
                    <li><Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>{t('experience')}</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>{t('contact')}</Link></li>
                    <li><LanguageSwitcher /></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
