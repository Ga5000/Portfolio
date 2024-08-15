import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <h2>{t('contactTitle')}</h2>
      <p>{t('contactText')}</p>
      <p>{t('contactEmail')} gbr.lisboa@gmail.com</p>
      <p>{t('contactPhone')} +55 11 99447-0237</p>
    </section>
  );
}

export default Contact;
