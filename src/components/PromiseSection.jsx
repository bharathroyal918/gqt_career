import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Clock, FolderGit2, Users2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PromiseSection() {
  const cards = [
    {
      icon: Wallet,
      title: "Start with ₹5,000",
      description: "Confirm your admission with an initial deposit. Avoid heavy upfront education loans and start learning immediately.",
      accent: "from-emerald-500/20 to-emerald-500/0",
      border: "hover:border-emerald-300",
      badgeColor: "text-emerald-700 bg-emerald-50",
      iconColor: "text-emerald-600 bg-emerald-100"
    },
    {
      icon: Clock,
      title: "500+ Hours Industry Training",
      description: "Comprehensive instructor-led practical sessions covering in-depth fundamentals, frameworks, databases, and Agentic AI tools.",
      accent: "from-blue-500/20 to-blue-500/0",
      border: "hover:border-blue-300",
      badgeColor: "text-blue-700 bg-blue-50",
      iconColor: "text-blue-600 bg-blue-100"
    },
    {
      icon: FolderGit2,
      title: "Real-Time Projects",
      description: "Build portfolio-worthy applications like Food Delivery Apps and AI Resume Analyzers with GitHub version control and live deployments.",
      accent: "from-indigo-500/20 to-indigo-500/0",
      border: "hover:border-indigo-300",
      badgeColor: "text-indigo-700 bg-indigo-50",
      iconColor: "text-indigo-600 bg-indigo-100"
    },
    {
      icon: Users2,
      title: "Career Mentoring & Placement Preparation",
      description: "Dedicated mock technical interviews, HR preparation, ATS-optimized resume crafting, and continuous corporate placement opportunities.",
      accent: "from-purple-500/20 to-purple-500/0",
      border: "hover:border-purple-300",
      badgeColor: "text-purple-700 bg-purple-50",
      iconColor: "text-purple-600 bg-purple-100"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Career Launch Promise
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Learn First. Build Your Career.{" "}
            <span className="text-blue-700">Pay the Remaining Fee After Placement.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            The GQT Career Launch Programme is designed to make industry-ready IT training accessible for students. Instead of paying the full course fee upfront, eligible students can confirm their seat with just ₹5,000, complete their training, build projects, prepare for interviews, and pay the remaining fee after placement according to their enrolled course.
          </p>
        </div>

        {/* 4 Feature Cards with Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative rounded-3xl p-7 bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 ${card.border} group overflow-hidden`}
              >
                {/* Top Subtle Hover Gradient */}
                <div className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${card.accent} blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${card.iconColor} flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {card.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Included in all 6 tracks</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
