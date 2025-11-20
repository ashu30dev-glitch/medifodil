// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import site from "../data/site";
import LabImage1 from "../assets/lab-image-1.jpg"; // Image 1
import LabImage2 from "../assets/lab-image-2.jpg"; // Image 2

export default function About() {
  const { title, body } = site.about;

  const services = [
    {
      title: "Pharmacovigilance",
      description: "Comprehensive drug safety monitoring and adverse event reporting",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Regulatory Compliance",
      description: "Global regulatory strategies and submission management",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Clinical Research",
      description: "End-to-end clinical trial design and execution",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intellectual Property",
      description: "Patent strategy and IP portfolio management",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section with Title */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Redefining Pharmaceutical Excellence
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {title || "About Us"}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Medifodil Smart Pharma Solutions
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Introduction with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We help pharmaceutical companies stay ahead
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                At <span className="font-semibold text-blue-600">Medifodil Smart Pharma Solutions</span>, we don't just meet regulatory expectations—we redefine them.
              </p>
              <p>
                Our expertise in <span className="font-medium text-slate-800">Pharmacovigilance</span>, <span className="font-medium text-slate-800">regulatory compliance</span>, <span className="font-medium text-slate-800">clinical research</span>, and <span className="font-medium text-slate-800">intellectual property</span> enables pharmaceutical companies to navigate safety, compliance, and innovation with confidence.
              </p>
              <p>
                We blend <span className="font-semibold text-indigo-600">science</span>, <span className="font-semibold text-purple-600">strategy</span>, and <span className="font-semibold text-pink-600">technology</span> to deliver solutions that transform challenges into opportunities.
              </p>
            </div>
            
            {/* Stats Inline */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-600 font-medium">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">50+</div>
                <div className="text-sm text-slate-600 font-medium">Experts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-slate-600 font-medium">Compliant</div>
              </div>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px]"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute top-0 right-0 w-[85%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <img 
                src={LabImage1} 
                alt="Advanced pharmaceutical laboratory" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-0 left-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-30"
            >
              <img 
                src={LabImage2} 
                alt="Clinical research scientist" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 right-0 bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-xl shadow-xl z-40"
            >
              <div className="text-center">
                <div className="text-2xl font-black">GMP</div>
                <div className="text-xs font-semibold opacity-90">Certified</div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive pharmaceutical solutions powered by innovation and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-4 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="relative text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <div className="relative mt-4 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl mb-6 shadow-2xl"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Vision</h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              To be a global leader in technology-driven pharmaceutical solutions, ensuring safer, compliant, and more innovative healthcare for all.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {["Global Leader", "Technology-Driven", "Safer Healthcare", "Innovation First"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        </motion.div>

        {/* Additional Content from site.about.body */}
        {body && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:text-blue-700"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        )}
      </div>
    </div>
  );
}