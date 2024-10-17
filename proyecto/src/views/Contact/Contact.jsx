import React from 'react';
import './Contact.css';

function Contact () {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <form className="contact-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;