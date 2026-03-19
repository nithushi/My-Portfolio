import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const qualifications = [
    {
      id: 1,
      type: "Education",
      title: "Diploma In Software Engineering",
      place: "Java Institute For Advanced Technology, SL",
      date: "2022 - 2023",
      description: "Foundation of computer science and basic programming."
    },
    {
      id: 2,
      type: "Education",
      title: "Higher Diploma in Software Engineering",
      place: "Java Institute For Advanced Technology, SL",
      date: "2023 - 2024",
      description: "Advanced full-stack development and enterprise Java."
    },
    {
      id: 3,
      type: "Education",
      title: "BSc in Software Engineering",
      place: "Birmingham City University, UK",
      date: "2024 - Present",
      description: "Specializing in software architecture and cloud computing."
    },
    {
      id: 4,
      type: "Work",
      title: "Trainee Lecturer",
      place: "Java Institute For Advanced Technology",
      date: "2025 - Present",
      description: "Guiding students in 2D Game Development and projects."
    }
  ];

  return (
    <section id="experience" className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Journey
        </motion.h2>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6">
          {qualifications.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {/* Smaller Timeline Icon */}
              <div className="absolute -left-[17px] top-0 bg-black border border-blue-500 p-1.5 rounded-full text-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {item.type === "Education" ? <FaGraduationCap size={14} /> : <FaBriefcase size={14} />}
              </div>

              {/* Compact Card */}
              <div className="bg-gray-900/40 border border-gray-800/60 p-5 rounded-2xl hover:bg-gray-800/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-gray-400 font-medium mb-1">{item.place}</p>
                <p className="text-sm text-gray-500 leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;