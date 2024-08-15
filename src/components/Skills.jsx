import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <h2>{t('skillsTitle')}</h2>
      <ul>
        <li>{t('programmingLanguages')}</li>
        <li>{t('frameworksLibraries')}</li>
        <li>{t('databaseManagement')}</li>
        <li>{t('tools')}</li>
        <li>{t('concepts')}</li>
        <li>{t('softSkills')}</li>
        <li>{t('languages')}</li>
      </ul>
    </section>
  );
}

export default Skills;
