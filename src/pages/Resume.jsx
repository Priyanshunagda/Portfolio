import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaCheckDouble, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const experience = [
  {
    role: "Associate Software Engineer",
    organization: "Kadel Labs",
    dates: "Sep 2025 - Present",
    description: "Design and execute functional, regression, and sanity tests for client projects, including UltraBanker and CICSE. Automate workflows with Cypress and Playwright, track defects through closure, and support release readiness.",
  },
  {
    role: "Full-Stack Developer Intern",
    organization: "Dexterdigi",
    dates: "May 2025 - Sep 2025",
    description: "Built MERN web application features and integrated REST APIs with responsive front-end interfaces.",
  },
  {
    role: "Web Developer Intern",
    organization: "MLS University",
    dates: "Jul 2023 - Aug 2023",
    description: "Developed the Angular front end for Pukar and collaborated on integrating Laravel APIs.",
  },
];

function Resume() {
  const highlights = [
    { label: "Current Role", val: "Associate Software Engineer", icon: FaBriefcase, color: "text-accent-teal", bg: "bg-accent-teal/5" },
    { label: "Core Skills", val: "Manual Testing, Cypress, Playwright", icon: FaCheckDouble, color: "text-accent-cyan", bg: "bg-accent-cyan/5" },
    { label: "Education", val: "MCA, Mohanlal Sukhadia University", icon: FaGraduationCap, color: "text-accent-purple", bg: "bg-accent-purple/5" },
  ];

  const skillBadges = [
    "Cypress", "Playwright", "Manual Testing", "Test Case Design", "Bug Tracking",
    "JavaScript", "Java", "Python", "React", "Node.js", "Express.js", "Angular",
    "MongoDB", "MySQL", "Tailwind CSS", "Burp Suite",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto p-6 pt-12 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent-teal/5 to-transparent pointer-events-none rounded-3xl -z-10" />

      {/* Title & Download Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-slate-200 pb-8 relative z-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-slate-950">Curriculum Vitae</h1>
          <p className="text-slate-600 text-sm font-light mt-1">Review my credentials, certifications, and career journey.</p>
        </div>
        
        <motion.a
          href="/Priyanshu-Resume.pdf"
          download
          className="btn-primary w-full sm:w-auto"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaDownload size={14} /> Download PDF Resume
        </motion.a>
      </div>

      {/* Highlights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="panel p-5 rounded-2xl border border-slate-200 flex gap-4 items-center"
          >
            <div className={`p-3 rounded-xl shrink-0 ${h.bg} ${h.color}`}>
              <h.icon size={18} />
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-mono">{h.label}</p>
              <h4 className="text-slate-950 text-sm font-bold mt-0.5">{h.val}</h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Layout Split: Experience and Core Competencies */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left Side: Summary & Competencies */}
        <div className="lg:col-span-4 space-y-6">
          <div className="panel p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
              <FaAward className="text-accent-teal" /> Core Competencies
            </h3>
            <p className="text-slate-600 text-xs font-light leading-relaxed mb-6 font-sans">
              Manual and automation testing for client projects, with a full-stack development background in MERN.
            </p>
            <div className="flex flex-wrap gap-2">
              {skillBadges.map((badge) => (
                <span 
                  key={badge}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="panel p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-950 mb-3">Key Focus Areas</h3>
            <ul className="space-y-3 text-xs text-slate-600 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal"></span>
                E2E Automation Testing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span>
                Test Case & Scenario Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
                Functional, Regression & Sanity Testing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-pink"></span>
                Defect Tracking & Verification
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Timeline Summaries */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Experience Timeline */}
          <div className="panel p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-950 mb-6 flex items-center gap-2">
              <FaBriefcase className="text-accent-teal" /> Work Timeline
            </h3>
            
            <div className="relative border-l border-slate-200 pl-4 ml-2 space-y-6">
              {experience.map(({ role, organization, dates, description }) => (
                <div className="relative" key={role}>
                  <span className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-accent-teal shadow"></span>
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">{role}</h4>
                      <p className="text-xs text-slate-600 font-medium">{organization}</p>
                    </div>
                    <span className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full shrink-0">
                      {dates}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs font-light leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="panel p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-950 mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-accent-purple" /> Academic Background
            </h3>
            
            <div className="relative border-l border-slate-200 pl-4 ml-2 space-y-6">
              <div className="relative">
                <span className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-accent-purple shadow"></span>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Master of Computer Applications (MCA)</h4>
                    <p className="text-xs text-slate-600 font-medium">Mohanlal Sukhadia University</p>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full shrink-0">
                    2023 - 2025
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-light leading-relaxed">
                  Deepened logic inside Database Systems, Software Quality Assurances, and Design Patterns.
                </p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-accent-purple shadow"></span>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-xs text-slate-600 font-medium">Mohanlal Sukhadia University</p>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full shrink-0">
                    2020 - 2023
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-light leading-relaxed">
                  Acquired key fundamentals in Object-Oriented paradigms, procedural algorithm models, and dynamic web environments.
                </p>
              </div>
            </div>
          </div>

          <div className="panel p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <FaAward className="text-accent-teal" /> Certification
            </h3>
            <p className="text-sm font-bold text-slate-950">Backend Web Development</p>
            <p className="text-xs text-slate-600 mt-1">TCR Innovation, 2022</p>
          </div>
        </div>

      </div>

      {/* Direct PDF Download Action block */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="panel p-8 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center gap-4"
      >
        <FaFileAlt size={24} className="text-accent-indigo" />
        <h3 className="text-lg font-bold text-slate-950">Printable resume</h3>
        <a 
          href="/Priyanshu-Resume.pdf" 
          download 
          className="btn-outline text-xs px-6 py-2.5"
        >
          <FaDownload size={12} /> Download PDF Resume
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
