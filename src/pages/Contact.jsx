// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import site from "../data/site";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const { phone, email, address } = site.company;

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: phone,
      link: `tel:${phone}`,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: email,
      link: `mailto:${email}`,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      value: address,
      link: `https://maps.google.com/?q=${encodeURIComponent(address)}`,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Get In Touch
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Contact Us
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your pharmaceutical operations
            </p>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Contact Methods Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.title === "Address" ? "_blank" : undefined}
              rel={method.title === "Address" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
              <p className="text-slate-600 text-sm break-words">{method.value}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {site.contact?.body || "Whether you need regulatory guidance, pharmacovigilance support, or clinical research expertise, our team is ready to help you navigate the complex pharmaceutical landscape."}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                { title: "Quick Response", desc: "We respond to all inquiries within 24 hours" },
                { title: "Expert Team", desc: "Direct access to pharmaceutical specialists" },
                { title: "Confidential", desc: "Your information is protected and secure" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Illustration SVG */}
            <div className="hidden lg:block">
              <svg className="w-full h-64 text-blue-100" viewBox="0 0 400 300" fill="none">
                {/* Person with headset */}
                <circle cx="200" cy="120" r="40" fill="currentColor"/>
                <path d="M200 160C220 160 240 170 240 190V240H160V190C160 170 180 160 200 160Z" fill="currentColor"/>
                {/* Headset */}
                <path d="M170 100C170 85 183 73 200 73C217 73 230 85 230 100V120H220V100C220 90 211 83 200 83C189 83 180 90 180 100V120H170V100Z" fill="#3B82F6"/>
                <rect x="165" y="110" width="20" height="30" rx="5" fill="#3B82F6"/>
                <rect x="215" y="110" width="20" height="30" rx="5" fill="#3B82F6"/>
                {/* Speech bubbles */}
                <circle cx="120" cy="80" r="25" fill="#EEF2FF" stroke="#3B82F6" strokeWidth="2"/>
                <circle cx="280" cy="100" r="30" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2"/>
                <circle cx="290" cy="200" r="20" fill="#EEF2FF" stroke="#8B5CF6" strokeWidth="2"/>
              </svg>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-slate-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
              <p className="text-slate-600">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}