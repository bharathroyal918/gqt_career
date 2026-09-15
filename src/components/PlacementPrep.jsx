import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BrainCircuit, 
  Code, 
  UserCheck, 
  MessageSquareCheck, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const LinkedinIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 1.64 1.64 1.64 1.64 0 0 0-1.64-1.64z"/>
  </svg>
);

export default function PlacementPrep() {
  const prepCards = [
    {
      title: "ATS Resume Building",
      description: "Craft keyword-rich, algorithm-compliant technical resumes engineered to pass automated corporate hiring filters and impress technical recruiters.",
      icon: FileText,
      accent: "text-blue-600 bg-blue-50 border-blue-200/80"
    },
    {
      title: "LinkedIn Optimization",
      description: "Optimize your headline, summary, project links, and skills endorsements to attract inbound outreach from recruiters and tech hiring managers.",
      icon: LinkedinIcon,
      accent: "text-sky-600 bg-sky-50 border-sky-200/80"
    },
    {
      title: "Aptitude Preparation",
      description: "Master quantitative analysis, logical reasoning, numerical puzzles, and time-critical pattern tests commonly used in product and service company assessments.",
      icon: BrainCircuit,
      accent: "text-amber-600 bg-amber-50 border-amber-200/80"
    },
    {
      title: "Technical Mock Interviews",
      description: "Weekly 1-on-1 whiteboarding and live coding sessions with industry engineers, covering DSA, architecture questions, and deep debugging.",
      icon: Code,
      accent: "text-indigo-600 bg-indigo-50 border-indigo-200/80"
    },
    {
      title: "HR Mock Interviews",
      description: "Simulate behavioral rounds, cultural fit assessments, situational questions, and compensation negotiation strategies with certified HR mentors.",
      icon: UserCheck,
      accent: "text-purple-600 bg-purple-50 border-purple-200/80"
    },
    {
      title: "Communication & Soft Skills",
      description: "Elevate your verbal clarity, professional email etiquette, collaborative storytelling, and group discussion presence for modern hybrid teams.",
      icon: MessageSquareCheck,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200/80"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            End-to-End Interview Readiness
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Comprehensive <span className="text-blue-700">Placement Preparation</span> Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Technical skills get you the interview; holistic preparation gets you the offer. We train you through every stage of the modern IT recruitment funnel.
          </p>
        </div>

        {/* 6 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {prepCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-8 bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl ${card.accent} border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
