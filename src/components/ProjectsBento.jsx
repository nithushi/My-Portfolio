import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Docpensa Admin Panel",
    desc: "Comprehensive admin dashboard for managing healthcare documents and user roles.",
    image: "/projects/docpensa-admin.png",
    tags: ["Next.js", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/nithushi/DocPensa-Admin",
    role: "Lead Developer",
    status: "Ongoing" // Green label එක වැටෙන්න මේක දාන්න
  },
  {
    title: "Personal Finance Tracker",
    desc: "A smart web app to manage daily expenses and visualize financial health with charts.",
    image: "/projects/finance-tracker.png",
    tags: ["Flutter", "Go", "PostgreSQL"],
    github: "https://github.com/nithushi/Finance-Tracker",
    demo: "#",
    role: "Lead Developer"
  },
  {
    title: "Mobile Food Ordering App",
    desc: "Android-native app with Java & Firebase. Real-time order tracking.",
    image: "/projects/food-app.jpeg",
    tags: ["Android", "Java", "Firebase"],
    github: "https://github.com/nithushi/SavoryHub-Mobile-Application",
    role: "Mobile App Developer"
  },
  {
    title: "E-Commerce Web App",
    desc: "Scalable shopping platform with Next.js & Spring Boot backend.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Spring Boot", "MySQL"],
    github: "https://github.com/nithushi/quick-cart-frontend",
    role: "Full Stack Engineer"
  },
  {
    title: "Healthcare Management",
    desc: "JavaFX desktop app using OODP concepts for patient records.",
    image: "/projects/hms1.png",
    tags: ["JavaFX", "Java", "MySQL"],
    github: "https://github.com/nithushi/GlobeMed-HMS",
    role: "Desktop App Developer"
  },
  {
    title: "Content Sharing Platform",
    desc: "Social blogging platform with Angular 19 & PostgreSQL.",
    image: "/projects/content-hub.png",
    tags: ["Angular", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/nithushi/content-hub-frontend",
    role: "Full Stack Engineer"
  }
];

const ProjectsBento = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Work
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0d0d0d] rounded-[2rem] border border-gray-800/50 overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >

              {/* Project Image Area with Labels */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Status Label (Ongoing / Prototype) */}
                {/* <div className="absolute top-4 right-4 z-20">
                  {project.status === "Ongoing" ? (
                  
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-green-600 border border-green-500 text-white shadow-lg shadow-green-900/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Ongoing
                    </span>
                  ) : (
                    
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-orange-600 border border-orange-500 text-white shadow-lg shadow-orange-900/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      Prototype
                    </span>
                  )}
                </div> */}

                <div className="absolute top-4 right-4 z-20">
                  {project.status === "Ongoing" ? (
                    /* Green Background with White Text */
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-green-600 border border-green-500 text-white shadow-lg shadow-green-900/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Ongoing
                    </span>
                  ) : (
                    /* Prototype කොටස මෙතනින් comment කළා */
                    /* <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-orange-600 border border-orange-500 text-white shadow-lg shadow-orange-900/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      Prototype
                    </span> 
                    */
                    null // Prototype එක පේන්න ඕනේ නැති නිසා මෙතනට null දුන්නා
                  )}
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-10">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full text-white backdrop-blur-md hover:bg-blue-500 transition-colors">
                    <FaGithub size={20} />
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full text-white backdrop-blur-md hover:bg-blue-500 transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-7 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-gray-800/50">
                  <p className="w-full text-[11px] font-bold uppercase tracking-widest text-blue-500 mb-3 italic">
                    {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBento;