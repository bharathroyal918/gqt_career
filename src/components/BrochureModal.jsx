import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Download, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import logoImg from '../assets/logo.jpeg';

export default function BrochureModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloaded(true);
    confetti({ particleCount: 80, spread: 60 });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {downloaded ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs mb-3">
              <img 
                src={logoImg} 
                alt="GQT Logo" 
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Brochure Ready!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              We have generated your GQT Career Launch 2026 Programme Brochure. A copy has also been sent to <strong className="text-blue-700">{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full text-xs font-bold text-white bg-blue-700 hover:bg-blue-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-2xs inline-flex items-center">
                <img 
                  src={logoImg} 
                  alt="GQT Logo" 
                  className="h-7 w-auto object-contain" 
                />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50">
                <Sparkles className="w-3.5 h-3.5" />
                Free Curriculum Guide
              </div>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Download Programme Brochure
            </h3>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Get the complete 500+ hour syllabus breakdown, project specifications, fee comparison charts, and placement timeline.
            </p>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email to receive PDF"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                <span>PDF includes all 6 track syllabus & placement policies.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Instant PDF</span>
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
