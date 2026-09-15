import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight, PhoneCall, Download } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Navbar({ onOpenApply, onOpenBrochure }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    // { name: "₹5,000 Model", href: "#payment-model" },
    { name: "Courses", href: "#courses" },
    // { name: "500+ Hours", href: "#curriculum" },
    { name: "Projects", href: "#projects" },
    // { name: "GQT vs Regular", href: "#comparison" },
    // { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
            : "bg-white/60 backdrop-blur-sm py-5 border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
              <div className="h-10 sm:h-11 bg-white rounded-lg p-1 border border-slate-200/80 shadow-xs group-hover:border-blue-400 group-hover:shadow-sm transition-all flex items-center shrink-0">
                <img
                  src={logoImg}
                  alt="GQT - Global Quest Technologies"
                  className="h-full w-auto object-contain rounded"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 leading-tight">
                    Career <span className="text-blue-700">Launch</span>
                  </span>
                  {/* <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60">
                    ₹5,000 Model
                  </span> */}
                </div>
                <span className="text-[11px] font-medium text-slate-500 tracking-tight hidden sm:block">
                  Industry-Ready IT Accelerator
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all border border-slate-200"
              >
                <Download className="w-3.5 h-3.5 text-blue-600" />
                Brochure
              </button> */}

              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 active:scale-95 shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/30 transition-all group"
              >
                <span>Apply for ₹5,000</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-blue-700"
              >
                Apply Now
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="bg-white p-0.5 rounded border border-slate-200">
                    <img src={logoImg} alt="GQT" className="h-5 w-auto object-contain" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Navigation
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ₹5,000 Starting Fee
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full py-3 rounded-full text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md shadow-blue-700/20 text-center flex items-center justify-center gap-2"
                >
                  <span>Apply for Career Launch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {/* <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-center flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Programme Brochure
                </button> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
