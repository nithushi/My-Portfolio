// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/nithushi-shavindi.jpg';

const About = () => {
    const socialLinks = {
        email: "mailto:nithushishavindi0@gmail.com",
        github: "https://github.com/nithushi",
        linkedin: "https://www.linkedin.com/in/nithushi-shavindi-aa5729281/",
    };

    return (
        <section id="about" className="py-20 bg-black text-white px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Grid එක md:grid-cols-2 කරලා සමාන කළා */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch">

                    {/* Left Side: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center bg-[#0a0a0a] border border-gray-800 p-10 rounded-[2.5rem] shadow-xl"
                    >
                        <div className="relative mb-8">
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-30"></div>
                            <img
                                src={profileImg}
                                alt="Nithushi Shavindi"
                                className="relative w-56 h-56 rounded-full object-cover border-4 border-gray-900 shadow-2xl"
                            />
                        </div>

                        <h3 className="text-3xl font-bold mb-3 tracking-tight">Nithushi Shavindi</h3>
                        <p className="text-blue-400 font-mono text-sm mb-8 uppercase tracking-widest">Software Engineer | FullStack Developer</p>

                        <div className="flex gap-8 text-2xl text-gray-400">
                            <a href={socialLinks.email} className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                                <FaEnvelope />
                            </a>
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                                <FaGithub />
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Description Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0a0a0a] border border-gray-800 p-10 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">ABOUT ME</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white leading-tight">
                            Passionate about building <span className="text-blue-500">scalable</span> & <span className="text-purple-500">modern</span> digital solutions.
                        </h2>

                        <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                            <p>
                                I am a <span className="text-white font-semibold">Software Engineering student at Birmingham City University (UK)</span> and a <span className="text-white font-semibold">Trainee Lecturer</span>, bridging the gap between academic theory and real-world application.
                            </p>
                            <p>
                                With a deep-rooted passion for architecture, I specialize in crafting high-performance backends using <span className="text-blue-400">Spring Boot , GO</span> and building intuitive, modern user interfaces with <span className="text-blue-400">React & Next.js</span>.
                            </p>
                            <p>
                                My expertise lies in <span className="text-white">Microservices, OODP principles</span>, and designing efficient database systems. I thrive on deconstructing complex technical challenges into scalable, elegant, and user-centric digital solutions.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;