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
    FaBriefcase
} from "react-icons/fa";
import { SiJavascript, SiPostman, SiVercel, SiCypress, SiJira } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

function About() {
    const skills = [
        { name: "Manual Testing", icon: FaCheckCircle, color: "text-green-400" },
        { name: "Test Design", icon: FaClipboardList, color: "text-blue-400" },
        { name: "Bug Reporting", icon: FaBug, color: "text-red-400" },
        { name: "Cypress", icon: SiCypress, color: "text-emerald-400" },
        { name: "Playwright", icon: FaRobot, color: "text-orange-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "MySQL", icon: GrMysql, color: "text-blue-500" },
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
    ];

    const tools = [
        { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        { name: "Jira", icon: SiJira, color: "text-blue-600" },
        { name: "GitHub", icon: FaGithub, color: "text-white" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
    ];

    const education = [
        {
            title: "Master of Computer Applications",
            institution: "Mohanlal Sukhadia University",
            year: "2023 - 2025",
        },
        {
            title: "Bachelor of Computer Applications",
            institution: "Mohanlal Sukhadia University",
            year: "2020 - 2023",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="section-container">
            <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                About Me
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                {/* Intro Card - Spans 2 cols */}
                <motion.div
                    className="col-span-1 lg:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 rounded-full blur-3xl -z-10" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-accent-teal to-blue-400 bg-clip-text text-transparent mb-6">
                        Who I Am
                    </h2>
                    <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                        <p>
                            Hi, I’m <span className="text-white font-semibold">Priyanshu Nagda</span>.
                            I'm a passionate QA Engineer from Udaipur, India, dedicated to ensuring software quality.
                        </p>
                        <p>
                            I bridge the gap between development and end-users by combining rigorous manual testing with
                            efficient automation strategies. My goal is to deliver bug-free, user-friendly applications
                            that people love to use.
                        </p>
                    </div>
                </motion.div>

                {/* Quick Stats / Highlights */}
                <motion.div
                    className="glass-panel p-8 rounded-2xl flex flex-col justify-center space-y-6"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent-teal/20 rounded-lg text-accent-teal">
                            <FaBriefcase size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Experience</h3>
                            <p className="text-sm text-slate-400">Manual & Automation</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent-purple/20 rounded-lg text-accent-purple">
                            <FaGraduationCap size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Education</h3>
                            <p className="text-sm text-slate-400">MCA Scholar</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Skills Grid */}
            <motion.div
                className="mb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-200">Technical Arsenal</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[...skills, ...tools].map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-colors cursor-default"
                        >
                            <skill.icon className={`text-4xl ${skill.color}`} />
                            <span className="font-medium text-slate-300 text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Experience & Education Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent-cyan">
                        <FaBriefcase /> Experience
                    </h3>

                    {/* Timeline Container */}
                    <div className="relative border-l-2 border-accent-teal/30 ml-3 space-y-8">
                        {/* Experience Item: Kadel Labs */}
                        <div className="relative pl-8">
                            {/* Timeline Dot */}
                            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent-teal shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>

                            <div className="glass-panel p-6 rounded-xl transition-all hover:bg-white/5 group">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-white group-hover:text-accent-teal transition-colors">Associate Software Engineer</h4>
                                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">Sep 2025 - Present</span>
                                </div>
                                <h5 className="text-accent-cyan font-semibold mb-4 text-lg">Kadel Labs</h5>

                                <ul className="space-y-3">
                                    <li className="text-slate-300 text-sm flex items-start gap-3">
                                        <FaCheckCircle className="mt-1 text-accent-teal shrink-0" size={14} />
                                        <span>Executed comprehensive <strong className="text-white">Manual and Automation Testing</strong> to ensure software reliability.</span>
                                    </li>
                                    <li className="text-slate-300 text-sm flex items-start gap-3">
                                        <FaCheckCircle className="mt-1 text-accent-teal shrink-0" size={14} />
                                        <span>Collaborated with stakeholders for in-depth <strong className="text-white">Requirement Gathering</strong> and analysis.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent-purple">
                        <FaGraduationCap /> Education
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, idx) => (
                            <div key={idx} className="glass-panel p-6 rounded-xl border-l-4 border-l-accent-purple">
                                <h4 className="text-xl font-bold text-white mb-1">{edu.title}</h4>
                                <div className="text-accent-purple font-medium text-sm mb-2">{edu.institution}</div>
                                <div className="text-slate-500 text-sm">{edu.year}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
