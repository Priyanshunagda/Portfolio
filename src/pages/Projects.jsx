import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sms from '../assets/sms.png';

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description:
        "A Student Management System is a software used by schools and colleges to keep track of student details like admission, attendance, marks, and exams. It helps teachers and staff manage everything in one place, making work faster and easier.",
      skills: [
        "HTML",
        "CSS",
        "JS",
        "SCSS",
        "PHP",
        "Vite"
      ],
      image: sms,
      github: "https://github.com/Priyanshunagda/Student-Result-Management-System",
      live: "https://student-result-management-system-gamma.vercel.app"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none rounded-xl" />

      <h1 className="section-heading text-center pt-8">My Recent Works</h1>
      <div className="grid md:grid-cols-2 gap-8 px-6 py-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card relative group bg-slate-800 p-4 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-teal-300 mb-2">{project.title}</h3>
            <p className="text-slate-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-6 z-10">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors"
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> Code
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors"
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
