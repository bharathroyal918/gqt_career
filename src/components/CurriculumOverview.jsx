import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function CurriculumOverview() {
  const categories = [
    {
      title: "Programming Fundamentals",
      description: "Establish unshakeable foundations in programming syntax, object orientation, and core data structures.",
      icon: Code2,
      accent: "from-blue-600 to-indigo-600",
      items: [
        "Object-Oriented Programming (OOP) Deep Dive",
        "Data Structures, Collections & Memory Management",
        "Algorithmic Thinking & Complexity (Time / Space)",
        "Exception Handling, Multithreading & Concurrency",
        "Clean Code Practices & Standard Design Patterns"
      ]
    },
    {
      title: "Frontend & Backend Development",
      description: "Build robust full-stack enterprise web systems with high performance and modular architecture.",
      icon: Layers,
      accent: "from-indigo-600 to-blue-700",
      items: [
        "Modern Component-Driven Frontend (React & Next.js)",
        "Enterprise Backend Frameworks (Spring Boot / Django / Node.js)",
        "RESTful API & GraphQL Services Architecture",
        "Relational & NoSQL Databases (MySQL, PostgreSQL, MongoDB)",
        "Microservices, Docker Containerization & Cloud Deployment"
      ]
    },
    {
      title: "Agentic AI Tools",
      description: "Future-proof your skillset with modern autonomous AI coding assistants and API integrations.",
      icon: Cpu,
      accent: "from-purple-600 to-indigo-600",
      items: [
        "Prompt Engineering for Enterprise Developers",
        "AI-Assisted Pair Programming with GitHub Copilot & Cursor",
        "Building Autonomous LLM Agents with Gemini & OpenAI APIs",
        "Retrieval-Augmented Generation (RAG) Architecture",
        "Automating Unit Tests & Refactoring with AI Workflows"
      ]
    },
    {
      title: "Career Preparation",
      description: "Rigorous interview preparation ensuring you clear both technical screening and behavioural rounds.",
      icon: Briefcase,
      accent: "from-emerald-600 to-teal-600",
      items: [
        "ATS-Optimized Resume Building with Industry Keywords",
        "LinkedIn Profile Optimization & Technical Personal Branding",
        "Weekly Live 1-on-1 Technical Mock Interviews with Feedback",
        "HR Interview Behavioral Scenarios & Salary Negotiation Drills",
        "Quantitative Aptitude, Logical Reasoning & Speed Tests"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <Zap className="w-3.5 h-3.5" />
            500+ Hours of Practical Immersion
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            What You'll Learn During the{" "}
            <span className="text-blue-700">500+ Hour Career Launch Programme</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            A comprehensive curriculum structured across four core pillars to transform students into productive, autonomous software engineers from day one.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-8 bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-200/70">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
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
