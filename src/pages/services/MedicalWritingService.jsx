// src/pages/services/MedicalWritingService.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Users,
  Shield,
  Target,
  Lock,
  CheckCircle,
  BookOpen,
  Microscope,
  ClipboardList,
  TrendingUp,
  Award,
  ArrowRight,
  Lightbulb,
  Globe2,
  Sparkles,
  PenTool,
  FileCheck,
  Layers,
  Zap
} from 'lucide-react';

export default function MedicalWritingService() {
  const [activeTab, setActiveTab] = useState(0);

  const expertise = [
    {
      id: 0,
      title: "Regulatory Writing",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Comprehensive regulatory documentation ensuring full compliance with global standards",
      services: [
        "IND/NDA/BLA submissions",
        "CTD/eCTD modules (2.3, 2.5, 2.7)",
        "Briefing documents & meeting packages",
        "Clinical overviews & summaries",
        "Response to regulatory queries"
      ]
    },
    {
      id: 1,
      title: "Clinical Writing",
      icon: <Microscope className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Expert clinical documentation from protocol to final study reports",
      services: [
        "Clinical Study Reports (CSRs)",
        "Study protocols & amendments",
        "Statistical Analysis Plans (SAPs)",
        "Informed Consent Forms (ICFs)",
        "Clinical study synopses"
      ]
    },
    {
      id: 2,
      title: "Medical Communications",
      icon: <PenTool className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      description: "Strategic medical content for diverse audiences and platforms",
      services: [
        "Peer-reviewed manuscripts",
        "Conference abstracts & posters",
        "Slide decks & presentations",
        "Patient education materials",
        "Scientific newsletters"
      ]
    },
    {
      id: 3,
      title: "Pharmacovigilance Writing",
      icon: <ClipboardList className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Safety documentation aligned with global pharmacovigilance requirements",
      services: [
        "Investigator's Brochure (IB) updates",
        "Development Safety Update Reports (DSURs)",
        "Risk Management Plans (RMPs)",
        "Aggregate safety reports",
        "Safety narratives"
      ]
    },
    {
      id: 4,
      title: "Market Access & HEOR Writing",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      description: "Value-based content supporting market access and reimbursement",
      services: [
        "Health economic models",
        "Value dossiers",
        "Budget impact analyses",
        "HEOR publications",
        "Payer evidence summaries"
      ]
    },
    {
      id: 5,
      title: "Medical Education",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      description: "Educational content for healthcare professionals and patients",
      services: [
        "CME/CE programs",
        "Training materials",
        "Disease awareness content",
        "Mechanism of action documents",
        "Clinical practice guidelines"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Highly skilled medical writers with backgrounds in life sciences, clinical research, and regulatory affairs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Adherence to global guidelines such as ICH, EMA, FDA, and WHO",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Scientific Accuracy",
      description: "Evidence-based content backed by the latest research and regulatory updates",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Customized Approach",
      description: "Tailored solutions to meet the unique requirements of clients",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Confidentiality",
      description: "Strict adherence to data protection and confidentiality standards",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const documentTypes = [
    {
      title: "Clinical Study Reports",
      items: ["CSR authoring", "Statistical analysis integration", "ICH E3 compliance", "Quality control review"],
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Regulatory Submissions",
      items: ["IND/NDA documents", "CTD/eCTD modules", "Briefing packages", "Regulatory responses"],
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Clinical Protocols",
      items: ["Study protocols", "SAPs", "Informed consent forms", "Case report forms"],
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      title: "Scientific Publications",
      items: ["Manuscripts", "Abstracts", "Posters and presentations", "Literature reviews"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Safety Documents",
      items: ["IB updates", "DSUR", "RMP documents", "Safety narratives"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Medical Communications",
      items: ["Slide decks", "Patient materials", "Educational content", "Advisory board materials"],
      icon: <PenTool className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5
              }}
              animate={{
                y: [null, Math.random() * 100 + '%'],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full border border-white/20"
              >
                <Sparkles className="w-5 h-5 text-purple-200" />
                <span className="text-sm font-semibold">Scientific Excellence</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-black leading-tight"
              >
                Medical Writing Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-purple-100 leading-relaxed"
              >
                Expert scientific documentation that meets the highest regulatory and quality standards
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-purple-200"
              >
                At Medifodil Smart Pharma Solutions, we provide high-quality, regulatory-compliant, and scientifically sound medical writing services for pharmaceutical, biotechnology, and healthcare industries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/contact" className="group px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                  All Services
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <svg viewBox="0 0 400 400" className="w-full h-auto">
                    <defs>
                      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#e0c3fc', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#8ec5fc', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    {/* Document stack illustration */}
                    <rect x="80" y="100" width="240" height="280" rx="15" fill="white" opacity="0.95" stroke="url(#docGrad)" strokeWidth="3"/>
                    <rect x="60" y="80" width="240" height="280" rx="15" fill="white" opacity="0.8" stroke="url(#docGrad)" strokeWidth="3"/>
                    <rect x="100" y="120" width="240" height="280" rx="15" fill="white" stroke="url(#docGrad)" strokeWidth="3"/>

                    {/* Document lines */}
                    <line x1="130" y1="180" x2="310" y2="180" stroke="url(#docGrad)" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="130" y1="210" x2="280" y2="210" stroke="url(#docGrad)" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="130" y1="240" x2="310" y2="240" stroke="url(#docGrad)" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="130" y1="270" x2="260" y2="270" stroke="url(#docGrad)" strokeWidth="4" strokeLinecap="round"/>

                    {/* Pen icon */}
                    <circle cx="300" cy="340" r="35" fill="url(#docGrad)"/>
                    <path d="M 285 355 L 315 325 L 320 330 L 290 360 Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to excellence ensures your documents exceed expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Document Expertise Section */}
      <div className="bg-gradient-to-br from-slate-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-4">Document Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive documentation services across all therapeutic areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500 hover:shadow-xl hover:border-purple-600 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {doc.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{doc.title}</h3>
                </div>
                <ul className="space-y-3">
                  {doc.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Medical Writing Expertise Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Our Medical Writing Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialized writing services tailored to your specific needs
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {expertise.map((item) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.05 }}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                activeTab === item.id
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                  : 'bg-white text-slate-700 hover:shadow-md border border-slate-200'
              }`}
            >
              {item.icon}
              {item.title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200"
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r ${expertise[activeTab].color} text-white mb-6`}>
                {expertise[activeTab].icon}
                <span className="font-bold text-lg">{expertise[activeTab].title}</span>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {expertise[activeTab].description}
              </p>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Key Services</h4>
              <ul className="space-y-4">
                {expertise[activeTab].services.map((service, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-purple-50 hover:from-purple-50 hover:to-pink-50 transition-all"
                  >
                    <Zap className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Decorative illustration */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className={`absolute inset-0 bg-gradient-to-br ${expertise[activeTab].color} rounded-3xl blur-3xl opacity-20`}></div>
                <svg viewBox="0 0 400 400" className="relative w-full h-auto">
                  <defs>
                    <linearGradient id={`expertGrad${activeTab}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: activeTab === 0 ? '#3b82f6' : activeTab === 1 ? '#a855f7' : activeTab === 2 ? '#10b981' : activeTab === 3 ? '#f97316' : activeTab === 4 ? '#6366f1' : '#eab308', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: activeTab === 0 ? '#06b6d4' : activeTab === 1 ? '#ec4899' : activeTab === 2 ? '#14b8a6' : activeTab === 3 ? '#ef4444' : activeTab === 4 ? '#a855f7' : '#f97316', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>

                  {/* Dynamic illustration based on active tab */}
                  <circle cx="200" cy="200" r="150" fill={`url(#expertGrad${activeTab})`} opacity="0.1"/>
                  <circle cx="200" cy="200" r="100" fill={`url(#expertGrad${activeTab})`} opacity="0.2"/>
                  <circle cx="200" cy="200" r="50" fill={`url(#expertGrad${activeTab})`} opacity="0.3"/>

                  {/* Center icon representation */}
                  <rect x="150" y="150" width="100" height="120" rx="10" fill="white" stroke={`url(#expertGrad${activeTab})`} strokeWidth="3"/>
                  <line x1="170" y1="180" x2="230" y2="180" stroke={`url(#expertGrad${activeTab})`} strokeWidth="3" strokeLinecap="round"/>
                  <line x1="170" y1="200" x2="220" y2="200" stroke={`url(#expertGrad${activeTab})`} strokeWidth="3" strokeLinecap="round"/>
                  <line x1="170" y1="220" x2="230" y2="220" stroke={`url(#expertGrad${activeTab})`} strokeWidth="3" strokeLinecap="round"/>
                  <line x1="170" y1="240" x2="210" y2="240" stroke={`url(#expertGrad${activeTab})`} strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-slate-200">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${expertise[activeTab].color} text-white rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all`}
            >
              Learn More About {expertise[activeTab].title}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">Our Writing Process</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              A systematic approach ensuring quality and compliance at every step
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FileText className="w-8 h-8" />, title: "Planning", desc: "Document strategy & outline" },
              { icon: <PenTool className="w-8 h-8" />, title: "Writing", desc: "Content development" },
              { icon: <CheckCircle className="w-8 h-8" />, title: "Review", desc: "Quality assurance" },
              { icon: <Award className="w-8 h-8" />, title: "Delivery", desc: "Final submission" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">{i + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-purple-200">{step.desc}</p>
                  </div>
                </div>
                {i < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-white/40 w-8 h-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Globe2 className="w-20 h-20 mx-auto text-purple-200" />
            <h2 className="text-4xl lg:text-5xl font-black">Let's Build a Smarter Pharma Future Together</h2>
            <p className="text-xl text-purple-100">
              Medifodil Smart Pharma Solutions - Your trusted partner for world-class medical writing
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Contact Us Today
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}