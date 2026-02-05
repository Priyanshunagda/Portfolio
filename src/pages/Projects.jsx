import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import srms from '../assets/srms.png';
import cypressImg from '../assets/qa-cypress.png';
import playwrightImg from '../assets/qa-playwright.png';
import manualImg from '../assets/qa-manual.png';
import jiraImg from '../assets/qa-jira.png';
import cicseImg from '../assets/qa-cicse.png';
import cicseModuleImg from '../assets/qa-cicse-module.png';

function Projects() {
  const projects = [
    {
      title: "CICSE Automation",
      description:
        "Automation coverage for CICSE workflows including login, form validation, and key portal journeys to support reliable regression runs.",
      skills: ["Automation", "Regression", "JavaScript", "E2E"],
      image: cicseImg
    },
    {
      title: "CICSE Module QA",
      description:
        "Manual QA covering Eoffice and Affiliation workflows, full form submission approval lifecycle, and payment gateway testing.",
      skills: ["Manual Testing", "Approval Flow", "Payment Gateway", "Jira"],
      image: cicseModuleImg
    },
    {
      title: "Cypress E2E Suite",
      description:
        "Automated critical user flows with Cypress, focusing on reliable smoke and regression coverage for web applications.",
      skills: ["Cypress", "JavaScript", "E2E", "Page Objects"],
      image: cypressImg
    },
    {
      title: "Playwright Cross-Browser",
      description:
        "Playwright suite validating login, dashboards, and core workflows across Chromium, Firefox, and WebKit.",
      skills: ["Playwright", "Typescript", "Cross-Browser", "Trace Viewer"],
      image: playwrightImg
    },
    {
      title: "E-commerce Test Plan",
      description:
        "End-to-end manual testing with structured test plans, test cases, and exploratory sessions to validate checkout flows.",
      skills: ["Test Plan", "Test Cases", "Exploratory", "Jira"],
      image: manualImg
    },
    {
      title: "Jira Defect Lifecycle",
      description:
        "Defect reporting, triage, and verification using Jira workflows with clear steps, evidence, and priority handling.",
      skills: ["Jira", "Bug Reporting", "Triage", "Verification"],
      image: jiraImg
    },
    {
      title: "Student Result System",
      description:
        "Full-stack student management application for tracking admissions, attendance, and exam results.",
      skills: ["PHP", "MySQL", "HTML/SCSS", "JS"],
      image: srms,
      github: "https://github.com/Priyanshunagda/Student-Result-Management-System",
      live: "https://student-result-management-system-gamma.vercel.app"
    }
  ];

  return (
    <section className="section-container">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Featured Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group glass-panel rounded-2xl overflow-hidden relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* Image Container */}
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary-dark/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent-teal/20 to-accent-purple/20 flex items-center justify-center">
                  <span className="text-slate-400 font-display">No Preview</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 relative z-20">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-teal transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded bg-slate-800/50 text-accent-cyan border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-glass-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white flex items-center gap-1.5 text-sm transition-colors"
                  >
                    <FaGithub /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-accent-teal flex items-center gap-1.5 text-sm transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className="text-slate-500 text-sm italic">Internal / Confidential</span>
                )}
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-teal/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;



