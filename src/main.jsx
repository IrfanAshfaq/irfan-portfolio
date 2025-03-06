import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Make sure index.css exists
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Project from './Components/Project.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Experience from './Components/Experience.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer />
  </React.StrictMode>
);
