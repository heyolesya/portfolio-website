import { useEffect } from "react";

export default function Lightbox({ isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black/95 transition-opacity duration-[400ms] ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    >
      {/* Inner container — stop propagation so clicking inside doesn't close */}
      <div
        className="relative flex aspect-video w-[80vw] max-w-[960px] flex-col items-center justify-center gap-4 border border-line bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Placeholder text */}
        <span className="font-display text-[1.2rem] tracking-[0.2em] text-dim">
          SHOWREEL
        </span>
        <span className="text-[0.75rem] text-dim">
          Embed your Vimeo / YouTube reel here
        </span>

        {/* Close button */}
        <button
          type="button"
          className="absolute top-[-3rem] right-0 cursor-pointer border-none bg-transparent font-body text-[0.72rem] font-medium uppercase tracking-[0.12em] text-mid transition-colors duration-200 hover:text-white"
          onClick={onClose}
        >
          Close
        </button>

        {/* Bottom progress bar */}
        <div className="absolute right-0 bottom-0 left-0 h-[3px] bg-line">
          <div
            className={`h-full ${isOpen ? "animate-lightbox-progress" : ""}`}
            style={{
              background:
                "linear-gradient(90deg, var(--color-neon, #C78BFA), #E8A87C)",
              width: isOpen ? undefined : "0%",
            }}
          />
        </div>
      </div>

      {/* Keyframe for progress bar */}
      <style>{`
        @keyframes lightboxProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .animate-lightbox-progress {
          animation: lightboxProgress 90s linear forwards;
        }
      `}</style>
    </div>
  );
}
