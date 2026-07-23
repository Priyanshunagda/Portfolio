import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight, FaBug, FaCode, FaCheckDouble } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="section-container min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-12">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/4 -left-12 w-[350px] h-[350px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-12 w-[350px] h-[350px] bg-accent-teal/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* Left Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Pulsing Status Tag */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-accent-teal/20 rounded-full bg-accent-teal/5 backdrop-blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
            <span className="text-accent-teal font-display font-semibold tracking-wide text-xs uppercase">
              Associate Software Engineer & QA Specialist
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 leading-[1.1] text-white">
            Engineering <br />
            <span className="text-gradient-teal-purple">Flawless Digital</span> <br />
            Experiences.
          </h1>

          {/* Typing Sub-Heading */}
          <div className="text-xl sm:text-2xl text-slate-300 mb-6 font-light h-[40px] flex items-center">
            <span>I automate &nbsp;</span>
            <TypeAnimation
              sequence={[
                'End-to-End Suites',
                2000,
                'Robust Regression Runs',
                2000,
                'API Security Workflows',
                2000,
                'Manual Life-Cycle Triages',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="font-bold text-accent-cyan tracking-wide"
              repeat={Infinity}
            />
          </div>

          {/* Core Tagline Description */}
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl font-light">
            I bridge the gap between manual precision and full-scale test automation. 
            Specializing in Cypress and Playwright suites, I empower engineering teams to deploy zero-defect deployments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <Link to="/projects" className="w-full sm:w-auto">
              <motion.button
                className="btn-primary w-full group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Projects
                <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                className="btn-outline w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          {/* Mini Stats row */}
          <div className="flex gap-8 border-t border-white/5 pt-8 w-full">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent-teal/10 rounded-xl text-accent-teal">
                <FaCheckDouble size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl leading-none">Cypress</h4>
                <p className="text-slate-400 text-xs mt-1">E2E Automation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple">
                <FaBug size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl leading-none">Playwright</h4>
                <p className="text-slate-400 text-xs mt-1">Cross-Browser</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan">
                <FaCode size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl leading-none">JavaScript</h4>
                <p className="text-slate-400 text-xs mt-1">Full-Stack Code</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Hero Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0"
        >
          {/* Decorative Backing Orbs */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/15 via-transparent to-accent-purple/15 rounded-full filter blur-[80px] -z-10 animate-spin-slow w-[80%] h-[80%] m-auto" />

          {/* Photo Frame Container */}
          <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-tr from-accent-teal via-white/5 to-accent-purple border border-white/10 shadow-2xl max-w-[380px] w-full aspect-square overflow-hidden group">
            {/* The Professional Headshot Image */}
            <img
              src="/profile.jpg"
              alt="Priyanshu Nagda - QA Automation Engineer"
              className="w-full h-full object-cover object-top rounded-[2rem] filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Hover Tech Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 rounded-[2rem]">
              <span className="text-white font-display font-bold text-lg">Priyanshu Nagda</span>
              <span className="text-accent-teal text-xs font-mono">Udaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Interactive Floating Metric Badge */}
          <motion.div
            className="absolute bottom-6 -left-6 glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/5 shadow-2xl animate-float max-w-[190px]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent-teal/15 flex items-center justify-center text-accent-teal shrink-0">
              <FaCheckDouble size={18} />
            </div>
            <div>
              <h5 className="text-white text-xs font-bold font-mono">Kadel Labs</h5>
              <p className="text-slate-400 text-[10px]">Associate Eng.</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;
