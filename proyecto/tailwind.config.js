/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita el modo oscuro usando la clase 'dark'
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx,css}', // Incluye todos los archivos relacionados
    './src/components/**/*.{jsx,css}', // Incluye todos los componentes
    './src/views/**/*.{html,jsx,css}', // Incluye vistas
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // Fondo claro
        text: '#1f2937', // Texto claro
        primary: '#2563eb', // Azul principal
        error: '#ef4444', // Rojo para errores
        dark: {
          background: '#1f2937', // Fondo oscuro
          text: '#f8fafc', // Texto oscuro
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin para formularios
    require('@tailwindcss/typography'), // Plugin para texto
  ],
};