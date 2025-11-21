// src/pages/services/ClinicalResearchService.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Microscope,
  Users,
  BarChart3,
  ShieldCheck,
  FileText,
  Activity,
  Target,
  Database,
  ClipboardCheck,
  TrendingUp,
  Award,
  ArrowRight,
  Zap,
  CheckCircle,
  Brain,
  Beaker,
  Stethoscope,
  Heart,
  Layers,
  GitBranch,
  Globe2,
  Calendar,
  Settings,
  UserCheck,
  FileCheck,
  Search
} from 'lucide-react';

export default function ClinicalResearchService() {
  const [activePhase, setActivePhase] = useState(null);

  const phases = [
    {
      phase: "Phase I",
      focus: "Safety & Dosing",
      participants: "20-100",
      color: "from-blue-500 to-cyan-500",
      description: "First-in-human studies to evaluate safety, tolerability, and pharmacokinetics",
      objectives: ["Dose escalation", "Safety assessment", "PK/PD evaluation"]
    },
    {
      phase: "Phase II",
      focus: "Efficacy & Safety",
      participants: "100-300",
      color: "from-purple-500 to-pink-500",
      description: "Proof-of-concept studies to evaluate efficacy and optimal dosing",
      objectives: ["Efficacy signals", "Dose selection", "Expanded safety"]
    },
    {
      phase: "Phase III",
      focus: "Large-scale Testing",
      participants: "300-3000",
      color: "from-green-500 to-teal-500",
      description: "Confirmatory studies for regulatory approval",
      objectives: ["Efficacy confirmation", "Safety database", "Regulatory submission"]
    },
    {
      phase: "Phase IV",
      focus: "Post-Market",
      participants: "1000+",
      color: "from-orange-500 to-red-500",
      description: "Post-approval studies for real-world evidence and long-term safety",
      objectives: ["Real-world data", "Long-term safety", "Additional indications"]
    }
  ];

  const coreServices = [
    {
      title: "Protocol Development & Study Design",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Custom clinical trial protocol design with scientific and regulatory alignment",
      features: [
        "Custom clinical trial protocol design",
        "Scientific and regulatory alignment for protocol approvals",
        "Feasibility analysis and site selection strategy",
        "Statistical design and sample size determination"
      ],
      tags: ["Protocol writing", "Statistical design", "Endpoint selection"]
    },
    {
      title: "Clinical Data Management & Biostatistics",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "End-to-end data management and advanced statistical analysis",
      features: [
        "Electronic Data Capture (EDC) system setup and configuration",
        "Data quality control and validation procedures",
        "Statistical analysis and reporting",
        "Database lock and archival procedures"
      ],
      tags: ["EDC setup", "Data cleaning", "Statistical analysis"]
    },
    {
      title: "Site & Investigator Support",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      description: "Comprehensive site management and investigator engagement",
      features: [
        "Site feasibility assessments and investigator training",
        "End-to-end operational support for trial sites",
        "Ensuring compliance with ICH-GCP and ethical guidelines",
        "Risk-based monitoring and site performance tracking"
      ],
      tags: ["Site selection", "CRA services", "Risk-based monitoring"]
    },
    {
      title: "Regulatory & Ethics Committee Submissions",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Expert preparation and submission of regulatory documents",
      features: [
        "Preparation of Clinical Trial Applications (CTAs)",
        "Submission support for IRBs and Ethics Committees",
        "Ensuring compliance with country-specific regulations",
        "Response to regulatory queries and amendments"
      ],
      tags: ["GCP audits", "SOPs", "Vendor oversight"]
    },
    {
      title: "Real-World Evidence (RWE) & Post-Market Studies",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      description: "Real-world evidence generation and post-market surveillance",
      features: [
        "Patient registry and observational study design",
        "Data collection and analysis for real-world patient outcomes",
        "Post-market surveillance for long-term safety",
        "Evidence generation for expanded indications"
      ],
      tags: ["RWE studies", "Patient registries", "Outcomes research"]
    }
  ];

  const additionalServices = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Study Design",
      description: "Innovative trial designs optimized for success"
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: "Lab Services",
      description: "Central lab coordination and sample management"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient Recruitment",
      description: "Strategic patient enrollment and retention"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Regulatory Submissions",
      description: "IND/CTA preparation and submissions"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Safety Monitoring",
      description: "DSMB support and safety reporting"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "GCP audits and quality oversight"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        {/* Animated DNA helix background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            {[...Array(10)].map((_, i) => (
              <g key={i}>
                <motion.ellipse
                  cx="500"
                  cy={100 + i * 100}
                  rx="200"
                  ry="30"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                />
              </g>
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
              <Microscope className="w-5 h-5 text-pink-200" />
              <span className="text-sm font-semibold">Clinical Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            >
              Clinical Research Support
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto"
            >
              Comprehensive support for clinical trials from design through execution
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/contact" className="group px-8 py-4 bg-white text-pink-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
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
            { icon: <Microscope className="w-8 h-8" />, value: "200+", label: "Clinical Trials" },
            { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Participants" },
            { icon: <Globe2 className="w-8 h-8" />, value: "30+", label: "Countries" },
            { icon: <Award className="w-8 h-8" />, value: "95%", label: "Success Rate" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-pink-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trial Phases Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Full Phase Coverage</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert support across all clinical trial phases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setActivePhase(index)}
              onHoverEnd={() => setActivePhase(null)}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
              <div className={`relative bg-gradient-to-br ${phase.color} text-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full flex flex-col`}>
                <div className="text-5xl font-black mb-3">{phase.phase}</div>
                <div className="text-xl font-bold mb-2">{phase.focus}</div>
                <div className="text-sm text-white/80 mb-4">{phase.participants} participants</div>

                {activePhase === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-white/20 text-left"
                  >
                    <p className="text-sm mb-3 opacity-90">{phase.description}</p>
                    <div className="space-y-1">
                      {phase.objectives.map((obj, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="w-3 h-3" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Services Section */}
      <div className="bg-gradient-to-br from-slate-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end clinical research solutions tailored to your needs
            </p>
          </motion.div>

          <div className="space-y-8">
            {coreServices.map((service, index) => (
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
                      <span className="font-bold">Service {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg text-sm font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-pink-50 hover:from-pink-50 hover:to-purple-50 transition-colors">
                          <Zap className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
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

      {/* Additional Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Additional Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Supporting capabilities to enhance your clinical research
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-pink-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clinical Trial Process */}
      <div className="bg-gradient-to-br from-pink-900 via-purple-900 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">Our Clinical Research Process</h2>
            <p className="text-xl text-pink-200 max-w-3xl mx-auto">
              A systematic approach to clinical trial success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Planning", desc: "Study design" },
              { icon: <FileText className="w-8 h-8" />, title: "Protocol", desc: "Development" },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Approval", desc: "Ethics & Regulatory" },
              { icon: <Users className="w-8 h-8" />, title: "Execution", desc: "Site activation" },
              { icon: <Database className="w-8 h-8" />, title: "Monitoring", desc: "Data collection" },
              { icon: <Award className="w-8 h-8" />, title: "Completion", desc: "Analysis & reporting" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black mb-2">{i + 1}</div>
                    <h3 className="text-sm font-bold mb-1">{step.title}</h3>
                    <p className="text-xs text-pink-200">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Why Choose Our Clinical Research Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven expertise in delivering successful clinical trials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Stethoscope className="w-10 h-10" />,
              title: "Clinical Expertise",
              description: "Experienced team with deep therapeutic area knowledge",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: <BarChart3 className="w-10 h-10" />,
              title: "Data-Driven Insights",
              description: "Advanced analytics and real-time trial intelligence",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: <ClipboardCheck className="w-10 h-10" />,
              title: "Quality Assurance",
              description: "GCP-compliant processes and rigorous quality control",
              color: "from-green-500 to-teal-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border border-slate-200">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-pink-600 via-pink-700 to-purple-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Microscope className="w-20 h-20 mx-auto text-pink-200" />
            <h2 className="text-4xl lg:text-5xl font-black">Let's Build a Smarter Pharma Future Together</h2>
            <p className="text-xl text-pink-100">
              Medifodil Smart Pharma Solutions - Your trusted partner for clinical research excellence
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-pink-600 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
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