import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  CreditCard, 
  GraduationCap, 
  Layers, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function PaymentModel({ onOpenApply }) {
  const [activeStep, setActiveStep] = useState(2);

  const timelineSteps = [
    {
      step: "01",
      title: "Register through GQT",
      desc: "Complete your basic profile details and undergo a preliminary skills counselling session with our career advisors.",
      icon: UserCheck
    },
    {
      step: "02",
      title: "Pay ₹5,000 to Confirm Your Admission",
      desc: "Lock your batch seat with just ₹5,000. No full upfront payments, no predatory interest loans.",
      icon: CreditCard,
      highlight: true
    },
    {
      step: "03",
      title: "Attend 500+ Hours of Training",
      desc: "Immerse yourself in structured offline classroom learning, master syntax, enterprise frameworks, and Agentic AI tools.",
      icon: GraduationCap
    },
    {
      step: "04",
      title: "Complete Projects & Assessments",
      desc: "Build minimum 3 production-grade capstone applications, solve weekly coding challenges, and clear milestone audits.",
      icon: Layers
    },
    {
      step: "05",
      title: "Placement Preparation",
      desc: "Undergo extensive ATS resume tuning, LinkedIn profile revamps, technical mock interviews, and HR communication drills.",
      icon: Briefcase
    },
    {
      step: "06",
      title: "Interview Opportunities",
      desc: "Attend hiring drives with GQT partner companies and receive continuous interview calls matched to your specialization.",
      icon: Building2
    },
    {
      step: "07",
      title: "Pay Remaining Course Fee After Placement",
      desc: "Only after you secure your employment offer do you settle the remaining deferred fee as defined in your agreement.",
      icon: CheckCircle2,
      success: true
    }
  ];

  const pricingCards = [
    {
      course: "Java Full Stack",
      now: "₹5,000",
      later: "₹20,000",
      total: "₹25,000",
      duration: "500+ Hours • 5 Months",
      popular: true,
      role: "Java / Spring Boot Developer"
    },
    {
      course: "Python Full Stack",
      now: "₹5,000",
      later: "₹20,000",
      total: "₹25,000",
      duration: "500+ Hours • 5 Months",
      popular: false,
      role: "Python / AI Full Stack Engineer"
    },
    {
      course: "MERN / MEAN Stack",
      now: "₹5,000",
      later: "₹20,000",
      total: "₹25,000",
      duration: "500+ Hours • 5 Months",
      popular: true,
      role: "Full Stack JavaScript Developer"
    },
    {
      course: "Software Testing & QA",
      now: "₹5,000",
      later: "₹20,000",
      total: "₹25,000",
      duration: "500+ Hours • 4.5 Months",
      popular: false,
      role: "Automation QA / SDET"
    },
    {
      course: "Data Analytics",
      now: "₹5,000",
      later: "₹35,000",
      total: "₹40,000",
      duration: "500+ Hours • 5 Months",
      popular: false,
      role: "Data & BI Developer"
    },
    {
      course: "Data Science & AI",
      now: "₹5,000",
      later: "₹45,000",
      total: "₹50,000",
      duration: "500+ Hours • 5 Months",
      popular: true,
      role: "Data Scientist / ML Engineer"
    }
  ];

  return (
    <section id="payment-model" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 mb-4">
            <Zap className="w-3.5 h-3.5" />
            Transparent Financial Freedom
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            How the Career Launch <span className="text-emerald-600">₹5,000 Model</span> Works
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            We align our incentives directly with your career success. Follow the 7-step roadmap from initial enrollment to placement completion without financial strain.
          </p>
        </div>

        {/* Vertical Timeline with Connecting Line */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative">
            {/* Animated Center / Left Connector Line */}
            <div className="absolute top-8 bottom-8 left-6 sm:left-1/2 w-1 bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="w-full bg-gradient-to-b from-blue-600 via-emerald-500 to-emerald-600"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="space-y-8 sm:space-y-12 relative">
              {timelineSteps.map((step, idx) => {
                const Icon = step.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    } gap-6 sm:gap-12 relative group`}
                  >
                    {/* Content Card */}
                    <div className="w-full sm:w-1/2 pl-14 sm:pl-0">
                      <div 
                        className={`rounded-2xl p-6 transition-all duration-300 ${
                          step.highlight
                            ? "bg-emerald-50/80 border-2 border-emerald-300 shadow-md shadow-emerald-600/10"
                            : step.success
                            ? "bg-blue-50/80 border-2 border-blue-300 shadow-md shadow-blue-600/10"
                            : "bg-white border border-slate-200/90 shadow-xs hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                            step.highlight 
                              ? "bg-emerald-600 text-white" 
                              : step.success 
                              ? "bg-blue-700 text-white" 
                              : "bg-slate-100 text-slate-700"
                          }`}>
                            Step {step.step}
                          </span>
                          {step.highlight && (
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                              Confirm Admission
                            </span>
                          )}
                          {step.success && (
                            <span className="text-xs font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-full">
                              Placement Trigger
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                          {step.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Badge Icon (Placed on the vertical line) */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 bg-white shadow-md border-2 border-slate-200 group-hover:scale-110 transition-transform">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                        step.highlight 
                          ? "bg-emerald-600 text-white" 
                          : step.success 
                          ? "bg-blue-700 text-white" 
                          : "bg-blue-50 text-blue-700"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Empty spacer for alternating desktop layout */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fee Comparison Table Section */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Fee Comparison Table Across Programs
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Clear breakdown of the <strong className="text-emerald-600 font-bold">₹5,000 initial admission fee</strong> and the deferred fee payable only upon placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingCards.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-3xl p-7 bg-white border transition-all duration-300 shadow-sm hover:shadow-xl ${
                  item.popular 
                    ? "border-blue-300 ring-2 ring-blue-500/20" 
                    : "border-slate-200/90"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-700 text-white shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <h4 className="text-xl font-extrabold text-slate-900 mb-1">
                    {item.course}
                  </h4>
                  <span className="text-xs font-medium text-slate-500 mb-4 block">
                    {item.role}
                  </span>

                  {/* Pricing Comparison Box */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 mb-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                      <div>
                        <span className="text-xs font-semibold text-slate-500 block">Pay Now to Start</span>
                        <span className="text-2xl font-black text-emerald-600">
                          {item.now}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase bg-emerald-100 text-emerald-800">
                        Confirm Seat
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <div>
                        <span className="text-xs font-semibold text-slate-500 block">Pay After Placement</span>
                        <span className="text-xl font-bold text-slate-800">
                          {item.later}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-500">
                        Total: {item.total}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-600 flex-grow">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>3+ Industry Projects & Assessments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Placement Preparation & Mock Interviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Agentic AI Developer Tools Integrated</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenApply}
                    className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md shadow-blue-700/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enrol for {item.now}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              *Eligibility conditions apply. The remaining fee is payable as per the terms outlined in the Career Launch student agreement upon receiving an official placement offer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
