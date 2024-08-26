import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className='pj'><h2>{t('projectsTitle')}</h2>
    <section id="projects" className="projects">
     
      <div className="project-container">
        <div className="project">
          <h3>{t('projectName1')}</h3>
          <p>{t('usedTechnologies')}</p>
          <ul>
            <li>Java</li>
            <li>Maven</li>
            <li>Spring Boot</li>
            <li>Spring MVC, JPA, Security</li>
            <li>Hibernate\MySQL</li>
          </ul>
          <a href="https://github.com/Ga5000/Library-Rest-API" target='_blank'>{t('gitRepoLink')}</a>
          <p>{t('projectStatus')}: {t('completedAt')} - <strong>24/08/2024</strong></p>
        </div>
      </div>

      <div className="project-container">
        <div className="project">
          <h3>{t('projectName3')}</h3>
          <p>{t('usedTechnologies')}</p>
          <ul>
            <li>Java</li>
            <li>Maven</li>
            <li>Spring Boot</li>
            <li>Spring MVC, JPA, Security</li>
            <li>Java Mail Sender</li>
            <li>Hibernate\MySQL</li>
          </ul>
          <a href="https://github.com/Ga5000/Library-Rest-API" target='_blank'>{t('gitRepoLink')}</a>
          <p>{t('projectStatus')}: {t('OngoingP')}</p>
        </div>
      </div>
      
      <div className="project-container">
        <div className="project">
          <h3>{t('projectName2')}</h3>
          <p>{t('usedTechnologies')}</p>
          <ul>
            <li>ReactJS</li>
            <li>initReactI18next</li>
            <li>CSS</li>
          </ul>
          <a href="https://github.com/Ga5000/Portfolio" target='_blank'>{t('gitRepoLink')}</a>
          <p>{t('projectStatus')}: {t('completedAt')} - <strong>18/08/2024</strong></p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Projects;
