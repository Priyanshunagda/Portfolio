import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRegFolderOpen } from 'react-icons/fa';
import srms from '../assets/srms.png';
import cypressImg from '../assets/qa-cypress.png';
import playwrightImg from '../assets/qa-playwright.png';
import manualImg from '../assets/qa-manual.png';
import jiraImg from '../assets/qa-jira.png';
import cicseImg from '../assets/qa-cicse.png';
import ultrabankerLogin from '../assets/ultrabanker-login.png';
import testPilotDashboard from '../assets/testpilot-dashboard.jpg';
import testPilotSignIn from '../assets/testpilot-sign-in.jpg';

const testPilotScreenshots = [
  { label: "Demo dashboard", source: testPilotDashboard, alt: "TestPilot AI dashboard with sample QA data" },
  { label: "Sign-in", source: testPilotSignIn, alt: "TestPilot AI sign-in screen" },
];

function TestPilotScreenshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testPilotScreenshots[activeIndex];

  return (
    <div className="relative z-10 flex h-full flex-col">
      <a
        href={current.source}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size screenshot: ${current.alt}`}
        className="block min-h-0 flex-1 focus-visible:outline focus-visible:outline-accent-cyan"
      >
        <img src={current.source} alt={current.alt} className="h-full w-full object-contain" />
      </a>
      <div role="group" aria-label="Project screenshots" className="flex justify-center gap-2 p-2">
        {testPilotScreenshots.map(({ label }, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-blue-300 aria-pressed:border-blue-200 aria-pressed:bg-blue-50 aria-pressed:text-accent-indigo"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Automation", "Manual", "Web Dev"];

  const projects = [
    {
      title: "TestPilot AI",
      description:
        "An AI-assisted QA platform that discovers features on web applications, generates test cases from those findings, and runs Playwright tests in Chromium. It tracks failures and produces test reports for QA review.",
      skills: ["Playwright", "Gemini", "Next.js", "FastAPI", "PostgreSQL"],
      category: "Automation",
      ScreenshotGallery: TestPilotScreenshots,
      status: "In development"
    },
    {
      title: "UltraBanker",
      description:
        "I test this loan origination system at Kadel Labs, covering end-to-end functional, regression, and sanity checks and automating key workflows with Cypress and Playwright.",
      skills: ["Manual Testing", "Regression Testing", "Cypress", "Playwright"],
      category: "Automation",
      additionalCategory: "Manual",
      screenshot: ultrabankerLogin,
      status: "Company project"
    },
    {
      title: "CICSE",
      description: "Manual and automated QA for education portals at Kadel Labs.",
      details: [
        { label: "Manual testing", description: "Designed and executed functional, regression, and sanity checks for eOffice and Affiliation, including approval workflows and sandbox payment verification. Reported defects to support release readiness." },
        { label: "Test automation", description: "Built Cypress regression tests in JavaScript for registration validation, sign-in across user roles, and student transaction workflows." },
      ],
      skills: ["Manual Testing", "Cypress", "JavaScript", "Regression Testing"],
      category: "Automation",
      additionalCategory: "Manual",
      image: cicseImg,
      status: "Company project"
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
    : projects.filter(p => p.category === activeCategory || p.additionalCategory === activeCategory);

  return (
    <section className="section-container pt-12">
      <header>
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h1>
        <p className="section-subtitle">
          Projects in test automation, manual quality assurance, and web development.
        </p>
      </header>

      {/* Category Tabs */}
      <div className="mb-8 flex justify-center">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-1 rounded-xl border border-slate-200 bg-white p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                activeCategory === cat
                  ? "bg-accent-indigo text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Showcase Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
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
              className="panel panel-effect flex h-full flex-col overflow-hidden rounded-2xl"
            >
              {/* Image Showcase */}
              <div className="relative h-52 shrink-0 overflow-hidden border-b border-slate-200 bg-slate-100">
                {project.ScreenshotGallery ? (
                  <project.ScreenshotGallery />
                ) : project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} sign-in screen`}
                    className="w-full h-full object-contain"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent-teal/10 to-accent-purple/10 flex items-center justify-center">
                    <FaRegFolderOpen size={30} className="text-slate-600" />
                  </div>
                )}
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <p className="mb-2 text-xs font-semibold text-accent-indigo">
                  {[project.category, project.additionalCategory].filter(Boolean).join(' / ')}
                </p>
                <h2 className="mb-2 text-2xl">
                  {project.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                {project.details && (
                  <dl className="mb-4 space-y-3 border-t border-slate-200 pt-4 text-sm">
                    {project.details.map(({ label, description }) => (
                      <div key={label}>
                        <dt className="font-semibold text-slate-950">{label}</dt>
                        <dd className="mt-1 leading-relaxed text-slate-600">{description}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {/* Tech Tags */}
                <div className="mb-4 mt-auto flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link Badges */}
                <div className="flex gap-4 border-t border-slate-200 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-950 flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <FaGithub size={14} /> Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-accent-teal flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-slate-500 text-xs font-mono italic">
                      {project.status ?? "Private/Confidential"}
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



