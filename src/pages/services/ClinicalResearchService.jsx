// src/pages/services/ClinicalResearchService.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ClinicalResearchService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Clinical Research Support
            </h1>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Comprehensive support for clinical trials from design through execution
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-pink-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                Get Started
              </Link>
              <Link to="/services" className="px-8 py-4 bg-pink-500/30 backdrop-blur-sm border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trial Phases */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-slate-900 text-center mb-12">Full Phase Coverage</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { phase: "Phase I", focus: "Safety & Dosing", participants: "20-100" },
            { phase: "Phase II", focus: "Efficacy & Safety", participants: "100-300" },
            { phase: "Phase III", focus: "Large-scale Testing", participants: "300-3000" },
            { phase: "Phase IV", focus: "Post-Market", participants: "1000+" }
          ].map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-black mb-2">{phase.phase}</div>
              <div className="text-lg font-semibold mb-1">{phase.focus}</div>
              <div className="text-sm text-pink-100">{phase.participants} participants</div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-16 space-y-6">
          {[
            {
              title: "Study Design & Protocol Development",
              features: ["Protocol writing", "Statistical design", "Endpoint selection"]
            },
            {
              title: "Site Management & Monitoring",
              features: ["Site selection", "CRA services", "Risk-based monitoring"]
            },
            {
              title: "Data Management & Biostatistics",
              features: ["EDC setup", "Data cleaning", "Statistical analysis"]
            },
            {
              title: "Quality Assurance & Compliance",
              features: ["GCP audits", "SOPs", "Vendor oversight"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <div className="flex flex-wrap gap-3">
                {service.features.map((feature, i) => (
                  <span key={i} className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg text-sm font-semibold">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}