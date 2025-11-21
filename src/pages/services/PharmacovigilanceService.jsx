import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Clock, FileText, Brain, Globe, TrendingUp, AlertTriangle, Database, Zap, CheckCircle, ArrowRight, Activity } from 'lucide-react';

export default function PharmacovigilanceService() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Adverse Event Detection & Case Processing",
      description: "End-to-end adverse event case management, from intake to regulatory submission with AI-powered automation.",
      features: [
        "Case triaging, seriousness assessment, and medical review",
        "Compliance with FDA (FAERS), EMA (EudraVigilance), WHO UMC",
        "India's PvPI requirements adherence",
        "Real-time case tracking and reporting"
      ],
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Signal Detection & Risk Analysis",
      description: "AI-based safety signal identification and validation with comprehensive risk assessment.",
      features: [
        "AI-powered safety signal identification and validation",
        "Risk-benefit analysis for regulatory actions",
        "Periodic Safety Update Reports (PSURs)",
        "Risk Management Plans (RMPs) and PSMFs"
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Medical Literature Surveillance",
      description: "Continuous monitoring of scientific publications and research for safety concerns.",
      features: [
        "Continuous monitoring of scientific journals",
        "Literature screening for adverse events",
        "Case studies and clinical research analysis",
        "Timely reporting to global authorities"
      ],
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Global Regulatory Safety Submissions",
      description: "Preparation and submission of safety reports compliant with international standards.",
      features: [
        "Individual Case Safety Reports (ICSRs)",
        "Development Safety Update Reports (DSURs)",
        "ICH E2E pharmacovigilance guidelines compliance",
        "Multi-region regulatory submissions"
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Automation & AI-Enabled Pharmacovigilance",
      description: "Next-generation automation and AI for enhanced safety monitoring efficiency.",
      features: [
        "Robotic Process Automation (RPA) for case processing",
        "Natural Language Processing (NLP) for data extraction",
        "AI-powered predictive analytics",
        "Risk mitigation through machine learning"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

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
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                </span>
                <span className="text-sm font-semibold">Drug Safety Excellence</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-black leading-tight"
              >
                Pharmacovigilance & Drug Safety
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-blue-100 leading-relaxed"
              >
                AI-powered safety monitoring and regulatory compliance for pharmaceutical products worldwide
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-blue-200"
              >
                Ensuring drug safety is a top priority for pharmaceutical companies, regulators, and healthcare providers. Our services leverage automation, AI-driven analytics, and global expertise to identify, assess, and mitigate risks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/contact" className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <img
                    src="https://img.freepik.com/free-vector/pharmacovigilance-abstract-concept-illustration_335657-3895.jpg"
                    alt="Pharmacovigilance"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Shield className="w-8 h-8" />, value: "24/7", label: "Safety Monitoring" },
            { icon: <Globe className="w-8 h-8" />, value: "100+", label: "Countries Covered" },
            { icon: <Clock className="w-8 h-8" />, value: "99.9%", label: "Compliance Rate" },
            { icon: <Activity className="w-8 h-8" />, value: "50K+", label: "Cases Processed" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Our Capabilities</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive pharmacovigilance solutions powered by cutting-edge technology and global expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: "24/7 Safety Monitoring",
              desc: "Real-time adverse event detection and reporting with continuous surveillance",
              gradient: "from-blue-500 to-blue-600"
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Case Processing",
              desc: "Automated ICSR generation and submission with AI-powered workflows",
              gradient: "from-purple-500 to-purple-600"
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Signal Detection",
              desc: "AI-powered pattern recognition in safety data for early risk identification",
              gradient: "from-pink-500 to-pink-600"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Risk Management",
              desc: "Comprehensive REMS and risk minimization strategies",
              gradient: "from-orange-500 to-orange-600"
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Compliance",
              desc: "Adherence to FDA, EMA, and ICH guidelines across all regions",
              gradient: "from-green-500 to-green-600"
            },
            {
              icon: <Database className="w-8 h-8" />,
              title: "PSUR/PBRER",
              desc: "Periodic safety update reports and submissions with expert analysis",
              gradient: "from-teal-500 to-teal-600"
            }
          ].map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 hover:border-blue-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className={`relative w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {capability.icon}
              </div>

              <h3 className="relative text-2xl font-bold text-slate-900 mb-3">{capability.title}</h3>
              <p className="relative text-slate-600 leading-relaxed">{capability.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end pharmacovigilance solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Navigation */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all ${
                    activeService === index
                      ? 'bg-white shadow-xl border-2 border-blue-500'
                      : 'bg-white/50 hover:bg-white hover:shadow-lg border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${service.color}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg">{service.title}</h3>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Service Details */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
            >
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${services[activeService].color} text-white mb-6`}>
                {services[activeService].icon}
                <span className="font-bold">{services[activeService].title}</span>
              </div>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Key Features</h4>
                {services[activeService].features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Visual Process Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">How We Work</h2>
          <p className="text-xl text-slate-600">
            Our streamlined pharmacovigilance process ensures safety and compliance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-xl">
              <img
                src="https://img.freepik.com/free-vector/pharmacovigilance-abstract-concept-illustration_335657-3895.jpg"
                alt="Drug Safety Research"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-xl">
              <img
                src="https://img.freepik.com/free-vector/pharmacovigilance-concept-illustration_114360-7504.jpg"
                alt="Medical Analysis"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-black">Let's Build a Smarter Pharma Future Together</h2>
            <p className="text-xl text-blue-100">
              Partner with Medifodil Smart Pharma Solutions for world-class pharmacovigilance services
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
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