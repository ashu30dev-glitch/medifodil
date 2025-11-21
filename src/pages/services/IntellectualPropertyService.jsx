// src/pages/services/IntellectualPropertyService.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Rocket,
  Brain,
  Lock,
  DollarSign,
  FileText,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  BarChart3,
  Globe2,
  Search,
  Briefcase,
  Network,
  Sparkles,
  Scale,
  Key,
  Building2,
  Handshake,
  LineChart,
  Package,
  ShieldCheck,
  Layers
} from 'lucide-react';

export default function IntellectualPropertyService() {
  const [activeService, setActiveService] = useState(0);

  const coreServices = [
    {
      title: "AI-Enhanced Patent Landscaping",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Leverage AI-driven competitive intelligence for strategic patent analytics",
      features: [
        "AI-driven competitive intelligence and patent analytics",
        "Identification of white spaces and R&D opportunities",
        "Market intelligence for strategic decision-making",
        "Technology trend analysis and forecasting"
      ],
      stats: { value: "10K+", label: "Patents Analyzed" }
    },
    {
      title: "Freedom-to-Operate (FTO) Analysis",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Comprehensive risk assessment for patent infringement mitigation",
      features: [
        "Risk assessment for potential patent infringements",
        "Identification of licensing or acquisition opportunities",
        "Strategic guidance on patent filings and protection",
        "Clearance searches and opinion letters"
      ],
      stats: { value: "500+", label: "FTO Reports" }
    },
    {
      title: "Tech Transfer & Licensing",
      icon: <Handshake className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      description: "Facilitate strategic partnerships and technology commercialization",
      features: [
        "Facilitation of technology scouting and collaboration",
        "Drafting and negotiation of licensing agreements",
        "Support for academic and industry partnerships",
        "Deal structuring and due diligence"
      ],
      stats: { value: "200+", label: "Deals Closed" }
    },
    {
      title: "Patent Filing & Portfolio Management",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "End-to-end patent prosecution and lifecycle management",
      features: [
        "End-to-end patent drafting, prosecution, and filings",
        "IP lifecycle management and enforcement strategies",
        "Cost optimization for patent protection",
        "Global patent portfolio strategy"
      ],
      stats: { value: "1000+", label: "Patents Filed" }
    },
    {
      title: "Strategic IP Monetization & Commercialization",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      description: "Maximize IP value through strategic monetization strategies",
      features: [
        "IP valuation and revenue generation models",
        "Business development support for commercialization",
        "Negotiation of licensing, M&A, and VC deals",
        "Market access and pricing strategies"
      ],
      stats: { value: "$500M+", label: "Value Generated" }
    }
  ];

  const additionalServices = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Patent Strategy",
      desc: "Comprehensive patent portfolio development and management",
      features: ["Freedom to operate", "Patent prosecution", "Portfolio analysis"],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Assessment",
      desc: "Strategic market analysis and commercial viability",
      features: ["Competitive landscape", "Pricing strategy", "Market access"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership & Licensing",
      desc: "Strategic alliances and out-licensing opportunities",
      features: ["Deal structuring", "Due diligence", "Negotiation support"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch Planning",
      desc: "Pre-launch and commercialization strategy",
      features: ["Brand strategy", "HCP engagement", "Patient programs"],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI-Powered Analytics",
      description: "Advanced AI and machine learning for patent intelligence",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "IP Protection",
      description: "Robust strategies to protect your innovations globally",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Value Maximization",
      description: "Strategic monetization for maximum ROI",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Strategic Partnerships",
      description: "Connect with the right partners for commercialization",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        {/* Animated lightbulb icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0.1
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 100 + '%'],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Lightbulb className="w-8 h-8 text-white" />
            </motion.div>
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
              <Sparkles className="w-5 h-5 text-amber-200" />
              <span className="text-sm font-semibold">Innovation Protection & Monetization</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            >
              Intellectual Property &<br />Commercialization
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-amber-100 mb-6 max-w-4xl mx-auto"
            >
              Maximize the value of your pharmaceutical innovations
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-amber-200 mb-8 max-w-3xl mx-auto"
            >
              Pharmaceutical innovation requires robust intellectual property protection, strategic commercialization, and technology transfer capabilities. Our IP services help clients identify, protect, and monetize their innovations while minimizing infringement risks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/contact" className="group px-8 py-4 bg-white text-amber-600 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative illustration */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 500 600" className="w-full h-full">
            <circle cx="400" cy="150" r="100" fill="white" opacity="0.1"/>
            <circle cx="450" cy="350" r="80" fill="white" opacity="0.1"/>
            <circle cx="380" cy="500" r="60" fill="white" opacity="0.1"/>
            <path d="M 380 100 L 420 140 L 380 180 L 340 140 Z" fill="white" opacity="0.05"/>
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
            { icon: <FileText className="w-8 h-8" />, value: "1000+", label: "Patents Filed" },
            { icon: <DollarSign className="w-8 h-8" />, value: "$500M+", label: "IP Value" },
            { icon: <Handshake className="w-8 h-8" />, value: "200+", label: "Licensing Deals" },
            { icon: <Award className="w-8 h-8" />, value: "95%", label: "Success Rate" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
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
          <h2 className="text-5xl font-black text-slate-900 mb-4">Why Choose Our IP Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive IP solutions powered by advanced technology and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Services Section */}
      <div className="bg-gradient-to-br from-slate-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-4">Comprehensive IP Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end intellectual property solutions for pharmaceutical innovation
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

                    {/* Stats badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                      <TrendingUp className="w-5 h-5" />
                      <div>
                        <div className="text-xl font-black">{service.stats.value}</div>
                        <div className="text-xs opacity-90">{service.stats.label}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-amber-50 hover:from-amber-50 hover:to-orange-50 transition-colors">
                          <Zap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
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
            Supporting capabilities for complete IP lifecycle management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* IP Process Timeline */}
      <div className="bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">IP Lifecycle Process</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              From innovation to monetization - a strategic approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <Search className="w-8 h-8" />, title: "Discovery", desc: "Patent landscape analysis" },
              { icon: <Lock className="w-8 h-8" />, title: "Protection", desc: "Patent filing strategy" },
              { icon: <Scale className="w-8 h-8" />, title: "Assessment", desc: "FTO & risk analysis" },
              { icon: <Handshake className="w-8 h-8" />, title: "Licensing", desc: "Partnership development" },
              { icon: <DollarSign className="w-8 h-8" />, title: "Monetization", desc: "Value realization" }
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
                    <p className="text-sm text-amber-200">{step.desc}</p>
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

      {/* Value Proposition Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Maximize Your Innovation Value</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Our comprehensive IP services combine cutting-edge technology with deep industry expertise to help you protect, commercialize, and monetize your pharmaceutical innovations.
              </p>
              <ul className="space-y-4">
                {[
                  "AI-powered patent analytics and competitive intelligence",
                  "Global patent filing and portfolio management",
                  "Strategic licensing and partnership facilitation",
                  "Expert IP valuation and monetization strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="ipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 0.8}} />
                    <stop offset="100%" style={{stopColor: '#ea580c', stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
                {/* Innovation cycle visualization */}
                <circle cx="200" cy="200" r="150" fill="url(#ipGrad)" opacity="0.1"/>
                <circle cx="200" cy="200" r="100" fill="url(#ipGrad)" opacity="0.2"/>
                <circle cx="200" cy="200" r="50" fill="url(#ipGrad)" opacity="0.3"/>

                {/* Patent symbols */}
                <g transform="translate(200, 200)">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 120;
                    const y = Math.sin(rad) * 120;
                    return (
                      <g key={i} transform={`translate(${x}, ${y})`}>
                        <circle r="20" fill="url(#ipGrad)" opacity="0.8"/>
                        <text textAnchor="middle" dy="7" fill="white" fontSize="20" fontWeight="bold">©</text>
                      </g>
                    );
                  })}
                </g>

                {/* Center lightbulb */}
                <circle cx="200" cy="200" r="30" fill="url(#ipGrad)"/>
                <path d="M 200 180 L 200 220 M 190 200 L 210 200" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Lightbulb className="w-20 h-20 mx-auto text-amber-200" />
            <h2 className="text-4xl lg:text-5xl font-black">Let's Build a Smarter Pharma Future Together</h2>
            <p className="text-xl text-amber-100">
              Medifodil Smart Pharma Solutions - Your trusted partner for IP protection and commercialization
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
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