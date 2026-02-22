import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="relative flex h-screen flex-col justify-end overflow-hidden px-7 pb-9">
        {/* ── Animated reel background ── */}
        <div className="absolute inset-0 z-0">
          {/* Reel frames */}
          <div
            className="reel-frame absolute inset-0 opacity-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(60,40,30,0.55) 0%, rgba(10,10,10,0.95) 70%)",
              animation: "reelCycle 16s ease-in-out infinite",
              animationDelay: "0s",
            }}
          />
          <div
            className="reel-frame absolute inset-0 opacity-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 40%, rgba(80,50,90,0.45) 0%, rgba(10,10,10,0.95) 70%)",
              animation: "reelCycle 16s ease-in-out infinite",
              animationDelay: "4s",
            }}
          />
          <div
            className="reel-frame absolute inset-0 opacity-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(40,50,70,0.5) 0%, rgba(10,10,10,0.95) 70%)",
              animation: "reelCycle 16s ease-in-out infinite",
              animationDelay: "8s",
            }}
          />
          <div
            className="reel-frame absolute inset-0 opacity-0"
            style={{
              background:
                "radial-gradient(ellipse at 40% 35%, rgba(70,55,40,0.5) 0%, rgba(10,10,10,0.95) 70%)",
              animation: "reelCycle 16s ease-in-out infinite",
              animationDelay: "12s",
            }}
          />

          {/* Scanlines overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-1"
            style={{
              background:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)",
            }}
          />

          {/* Vignette overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-1"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>

        {/* ── Play Showreel button ── */}
        <button
          type="button"
          className="group absolute top-[45%] left-1/2 z-3 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-4 border-none bg-transparent"
          style={{
            animation: "fadeUp 0.8s ease 1s both",
          }}
          onClick={() => setLightboxOpen(true)}
        >
          {/* Circle with play triangle */}
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-mid transition-all duration-300 group-hover:scale-110 group-hover:border-neon group-hover:shadow-[0_0_24px_rgba(199,139,250,0.25)]">
            <span
              className="ml-1 block h-0 w-0"
              style={{
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderLeft: "12px solid #6B6660",
              }}
            />
          </span>
          {/* Label */}
          <span className="font-display text-[0.85rem] uppercase tracking-[0.22em] text-mid transition-colors duration-300 group-hover:text-white">
            Play Showreel
          </span>
        </button>

        {/* ── Hero content ── */}
        <div className="pointer-events-none relative z-2">
          <h1
            className="font-display text-[clamp(4.5rem,13vw,12rem)] uppercase leading-[0.88] tracking-tight"
            style={{ animation: "heroIn 1s ease 0.15s forwards", opacity: 0 }}
          >
            Content
            <br />
            <span className="inline-block pl-[clamp(1rem,5vw,6rem)] font-serif text-[clamp(4.5rem,13vw,12rem)] font-normal italic normal-case tracking-wide">
              Producer
            </span>
          </h1>
        </div>

        {/* ── Hero bottom ── */}
        <div
          className="pointer-events-auto relative z-2 mt-10 flex items-end justify-between border-t border-line pt-6"
          style={{ animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
        >
          {/* Left — description */}
          <p className="max-w-[480px] text-[1.05rem] leading-relaxed text-white">
            <span className="font-medium text-neon">TV</span>,{" "}
            <span className="font-medium text-neon">YouTube</span>,{" "}
            <span className="font-medium text-neon">music videos</span>,{" "}
            <span className="font-medium text-neon">branded content</span>, and{" "}
            <span className="font-medium text-neon">digital</span> — from
            concept through delivery.
            <span className="mt-1 block text-[0.85rem] text-mid">
              Los Angeles &amp; Bay Area
            </span>
          </p>

          {/* Right — stats */}
          <div className="flex gap-12 text-right">
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[1.6rem] tracking-wide text-white">
                60+
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.14em] text-dim">
                Projects
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[1.6rem] tracking-wide text-white">
                600K+
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.14em] text-dim">
                Views
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[1.6rem] tracking-wide text-white">
                9 YRS
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.14em] text-dim">
                Experience
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[1.6rem] tracking-wide text-white">
                20+
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.14em] text-dim">
                Music Videos
              </span>
            </div>
          </div>
        </div>

        {/* Keyframes injected via style tag */}
        <style>{`
          @keyframes reelCycle {
            0%, 100% { opacity: 0; }
            10%, 30%  { opacity: 1; }
            40%       { opacity: 0; }
          }
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
