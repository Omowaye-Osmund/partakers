// React Imports
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Analytics from "./components/Analytics.jsx";

// Component Imports
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Countdown from './components/Countdown.jsx'
// Page Imports
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Connect from './pages/Connect.jsx'
import ContactUs from './pages/ContactUs.jsx';
import SportsDay from './pages/events/SportsDay.jsx';


function App() {

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <Analytics />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events/sports-day" element={<SportsDay />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
