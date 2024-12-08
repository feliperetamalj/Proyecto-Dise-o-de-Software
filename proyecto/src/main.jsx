import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import i18n from './i18n'; // Importa la configuración
import { UserProvider } from './context/UserContext'; // Importa el UserProvider
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </UserProvider>
  </StrictMode>,
);