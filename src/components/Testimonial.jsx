// src/components/Testimonial.jsx
import React from "react";

export default function Testimonial({ quote, who }) {
  return (
    <blockquote className="bg-white p-6 rounded-xl shadow">
      <p className="text-slate-700 text-sm">“{quote}”</p>
      <footer className="mt-3 text-xs text-slate-500">— {who}</footer>
    </blockquote>
  );
}
