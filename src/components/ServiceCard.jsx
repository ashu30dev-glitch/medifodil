// src/components/ServiceCard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: 1,
      category: "pharmacovigilance",
      title: "Pharmacovigilance & Drug Safety",
      shortDesc: "Ensuring drug safety through AI-driven monitoring",
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      link: "/services/pharmacovigilance"
    },
    {
      id: 2,
      category: "medical-writing",
      title: "Medical Writing Services",
      shortDesc: "High-quality, regulatory-compliant scientific documentation",
      gradient: "from-purple-500 to-purple-700",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      link: "/services/medical-writing"
    },
    {
      id: 3,
      category: "regulatory",
      title: "Regulatory Compliance & Global Strategy",
      shortDesc: "Navigate complex regulatory landscapes",
      gradient: "from-teal-500 to-teal-700",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-700",
      link: "/services/regulatory-compliance"
    },
    {
      id: 4,
      category: "clinical",
      title: "Clinical Research Support",
      shortDesc: "End-to-end clinical trial design and execution",
      gradient: "from-pink-500 to-purple-700",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-700",
      link: "/services/clinical-research"
    },
    {
      id: 5,
      category: "ip",
      title: "Intellectual Property & Commercialization",
      shortDesc: "Strategic IP management and patent portfolio",
      gradient: "from-amber-500 to-orange-700",
      bgColor: "bg-gradient-to-br from-amber-500 to-orange-700",
      link: "/services/intellectual-property"
    },
    {
      id: 6,
      category: "qms",
      title: "QMS & Technology-Driven Solutions",
      shortDesc: "Modern quality management powered by innovation",
      gradient: "from-emerald-500 to-teal-700",
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-700",
      link: "/services/qms-technology"
    }
  ];

  const tabs = [
    { id: "all", name: "All Services" },
    { id: "pharmacovigilance", name: "Pharmacovigilance" },
    { id: "medical-writing", name: "Medical Writing" },
    { id: "regulatory", name: "Regulatory" },
    { id: "clinical", name: "Clinical Research" },
    { id: "ip", name: "IP & Commercialization" },
    { id: "qms", name: "QMS & Technology" }
  ];

  const filteredServices = activeTab === "all"
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Comprehensive Pharmaceutical Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Innovative solutions across the pharmaceutical lifecycle—from drug safety to commercialization
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12 overflow-x-auto pb-2"
        >
          <div className="flex gap-3 justify-center min-w-max px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 shadow-md"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Top Section */}
                <div className={`relative ${service.bgColor} h-48 flex items-center justify-center overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
                  </div>

                  {/* Decorative Blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                  {/* Icon */}
                  <div className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.id === 1 && (
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {service.id === 2 && (
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {service.id === 3 && (
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {service.id === 4 && (
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {service.id === 5 && (
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {service.id === 6 && (
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-colors pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}