import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'; // Importa el archivo CSS

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', { email, password });
      setMessage('Registro exitoso');
    } catch (error) {
      setMessage('Error en el registro');
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-form-title">Registro</h2>
      <div className="register-form-group">
        <label className="register-form-label">Email:</label>
        <input
          type="email"
          className="register-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="register-form-group">
        <label className="register-form-label">Contraseña:</label>
        <input
          type="password"
          className="register-form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="register-form-button">Registrar</button>
      {message && <p className="register-form-message">{message}</p>}
    </form>
  );
};

export default RegisterForm;