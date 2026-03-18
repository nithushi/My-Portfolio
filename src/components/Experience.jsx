import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const qualifications = [
    {
      id: 1,
      type: "Education",
      title: "BSc in Software Engineering",
      place: "Birminghamcity Univercity , UK",
      date: "2024 - Present",
      description: "Learning full stack development, algorithms and data structures."
    },
    {
      id: 2,
      type: "Work",
      title: "Trainee Lecturer",
      place: "Java Institute For Advanced Technology",
      date: "2025 - Present",
      description: "Worked on 2D Game Deelopment and Full Stack Project Development"
    }
  ];

  return (
    <div className="py-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Journey</h2>
      <div className="max-w-3xl mx-auto px-5">
        {qualifications.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 pb-10 border-l-2 border-blue-500 last:border-0"
          >
            <div className="absolute -left-[11px] top-0 bg-blue-500 p-2 rounded-full">
              {item.type === 'education' ? <FaGraduationCap size={16} /> : <FaBriefcase size={16} />}
            </div>
            <div className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition">
              <span className="text-sm text-blue-400">{item.date}</span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.place}</p>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;