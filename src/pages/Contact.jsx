import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

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
    <section className="section-container">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title mb-4">Let's Build Something Amazing</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance work or full-time opportunities.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Card */}
          <motion.div
            className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 rounded-full blur-3xl -z-10 transition-transform group-hover:scale-150 duration-700" />

            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-accent-teal/10 rounded-xl text-accent-teal shrink-0">
                    <FaEnvelope size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Email</p>
                    <a href="mailto:pnagda5683@gmail.com" className="text-white hover:text-accent-teal transition-colors font-medium break-all text-lg">
                      pnagda5683@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple shrink-0">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Location</p>
                    <p className="text-white text-lg">Udaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-medium text-slate-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {/* Social Placeholders - Update these links! */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-accent-teal hover:text-primary-dark text-white rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-accent-teal hover:text-primary-dark text-white rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <FaGithub size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-accent-teal hover:text-primary-dark text-white rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:col-span-3 glass-panel p-8 rounded-2xl"
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
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-light/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-light/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-primary-light/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
