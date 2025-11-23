// React Imports
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useEffect } from "react";
import { loadGoatCounter } from "./components/goatcounter/goatcounter.js";

// Component Imports
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Countdown from './components/Countdown.jsx'
// Page Imports
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Connect from './pages/Connect.jsx'


function App() {
  // Load GoatCounter when the app starts
  useEffect(() => {
    loadGoatCounter();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
