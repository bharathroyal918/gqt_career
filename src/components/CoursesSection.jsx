import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Clock, 
  Briefcase, 
  FolderGit2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BookOpen,
  ChevronRight,
  Filter
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CoursesSection({ onOpenApply, onOpenCurriculum }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterCategories = ['All', 'Full Stack', 'QA & Testing', 'Data & AI'];

  const filteredCourses = coursesData.filter(course => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Full Stack') return course.id.includes('fullstack') || course.id.includes('mern');
    if (selectedFilter === 'QA & Testing') return course.id.includes('testing');
    if (selectedFilter === 'Data & AI') return course.id.includes('data');
    return true;
  });

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Curated Career Tracks
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Explore 6 Industry-Driven <span className="text-blue-700">Career Launch Courses</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Every curriculum is engineered in alignment with top tier IT hiring benchmarks, complete with hands-on projects, Agentic AI developer practices, and interview coaching.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {filterCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === cat
                  ? "bg-blue-700 text-white shadow-md shadow-blue-700/25"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Individual Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top border bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Course Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                      Career Launch Track
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  {course.popular && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {course.tagline}
                </p>

                {/* Key Course Metrics Row */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 mb-6 text-center">
                  <div className="p-1">
                    <span className="text-[10px] text-slate-400 font-semibold block">Duration</span>
                    <span className="text-xs font-bold text-slate-800">{course.duration}</span>
                  </div>
                  <div className="p-1 border-x border-slate-200/80">
                    <span className="text-[10px] text-slate-400 font-semibold block">Training</span>
                    <span className="text-xs font-bold text-blue-700">{course.hours}</span>
                  </div>
                  <div className="p-1">
                    <span className="text-[10px] text-slate-400 font-semibold block">Live Projects</span>
                    <span className="text-xs font-bold text-emerald-700">{course.projectsCount}</span>
                  </div>
                </div>

                {/* Technology Stack Badges */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${
                          tech.includes("AI") || tech.includes("Prompt")
                            ? "bg-purple-50 text-purple-700 border-purple-200/70"
                            : "bg-slate-100 text-slate-700 border-slate-200/60"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities / Roles */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Career Opportunities
                  </span>
                  <div className="space-y-1.5">
                    {course.careerRoles.map((role, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                {/* Fee badge */}
                <div className="flex items-center justify-between text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 mb-1">
                  <span>Start with: <strong>{course.feeNow}</strong></span>
                  <span className="text-slate-500 text-[11px]">Remaining {course.feeLater} after placement</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onOpenCurriculum(course)}
                    className="w-full py-2.5 px-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                  >
                    View Curriculum
                  </button>
                  <button
                    onClick={() => onOpenApply(course.title)}
                    className="w-full py-2.5 px-3 rounded-full text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors text-center shadow-xs"
                  >
                    Enrol Now
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
