import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Experience.css';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience">
      <h2>{t('experienceTitle')}</h2>
      <p>{t('lookingForFirstJob')}</p>
    </section>
  );
}

export default Experience;
