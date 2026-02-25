import { useEffect, useState, useRef } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when tapping outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  const links = [
    ["Work", "#work"],
    ["About", "#info"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-[1.6rem] px-[4rem] max-sm:px-[1.25rem] sm:max-lg:px-[2rem] transition-all duration-[400ms] ${scrolled ? 'bg-white/92 backdrop-blur-[16px] border-b border-line' : 'bg-transparent'}`}>
      <a
        href="#"
        className="font-display text-[1.35rem] tracking-[0.18em] uppercase text-blue"
      >
        Olesia Petrochenkova
      </a>

      {/* Desktop nav links (sm and up) */}
      <ul className="hidden sm:flex sm:max-md:gap-5 gap-9">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="sm:max-md:text-[0.8rem] text-[0.95rem] font-semibold tracking-[0.1em] uppercase text-black hover:text-blue transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button (below sm) */}
      <button
        ref={btnRef}
        type="button"
        className="flex sm:hidden flex-col justify-center items-center gap-[5px] w-[36px] h-[36px] bg-transparent border-none cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-[22px] h-[2px] bg-blue transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-blue transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-blue transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
        />
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 left-0 sm:hidden bg-white/95 backdrop-blur-[16px] border-b border-line shadow-lg"
        >
          <ul className="flex flex-col py-4 px-[1.25rem]">
            {links.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-[0.9rem] font-semibold tracking-[0.1em] uppercase text-black hover:text-blue transition-colors duration-300 border-b border-line last:border-b-0"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
