import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  FileSpreadsheet, 
  Code2, 
  UserCheck, 
  CheckCircle, 
  Wallet, 
  GraduationCap, 
  Layers, 
  Award, 
  Building2, 
  Trophy, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function Roadmap() {
  const steps = [
    { num: 1, title: "Register", desc: "Submit basic details", icon: UserPlus },
    { num: 2, title: "Assessment", desc: "Aptitude & logic check", icon: FileSpreadsheet },
    { num: 3, title: "Technical Screening", desc: "Coding orientation", icon: Code2 },
    { num: 4, title: "HR Interview", desc: "Counseling & track match", icon: UserCheck },
    { num: 5, title: "Admission Confirmation", desc: "Seat allocation", icon: CheckCircle },
    { num: 6, title: "Pay ₹5,000", desc: "Initial seat deposit", icon: Wallet, highlight: true },
    { num: 7, title: "Training Starts", desc: "500+ hrs offline learning", icon: GraduationCap },
    { num: 8, title: "Projects", desc: "3+ live production builds", icon: Layers },
    { num: 9, title: "Placement Preparation", desc: "Mocks & ATS resume", icon: Award },
    { num: 10, title: "Interview Opportunities", desc: "Direct partner drives", icon: Building2 },
    { num: 11, title: "Offer Journey Complete", desc: "Settle remaining fee", icon: Trophy, success: true }
  ];

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Step-by-Step Trajectory
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Your <span className="text-blue-700">Career Launch Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            From initial registration to landing your offer letter — a structured, transparent 11-step path designed for accountability and momentum.
          </p>
        </div>

        {/* Desktop Horizontal Scrollable / Flow View */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting Progress Track Line */}
          <div className="absolute top-1/2 left-6 right-6 h-1 bg-slate-200 -translate-y-6 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-11 gap-2 relative z-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Node */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 transition-all duration-300 mb-3 ${
                    s.highlight 
                      ? "bg-emerald-600 text-white border-emerald-400 scale-110 shadow-emerald-500/20" 
                      : s.success 
                      ? "bg-blue-900 text-emerald-300 border-emerald-400 scale-110"
                      : "bg-white text-slate-700 border-slate-200 group-hover:border-blue-500 group-hover:text-blue-600"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] font-black uppercase tracking-wider mb-1 ${
                    s.highlight ? "text-emerald-600" : s.success ? "text-blue-700" : "text-slate-400"
                  }`}>
                    Step {s.num}
                  </span>

                  <h4 className="text-xs font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors">
                    {s.title}
                  </h4>

                  <p className="text-[10px] text-slate-500 leading-tight">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden max-w-md mx-auto relative pl-8 border-l-2 border-slate-200 space-y-6 my-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="relative">
                {/* Node on vertical line */}
                <div className={`absolute -left-[45px] top-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-xs border-2 ${
                  s.highlight 
                    ? "bg-emerald-600 text-white border-emerald-300" 
                    : s.success 
                    ? "bg-blue-900 text-emerald-300 border-emerald-400" 
                    : "bg-white text-slate-700 border-slate-200"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className={`p-4 rounded-2xl border transition-all ${
                  s.highlight 
                    ? "bg-emerald-50/70 border-emerald-200 shadow-sm" 
                    : s.success 
                    ? "bg-blue-50/70 border-blue-200 shadow-sm" 
                    : "bg-[#F8FAFC] border-slate-200/80"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase text-slate-400">Step {s.num}</span>
                    {s.highlight && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        ₹5,000 Admission
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
