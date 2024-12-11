import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import RegisterForm from './views/DataBase/RegisterForm.jsx';
import LoginForm from './views/DataBase/LoginForm.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Añade más rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;