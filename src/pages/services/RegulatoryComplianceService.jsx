// src/pages/services/RegulatoryComplianceService.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RegulatoryComplianceService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Regulatory Compliance & Global Strategy
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Navigate complex regulatory landscapes across multiple markets with confidence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-teal-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                Get Started
              </Link>
              <Link to="/services" className="px-8 py-4 bg-teal-500/30 backdrop-blur-sm border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global Coverage */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-slate-900 text-center mb-12">Global Regulatory Coverage</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { region: "North America", authorities: ["FDA", "Health Canada"] },
            { region: "Europe", authorities: ["EMA", "MHRA", "National CAs"] },
            { region: "Asia Pacific", authorities: ["PMDA", "NMPA", "TGA"] },
            { region: "Rest of World", authorities: ["ANVISA", "COFEPRIS", "Others"] }
          ].map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-2xl p-6 shadow-xl"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{region.region}</h3>
              <div className="space-y-1">
                {region.authorities.map((auth, i) => (
                  <p key={i} className="text-sm text-teal-100">{auth}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: "Strategic Planning", desc: "Development strategy and regulatory roadmaps" },
            { title: "Submission Management", desc: "End-to-end dossier preparation and filing" },
            { title: "Health Authority Interactions", desc: "Scientific advice and meeting support" },
            { title: "CMC Consulting", desc: "Chemistry, manufacturing, and controls expertise" },
            { title: "Labeling & Artwork", desc: "Global labeling strategy and compliance" },
            { title: "Post-Approval Support", desc: "Variations, renewals, and lifecycle management" }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}