import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-[1.6rem] px-[4rem] max-sm:px-[1.25rem] sm:max-md:px-[2rem] transition-all duration-[400ms] ${scrolled ? 'bg-white/92 backdrop-blur-[16px] border-b border-line' : 'bg-transparent'}`}>
      <a
        href="#"
        className="font-display text-[1.35rem] tracking-[0.18em] uppercase text-blue"
      >
        Olesia Petrochenkova
      </a>

      <ul className="hidden sm:flex sm:max-md:gap-5 gap-9">
        {[
          ["Work", "#work"],
          ["About", "#info"],
          ["Contact", "#info"],
        ].map(([label, href]) => (
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
    </nav>
  );
}
