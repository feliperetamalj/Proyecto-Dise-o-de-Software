import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { UserContext } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const { setUser, fetchUserById } = useContext(UserContext);

  useEffect(() => {
    const storedEmail = localStorage.getItem('loginEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validación de email
    if (!email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!email.includes('@')) {
      newErrors.email = t('emailInvalid');
    }

    // Validación de password (mínimo 5 caracteres)
    if (!password.trim()) {
      newErrors.password = t('passwordRequired');
    } else if (password.trim().length < 5) {
      newErrors.password = t('passwordMinLength');
    }

    // Si hay errores, los mostramos
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Si no hay errores, proceder con el login
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const user = response.data.user;
      setUser(user);
      await fetchUserById(user.id);
      setMessage(t('login.success'));

      // Guardar la información del usuario en localStorage
      localStorage.setItem('user', JSON.stringify(user));
      // Guardar el email en localStorage
      localStorage.setItem('loginEmail', email);
    } catch (error) {
      setMessage(t('login.failure'));
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h2 className="login-form-title">{t('login.title')}</h2>
      <div className="login-form-group">
        <label className="login-form-label">{t('login.email')}:</label>
        {errors.email && (
          <div className="error-container">
            <span className="error-icon">❗</span>
            <span className="error-text">{errors.email}</span>
          </div>
        )}
        <input
          type="email"
          className={`login-form-input ${errors.email ? 'input-error' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login-form-group">
        <label className="login-form-label">{t('login.password')}:</label>
        {errors.password && (
          <div className="error-container">
            <span className="error-icon">❗</span>
            <span className="error-text">{errors.password}</span>
          </div>
        )}
        <input
          type="password"
          className={`login-form-input ${errors.password ? 'input-error' : ''}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="login-form-button">{t('login.submit')}</button>
      {message && <p className="login-form-message">{message}</p>}
      <p className="login-form-register">
        <a href="/register" className="login-form-link">{t('login.signup')}</a>
      </p>
    </form>
  );
};

export default LoginForm;
