import { FaArrowRight, FaCheckDouble, FaCode, FaListAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const specialties = [
  { title: 'Test automation', detail: 'Cypress and Playwright end-to-end suites', icon: FaCheckDouble },
  { title: 'Manual QA', detail: 'Functional, regression, and release testing', icon: FaListAlt },
  { title: 'Web development', detail: 'JavaScript, React, and the MERN stack', icon: FaCode },
];

function Home() {
  return (
    <section className="section-container">
      <div className="panel hero-panel grid items-center gap-8 rounded-3xl p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:p-12">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold text-accent-indigo">Associate Software Engineer · QA</p>
          <h1 className="mb-4 text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Priyanshu Nagda</h1>
          <p className="mb-4 font-display text-2xl font-medium text-accent-indigo sm:text-3xl">Manual QA and test automation</p>
          <p className="mb-8 max-w-lg leading-relaxed text-slate-600 md:text-lg">
            I test web applications at Kadel Labs, combining hands-on functional and regression testing with end-to-end automation in Cypress and Playwright.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary group">View projects <FaArrowRight aria-hidden="true" size={12} className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" /></Link>
            <Link to="/contact" className="btn-outline">Contact me</Link>
          </div>
        </div>
        <div className="portrait-backdrop flex min-w-0 justify-center rounded-2xl p-5 sm:p-8">
          <figure className="panel w-full max-w-[224px] rounded-2xl p-2.5 sm:max-w-[248px] lg:max-w-[288px]">
            <div className="overflow-hidden rounded-xl">
              <img src="/profile.jpg" alt="Priyanshu Nagda" className="profile-photo aspect-square w-full object-cover object-top" fetchPriority="high" />
            </div>
            <figcaption className="flex items-center justify-center gap-2 px-1 pb-1 pt-2.5 text-center text-xs font-medium text-slate-600 sm:text-sm">
              <FaMapMarkerAlt aria-hidden="true" className="shrink-0 text-accent-indigo" /> Udaipur, Rajasthan, India
            </figcaption>
          </figure>
        </div>
      </div>
      <ul aria-label="Specialties" className="mt-5 grid gap-3 sm:grid-cols-3">
        {specialties.map(({ title, detail, icon: Icon }) => (
          <li key={title} className="panel panel-effect flex items-start gap-3 rounded-xl p-4 lg:p-5">
            <span className="rounded-lg bg-blue-50 p-2.5 text-accent-indigo"><Icon aria-hidden="true" size={16} /></span>
            <div>
              <h2 className="text-base font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-slate-600">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
