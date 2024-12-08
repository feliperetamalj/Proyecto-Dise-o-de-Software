import React, { useState, useContext } from 'react';
import axios from 'axios';
import './LoginForm.css'; // Importa el archivo CSS
import { UserContext } from '../../context/UserContext'; // Importa el UserContext
import { useTranslation } from 'react-i18next'; // Importa useTranslation

const LoginForm = () => {
  const { t } = useTranslation(); // Obtén la función t para traducciones
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser, fetchUserById } = useContext(UserContext); // Usa el contexto de usuario

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      setUser(response.data.user);
      console.log(response) // Establece el usuario en el contexto
      await fetchUserById(response.data.user.id); // Obtén el usuario por ID
      setMessage(t('login.success'));
    } catch (error) {
      setMessage(t('login.failure'));
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form-title">{t('login.title')}</h2>
      <div className="login-form-group">
        <label className="login-form-label">{t('login.email')}:</label>
        <input
          type="email"
          className="login-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="login-form-group">
        <label className="login-form-label">{t('login.password')}:</label>
        <input
          type="password"
          className="login-form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="login-form-button">{t('login.submit')}</button>
      {message && <p className="login-form-message">{message}</p>}
      <p className="login-form-register">
        {t('login.signup')} <a href="/register" className="login-form-link">{t('signup.title')}</a>
      </p>
    </form>
  );
};

export default LoginForm;