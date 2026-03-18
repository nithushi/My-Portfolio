import React from 'react';
import './App.css'; // හෝ './index.css'

// --- Components Import ---
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import ProjectsBento from './components/ProjectsBento';

// --- අලුත් Components ---
import Contact from './components/Contact'; 
import Footer from './components/Footer';

// --- App Component ---
function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      
      {/* IDs එකතු කළා Navbar links වැඩ කරන්න */}
      <section id="about">
        <TechStack />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <ProjectsBento />
      </section>
      
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;