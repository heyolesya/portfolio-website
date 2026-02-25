import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-white pb-16 pt-[6rem] px-[4rem] max-sm:px-[1.25rem] sm:max-lg:px-[2rem]">
        {/* ── Hero content ── */}
        <div className="relative z-2">
          <h1
            className="font-display text-[clamp(5rem,14vw,13rem)] uppercase leading-[0.88] tracking-tight text-blue"
            style={{ animation: "heroIn 1s ease 0.15s forwards", opacity: 0 }}
          >
            Content
            <br />
            <span className="inline-block pl-[clamp(0.25rem,3vw,6rem)] font-serif text-[1.15em] max-sm:text-[1em] font-normal italic normal-case tracking-wide">
              Producer
            </span>
          </h1>

          {/* Mobile/Tablet Play Showreel — in flow */}
          <button
            type="button"
            className="group flex xl:hidden items-center gap-3 mt-6 max-sm:mt-4 cursor-pointer border-none bg-transparent"
            style={{ animation: "fadeUp 0.8s ease 1s both" }}
            onClick={() => setLightboxOpen(true)}
          >
            <span className="play-circle flex h-[56px] w-[56px] max-sm:h-[48px] max-sm:w-[48px] items-center justify-center rounded-full border-2 border-blue">
              <span className="play-triangle ml-1 block h-0 w-0" />
            </span>
            <span className="font-display text-[0.85rem] max-sm:text-[0.75rem] uppercase tracking-[0.22em] text-blue">
              Play Showreel
            </span>
          </button>

          {/* Desktop Play Showreel button — absolute positioned (xl and up) */}
          <button
            type="button"
            className="group absolute top-[44%] left-1/2 z-3 hidden xl:flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-4 border-none bg-transparent"
            style={{ animation: "fadeUp 0.8s ease 1s both" }}
            onClick={() => setLightboxOpen(true)}
          >
            <span className="play-circle flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue transition-all duration-[400ms] group-hover:scale-[1.08] group-hover:bg-blue">
              <span className="play-triangle ml-1 block h-0 w-0 transition-all duration-[400ms]" />
            </span>
            <span className="font-display text-[0.9rem] uppercase tracking-[0.22em] text-blue transition-colors duration-300">
              Play Showreel
            </span>
          </button>
        </div>

        {/* ── Hero bottom ── */}
        <div
          className="pointer-events-auto relative z-2 mt-10 flex items-start justify-between border-t-2 border-blue pt-6 max-lg:flex-col max-lg:gap-6"
          style={{ animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
        >
          <p className="max-w-[480px] text-[1.65rem] max-sm:text-[1.1rem] leading-[1.65] text-dark">
            <span className="font-bold text-blue">From Paramount's biggest stages to scrappy YouTube launches</span> — 10 years bringing structure to creative chaos and making sure great stories actually ship.
          </p>

          <div className="flex gap-12 text-right max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:text-left sm:max-lg:grid sm:max-lg:grid-cols-4 sm:max-lg:gap-4 sm:max-lg:text-left shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] max-sm:text-[2rem] sm:max-lg:text-[2.5rem] tracking-wide text-blue">10 YRS</span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">Experience</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] max-sm:text-[2rem] sm:max-lg:text-[2.5rem] tracking-wide text-blue">20+</span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">Music Videos</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] max-sm:text-[2rem] sm:max-lg:text-[2.5rem] tracking-wide text-blue">60+</span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">TV Projects</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] max-sm:text-[2rem] sm:max-lg:text-[2.5rem] tracking-wide text-blue">700+</span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">YouTube Videos</span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heroIn {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .play-triangle {
            border-top: 9px solid transparent;
            border-bottom: 9px solid transparent;
            border-left: 16px solid #2A2AFF;
            transition: border-color 0.4s;
          }
          .group:hover .play-triangle {
            border-left-color: #FFFFFF;
          }
        `}</style>
      </section>

      <Lightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
