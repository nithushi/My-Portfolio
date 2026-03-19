import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar එකේ පෙන්නන්න ඕන links ටික මෙතන පිළිවෙළට තියෙනවා
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            {/* Icon එක වටේට තියෙන Glow Effect එක */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

            <img
              src="/icon.png"
              alt="NS Logo"
              className="relative w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-blue-500 font-bold">
              Software Engineer | FullStack Developer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-[13px] uppercase tracking-widest font-semibold text-gray-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-blue-500/50 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;