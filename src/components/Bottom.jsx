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
      className="reveal pt-20 pb-8 px-10 max-sm:px-5 sm:max-md:px-8"
    >
      <div className="grid grid-cols-[1fr_1px_1fr] gap-14 max-sm:grid-cols-1 max-sm:gap-10">
        {/* Left — About */}
        <div>
          <h4 className="font-display text-[0.78rem] tracking-[0.2em] uppercase text-dim mb-7">
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
                className="text-[0.62rem] font-medium tracking-[0.08em] uppercase px-3 py-1 border border-line text-dim transition hover:text-neon hover:border-[rgba(199,139,250,0.25)]"
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
          <h4 className="font-display text-[0.78rem] tracking-[0.2em] uppercase text-dim mb-7">
            Contact
          </h4>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <a
                href="mailto:olesya.petrochenkova@gmail.com"
                className="text-[0.95rem] font-medium text-white inline-block border-b border-line hover:border-neon transition-colors pb-0.5"
              >
                olesya.petrochenkova@gmail.com
              </a>
              <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-dim mt-1">
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
              <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-dim mt-1">
                LinkedIn
              </span>
            </div>

            {/* Note */}
            <p className="text-[0.78rem] text-dim leading-relaxed mt-4">
              Los Angeles &amp; Bay Area, California.
              <br />
              Open to TV, digital, music, and branded content projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
