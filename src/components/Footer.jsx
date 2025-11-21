import React from "react";
import site from "../data/site";

export default function Footer() {
  const { phone, email, address } = site.company;

  return (
      <footer className="bg-slate-900 text-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold">Medifodil</h4>
          <p className="mt-3 text-sm">Smart Pharma Solutions</p>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-2">{phone}</p>
          <p>{email}</p>
          <p className="mt-2">{address}</p>
        </div>
        <div>
          <h5 className="font-semibold">Links</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center py-3 text-xs">
        © {new Date().getFullYear()} Medifodil
      </div>
    </footer>
  );
}
