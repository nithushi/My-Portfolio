// components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- ඔයාගේ Social Links මෙතන update කරන්න ---
  const socialLinks = {
    github: "https://github.com/nithushi", // ඔයාගේ GitHub Profile Link එක
    linkedin: "https://www.linkedin.com/in/nithushi-shavindi-aa5729281/", // ඔයාගේ LinkedIn Profile Link එක
    twitter: "#", // තියෙනවා නම් දාන්න, නැත්නම් '#' තියන්න
  };
  // ----------------------------------------------

  return (
    <footer className="py-8 bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        
        {/* Copyright */}
        <p>
          &copy; {currentYear} Nithushi Shavindi. All rights reserved.
        </p>

        {/* Built with Info */}
        <p className="font-mono text-xs">
          Built with React & Tailwind
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin size={18} />
          </a>
          {socialLinks.twitter !== "#" && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;