// src/pages/services/MedicalWritingService.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MedicalWritingService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-black mb-6">
                Medical Writing Services
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Expert scientific documentation that meets the highest regulatory and quality standards
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                  Get Started
                </Link>
                <Link to="/services" className="px-8 py-4 bg-purple-500/30 backdrop-blur-sm border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                  All Services
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <svg className="w-full h-64 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-slate-900 text-center mb-12">Document Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Clinical Study Reports",
              items: ["CSR authoring", "Statistical analysis", "ICH E3 compliance"]
            },
            {
              title: "Regulatory Submissions",
              items: ["IND/NDA documents", "CTD/eCTD modules", "Briefing packages"]
            },
            {
              title: "Clinical Protocols",
              items: ["Study protocols", "SAPs", "Informed consent forms"]
            },
            {
              title: "Scientific Publications",
              items: ["Manuscripts", "Abstracts", "Posters and presentations"]
            },
            {
              title: "Safety Documents",
              items: ["IB updates", "DSUR", "RMP documents"]
            },
            {
              title: "Medical Communications",
              items: ["Slide decks", "Patient materials", "Educational content"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}