import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Login from "./app/password/login/Login";
import Signup from "./app/password/signup/Signup";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path= "/password/login" element={<Login />} />
        <Route path = "/password/signup" element={<Signup />} />
        {/* Añade más rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;