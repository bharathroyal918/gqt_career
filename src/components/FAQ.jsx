import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { faqData } from '../data/coursesData';

// Helper function to parse raw answer strings into structured sections
function parseAnswer(text) {
  if (!text) return [];
  const rawLines = text.split('\n');
  const sections = [];
  let currentList = null;

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) {
      if (currentList) {
        sections.push(currentList);
        currentList = null;
      }
      continue;
    }

    // Check if line is a bullet item
    if (line.startsWith('•') || line.startsWith('- ') || line.startsWith('* ')) {
      const content = line.replace(/^[•\-*]\s*/, '').trim();
      if (!currentList || currentList.type !== 'bullet') {
        if (currentList) sections.push(currentList);
        currentList = { type: 'bullet', items: [] };
      }
      currentList.items.push(content);
      continue;
    }

    // Check if line is a numbered item (e.g., "1. Register...")
    const numberMatch = line.match(/^(\d+)\.\s*(.+)$/);
    if (numberMatch) {
      if (!currentList || currentList.type !== 'numbered') {
        if (currentList) sections.push(currentList);
        currentList = { type: 'numbered', items: [] };
      }
      currentList.items.push({ num: numberMatch[1], text: numberMatch[2] });
      continue;
    }

    // If we were collecting list items and encountered regular text, flush the list
    if (currentList) {
      sections.push(currentList);
      currentList = null;
    }

    // Check if line is a subheading (ends with ':' or '?' or specific header patterns)
    if (line.endsWith(':') || line.endsWith('?') || line.toLowerCase().startsWith('who can join')) {
      sections.push({ type: 'heading', text: line });
      continue;
    }

    // Otherwise, treat as regular paragraph
    sections.push({ type: 'paragraph', text: line });
  }

  if (currentList) {
    sections.push(currentList);
  }

  return sections;
}

// Helper to render individual bullet items with clean alignment and highlights
function renderBulletItem(item, idx) {
  // Pattern 1: Arrow mapping (e.g., "Web Apps using Java → Java Full Stack")
  if (item.includes('→')) {
    const parts = item.split('→').map((p) => p.trim());
    return (
      <li
        key={idx}
        className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2.5" />
        <div className="flex-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-slate-800 font-medium">{parts[0]}</span>
          <span className="text-blue-600 font-bold shrink-0">→</span>
          <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/70 text-xs sm:text-sm">
            {parts[1]}
          </span>
        </div>
      </li>
    );
  }

  // Pattern 2: Title – Description separated by en-dash, em-dash, or hyphen
  let splitIndex = -1;
  let splitLen = 3;

  const dashIndex = item.indexOf(' – ');
  const emDashIndex = item.indexOf(' — ');
  const hyphenIndex = item.indexOf(' - ');

  if (dashIndex !== -1) {
    splitIndex = dashIndex;
    splitLen = 3;
  } else if (emDashIndex !== -1) {
    splitIndex = emDashIndex;
    splitLen = 3;
  } else if (hyphenIndex !== -1) {
    splitIndex = hyphenIndex;
    splitLen = 3;
  }

  if (splitIndex !== -1) {
    const title = item.slice(0, splitIndex).trim();
    const desc = item.slice(splitIndex + splitLen).trim();
    const isFee = desc.startsWith('₹');

    return (
      <li
        key={idx}
        className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2.5" />
        <div className="flex-1">
          <span className="font-semibold text-slate-900">{title}</span>
          <span className="text-slate-400 mx-1.5">–</span>
          {isFee ? (
            <span className="inline-flex items-center font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 text-xs sm:text-sm">
              {desc}
            </span>
          ) : (
            <span className="text-slate-600">{desc}</span>
          )}
        </div>
      </li>
    );
  }

  // Pattern 3: Standard bullet item
  return (
    <li
      key={idx}
      className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2.5" />
      <span className="flex-1 text-slate-600">{item}</span>
    </li>
  );
}

// Formatted answer renderer for FAQ answers
function renderFormattedAnswer(answer) {
  const sections = parseAnswer(answer);

  return (
    <div className="space-y-3.5">
      {sections.map((section, sIdx) => {
        if (section.type === 'heading') {
          return (
            <div
              key={sIdx}
              className="flex items-center gap-2 pt-3 pb-1 mt-2 border-t border-slate-100 first:mt-0 first:pt-0 first:border-0"
            >
              <span className="w-1.5 h-3.5 bg-blue-600 rounded-full shrink-0" />
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
                {section.text}
              </h4>
            </div>
          );
        }

        if (section.type === 'bullet') {
          return (
            <ul key={sIdx} className="space-y-2.5 my-2 pl-0.5">
              {section.items.map((item, iIdx) => renderBulletItem(item, iIdx))}
            </ul>
          );
        }

        if (section.type === 'numbered') {
          return (
            <ol key={sIdx} className="space-y-2.5 my-2.5 pl-0.5">
              {section.items.map((item, iIdx) => (
                <li
                  key={iIdx}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {item.num}
                  </span>
                  <span className="flex-1 text-slate-700 font-medium">
                    {item.text}
                  </span>
                </li>
              ))}
            </ol>
          );
        }

        if (section.type === 'paragraph') {
          const isOutro = sIdx === sections.length - 1 && sections.length > 1;
          if (isOutro) {
            return (
              <div
                key={sIdx}
                className="mt-4 p-3.5 sm:p-4 rounded-xl bg-blue-50/70 border border-blue-100/90 text-slate-700 text-sm sm:text-base leading-relaxed flex items-start gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-blue-950 font-medium">{section.text}</span>
              </div>
            );
          }

          return (
            <p
              key={sIdx}
              className="text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              {section.text}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Default open first question

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions? We Have Answers
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-6">
            Frequently Asked <span className="text-blue-700">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Everything you need to know about the GQT Career Launch Programme, curriculum depth, admission process, and deferred fee model.
          </p>
        </div>

        {/* Accordion List (Allows ONE item open at a time) */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-300 shadow-md ring-1 ring-blue-500/10"
                    : "bg-white border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 sm:px-7 py-5 flex items-center justify-between text-left focus:outline-none gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600"
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? "bg-blue-100 text-blue-700 rotate-180" 
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200/70"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-4 text-sm sm:text-base border-t border-slate-100">
                        {renderFormattedAnswer(faq.answer)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact Support Pill */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Have a specific question not listed here?{" "}
            <a href="#footer" className="font-bold text-blue-700 hover:underline">
              Speak directly with our academic mentors
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

