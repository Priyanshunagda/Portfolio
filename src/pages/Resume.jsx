import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto relative p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none rounded-2xl" />

      <div className="flex justify-between items-center mb-8 px-6 relative z-10">
        <h1 className="section-title mb-0">Resume</h1>
        <motion.a
          href="/Priyanshu-Resume.pdf"
          download
          className="btn-primary flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> Download
        </motion.a>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-transparent p-0 rounded-lg border-none flex justify-center items-center"
      >
        <object
          data="/Priyanshu-Resume.pdf#toolbar=0"
          type="application/pdf"
          className="w-[780px] h-[1103px] z-10 m-4"
          aria-label="Resume Preview"
        >
          <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/Priyanshu-Resume.pdf">Download PDF</a>.</p>
        </object>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
