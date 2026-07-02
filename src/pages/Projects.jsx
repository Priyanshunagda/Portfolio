import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRegFolderOpen } from 'react-icons/fa';
import srms from '../assets/srms.png';
import cypressImg from '../assets/qa-cypress.png';
import playwrightImg from '../assets/qa-playwright.png';
import manualImg from '../assets/qa-manual.png';
import jiraImg from '../assets/qa-jira.png';
import cicseImg from '../assets/qa-cicse.png';
import cicseModuleImg from '../assets/qa-cicse-module.png';

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Automation", "Manual", "Web Dev"];

  const projects = [
    {
      title: "CICSE Automation Suite",
      description:
        "Complete automated regression coverage for Council for the Indian School Certificate Examinations (CICSE). Architected workflow scripts covering registration validation, secure multi-role portal login states, and student transaction workflows.",
      skills: ["Cypress", "JavaScript", "Automation", "Regression", "E2E"],
      category: "Automation",
      image: cicseImg
    },
    {
      title: "Student Result Management",
      description:
        "A full-featured management portal designed to streamline academic tracking. Developed secure role partitions for administrators to manage student databases, log attendances, and compile report metrics seamlessly.",
      skills: ["PHP", "MySQL", "HTML/SCSS", "JavaScript"],
      category: "Web Dev",
      image: srms,
      github: "https://github.com/Priyanshunagda/Student-Result-Management-System",
      live: "https://student-result-management-system-gamma.vercel.app"
    },
    {
      title: "CICSE Manual Compliance",
      description:
        "Conducted end-to-end manual lifecycle audits for Eoffice and Affiliation modules. Supervised approval hierarchy testing and verified payment gateway transactions across sandboxed networks.",
      skills: ["Manual Testing", "Life-Cycle", "Security Audits", "Payment Gateways"],
      category: "Manual",
      image: cicseModuleImg
    },
    {
      title: "Cypress Testing Framework",
      description:
        "Designed and implemented clean Page Object Models (POM) within Cypress. Focused on structuring reusable custom commands and reporting pipelines for continuous integration smoke runs.",
      skills: ["Cypress", "JavaScript", "POM", "CI Pipeline"],
      category: "Automation",
      image: cypressImg
    },
    {
      title: "Playwright Cross-Browser Suite",
      description:
        "Built robust cross-browser test configurations (Chromium, WebKit, Firefox) using Playwright. Configured HTML auto-reporting pipelines and visual trace view debugging tools.",
      skills: ["Playwright", "TypeScript", "Cross-Browser", "Trace Viewer"],
      category: "Automation",
      image: playwrightImg
    },
    {
      title: "E-Commerce Quality Assurance",
      description:
        "Authored structured test strategies, cross-referenced test matrices, and ran manual exploratory test plans for retail checkout funnels, mapping boundary cases.",
      skills: ["Test Plans", "Edge Cases", "Exploratory QA", "Bug Tracking"],
      category: "Manual",
      image: manualImg
    },
    {
      title: "Defect Lifecycle & Triage",
      description:
        "Spearheaded defect lifecycles inside Jira, formulating high-fidelity bug reports featuring video playbacks, console logs, and step-by-step reproductions.",
      skills: ["Jira", "Defect Triage", "Lifecycle Reporting", "Collaboration"],
      category: "Manual",
      image: jiraImg
    }
  ];

  // Filtering Logic
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-container pt-12">
      <div className="text-center mb-12">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h1>
        <p className="section-subtitle">
          A showcase of automation code frameworks, quality compliance operations, and full-stack software products.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-16">
        <div className="flex gap-1.5 p-1 bg-white/5 border border-white/5 rounded-full backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat 
                  ? "text-primary-dark font-bold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === cat && (
                <motion.span 
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Showcase Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group glass-panel rounded-2xl overflow-hidden relative border border-white/5 flex flex-col h-full card-hover-glow"
            >
              {/* Image Showcase */}
              <div className="h-52 overflow-hidden relative bg-[#090e1a]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60 z-10" />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent-teal/10 to-accent-purple/10 flex items-center justify-center">
                    <FaRegFolderOpen size={30} className="text-slate-600" />
                  </div>
                )}
                
                {/* Category Floating Badge */}
                <span className="absolute top-4 right-4 z-20 text-[10px] font-mono tracking-wider font-bold uppercase bg-primary-dark/80 backdrop-blur-md px-3 py-1.5 rounded-full text-accent-cyan border border-white/5">
                  {project.category}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-teal transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link Badges */}
                <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <FaGithub size={14} /> Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-accent-teal flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-slate-500 text-xs font-mono italic">
                      Private/Confidential
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;



