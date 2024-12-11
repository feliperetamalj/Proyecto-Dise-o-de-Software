import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedName = localStorage.getItem('contactName');
    const storedEmail = localStorage.getItem('contactEmail');
    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = t('contact.validation.nameRequired');
    }

    if (!email.trim()) {
      newErrors.email = t('emailRequired');
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = t('invalidEmail');
      }
    }

    if (!message.trim()) {
      newErrors.message = t('contact.validation.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('CamisetaStore', "template_o6u9krs", templateParams, 'ADRKNZ5WXdO1bHWc6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage(t('contact.success'));
        setStatusClass('success');
        setErrors({});
      }, (error) => {
        console.log('FAILED...', error);
        setStatusMessage(t('contact.failure'));
        setStatusClass('failure');
      });

    // Guardar nombre y email en localStorage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1>{t('contact.title')}</h1>
      <h2>{t('contact.subtitle')}</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        
        <label htmlFor="name">{t('contact.name')}</label>
        {errors.name && (
          <div className="error-container">
            <span className="error-icon">❗</span>
            <span className="error-text">{errors.name}</span>
          </div>
        )}
        <input
          type="text"
          id="name"
          name="name"
          className={`contact-form-input ${errors.name ? 'input-error' : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor="email">{t('contact.email')}</label>
        {errors.email && (
          <div className="error-container">
            <span className="error-icon">❗</span>
            <span className="error-text">{errors.email}</span>
          </div>
        )}
        <input
          type="email"
          id="email"
          name="email"
          className={`contact-form-input ${errors.email ? 'input-error' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label htmlFor="message">{t('contact.message')}</label>
        {errors.message && (
          <div className="error-container">
            <span className="error-icon">❗</span>
            <span className="error-text">{errors.message}</span>
          </div>
        )}
        <textarea
          id="message"
          name="message"
          className={`contact-form-input ${errors.message ? 'input-error' : ''}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        
        <button type="submit">{t('contact.send')}</button>
      </form>
      {statusMessage && <p className={`contact-form-status ${statusClass}`}>{statusMessage}</p>}
    </div>
  );
}

export default Contact;