import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ onOpenApply, onOpenContact }) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blue Gradient Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 sm:p-16 lg:p-20 bg-gradient-to-br from-[#0F3D91] via-[#1D4ED8] to-[#2563EB] text-white text-center shadow-2xl shadow-blue-900/30 relative overflow-hidden"
        >
          {/* Decorative background blurs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-blue-100 border border-white/20 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              Limited Intake per Batch
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Start Your Career Launch Journey Today
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Join the Agentic AI Career Launch Programme and begin your IT career with just ₹5,000.
            </p>

            {/* Buttons: Apply for Career Launch & Talk to a Career Mentor */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-bold text-blue-900 bg-white hover:bg-blue-50 active:scale-95 shadow-lg shadow-black/10 transition-all group"
              >
                <span>Apply for Career Launch</span>
                <ArrowRight className="w-5 h-5 text-blue-700 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md active:scale-95 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-blue-200" />
                <span>Talk to a Career Mentor</span>
              </button>
            </div>

            {/* Trust Footer */}
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-blue-200 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                Verified Student Agreement
              </span>
              <span>•</span>
              <span>100% Placement Assistance</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
