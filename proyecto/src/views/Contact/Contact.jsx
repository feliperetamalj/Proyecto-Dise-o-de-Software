import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {

    const storedName = localStorage.getItem('contactName');
    const storedEmail = localStorage.getItem('contactEmail');
    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar los valores en el localStorage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
  
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="contact-container">
      <h1>{t('contact.title')}</h1>
      <h2>{t('contact.subtitle')}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t('contact.name')}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">{t('contact.email')}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">{t('contact.message')}</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">{t('contact.send')}</button>
      </form>
    </div>
  );
}

export default Contact;