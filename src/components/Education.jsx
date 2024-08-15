import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Education.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="education">
      <h2>{t('educationTitle')}</h2>
      <p><strong>{t('computerScienceDegree')}</strong> {t('ongoing')} - {t('universityName')}, {t('cityCountry')}. {t('expectedGraduation')} [12/2026]</p>
      <p><strong>{t('englishCourse')}</strong> {t('completed')} - {t('kumon')}, {t('cityCountry')}. {t('completedIn')} [02/2022]</p>
      <p><strong>{t('javaProgramming')}</strong> {t('completed')} - {t('schoolName')}, {t('cityCountry')}. {t('completedIn')} [10/2022]</p>
      <p>___________________________________________________________________________</p>
      <h2>{t('certificatesTitle')}</h2>
      <p><a href="https://www.linkedin.com/learning/certificates/33a7f79cc6f91c22aa35013bb25ae2ed81b99f4d49559ca771dcec745ddd887c" target="_blank" rel="noopener noreferrer">{t('certificate1')}</a></p>
      <p><a href="https://www.linkedin.com/learning/certificates/8cef1305e0be7a22863696e0827a90b4b57217ecbad4c59b8d037cc8f3091087" target="_blank" rel="noopener noreferrer">{t('certificate2')}</a></p>
      <p><a href="https://www.linkedin.com/learning/certificates/a06b0c130c39cb980eff0a33415db9c16eb7cc9af854362baba8cfceffd06658" target="_blank" rel="noopener noreferrer">{t('certificate3')}</a></p>
      <p>{t('viewAllCertificates')} <a href="https://www.linkedin.com/in/gabriel-lisboa05/details/certifications/" target="_blank" rel="noopener noreferrer">{t('linkedinProfile')}</a></p>
    </section>
  );
}

export default Education;
