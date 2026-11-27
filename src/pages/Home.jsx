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
      <div className="panel grid items-center gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:p-14">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold text-accent-indigo">Associate Software Engineer · QA</p>
          <h1 className="mb-4 text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Priyanshu Nagda</h1>
          <p className="mb-4 font-display text-2xl font-medium text-slate-800 sm:text-3xl">Manual QA and test automation</p>
          <p className="mb-8 max-w-lg leading-relaxed text-slate-600 md:text-lg">
            I test web applications at Kadel Labs, combining hands-on functional and regression testing with end-to-end automation in Cypress and Playwright.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">View projects <FaArrowRight aria-hidden="true" size={12} /></Link>
            <Link to="/contact" className="btn-outline">Contact me</Link>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-[360px] rounded-2xl border border-blue-100 bg-blue-50 p-3">
          <img src="/profile.jpg" alt="Priyanshu Nagda" className="aspect-square w-full rounded-xl object-cover object-top" fetchPriority="high" />
          <figcaption className="flex items-center gap-2 px-1 pb-1 pt-3 text-sm font-medium text-slate-600">
            <FaMapMarkerAlt aria-hidden="true" className="text-accent-indigo" /> Udaipur, Rajasthan, India
          </figcaption>
        </figure>
      </div>
      <ul aria-label="Specialties" className="mt-5 grid gap-3 sm:grid-cols-3">
        {specialties.map(({ title, detail, icon: Icon }) => (
          <li key={title} className="panel flex items-start gap-3 rounded-xl p-4 lg:p-5">
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
