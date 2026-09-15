import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Sparkles, FileCheck2 } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: "Course Completion Certificate",
      subtitle: "Full Stack Mastery Credential",
      description: "Certifies 500+ hours of rigorous classroom training, mastery of syntax, frameworks, and Agentic AI tools.",
      badge: "Curriculum Certified",
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: "Project Completion Certificate",
      subtitle: "Verified Codebase & Capstones",
      description: "Validates autonomous architecture, GitHub commit history, code quality, and live deployment of 3+ projects.",
      badge: "Industry Capstones",
      color: "from-indigo-600 to-purple-700"
    },
    {
      title: "Internship Certificate",
      subtitle: "Hands-on Practical Experience",
      description: "Formal documentation of enterprise simulation sprint work, agile routines, and industry-grade deliverables.",
      badge: "Practical Training",
      color: "from-emerald-600 to-teal-700"
    },
    {
      title: "Programme Excellence Certificate",
      subtitle: "Career Readiness Distinction",
      description: "Awarded upon clearing technical mock evaluations, aptitude milestones, and comprehensive interview drills.",
      badge: "Placement Qualified",
      color: "from-amber-600 to-orange-700"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <Award className="w-3.5 h-3.5" />
            Verifiable Credentials
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Certificates <span className="text-blue-700">You'll Receive</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Four industry-accredited credentials to showcase on LinkedIn, resume portfolios, and corporate hiring interviews.
          </p>
        </div>

        {/* 4 Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Certificate Graphic Illustration */}
              <div className="p-6 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative">
                <div className="border border-white/20 rounded-2xl p-5 bg-white/5 backdrop-blur-md relative overflow-hidden text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 shadow-md mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
                    GQT Career Launch
                  </span>
                  <h4 className="text-sm font-extrabold text-white mt-1 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-semibold text-emerald-300">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Authorized Verification ID</span>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                    {cert.badge}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {cert.subtitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Shareable on LinkedIn & Resume</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
