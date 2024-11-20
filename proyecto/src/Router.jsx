import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Form from "./Form"

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        
        {/* Añade más rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;