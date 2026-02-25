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
      className="reveal bg-bg pt-[5rem] pb-[2rem] px-[4rem] mt-16 max-sm:px-[1.25rem] sm:max-md:px-[2rem]"
    >
      <div className="grid grid-cols-[1fr_1px_1fr] gap-14 max-sm:grid-cols-1 max-sm:gap-10">
        {/* Left — About */}
        <div>
          <h4 className="font-display text-[1.3rem] tracking-[0.2em] uppercase text-blue mb-8">
            About
          </h4>

          <p className="text-[1.15rem] text-dark leading-[1.75] max-w-[520px]">
            <strong className="text-black font-bold">Olesia Petrochenkova</strong> — content producer and production lead. 10 years making things happen across TV, YouTube, digital, and music — from Paramount Television and MTV to multi-million-subscriber YouTube channels. Live shows, music videos, branded campaigns, commercials, podcasts, animation, documentaries. Every format, every stage, from first pitch to final delivery. Based in California.
          </p>

          <div className="flex flex-wrap gap-1.5 mt-7">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[0.82rem] font-semibold tracking-[0.06em] uppercase px-4 py-2 border-[1.5px] border-blue text-blue transition-all duration-300 hover:bg-blue hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="bg-line-strong max-sm:hidden" />

        {/* Right — Contact */}
        <div>
          <h4 className="font-display text-[1.3rem] tracking-[0.2em] uppercase text-blue mb-8">
            Contact
          </h4>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <a
                href="mailto:heyolesia@gmail.com"
                className="text-[1.15rem] font-semibold text-black inline-block relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-line-strong hover:text-blue hover:after:bg-blue after:transition-colors"
              >
                heyolesia@gmail.com
              </a>
              <span className="block text-[0.78rem] tracking-[0.12em] uppercase text-mid mt-1.5">
                Email
              </span>
            </div>

            {/* LinkedIn */}
            <div>
              <a
                href="https://www.linkedin.com/in/olesiapetrochenkova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[1.15rem] font-semibold text-black relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-line-strong hover:text-blue hover:after:bg-blue after:transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[1.3rem] h-[1.3rem] shrink-0 text-blue"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
