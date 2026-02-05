import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Priyanshunagda', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/priyanshu-nagda', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/nagda.priyansh_', label: 'Instagram' },
    { icon: BiLogoGmail, href: 'mailto:pnagda5683@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 border-t border-glass-border bg-[#020617]/50 mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-teal hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all p-2 rounded-full"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-500 text-sm">
              Designed & Built with <span className="text-accent-purple">♥</span> by Priyanshu Nagda
            </span>
            <span className="text-slate-600 text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;