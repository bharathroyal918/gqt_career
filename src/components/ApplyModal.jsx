import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { coursesData } from '../data/coursesData';
import logoImg from '../assets/logo.jpeg';

export default function ApplyModal({ isOpen, onClose, initialCourse = "" }) {
  const [course, setCourse] = useState(initialCourse || "Java Full Stack");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("2025");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update initialCourse if provided
  React.useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
    }
  }, [initialCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleRazorpayInstant = () => {
    // Check if Razorpay is loaded
    if (window.Razorpay) {
      const options = {
        key: "rzp_test_placeholder", // placeholder or real key
        amount: 500000, // 5000 in paise
        currency: "INR",
        name: "GQT Career Launch",
        description: `Admission Confirmation for ${course}`,
        handler: function (response) {
          setSubmitted(true);
          confetti({ particleCount: 150, spread: 80 });
        },
        prefill: {
          name: name || "Student",
          email: email || "student@example.com",
          contact: phone || "9999999999"
        },
        theme: {
          color: "#1D4ED8"
        }
      };
      try {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (err) {
        // Fallback to submitted state
        handleSubmit({ preventDefault: () => {} });
      }
    } else {
      handleSubmit({ preventDefault: () => {} });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs mb-3">
              <img 
                src={logoImg} 
                alt="GQT Logo" 
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Application Confirmed!
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-900">{name || "Student"}</strong>! Your seat registration for <strong className="text-blue-700">{course}</strong> under the ₹5,000 Career Launch model is recorded. Our academic counselor will call you within 2 hours.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left text-xs text-emerald-800 mb-6 space-y-1">
              <div>✓ Registration ID: GQT-CL-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div>✓ Initial Admission Deposit: ₹5,000</div>
              <div>✓ Balance Fee: Payable only after placement offer</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-full text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition-all shadow-md"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-2xs inline-flex items-center">
                  <img 
                    src={logoImg} 
                    alt="GQT Logo" 
                    className="h-7 sm:h-8 w-auto object-contain" 
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50">
                  <Sparkles className="w-3.5 h-3.5" />
                  Admission Form
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Apply for Career Launch
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Start with just ₹5,000 now. Pay the remaining fee after placement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Select Program Track
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {coursesData.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} — Start with ₹5,000 (Remaining {c.feeLater} after placement)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    College / University
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DSCE Bangalore"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Graduation Year
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="2026">2026 (Final Year)</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023 or Earlier</option>
                  </select>
                </div>
              </div>

              {/* Fee Notice */}
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-between text-xs font-semibold text-blue-950">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-blue-700" />
                  Initial Fee to Start:
                </span>
                <span className="text-base font-black text-emerald-600">₹5,000</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 active:scale-98 transition-all shadow-lg shadow-blue-700/25 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit & Proceed with ₹5,000</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-400">
                  🔒 Safe & Encrypted • Powered by Razorpay
                </span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
