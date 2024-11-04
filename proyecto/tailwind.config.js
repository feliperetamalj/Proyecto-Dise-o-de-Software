/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita el modo oscuro usando la clase 'dark'
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx,css}', // Añade las rutas de tus archivos aquí
    './src/components/navbar/Navbar.jsx',
    './src/components/navbar/Navbar.css',
    './src/views/Proyectomain.html',
    './src/views/Home/Home.css',
    './src/views/Home/Home.jsx', // Incluye Home.jsx
    './src/index.css',
    './src/App.css',
    './src/App.jsx',
    './src/components/navbar/DarkModeToggle.jsx',
    './src/components/navbar/Button.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}