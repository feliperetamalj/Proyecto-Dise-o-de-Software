import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from './i18n'; // Importa la configuración

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);