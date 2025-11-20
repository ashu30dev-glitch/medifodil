// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import LabIllustration from "../assets/lab-illustration.jpg";

export default function Hero({ title = "Medifodil — Smart Pharma Solutions", subtitle, cta="/contact" }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Trusted Pharmaceutical Partner
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {title.split("—")[0]}
              </span>
              <br />
              <span className="text-slate-800 text-4xl md:text-5xl lg:text-6xl">
                {title.split("—")[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              {subtitle || "Regulatory, clinical and safety services powered by quality and technology."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to={cta}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+919032115695"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-700 font-bold hover:border-blue-500 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9032115695
              </a>
            </div>

            {/* Quick Stats - Inline */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-slate-200"
            >
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600 font-medium">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-slate-600 font-medium">Compliance</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main Illustration Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute top-0 right-0 w-full max-w-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-20"
            >
              <div className="p-8">
                <img
                  src={LabIllustration}
                  alt="Pharmaceutical laboratory"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Stats Bar - Overlapping */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-0 left-0 w-[90%] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden z-30 border-4 border-white"
            >
              <div className="grid grid-cols-3 divide-x divide-blue-500/30">
                {/* Stat 1 */}
                <div className="px-6 py-8 text-center relative overflow-hidden group hover:bg-blue-600/20 transition-colors">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="mb-3 flex justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">
                      15<span className="text-3xl">+</span>
                    </div>
                    <div className="text-sm md:text-base font-bold text-white/90">Years Expertise</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
                </div>

                {/* Stat 2 */}
                <div className="px-6 py-8 text-center relative overflow-hidden group hover:bg-blue-600/20 transition-colors">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="mb-3 flex justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">
                      50<span className="text-3xl">+</span>
                    </div>
                    <div className="text-sm md:text-base font-bold text-white/90">Team Members</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
                </div>

                {/* Stat 3 */}
                <div className="px-6 py-8 text-center relative overflow-hidden group hover:bg-blue-600/20 transition-colors">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="mb-3 flex justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">
                      100<span className="text-3xl">%</span>
                    </div>
                    <div className="text-sm md:text-base font-bold text-white/90">Regulatory Compliance</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"></div>
            </motion.div>

            {/* Floating Accent Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 left-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg opacity-20 z-10"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-40 right-10 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg opacity-20 z-10"
            ></motion.div>

            {/* DNA Helix Decoration */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12"
            >
              <svg className="w-24 h-24 text-blue-200 opacity-30" viewBox="0 0 100 100" fill="none">
                <path d="M50 10 Q 70 30, 50 50 Q 30 70, 50 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M50 10 Q 30 30, 50 50 Q 70 70, 50 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="50" cy="20" r="4" fill="currentColor"/>
                <circle cx="50" cy="40" r="4" fill="currentColor"/>
                <circle cx="50" cy="60" r="4" fill="currentColor"/>
                <circle cx="50" cy="80" r="4" fill="currentColor"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
