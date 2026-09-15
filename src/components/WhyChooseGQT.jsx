import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Layers, ShieldCheck, Sparkles, Trophy, Award, TrendingUp } from 'lucide-react';

export default function WhyChooseGQT() {
  const stats = [
    {
      value: "500+",
      unit: "Hours",
      label: "Intensive Training",
      sub: "Offline lab practice & live instructor mentoring",
      icon: Clock,
      color: "from-blue-600 to-indigo-600",
      bg: "bg-blue-50/70"
    },
    {
      value: "6",
      unit: "Tracks",
      label: "Industry Programs",
      sub: "Java, Python, MERN, Testing, Analytics & AI",
      icon: BookOpen,
      color: "from-indigo-600 to-blue-700",
      bg: "bg-indigo-50/70"
    },
    {
      value: "10+",
      unit: "Live",
      label: "Real-Time Projects",
      sub: "Enterprise-grade repos with GitHub workflows",
      icon: Layers,
      color: "from-emerald-600 to-teal-600",
      bg: "bg-emerald-50/70"
    },
    {
      value: "100%",
      unit: "Included",
      label: "Placement Preparation",
      sub: "ATS resumes, technical mocks & HR simulations",
      icon: ShieldCheck,
      color: "from-purple-600 to-indigo-600",
      bg: "bg-purple-50/70"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Empowering Next-Gen Engineers
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Why Choose the <span className="text-blue-700">GQT Career Launch</span> Experience?
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Engineered from ground up to replace passive tutorial bingeing with immersive, production-grade engineering routines that tech hiring managers respect.
          </p>
        </div>

        {/* 4 Animated Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-7 bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200/60 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {stat.unit}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Explanation Narrative Box Below Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle glow elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20 mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              About GQT Career Launch
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              A Mission to Bridge the Gap Between Academics and Industry
            </h3>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
              GQT Career Launch was established to solve the biggest dilemma facing engineering and degree graduates: colleges provide degrees, but tech employers demand verified hands-on skills, production codebases, and problem-solving readiness. By pairing 500+ hours of mentor-guided offline training with modern Agentic AI workflows and our risk-free ₹5,000 admission model, we ensure every committed learner gets an uncompromised path into the tech industry.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-white/15 text-xs sm:text-sm font-semibold text-blue-200">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                Industry-Verified Syllabi
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Dedicated Placement Cell
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero Financial Pressure Upfront
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
