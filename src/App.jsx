import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromiseSection from './components/PromiseSection';
import PaymentModel from './components/PaymentModel';
import WhyChooseGQT from './components/WhyChooseGQT';
import CoursesSection from './components/CoursesSection';
import CurriculumOverview from './components/CurriculumOverview';
import ProjectShowcase from './components/ProjectShowcase';
import PlacementPrep from './components/PlacementPrep';
import ComparisonSection from './components/ComparisonSection';
import Roadmap from './components/Roadmap';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import PlacementSupport from './components/PlacementSupport';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import ApplyModal from './components/ApplyModal';
import BrochureModal from './components/BrochureModal';
import CurriculumModal from './components/CurriculumModal';

import { coursesData } from './data/coursesData';

export default function App() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState("");
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false);
  const [selectedCourseForCurriculum, setSelectedCourseForCurriculum] = useState(null);

  const handleOpenApply = (courseTitle = "") => {
    setSelectedCourseForApply(courseTitle || "Java Full Stack");
    setApplyModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setBrochureModalOpen(true);
  };

  const handleOpenCurriculum = (course) => {
    setSelectedCourseForCurriculum(course);
    setCurriculumModalOpen(true);
  };

  const handleOpenCurriculumByName = (courseName) => {
    const found = coursesData.find(c => c.title.toLowerCase().includes(courseName.toLowerCase())) || coursesData[0];
    setSelectedCourseForCurriculum(found);
    setCurriculumModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenBrochure={handleOpenBrochure}
      />

      <main className="flex-grow">
        {/* SECTION 1 — HERO SECTION */}
        <Hero
          onOpenApply={() => handleOpenApply()}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* SECTION 2 — CAREER LAUNCH PROMISE */}
        <PromiseSection />

        {/* SECTION 3 — ₹5,000 PAYMENT MODEL & PRICING TABLE */}
        <PaymentModel
          onOpenApply={() => handleOpenApply()}
        />

        {/* SECTION 4 — WHY CHOOSE GQT (STATISTICS) */}
        <WhyChooseGQT />

        {/* SECTION 5 — COURSES SECTION */}
        <CoursesSection
          onOpenApply={handleOpenApply}
          onOpenCurriculum={handleOpenCurriculum}
        />

        {/* SECTION 6 — WHAT YOU WILL LEARN IN 500+ HOURS */}
        <CurriculumOverview />

        {/* SECTION 7 — PROJECT SHOWCASE */}
        <ProjectShowcase />

        {/* SECTION 8 — PLACEMENT PREPARATION */}
        <PlacementPrep />

        {/* SECTION 9 — REGULAR WAY VS GQT WAY */}
        <ComparisonSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* SECTION 10 — CAREER JOURNEY ROADMAP */}
        <Roadmap />

        {/* SECTION 11 — CERTIFICATES */}
        <Certificates />

        {/* SECTION 12 — STUDENT TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 13 — PLACEMENT SUPPORT */}
        <PlacementSupport />

        {/* SECTION 14 — FAQ REDESIGN */}
        <FAQ />

        {/* SECTION 15 — FINAL CTA */}
        <FinalCTA
          onOpenApply={() => handleOpenApply()}
          onOpenContact={() => handleOpenApply()}
        />
      </main>

      {/* FOOTER REDESIGN */}
      <Footer
        onOpenApply={() => handleOpenApply()}
        onOpenCurriculumByName={handleOpenCurriculumByName}
      />

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        initialCourse={selectedCourseForApply}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />

      <CurriculumModal
        isOpen={curriculumModalOpen}
        onClose={() => setCurriculumModalOpen(false)}
        course={selectedCourseForCurriculum}
        onApplyForCourse={(courseTitle) => handleOpenApply(courseTitle)}
      />
    </div>
  );
}
