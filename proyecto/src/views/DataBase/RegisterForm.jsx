import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'; 

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};

    // Validación de email
    if (!email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!email.includes('@')) {
      newErrors.email = "El email no es válido";
    }

    // Validación de contraseña (mínimo 5 caracteres)
    if (!password.trim()) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.trim().length < 5) {
      newErrors.password = "La contraseña debe tener al menos 5 caracteres";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Crear el usuario
      const response = await axios.post('http://localhost:3000/register', { email, password });
      const userId = response.data.id; // Asume que la respuesta contiene el ID del usuario creado

      // Crear el carrito para el usuario
      await axios.post('http://localhost:3000/carritos', { uid: userId });

      setMessage('Registro y creación de carrito exitosos');
      setErrors({});
    } catch (error) {
      setMessage('Error en el registro o en la creación del carrito');
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <h2 className="register-form-title">Registro</h2>
      
      <div className="register-form-group">
        <label className="register-form-label">Email:</label>
        {errors.email && (
          <div className="error-container">
            <span className="error-icon">❗</span>
            <span className="error-text">{errors.email}</span>
          </div>
        )}
        <input
          type="email"
          className={`register-form-input ${errors.email ? 'input-error' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="register-form-group">
        <label className="register-form-label">Contraseña:</label>
        {errors.password && (
          <div className="error-container">
            <span className="error-icon">❗</span>
            <span className="error-text">{errors.password}</span>
          </div>
        )}
        <input
          type="password"
          className={`register-form-input ${errors.password ? 'input-error' : ''}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="register-form-button">Registrar</button>
      {message && <p className="register-form-message">{message}</p>}
    </form>
  );
};

export default RegisterForm;
