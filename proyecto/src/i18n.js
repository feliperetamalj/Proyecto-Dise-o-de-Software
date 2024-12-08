import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'es';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar.jsx
        'nav.home': 'Home',
        'nav.contact': 'Contact',
        'nav.login': 'Login',
        'nav.brand': 'Your Jerseys at the Best Price',
        'nav.darkmode': 'Enable Dark Mode',
        
        // Home.jsx
        'home.storeTitle': 'Camiseta Store',
        'home.slogan': 'Find the best jerseys of your favorite teams at the best prices',
        'home.jersey': 'Jersey',
        'home.season': 'Season',

        // Contact.jsx
        'contact.title': 'Contact',
        'contact.subtitle': 'Do you have any questions? Contact us!',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send',

        // Login.jsx
        'login.title': 'Login',
        'login.email': 'Email',
        'login.password': 'Password',
        'login.submit': 'Login',
        'login.success': 'Login successful!',
        'login.failure': 'Invalid credentials',
        'login.signup': "Don't have an account? Sign up",

        // Signup.jsx
        'signup.title': 'Signup',
        'signup.email': 'Email',
        'signup.password': 'Password',
        'signup.submit': 'Signup',
        'signup.success': 'Signup successful!',
        'signup.failure': 'An error occurred. Please try again.',
        'signup.login': 'Back to login',

        //Language.jsx
        "language.idioma": "Language"
      }
    },
    es: {
      translation: {
        // Navbar.jsx
        'nav.home': 'Inicio',
        'nav.contact': 'Contacto',
        'nav.login': 'Iniciar sesión',
        'nav.brand': 'Tus Camisetas al mejor precio',
        'nav.darkmode': 'Activar Modo Oscuro',
        
        // Home.jsx
        'home.storeTitle': 'Camiseta Store',
        'home.slogan': 'Encuentra las mejores camisetas de tus equipos favoritos a los mejores precios',
        'home.jersey': 'Camiseta',
        'home.season': 'Temporada',

        // Contact.jsx
        'contact.title': 'Contacto',
        'contact.subtitle': '¿Tienes alguna duda? ¡Contáctanos!',
        'contact.name': 'Nombre',
        'contact.email': 'Correo electrónico',
        'contact.message': 'Mensaje',
        'contact.send': 'Enviar',

        // Login.jsx
        'login.title': 'Iniciar sesión',
        'login.email': 'Correo electrónico',
        'login.password': 'Contraseña',
        'login.submit': 'Iniciar sesión',
        'login.success': '¡Inicio de sesión exitoso!',
        'login.failure': 'Credenciales inválidas',
        'login.signup': '¿No tienes una cuenta? Regístrate',

        // Signup.jsx
        'signup.title': 'Registrarse',
        'signup.email': 'Correo electrónico',
        'signup.password': 'Contraseña',
        'signup.submit': 'Registrarse',
        'signup.success': '¡Registro exitoso!',
        'signup.failure': 'Ocurrió un error. Por favor, inténtalo de nuevo.',
        'signup.login': 'Volver a iniciar sesión',

        //Language.jsx
        "language.idioma": "Idioma"

        
      }
    },
    de: {
      translation: {
        // Navbar.jsx
        'nav.home': 'Startseite',
        'nav.contact': 'Kontakt',
        'nav.login': 'Anmelden',
        'nav.brand': 'Ihre Trikots zum besten Preis',
        'nav.darkmode': 'Dunkelmodus aktivieren',
        
        // Home.jsx
        'home.storeTitle': 'Trikotladen',
        'home.slogan': 'Finden Sie die besten Trikots Ihrer Lieblingsteams zu den besten Preisen',
        'home.jersey': 'Trikot',
        'home.season': 'Saison',

        // Contact.jsx
        'contact.title': 'Kontakt',
        'contact.subtitle': 'Haben Sie Fragen? Kontaktieren Sie uns!',
        'contact.name': 'Name',
        'contact.email': 'E-Mail',
        'contact.message': 'Nachricht',
        'contact.send': 'Senden',

        // Login.jsx
        'login.title': 'Anmelden',
        'login.email': 'E-Mail',
        'login.password': 'Passwort',
        'login.submit': 'Anmelden',
        'login.success': 'Anmeldung erfolgreich!',
        'login.failure': 'Ungültige Anmeldedaten',
        'login.signup': 'Haben Sie kein Konto? Registrieren',

        // Signup.jsx
        'signup.title': 'Registrieren',
        'signup.email': 'E-Mail',
        'signup.password': 'Passwort',
        'signup.submit': 'Registrieren',
        'signup.success': 'Registrierung erfolgreich!',
        'signup.failure': 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
        'signup.login': 'Zurück zur Anmeldung',

        //Language.jsx
        "language.idioma": "Sprache"
      }
    }
  },
  lng: savedLanguage, // Idioma inicial desde localStorage
  fallbackLng: 'es', // Idioma de respaldo si falta la traducción
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;