import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-white pb-16 px-[4rem] max-sm:px-[1.25rem] sm:max-md:px-[2rem]">
        {/* ── Hero content ── */}
        <div className="relative z-2">
          <h1
            className="font-display text-[clamp(5rem,14vw,13rem)] uppercase leading-[0.88] tracking-tight text-blue"
            style={{ animation: "heroIn 1s ease 0.15s forwards", opacity: 0 }}
          >
            Content
            <br />
            {/* Play Showreel button — positioned above the "r" in Producer */}
            <span className="inline-block pl-[clamp(1rem,5vw,6rem)]">
              <button
                type="button"
                className="group pointer-events-auto relative z-3 mb-4 flex cursor-pointer items-center gap-4 border-none bg-transparent ml-[clamp(4rem,11vw,10.5rem)]"
                style={{ animation: "fadeUp 0.8s ease 1s both" }}
                onClick={() => setLightboxOpen(true)}
              >
                <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue transition-all duration-[400ms] group-hover:scale-[1.08] group-hover:bg-blue">
                  <span
                    className="ml-1 block h-0 w-0 transition-all duration-[400ms]"
                    style={{
                      borderTop: "9px solid transparent",
                      borderBottom: "9px solid transparent",
                      borderLeft: "16px solid #2A2AFF",
                    }}
                  />
                </span>
                <span className="font-display text-[0.9rem] uppercase tracking-[0.22em] text-blue transition-colors duration-300">
                  Play Showreel
                </span>
              </button>
              <span className="pointer-events-none font-serif text-[1.15em] font-normal italic normal-case tracking-wide text-blue">
                Producer
              </span>
            </span>
          </h1>
        </div>

        {/* ── Hero bottom ── */}
        <div
          className="pointer-events-auto relative z-2 mt-10 flex items-start justify-between border-t-2 border-blue pt-6 max-sm:flex-col max-sm:gap-6"
          style={{ animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
        >
          <p className="max-w-[480px] text-[1.65rem] leading-[1.65] text-dark">
            <span className="font-bold text-blue">From Paramount's biggest stages to scrappy YouTube launches</span> — 10 years bringing structure to creative chaos and making sure great stories actually ship.
          </p>

          <div className="flex gap-12 text-right max-sm:text-left shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] tracking-wide text-blue">10 YRS</span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">Experience</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] tracking-wide text-blue">20+</span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">Music Videos</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] tracking-wide text-blue">60+</span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">TV Projects</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[3rem] tracking-wide text-blue">700+</span>
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
        `}</style>
      </section>

      <Lightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
