// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-15">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* Services overview page */}
            <Route path="/services" element={<Services />} />

            {/* Individual service detail pages */}
            <Route path="/services/:serviceName" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
