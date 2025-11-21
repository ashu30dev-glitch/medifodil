// src/pages/services/RegulatoryComplianceService.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Shield,
  FileCheck,
  Search,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  FileText,
  MapPin,
  Building2,
  Layers,
  Target,
  Clock,
  Award,
  ArrowRight,
  Zap,
  BarChart3,
  Workflow,
  ShieldCheck,
  Network,
  Settings,
  Lightbulb,
  BookOpen,
  GitBranch
} from 'lucide-react';

export default function RegulatoryComplianceService() {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const globalCoverage = [
    {
      region: "North America",
      authorities: ["FDA", "Health Canada", "COFEPRIS"],
      color: "from-blue-500 to-cyan-500",
      countries: "USA, Canada, Mexico"
    },
    {
      region: "Europe",
      authorities: ["EMA", "MHRA", "National CAs"],
      color: "from-green-500 to-teal-500",
      countries: "27 EU Member States + UK"
    },
    {
      region: "Asia Pacific",
      authorities: ["PMDA", "NMPA", "TGA", "CDSCO"],
      color: "from-purple-500 to-pink-500",
      countries: "Japan, China, Australia, India"
    },
    {
      region: "Rest of World",
      authorities: ["ANVISA", "SAHPRA", "Others"],
      color: "from-orange-500 to-red-500",
      countries: "Latin America, Africa, Middle East"
    }
  ];

  const coreServices = [
    {
      title: "Regulatory Intelligence & Market Entry Strategy",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Strategic insights for successful global market entry",
      features: [
        "Country-specific regulatory landscape assessments",
        "Customized market entry strategies based on local compliance",
        "Regulatory gap analysis for global expansion",
        "Competitive intelligence and benchmarking"
      ]
    },
    {
      title: "Audit & Inspection Readiness",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Comprehensive preparation for regulatory inspections",
      features: [
        "Mock inspections and internal audits",
        "FDA, EMA, CDSCO, and MHRA inspection preparation",
        "Development of CAPA plans",
        "Audit trail documentation and remediation"
      ]
    },
    {
      title: "End-to-End Compliance Workflow Development",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      description: "Digital transformation of regulatory processes",
      features: [
        "Digital transformation of regulatory workflows",
        "AI-driven document management systems",
        "Compliance training programs",
        "Process automation and optimization"
      ]
    },
    {
      title: "Regulatory Dossier Preparation & Submissions",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Expert preparation of regulatory submissions",
      features: [
        "IND/NDA/MAA dossier preparation",
        "CTD/eCTD formatting and publishing",
        "Regional submission strategies",
        "Lifecycle regulatory strategy"
      ]
    },
    {
      title: "Post-Market Compliance & Pharmacovigilance Alignment",
      icon: <Network className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      description: "Continuous compliance throughout product lifecycle",
      features: [
        "Continuous monitoring of evolving regulations",
        "Pharmacovigilance alignment",
        "Variations, renewals, and lifecycle management",
        "Post-approval change management"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Strategic Planning",
      desc: "Development strategy and regulatory roadmaps",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Submission Management",
      desc: "End-to-end dossier preparation and filing",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Health Authority Interactions",
      desc: "Scientific advice and meeting support",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "CMC Consulting",
      desc: "Chemistry, manufacturing, and controls expertise",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Labeling & Artwork",
      desc: "Global labeling strategy and compliance",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Post-Approval Support",
      desc: "Variations, renewals, and lifecycle management",
      icon: <GitBranch className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 100 + '%'],
                x: [null, (Math.random() - 0.5) * 50 + '%'],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 15 + 10,
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
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full border border-white/20 mb-8"
            >
              <Globe2 className="w-5 h-5 text-teal-200" />
              <span className="text-sm font-semibold">Global Regulatory Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            >
              Regulatory Compliance &<br />Global Strategy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-teal-100 mb-6 max-w-4xl mx-auto"
            >
              Navigate complex regulatory landscapes across multiple markets with confidence
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-teal-200 mb-8 max-w-3xl mx-auto"
            >
              Pharmaceutical companies must navigate an increasingly complex regulatory environment. We provide comprehensive solutions to ensure smooth market entry, adherence to evolving compliance standards, and audit readiness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/contact" className="group px-8 py-4 bg-white text-teal-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative SVG illustration */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 600" className="w-full h-full">
            <circle cx="350" cy="100" r="80" fill="white" opacity="0.1"/>
            <circle cx="320" cy="300" r="120" fill="white" opacity="0.1"/>
            <circle cx="380" cy="500" r="60" fill="white" opacity="0.1"/>
          </svg>
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
            { icon: <Globe2 className="w-8 h-8" />, value: "100+", label: "Countries Covered" },
            { icon: <Building2 className="w-8 h-8" />, value: "50+", label: "Regulatory Bodies" },
            { icon: <FileCheck className="w-8 h-8" />, value: "500+", label: "Submissions" },
            { icon: <Award className="w-8 h-8" />, value: "98%", label: "Success Rate" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-teal-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Regulatory Coverage */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">Global Regulatory Coverage</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expertise across all major regulatory authorities worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {globalCoverage.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredRegion(index)}
              onHoverEnd={() => setHoveredRegion(null)}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${region.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
              <div className={`relative bg-gradient-to-br ${region.color} text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{region.region}</h3>
                <div className="space-y-2 mb-4">
                  {region.authorities.map((auth, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm opacity-90">
                      <CheckCircle className="w-4 h-4" />
                      <span>{auth}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs opacity-75">{region.countries}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* World map visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
        >
          <svg viewBox="0 0 1000 500" className="w-full h-auto">
            <defs>
              <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#0d9488', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.8}} />
              </linearGradient>
            </defs>
            {/* Simplified world map representation */}
            <rect x="0" y="0" width="1000" height="500" fill="#f8fafc" rx="20"/>

            {/* Continents as abstract shapes */}
            <ellipse cx="200" cy="180" rx="120" ry="100" fill="url(#mapGrad)" opacity="0.6"/>
            <text x="200" y="190" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="bold">North America</text>

            <ellipse cx="480" cy="200" rx="100" ry="90" fill="url(#mapGrad)" opacity="0.6"/>
            <text x="480" y="210" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="bold">Europe</text>

            <ellipse cx="750" cy="220" rx="140" ry="110" fill="url(#mapGrad)" opacity="0.6"/>
            <text x="750" y="230" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="bold">Asia Pacific</text>

            <ellipse cx="300" cy="380" rx="90" ry="70" fill="url(#mapGrad)" opacity="0.6"/>
            <text x="300" y="390" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="bold">Latin America</text>

            {/* Connection lines */}
            <line x1="200" y1="180" x2="480" y2="200" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
            <line x1="480" y1="200" x2="750" y2="220" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
            <line x1="200" y1="180" x2="300" y2="380" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
          </svg>
        </motion.div>
      </div>

      {/* Core Services Section */}
      <div className="bg-gradient-to-br from-slate-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end regulatory solutions for every stage of product development
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
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200 hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white mb-4`}>
                      {service.icon}
                      <span className="font-bold">Service {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-teal-50 transition-colors">
                          <Zap className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
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
          <h2 className="text-5xl font-black text-slate-900 mb-4">Additional Regulatory Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Supporting services to complement your regulatory strategy
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
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-teal-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Timeline */}
      <div className="bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">Our Regulatory Process</h2>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto">
              A systematic approach to regulatory success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <Search className="w-8 h-8" />, title: "Analysis", desc: "Regulatory landscape assessment" },
              { icon: <Target className="w-8 h-8" />, title: "Strategy", desc: "Customized regulatory plan" },
              { icon: <FileText className="w-8 h-8" />, title: "Preparation", desc: "Dossier development" },
              { icon: <CheckCircle className="w-8 h-8" />, title: "Submission", desc: "Filing and tracking" },
              { icon: <Award className="w-8 h-8" />, title: "Approval", desc: "Market authorization" }
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
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-teal-200">{step.desc}</p>
                  </div>
                </div>
                {i < 4 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/40 w-6 h-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Shield className="w-20 h-20 mx-auto text-teal-200" />
            <h2 className="text-4xl lg:text-5xl font-black">Let's Build a Smarter Pharma Future Together</h2>
            <p className="text-xl text-teal-100">
              Medifodil Smart Pharma Solutions - Your trusted partner for global regulatory success
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-teal-600 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
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