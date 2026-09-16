import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Award,
  Zap,
  Code2
} from 'lucide-react';

export default function Hero({ onOpenApply, onOpenBrochure }) {
  const trustBadges = [
    { icon: Clock, label: "500+ Hours Training", color: "text-blue-600 bg-blue-50 border-blue-200/70" },
    { icon: Layers, label: "Real-Time Projects", color: "text-indigo-600 bg-indigo-50 border-indigo-200/70" },
    { icon: Zap, label: "Agentic AI Curriculum", color: "text-purple-600 bg-purple-50 border-purple-200/70" },
    { icon: ShieldCheck, label: "Placement Preparation Included", color: "text-emerald-600 bg-emerald-50 border-emerald-200/70" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-[#F8FAFC]">
      {/* Background Decorative Gradients & Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-blue-600 -ml-3" />
              <span className="font-bold">Next Batch Enrolment Active</span>
              <span className="text-slate-300">|</span>
              <span className="text-emerald-700 font-bold">Start with only ₹5,000</span>
            </motion.div>

            {/* Hero Heading: 64px Desktop / 44px Tablet / 34px Mobile, Font Weight 800 */}
            <motion.h1 
              variants={itemVariants}
              className="text-[34px] sm:text-[44px] lg:text-[64px] font-extrabold tracking-tight text-[#111827] leading-[1.1] mb-6"
            >
              Launch Your IT Career with{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Agentic AI Full Stack
              </span>{" "}
              Training
            </motion.h1>

            {/* Hero Subheading: 18px Desktop / 16px Mobile */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-[18px] text-[#4B5563] leading-relaxed max-w-2xl mb-9"
            >
              Become industry-ready with <strong className="text-slate-900 font-bold">500+ Hours of Practical Training</strong>, Real-Time Projects, Career Mentoring, and Placement Preparation — <strong className="text-blue-700 font-bold">starting with just ₹5,000</strong>.
            </motion.p>

            {/* CTA Buttons: Rounded Full, px-8 (32px), py-4 (16px) */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={onOpenApply}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.98] shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 transition-all group"
              >
                <span>Apply for Career Launch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Programme Brochure</span>
              </button>
            </motion.div>

            {/* Micro Feature Bullet Points */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No Full Fee Upfront</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pay ₹20k* After Placement</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Offline Lab + Live Mentors</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Side — Premium Illustration Area with Floating UI Cards */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Gradient Canvas Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Glowing Visual Hub */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0F3D91] via-[#1D4ED8] to-[#2563EB] text-white shadow-2xl shadow-blue-900/30 overflow-hidden border border-blue-400/30">
                {/* Internal Abstract Circuit Grid */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/15 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white font-bold">
                      <Code2 className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">GQT Career Portal</h4>
                      <p className="text-[11px] text-blue-200">Production EdTech Environment</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Active Intake
                  </span>
                </div>

                {/* Central Focus Statement */}
                <div className="relative z-10 my-6">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-blue-200">
                    Revolutionary Model
                  </span>
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
                    ₹5,000 <span className="text-lg sm:text-xl font-medium text-blue-100">to Confirm Seat</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100/90 mt-2 leading-relaxed">
                    Balance fee deferred until you clear interviews and secure placement.
                  </p>
                </div>

                {/* Mini Stat Metric Pills */}
                <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-white/15 text-left">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                    <span className="text-[10px] text-blue-200 font-semibold block">Training Depth</span>
                    <span className="text-lg font-extrabold text-white">500+ Hours</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                    <span className="text-[10px] text-blue-200 font-semibold block">Placement Focus</span>
                    <span className="text-lg font-extrabold text-emerald-300">Included 100%</span>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 1: ₹5,000 to Start (Top-Left overlay) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-11 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  ₹
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Admission Fee</div>
                  <div className="text-base sm:text-lg font-extrabold text-emerald-600">₹5,000 to Start</div>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: 500+ Hours Training (Top-Right overlay) */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-11 -right-2 sm:-right-4 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Classroom Depth</div>
                  <div className="text-sm font-bold text-slate-900">500+ Hours Training</div>
                </div>
              </motion.div>

              {/* FLOATING CARD 3: 6 Career Launch Courses (Bottom-Left overlay) */}
              <motion.div 
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-3 sm:-left-5 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">6 Specialized Tracks</div>
                  <div className="text-[11px] font-medium text-slate-500">Java, Python, MERN, QA, Data</div>
                </div>
              </motion.div>

              {/* FLOATING CARD 4: Placement Preparation Included (Bottom-Right overlay) */}
              <motion.div 
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-10 -right-2 sm:-right-4 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Placement Ready</div>
                  <div className="text-xs sm:text-sm font-bold text-purple-900">Mocks & ATS Resume</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Trust Badge Row (4 rounded badges with stagger fade-up) */}
        <motion.div 
          className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Programme Excellence & Accreditations
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className={`flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-2xl border ${badge.color} hover:scale-[1.02] transition-transform shadow-xs`}
                >
                  <div className="p-2 rounded-xl bg-white shadow-xs shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
