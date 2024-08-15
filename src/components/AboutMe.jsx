import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/AboutMe.css';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-me">
      <h2>{t('aboutMeTitle')}</h2>
      <p>{t('aboutMeText')}</p>
    </section>
  );
}

export default AboutMe;
