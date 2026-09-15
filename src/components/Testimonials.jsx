import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, GraduationCap } from 'lucide-react';
import { testimonialsData } from '../data/coursesData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Alumni Success Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Trusted by Students Across <span className="text-blue-700">Top Engineering Colleges</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Real stories from graduates who started their journey with ₹5,000 and launched their IT careers.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/40 border border-slate-200/90 shadow-xl relative"
            >
              <Quote className="absolute top-8 right-8 sm:top-12 sm:right-12 w-16 h-16 text-blue-100 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                {/* Student Photo */}
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-600 shadow-md shrink-0"
                />

                <div>
                  <div className="flex items-center gap-1 mb-1.5">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {current.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 mt-1">
                    <span className="font-semibold text-blue-700">{current.course}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {current.college}
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic relative z-10">
                "{current.text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-blue-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center text-slate-700 transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center text-slate-700 transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
