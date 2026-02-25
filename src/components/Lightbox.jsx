import { useEffect } from "react";

export default function Lightbox({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(10,10,10,0.92)] transition-opacity duration-[400ms] ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="relative w-[80vw] max-w-[960px] aspect-video bg-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-[-3rem] right-0 cursor-pointer border-none bg-transparent font-body text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#999] transition-colors duration-200 hover:text-white"
          onClick={onClose}
        >
          Close
        </button>

        {isOpen && (
          <iframe
            src="https://player.vimeo.com/video/948524779?autoplay=1"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Showreel"
          />
        )}

        <div className="absolute right-0 bottom-0 left-0 h-[3px] bg-white/10">
          <div
            className={`h-full bg-blue ${isOpen ? "animate-lightbox-progress" : ""}`}
            style={{ width: isOpen ? undefined : "0%" }}
          />
        </div>
      </div>

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
