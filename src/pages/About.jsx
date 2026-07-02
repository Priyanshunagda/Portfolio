import { motion } from "framer-motion";
import {
    FaReact,
    FaPython,
    FaJava,
    FaGithub,
    FaCheckCircle,
    FaClipboardList,
    FaBug,
    FaRobot,
    FaGraduationCap,
    FaBriefcase,
    FaLaptopCode,
    FaWrench,
    FaCode
} from "react-icons/fa";
import { SiJavascript, SiPostman, SiVercel, SiCypress, SiJira } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

function About() {
    const skillCategories = [
        {
            title: "QA & Automation",
            icon: FaRobot,
            color: "text-accent-teal",
            skills: [
                { name: "Cypress", icon: SiCypress, pct: 90 },
                { name: "Playwright", icon: FaRobot, pct: 85 },
                { name: "Manual Testing", icon: FaCheckCircle, pct: 95 },
                { name: "Test Design", icon: FaClipboardList, pct: 90 },
                { name: "Bug Reporting", icon: FaBug, pct: 95 },
            ]
        },
        {
            title: "Development Languages",
            icon: FaCode,
            color: "text-accent-cyan",
            skills: [
                { name: "JavaScript", icon: SiJavascript, pct: 85 },
                { name: "React", icon: FaReact, pct: 75 },
                { name: "MySQL", icon: GrMysql, pct: 80 },
                { name: "Python", icon: FaPython, pct: 70 },
                { name: "Java", icon: FaJava, pct: 65 },
            ]
        },
        {
            title: "Tools & Environments",
            icon: FaWrench,
            color: "text-accent-purple",
            skills: [
                { name: "VS Code", icon: VscVscode, pct: 90 },
                { name: "Postman", icon: SiPostman, pct: 85 },
                { name: "Jira", icon: SiJira, pct: 90 },
                { name: "GitHub", icon: FaGithub, pct: 85 },
                { name: "Vercel", icon: SiVercel, pct: 80 },
            ]
        }
    ];

    const education = [
        {
            title: "Master of Computer Applications",
            institution: "Mohanlal Sukhadia University",
            year: "2023 - 2025",
            desc: "Advanced studies in Software Engineering, Databases, and QA methodologies."
        },
        {
            title: "Bachelor of Computer Applications",
            institution: "Mohanlal Sukhadia University",
            year: "2020 - 2023",
            desc: "Foundations of Computer Science, Object-Oriented Programming, and Web Technologies."
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="section-container pt-12">
            
            {/* Header Image Cover */}
            <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=400&q=80" 
                    alt="Workspace Setup" 
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-90"
                />
                <div className="absolute bottom-6 left-6 md:left-10 z-20">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About Me
                    </motion.h1>
                    <p className="text-accent-teal text-sm md:text-base font-mono">Transforming software requirements into automated scripts.</p>
                </div>
            </div>

            {/* Quick Introduction Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                {/* Intro Card */}
                <motion.div
                    className="lg:col-span-8 glass-panel p-8 rounded-2xl relative overflow-hidden"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent-teal/5 rounded-full blur-3xl -z-10" />
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                        Who I Am
                    </h2>
                    <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-light font-sans">
                        <p>
                            Hi, I’m <span className="text-white font-semibold">Priyanshu Nagda</span>.
                            I am a QA Automation Specialist and Associate Software Engineer based in Udaipur, India, with a deep focus on crafting elegant end-to-end testing systems.
                        </p>
                        <p>
                            I have built, run, and scaled test scripts for complex web apps, specializing in <span className="text-accent-cyan font-medium">Cypress</span> and <span className="text-accent-purple font-medium">Playwright</span>. 
                            My passion lies in bridging the gap between developers and stakeholders by building automation frameworks that guarantee deployment confidence and deliver flawless digital experiences.
                        </p>
                    </div>
                </motion.div>

                {/* Quick Profile Summary */}
                <motion.div
                    className="lg:col-span-4 glass-panel p-8 rounded-2xl flex flex-col justify-center gap-6 relative overflow-hidden"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-2xl -z-10" />
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-accent-teal">
                            <FaBriefcase size={22} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Experience</h3>
                            <p className="text-slate-400 text-sm">Manual & Automation Engineer</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-accent-purple">
                            <FaGraduationCap size={22} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Education</h3>
                            <p className="text-slate-400 text-sm">MCA Scholar (2025)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-accent-cyan">
                            <FaLaptopCode size={22} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Focus</h3>
                            <p className="text-slate-400 text-sm">Continuous Testing & CI/CD</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Technical Arsenal Grid */}
            <motion.div
                className="mb-24"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="text-3xl font-display font-extrabold text-center mb-4 text-white">Technical Arsenal</h2>
                <p className="text-center text-slate-400 max-w-lg mx-auto mb-16 text-sm md:text-base font-light">
                    An overview of technologies, frameworks, and tools I use to analyze and optimize applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2.5 bg-white/5 rounded-xl ${cat.color}`}>
                                    <cat.icon size={20} />
                                </div>
                                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                            </div>

                            <div className="space-y-5">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="space-y-2">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-slate-300 font-medium flex items-center gap-2">
                                                <skill.icon className={cat.color} />
                                                {skill.name}
                                            </span>
                                            <span className="text-slate-400 font-mono">{skill.pct}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                className={`h-full rounded-full bg-gradient-to-r ${
                                                    idx === 0 
                                                        ? "from-accent-teal to-accent-cyan" 
                                                        : idx === 1 
                                                            ? "from-accent-cyan to-accent-indigo" 
                                                            : "from-accent-indigo to-accent-purple"
                                                }`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: sIdx * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Experience & Education Timelines */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-accent-teal">
                        <FaBriefcase /> Work Experience
                    </h3>

                    <div className="relative border-l-2 border-accent-teal/20 ml-3 space-y-10 pl-6">
                        {/* Experience Timeline Point */}
                        <div className="relative">
                            {/* Dot Indicator */}
                            <span className="absolute -left-[35px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#090d16] border-4 border-accent-teal shadow-lg shadow-accent-teal/50"></span>

                            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-accent-teal/30">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-teal/5 rounded-full blur-2xl pointer-events-none -z-10" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-accent-teal transition-colors">Associate Software Engineer</h4>
                                        <h5 className="text-accent-cyan font-semibold text-sm">Kadel Labs</h5>
                                    </div>
                                    <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full self-start sm:self-center">
                                        Sep 2025 - Present
                                    </span>
                                </div>

                                <ul className="space-y-3 font-light text-slate-300 text-sm leading-relaxed">
                                    <li className="flex items-start gap-2.5">
                                        <FaCheckCircle className="mt-1 text-accent-teal shrink-0" size={13} />
                                        <span>Collaborated on end-to-end manual and automated regression suites.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <FaCheckCircle className="mt-1 text-accent-teal shrink-0" size={13} />
                                        <span>Led test planning and requirement analysis alongside engineering stakeholders.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-accent-purple">
                        <FaGraduationCap /> Education
                    </h3>

                    <div className="relative border-l-2 border-accent-purple/20 ml-3 space-y-10 pl-6">
                        {education.map((edu, idx) => (
                            <div key={idx} className="relative">
                                {/* Dot Indicator */}
                                <span className="absolute -left-[35px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#090d16] border-4 border-accent-purple shadow-lg shadow-accent-purple/50"></span>

                                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-accent-purple/30">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full blur-2xl pointer-events-none -z-10" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">{edu.title}</h4>
                                            <h5 className="text-accent-cyan font-medium text-xs mt-0.5">{edu.institution}</h5>
                                        </div>
                                        <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full self-start sm:self-center">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-xs font-light leading-relaxed">{edu.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
