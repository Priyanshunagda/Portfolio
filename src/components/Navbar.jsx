import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="page-shell relative flex min-h-[4.5rem] flex-wrap items-center justify-between">
        <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 font-display text-lg font-semibold text-slate-950">
          <span aria-hidden="true" className="grid size-9 place-items-center rounded-lg bg-blue-50 text-sm font-bold text-accent-indigo">PN</span>
          Priyanshu Nagda
        </NavLink>
        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2.5 text-slate-700 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col gap-1 border-t border-slate-200 py-3 md:flex md:w-auto md:flex-row md:items-center md:border-0 md:py-0`}
        >
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${isActive ? 'bg-blue-50 text-accent-indigo' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
