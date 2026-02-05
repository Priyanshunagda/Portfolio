import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-accent-purple/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-accent-teal/20 rounded-full blur-[100px] animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-4xl px-4"
      >
        <motion.div
          className="inline-block px-4 py-2 mb-6 border border-accent-teal/30 rounded-full bg-accent-teal/10 backdrop-blur-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <span className="text-accent-teal font-medium tracking-wide text-sm">Automation Engineer</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Quality Driven <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-purple">
            Engineering
          </span>
        </h1>

        <div className="text-2xl md:text-4xl text-slate-300 mb-8 font-light min-h-[60px]">
          I build {' '}
          <TypeAnimation
            sequence={[
              'Robust Test Plans',
              1500,
              'Automated Suites',
              1500,
              'Quality Software',
              1500
            ]}
            wrapper="span"
            speed={50}
            className="font-semibold text-accent-cyan"
            repeat={Infinity}
          />
        </div>

        <motion.p
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Specializing in Cypress and Playwright to deliver flawless user experiences.
          Bridging the gap between manual testing and full-scale automation.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/projects">
            <motion.button
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
