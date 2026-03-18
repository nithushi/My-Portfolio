import React from 'react';
import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaJs, FaAndroid } from 'react-icons/fa';
import { SiSpringboot, SiNextdotjs, SiPostgresql, SiMysql, SiFirebase, SiTypescript, SiAngular } from 'react-icons/si';

const TechStack = () => {
  const skills = [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Angular", icon: <SiAngular className="text-red-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Android", icon: <FaAndroid className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  ];

  return (
    <div className="bg-gray-900 py-10 overflow-hidden">
        <h2 className="text-center text-gray-400 text-sm mb-6 uppercase tracking-wider">Technologies I work with</h2>
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-10">
                {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 text-2xl font-bold text-gray-300 bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                        {skill.icon}
                        <span className="text-lg">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default TechStack;