// src/pages/services/QMSTechnologyService.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Settings,
  Brain,
  Shield,
  Cpu,
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  BarChart3,
  Database,
  Lock,
  TrendingUp,
  Workflow,
  AlertTriangle,
  FileCheck,
  Network,
  Sparkles,
  Layers,
  GitBranch,
  Activity,
  Target,
  Gauge,
  Boxes,
  Binary,
  Microscope,
  Server,
  CloudCog,
  ShieldCheck
} from 'lucide-react';

export default function QMSTechnologyService() {
  const [activeTab, setActiveTab] = useState(0);

  const qmsServices = [
    {
      title: "Risk-Based Quality Audits & CAPA Strategies",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      description: "AI-enabled risk-based audit planning to focus on high-impact compliance areas",
      features: [
        "AI-enabled risk-based audit planning to focus on high-impact compliance areas",
        "Mock audits and regulatory inspection readiness programs",
        "Development and implementation of Corrective and Preventive Action (CAPA) plans",
        "Root Cause Analysis (RCA) using machine learning for proactive risk mitigation"
      ]
    },
    {
      title: "SOP & Document Control Systems",
      icon: <FileCheck className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      description: "Cloud-based SOPs and document control systems for real-time access",
      features: [
        "Cloud-based Standard Operating Procedures (SOPs) and document control systems for real-time access",
        "AI-enabled version control and compliance tracking for SOP updates",
        "Automated alerts and workflows to ensure timely SOP revisions and approvals",
        "Integration with regulatory submission platforms for seamless documentation"
      ]
    },
    {
      title: "AI-Optimized QMS Implementation",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      description: "AI-driven risk assessment to identify potential quality gaps",
      features: [
        "AI-driven risk assessment to identify potential quality gaps",
        "Automated compliance tracking and deviation management",
        "Intelligent workflow automation for document control, audits, and CAPA",
        "Real-time QMS dashboard for continuous monitoring and predictive analytics"
      ]
    },
    {
      title: "GMP, GCP, and GDP Compliance",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      description: "End-to-end support for GMP, GCP, and GDP compliance",
      features: [
        "End-to-end support for GMP (Manufacturing), GCP (Clinical), and GDP (Distribution) compliance",
        "Assistance with regulatory inspections and adherence to FDA, EMA, WHO, CDSCO, and MHRA guidelines",
        "AI-driven compliance scorecards to measure and improve regulatory readiness",
        "Real-time monitoring of production, storage, and distribution processes to maintain pharmaceutical quality standards"
      ]
    }
  ];

  const technologyServices = [
    {
      title: "AI-Powered Pharmacovigilance Analytics",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      description: "Predictive safety signal detection using AI-driven analytics",
      features: [
        "Predictive safety signal detection using AI-driven analytics",
        "Automated case processing and adverse event classification",
        "Machine learning-based identification of drug safety trends",
        "Real-time data mining for global pharmacovigilance surveillance"
      ],
      stats: { value: "99.9%", label: "Accuracy Rate" }
    },
    {
      title: "Regulatory Compliance Automation",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "AI-driven regulatory monitoring to track global compliance updates",
      features: [
        "AI-driven regulatory monitoring to track global compliance updates",
        "Automated generation of regulatory submissions (CTD/eCTD, PSURs, DSURs, RMPs)",
        "Real-time validation of compliance gaps and recommendations",
        "Intelligent automation for audit trail management and reporting"
      ],
      stats: { value: "80%", label: "Time Saved" }
    },
    {
      title: "Blockchain-Enabled Data Integrity",
      icon: <Lock className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      description: "Tamper-proof blockchain solutions for pharmaceutical data security",
      features: [
        "Tamper-proof blockchain solutions for pharmaceutical data security",
        "Ensuring end-to-end data traceability in clinical trials and supply chains",
        "Smart contracts for automated regulatory submissions and compliance enforcement",
        "Preventing data falsification and enhancing transparency in drug development"
      ],
      stats: { value: "100%", label: "Data Integrity" }
    },
    {
      title: "Digital Twin Technology for Pharma",
      icon: <Boxes className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "AI-powered digital replicas of manufacturing and research processes",
      features: [
        "AI-powered digital replicas of manufacturing and research processes for predictive analysis",
        "Virtual simulation of drug production to optimize efficiency and quality",
        "Real-time monitoring of clinical trials, drug development, and regulatory workflows",
        "Early detection of manufacturing deviations and process failures before they impact production"
      ],
      stats: { value: "50%", label: "Efficiency Gain" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        {/* Animated circuit patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="3"
                fill="white"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full border border-white/20 mb-8"
            >
              <Cpu className="w-5 h-5 text-blue-200" />
              <span className="text-sm font-semibold">Quality Excellence Through Technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            >
              QMS & Technology-Driven<br />Pharma Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto"
            >
              Integrating AI, automation, and advanced analytics to enhance compliance and operational efficiency
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto"
            >
              At Medifodil Smart Pharma Solutions, we specialize in Quality Management Systems (QMS) and cutting-edge technology solutions. A robust QMS is essential for maintaining regulatory compliance, ensuring product quality, and minimizing operational risks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/contact" className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                All Services
              </Link>
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

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Award className="w-8 h-8" />, value: "100%", label: "GMP Compliance" },
            { icon: <Brain className="w-8 h-8" />, value: "99.9%", label: "AI Accuracy" },
            { icon: <Shield className="w-8 h-8" />, value: "50K+", label: "Audits Completed" },
            { icon: <TrendingUp className="w-8 h-8" />, value: "80%", label: "Efficiency Gain" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* QMS Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Quality Management Systems (QMS)</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive QMS solutions integrating AI-driven insights and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {qmsServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-200`}>
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                  <span className="font-bold text-sm">QMS Solution</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-700 mb-6 font-medium">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 backdrop-blur-sm">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        index === 0 ? 'text-blue-500' :
                        index === 1 ? 'text-purple-500' :
                        index === 2 ? 'text-green-500' : 'text-orange-500'
                      }`} />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Services Section */}
      <div className="bg-gradient-to-br from-slate-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-4">Technology-Driven Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions for modern pharmaceutical challenges
            </p>
          </motion.div>

          <div className="space-y-8">
            {technologyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white mb-4`}>
                      {service.icon}
                      <span className="font-bold">Technology {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                    {/* Stats badge */}
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                      <BarChart3 className="w-6 h-6" />
                      <div>
                        <div className="text-2xl font-black">{service.stats.value}</div>
                        <div className="text-xs opacity-90">{service.stats.label}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Key Capabilities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-colors">
                          <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          <h2 className="text-5xl font-black text-slate-900 mb-4">Why Choose Our QMS & Technology Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive benefits that transform your pharma operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Brain className="w-8 h-8" />, title: "AI-Powered", desc: "Advanced AI and machine learning integration", color: "from-blue-500 to-cyan-500" },
            { icon: <Shield className="w-8 h-8" />, title: "Compliance Ready", desc: "Full regulatory compliance assurance", color: "from-purple-500 to-pink-500" },
            { icon: <Zap className="w-8 h-8" />, title: "Automated", desc: "Intelligent workflow automation", color: "from-green-500 to-teal-500" },
            { icon: <TrendingUp className="w-8 h-8" />, title: "Optimized", desc: "Maximum efficiency and cost savings", color: "from-orange-500 to-red-500" }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Stack Visualization */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">Our Technology Stack</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Enterprise-grade technologies powering pharmaceutical excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-6 gap-6">
            {[
              { icon: <Brain className="w-8 h-8" />, label: "AI/ML" },
              { icon: <Binary className="w-8 h-8" />, label: "Blockchain" },
              { icon: <CloudCog className="w-8 h-8" />, label: "Cloud" },
              { icon: <Database className="w-8 h-8" />, label: "Big Data" },
              { icon: <Network className="w-8 h-8" />, label: "IoT" },
              { icon: <Boxes className="w-8 h-8" />, label: "Digital Twin" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  {tech.icon}
                </div>
                <p className="font-bold">{tech.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Settings className="w-20 h-20 mx-auto text-blue-200" />
            <h2 className="text-4xl lg:text-5xl font-black">Let's Build a Smarter Pharma Future Together</h2>
            <p className="text-xl text-blue-100">
              Medifodil Smart Pharma Solutions - Your trusted partner for QMS excellence and technology innovation
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