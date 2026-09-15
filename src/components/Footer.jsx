import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUp,
  Sparkles
} from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const SocialIcon = ({ type, className = "w-4 h-4" }) => {
  if (type === 'linkedin') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 1.64 1.64 1.64 1.64 0 0 0-1.64-1.64z" />
      </svg>
    );
  }
  if (type === 'youtube') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  if (type === 'instagram') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
};

export default function Footer({ onOpenApply, onOpenCurriculumByName }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const coursesList = [
    "Agentic AI with Java Full Stack",
    "Agentic AI with Python Full Stack",
    "Agentic AI with MERN / MEAN Stack",
    "Agentic AI with Software Testing",
    "Agentic AI with Data Analytics",
    "Agentic AI with Data Science & AI",
  ];

  return (
    <footer id="footer" className="bg-[#0B1528] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-slate-800">

          {/* Column 1: About Career Launch */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="bg-white p-1.5 rounded-xl shadow-md border border-slate-700/50 inline-flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="GQT - Global Quest Technologies"
                  className="h-10 sm:h-11 w-auto object-contain rounded"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-tight">
                  Career <span className="text-blue-400">Launch</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Global Quest Technologies
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-6">
              The GQT Career Launch Programme is an outcome-aligned EdTech initiative helping aspiring software developers, QA testers, and data analysts build industry-grade capabilities with 500+ hours of training and our signature ₹5,000 pay-after-placement model.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <SocialIcon type="linkedin" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <SocialIcon type="youtube" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <SocialIcon type="instagram" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <SocialIcon type="facebook" />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Courses
            </h4>
            <ul className="space-y-3 text-sm">
              {coursesList.map((course, i) => (
                <li key={i}>
                  <a
                    href="#courses"
                    onClick={() => onOpenCurriculumByName && onOpenCurriculumByName(course)}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{course}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Support & Contact
            </h4>
            <ul className="space-y-3.5 text-sm mb-6">
              <li>
                <a href="#faq" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <a href="#overview" className="text-slate-400 hover:text-blue-400 transition-colors">
                  GQT CSR Placement Drive
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@gqtech.in" className="hover:text-white transition-colors">
                  info@gqtech.in
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+91 94484 03469" className="hover:text-white transition-colors">
                  +91 94484 03469
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>GQT Training Campus, Bangalore, Karnataka, India</span>
              </li>
            </ul>

            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-700 hover:bg-blue-600 transition-all shadow-md"
            >
              <span>Confirm Seat for ₹5,000</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 GQT Career Launch Programme. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Admission</a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
