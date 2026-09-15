import React from 'react';
import { motion } from 'framer-motion';
import { X, BookOpen, Clock, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export default function CurriculumModal({ isOpen, onClose, course, onApplyForCourse }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
            <BookOpen className="w-4 h-4" />
            Complete Curriculum Overview
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {course.tagline} • <strong className="text-blue-700">{course.hours} Practical Training</strong>
          </p>
        </div>

        {/* Modules Scroll Area */}
        <div className="overflow-y-auto space-y-4 pr-1 flex-grow mb-6">
          {course.modules && course.modules.map((mod, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80"
            >
              <h4 className="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                {mod.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pl-8">
                {mod.topics.map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Bottom CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div className="text-xs">
            <span className="text-slate-500 block">Seat Confirmation:</span>
            <span className="text-lg font-black text-emerald-600">{course.feeNow}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApplyForCourse(course.title);
              }}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md flex items-center gap-1.5"
            >
              <span>Enrol in {course.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
