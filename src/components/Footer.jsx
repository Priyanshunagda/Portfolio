import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Priyanshunagda', label: 'GitHub', color: 'hover:text-slate-950 hover:bg-slate-200' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/priyanshu-nagda', label: 'LinkedIn', color: 'hover:text-slate-950 hover:bg-blue-50' },
    { icon: FaInstagram, href: 'https://www.instagram.com/nagda.priyansh_', label: 'Instagram', color: 'hover:text-slate-950 hover:bg-pink-50' },
    { icon: BiLogoGmail, href: 'mailto:pnagda5683@gmail.com', label: 'Email', color: 'hover:text-slate-950 hover:bg-red-50' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 py-8 relative z-10">
      <div className="page-shell flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Logo */}
        <Link to="/" className="font-display text-lg font-semibold text-slate-950 hover:text-accent-indigo">
          Priyanshu Nagda
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
              className={`text-slate-600 bg-slate-50 border border-slate-200 p-2.5 rounded-full transition-all duration-300 ${social.color}`}
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
