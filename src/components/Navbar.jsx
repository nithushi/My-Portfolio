import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          NS.
        </a> */}

        {/* Logo Section */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            {/* Icon එක වටේට තියෙන Glow Effect එක (මේකෙන් ලෝගෝ එක තවත් කැපිලා පෙනෙනවා) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            <img
              src="/icon.png"
              alt="NS Logo"
              className="relative w-14 h-14 md:w-16 md:h-16 object-contain rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[11px] uppercase tracking-[0.3em] text-blue-500 font-semibold ">
              Software Engineer | FullStack Developer
            </span>
          </div>
        </a>

        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500/10 transition-all text-sm"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;