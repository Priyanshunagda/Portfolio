import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-container pt-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Let&apos;s Connect</h1>
          <p className="section-subtitle">
            I am currently open to freelance consultancies, full-time contract engagements, and team collaborations. 
            Drop me a message, and let&apos;s build something robust together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Info Side */}
          <motion.div
            className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:border-white/10"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none -z-10 transition-transform group-hover:scale-150 duration-700" />
            
            <div className="space-y-10">
              <h3 className="text-2xl font-display font-extrabold text-white">Contact Information</h3>
              
              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-accent-teal shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">Email Address</p>
                    <a 
                      href="mailto:pnagda5683@gmail.com" 
                      className="text-white hover:text-accent-teal text-base font-semibold transition-colors duration-300 break-all"
                    >
                      pnagda5683@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-accent-purple shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">Location</p>
                    <p className="text-white text-base font-semibold">Udaipur, Rajasthan, India</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Circle Row */}
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-4">Connect with me</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/priyanshu-nagda" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 border border-white/5 hover:bg-blue-600 hover:text-white hover:-translate-y-1 text-slate-300 rounded-full transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={16} />
                </a>
                <a 
                  href="https://github.com/Priyanshunagda" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 border border-white/5 hover:bg-slate-800 hover:text-white hover:-translate-y-1 text-slate-300 rounded-full transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={16} />
                </a>
                <a 
                  href="https://www.instagram.com/nagda.priyansh_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 border border-white/5 hover:bg-pink-600 hover:text-white hover:-translate-y-1 text-slate-300 rounded-full transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Form Side */}
          <motion.div
            className="md:col-span-3 glass-panel p-8 rounded-2xl relative border border-white/5"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <form
              action="https://formspree.io/f/xqapwgol"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="name" 
                    className="text-xs font-mono uppercase tracking-wider text-slate-500"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#0d1222]/80 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:bg-[#11172a] focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/10 transition-all text-sm font-light"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="email" 
                    className="text-xs font-mono uppercase tracking-wider text-slate-500"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. name@company.com"
                    className="w-full bg-[#0d1222]/80 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:bg-[#11172a] focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/10 transition-all text-sm font-light"
                  />
                </div>

              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="message" 
                  className="text-xs font-mono uppercase tracking-wider text-slate-500"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project, roles or consultancy needs..."
                  className="w-full bg-[#0d1222]/80 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:bg-[#11172a] focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/10 transition-all resize-none text-sm font-light"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full shadow-lg shadow-accent-teal/5 flex items-center justify-center gap-2"
              >
                <FaPaperPlane size={13} /> Send Secure Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
