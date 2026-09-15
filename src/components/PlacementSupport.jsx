import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileEdit, 
  BellRing, 
  PhoneCall, 
  Compass, 
  Code2, 
  Trophy, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function PlacementSupport() {
  const supportCards = [
    {
      title: "Resume Updates",
      desc: "Periodic portfolio refreshes to incorporate newly completed capstones, certifications, and updated technical keywords.",
      icon: FileEdit
    },
    {
      title: "Placement Notifications",
      desc: "Instant alerts for corporate off-campus drives, pooled campus initiatives, and exclusive GQT partner job vacancies.",
      icon: BellRing
    },
    {
      title: "Interview Calls",
      desc: "Direct interview scheduling with top tier IT service and product companies tailored to your performance profile.",
      icon: PhoneCall
    },
    {
      title: "Career Mentoring",
      desc: "One-on-one sessions with seasoned industry tech leads to review progress, clarify doubts, and plan career milestones.",
      icon: Compass
    },
    {
      title: "Mock Interviews",
      desc: "Company-specific interview drill simulations before every major technical drive to fine-tune your problem-solving.",
      icon: Code2
    },
    {
      title: "Offer Guidance",
      desc: "Support evaluating employment letters, understanding bond/agreement clauses, and compensation package negotiation.",
      icon: Trophy
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F3D91] via-[#1D4ED8] to-[#041B43] text-white relative overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Continuous Guidance
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-6">
            Career Support That <span className="text-blue-200">Continues Beyond Training</span>
          </h2>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed">
            Our commitment doesn't end when the classroom syllabus concludes. We support your placement journey until you successfully secure your offer letter.
          </p>
        </div>

        {/* 6 Timeline Cards on Blue Gradient */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {supportCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-7 bg-white/10 backdrop-blur-md border border-white/15 shadow-lg hover:bg-white/15 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-blue-200 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5">
                  {card.title}
                </h3>

                <p className="text-sm text-blue-100/85 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
