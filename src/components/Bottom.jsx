import { useEffect, useRef } from 'react';
import { skills } from '../data/projects';

export default function Bottom() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('vis');
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="info"
      ref={sectionRef}
      className="reveal pt-[5rem] pb-[2rem] px-[4rem] max-sm:px-[1.25rem] sm:max-md:px-[2rem]"
    >
      <div className="grid grid-cols-[1fr_1px_1fr] gap-14 max-sm:grid-cols-1 max-sm:gap-10">
        {/* Left — About */}
        <div>
          <h4 className="font-display text-[0.78rem] tracking-[0.2em] uppercase text-mid mb-7">
            About
          </h4>

          <p className="text-[1.05rem] text-white leading-[1.75] max-w-[460px]">
            <strong className="text-white font-medium">Olesia Petrochenkova</strong> — producer
            with 9 years across TV, YouTube, music, and digital. Paramount/MTV to
            multi-million-sub YouTube channels. I handle every stage from strategy and
            production to promotion and growth. Moscow Film School graduate. Based in
            California.
          </p>

          <div className="flex flex-wrap gap-1.5 mt-7">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[0.75rem] font-medium tracking-[0.08em] uppercase px-3 py-1 border border-neon/30 text-neon"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="bg-line max-sm:hidden" />

        {/* Right — Contact */}
        <div>
          <h4 className="font-display text-[0.78rem] tracking-[0.2em] uppercase text-mid mb-7">
            Contact
          </h4>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <a
                href="mailto:heyolesia@gmail.com"
                className="text-[0.95rem] font-medium text-white inline-block border-b border-line hover:border-neon transition-colors pb-0.5"
              >
                heyolesia@gmail.com
              </a>
              <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-mid mt-1">
                Email
              </span>
            </div>

            {/* LinkedIn */}
            <div>
              <a
                href="https://www.linkedin.com/in/olesiapetrochenkova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.95rem] font-medium text-white inline-block border-b border-line hover:border-neon transition-colors pb-0.5"
              >
                linkedin.com/in/olesiapetrochenkova
              </a>
              <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-mid mt-1">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
