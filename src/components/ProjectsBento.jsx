import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Personal Finance Tracker",
    desc: "A smart web app to manage daily expenses and visualize financial health with charts.",
    tags: ["Flutter", "Dart", "PostgreSQL"],
    github: "https://github.com/nithushi/Finance-Tracker",
    color: "bg-emerald-500",
    large: true // Highlight this new project
  },
  {
    title: "Mobile Food Ordering App",
    desc: "Android-native app with Java & Firebase. Real-time order tracking.",
    tags: ["Android", "Java", "Firebase"],
    github: "https://github.com/nithushi/SavoryHub-Mobile-Application",
    color: "bg-orange-500"
  },
  {
    title: "Docpensa Admin Panel",
    desc: "Comprehensive admin dashboard for managing healthcare documents and user roles.",
    tags: ["Next.js", "Go", "PostgreSQL"],
    github: "https://github.com/nithushi/DocPensa-Admin",
    color: "bg-red-600",
    large: false
  },
  {
    title: "E-Commerce Web App",
    desc: "Scalable shopping platform with Next.js & Spring Boot backend.",
    tags: ["Next.js", "Spring Boot", "MySQL"],
    github: "https://github.com/nithushi/quick-cart-frontend",
    color: "bg-blue-600",
    large: true
  },
  {
    title: "Healthcare Management",
    desc: "JavaFX desktop app using OODP concepts for patient records.",
    tags: ["JavaFX", "Java", "MySQL"],
    github: "https://github.com/nithushi/GlobeMed-HMS",
    color: "bg-cyan-500"
  },
  {
    title: "Content Sharing Platform",
    desc: "Social blogging platform with Angular 19 & PostgreSQL.",
    tags: ["Angular", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/nithushi/content-hub-frontend",
    color: "bg-rose-500",
    large: true
  },
  {
    title: "Secure Notebook",
    desc: "Android note-taking app with MySQL backend integration.",
    tags: ["Android", "Java", "MySQL"],
    github: "https://github.com/nithushi/Notebook",
    color: "bg-purple-500"
  },
  {
    title: "Real-time Chat App",
    desc: "Full-stack chat solution with React and Java.",
    tags: ["React", "Java", "MySQL"],
    github: "https://github.com/nithushi/student-system",
    color: "bg-indigo-500"
  }
];

const ProjectsBento = () => {
  return (
    <div id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured Work
          </motion.h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Grid Layout - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-[2.5rem] p-8 border border-gray-800 bg-[#0a0a0a] hover:border-gray-700 transition-all duration-500 ${
                project.large ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Animated Background Glow */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 ${project.color} blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                    {project.desc}
                  </p>
                </div>

                <div className="flex gap-6 mt-6 items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} /> <span>Source</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt size={16} /> <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsBento;