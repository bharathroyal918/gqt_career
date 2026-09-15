import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CreditCard,
  Lock
} from 'lucide-react';

export default function ComparisonSection({ onOpenApply }) {
  const comparisonRows = [
    {
      feature: "Upfront Fee",
      traditional: "High upfront fee (₹25,000 - ₹50,000) before any training starts",
      traditionalPass: false,
      gqt: "Confirm admission with just ₹5,000. Balance deferred until placement",
      gqtPass: true
    },
    {
      feature: "Projects & Portfolio",
      traditional: "Basic copy-paste toy projects or recorded tutorial assignments",
      traditionalPass: false,
      gqt: "3-4 real-time production capstones with Git & live deployment",
      gqtPass: true
    },
    {
      feature: "Placement Preparation",
      traditional: "Primary focus ends once the syllabus or course duration is finished",
      traditionalPass: false,
      gqt: "Dedicated ATS resume tuning, mock interviews & corporate drive invitations",
      gqtPass: true
    },
    {
      feature: "Agentic AI Integration",
      traditional: "Outdated legacy curriculum with zero exposure to modern AI workflows",
      traditionalPass: false,
      gqt: "Hands-on Prompt Engineering, Cursor, Copilot & autonomous LLM agents",
      gqtPass: true
    },
    {
      feature: "Career Mentoring",
      traditional: "Recorded lecture portals with impersonal ticket-based doubt resolution",
      traditionalPass: false,
      gqt: "Live instructor-led offline classroom & 1-on-1 industry mentor sessions",
      gqtPass: true
    },
    {
      feature: "Interview Readiness",
      traditional: "Theoretical quizzes without realistic technical whiteboarding simulations",
      traditionalPass: false,
      gqt: "Weekly technical code evaluations, HR behavioral drills & aptitude tests",
      gqtPass: true
    }
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Decision Making
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            The Regular Way <span className="text-blue-700">vs The GQT Career Launch Way</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Compare the key differences between traditional commercial institutes and the learner-centric Career Launch outcome-based model.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-16">
          
          {/* Top Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Header: Traditional (Red theme) */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-rose-50 via-rose-50/50 to-white border-b md:border-b-0 md:border-r border-rose-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 mb-1 block">
                  Traditional Institute
                </span>
                <h3 className="text-2xl font-black text-rose-950">
                  The Regular Way
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl">
                ✕
              </div>
            </div>

            {/* Right Header: GQT Career Launch (Blue + Green theme) */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 mb-1 block">
                  Pay Remaining After Placement
                </span>
                <h3 className="text-2xl font-black text-white">
                  GQT Career Launch
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center font-bold text-xl">
                ✓
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 text-sm">
                
                {/* Traditional Column (Red tinted text/icons) */}
                <div className="p-6 bg-rose-50/20 md:border-r border-slate-100 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {row.feature}
                    </span>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {row.traditional}
                    </p>
                  </div>
                </div>

                {/* GQT Column (Blue + Green tinted text/icons) */}
                <div className="p-6 bg-blue-50/30 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-0.5">
                      {row.feature}
                    </span>
                    <p className="text-slate-900 font-bold leading-relaxed">
                      {row.gqt}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Summary Bar with Razorpay Trigger */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                Zero Risk • High Confidence Model
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                Start Your Career Launch With ₹5,000 Today
              </h4>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                Secure admission via instant Razorpay checkout or speak to a career counselor.
              </p>
            </div>

            <button
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl active:scale-95 transition-all shrink-0"
            >
              <span>Confirm Seat for ₹5,000</span>
              <ArrowRight className="w-5 h-5 text-blue-700" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
