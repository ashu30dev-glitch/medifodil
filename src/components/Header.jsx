import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import site from "../data/site";
import Logo from "../assets/logo.png";
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-sm shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <img
                src={Logo}
                className="h-11 w-11 transition-transform duration-300 group-hover:scale-105"
                alt="logo"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-slate-900 font-bold text-xl tracking-tight">
                  {site.company.name}
                </span>
                <span className="text-slate-500 text-xs tracking-wide uppercase">
                  {site.company.subname}
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredNav(item.to)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-800"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {(isActive || hoveredNav === item.to) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-600 rounded-full"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-4">

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-3 pr-4 border-r border-slate-200">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-800 transition-colors duration-200"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-800 transition-colors duration-200"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-800 transition-colors duration-200"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-800 transition-colors duration-200"
                >
                  <FaYoutube size={20} />
                </a>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 text-[15px] font-medium text-slate-700
           border border-slate-300 rounded-md
           hover:text-slate-800 hover:border-slate-800
           transition-all duration-200"                >
                  Contact us
                </Link>
                <a
                  href={`tel:${site.company.phone}`}
                  className="px-5 py-2.5 text-[15px] font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors duration-200 shadow-sm"
                >
                  Request a proposal
                </a>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden relative w-10 h-10 text-slate-700 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${open ? 'rotate-45 top-1/2' : 'top-[35%]'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current top-1/2 transform transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${open ? '-rotate-45 top-1/2' : 'top-[65%]'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-8 px-6">

          {/* MOBILE NAV */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-4 px-4 text-lg font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-orange-600 bg-orange-50"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE BOTTOM */}
          <div className="space-y-6 pt-6 border-t border-slate-200">

            {/* SOCIAL */}
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-orange-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-orange-600 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-orange-600 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-orange-600 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full px-6 py-3.5 text-center text-[15px] font-medium text-slate-700 border border-slate-300 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-all"
              >
                Contact us
              </Link>
              <a
                href={`tel:${site.company.phone}`}
                className="block w-full px-6 py-3.5 text-center text-[15px] font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors shadow-sm"
              >
                Request a proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}