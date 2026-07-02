import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Priyanshunagda', label: 'GitHub', color: 'hover:text-white hover:bg-slate-800' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/priyanshu-nagda', label: 'LinkedIn', color: 'hover:text-white hover:bg-blue-600' },
    { icon: FaInstagram, href: 'https://www.instagram.com/nagda.priyansh_', label: 'Instagram', color: 'hover:text-white hover:bg-pink-600' },
    { icon: BiLogoGmail, href: 'mailto:pnagda5683@gmail.com', label: 'Email', color: 'hover:text-white hover:bg-red-600' },
  ];

  return (
    <footer className="bg-[#05070c] border-t border-white/5 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group font-display tracking-tight text-lg font-extrabold">
          <span className="text-white group-hover:text-accent-teal transition-colors duration-300">Priyanshu</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-purple font-black">.N</span>
        </Link>

        {/* Copyright */}
        <p className="text-slate-500 text-xs font-light font-sans text-center md:text-left order-3 md:order-2">
          © {new Date().getFullYear()} Priyanshu Nagda. All rights reserved.
        </p>

        {/* Social Connections */}
        <div className="flex gap-2.5 order-2 md:order-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 bg-white/5 border border-white/5 p-2.5 rounded-full transition-all duration-300 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon className="text-base" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;