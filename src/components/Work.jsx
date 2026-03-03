import { useState, useEffect, useRef } from "react";
import { featuredProjects, projects, filters } from "../data/projects";

function PlayIcon() {
  return (
    <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center shrink-0">
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
        <polygon points="2,1 13,8 2,15" fill="white" />
      </svg>
    </div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [playingId, setPlayingId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("vis");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  const allProjects = [...featuredProjects, ...projects];

  const filteredFeatured =
    activeFilter === "all"
      ? featuredProjects
      : allProjects.filter((p) => p.filterCat.includes(activeFilter)).slice(0, 2);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : allProjects.filter((p) => p.filterCat.includes(activeFilter)).slice(2);

  return (
    <section id="work" className="relative px-[4rem] bg-white max-sm:px-[1.25rem] sm:max-lg:px-[2rem] scroll-mt-[100px]" ref={sectionRef}>
      {/* Header */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between pt-[5rem] pb-8 border-b-2 border-blue mb-8">
        <span className="font-display text-[1.1rem] tracking-[0.2em] uppercase text-blue">
          Selected Work
        </span>
        <div className="flex flex-wrap gap-x-1 gap-y-1.5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`font-body text-[0.78rem] font-semibold tracking-[0.06em] uppercase px-3.5 py-1.5 bg-transparent border cursor-pointer transition
                ${activeFilter === f.value
                  ? "text-blue border-blue bg-blue-light"
                  : "text-dark border-transparent hover:text-blue"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured row */}
      {filteredFeatured.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 border-b border-line">
          {filteredFeatured.map((item) => (
            <div
              key={item.id}
              className="reveal group relative aspect-video overflow-hidden bg-bg cursor-pointer"
              onClick={() => setPlayingId(item.id)}
            >
              {playingId === item.id ? (
                <iframe
                  src={`${item.videoUrl}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                  title={item.title}
                />
              ) : item.thumbImg ? (
                <img
                  src={item.thumbImg}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.015]"
                />
              ) : (
                <div className={`absolute inset-0 ${item.thumbClass}`} />
              )}

              {/* Overlay: meta bottom-right + play below label bottom-left */}
              {playingId !== item.id && (
                <div className="absolute inset-0 z-[1] pointer-events-none">
                  {/* Play below the white label — bottom-left on hover */}
                  <div className="absolute bottom-[15%] left-[4%] flex items-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.8))]">
                    <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <polygon points="1,0.5 9.5,6 1,11.5" fill="white" />
                      </svg>
                    </div>
                    <span className="font-body text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-white leading-none">
                      Play Video
                    </span>
                  </div>
                  {/* Meta — always visible, bottom-left */}
                  <span className="absolute bottom-5 left-6 font-body text-[0.7rem] text-white/80 [filter:drop-shadow(0_1px_4px_rgba(0,0,0,0.6))]">
                    {item.meta ?? item.details?.join(" · ")}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Project rows */}
      <div className="flex flex-col">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="reveal group grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[minmax(200px,1fr)_2.8fr] gap-6 items-center py-3 border-b border-line cursor-pointer"
          >
            {/* Thumbnail */}
            <div
              className="w-full aspect-video overflow-hidden bg-bg relative"
              onClick={() => setPlayingId(item.id)}
            >
              {playingId === item.id ? (
                <iframe
                  src={`${item.videoUrl}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                  title={item.title}
                />
              ) : item.thumbImg ? (
                <img
                  src={item.thumbImg}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                />
              ) : (
                <div className={`w-full h-full ${item.thumbClass}`} />
              )}

              {/* Play overlay — below the white label, bottom-left */}
              {playingId !== item.id && (
                <div className="absolute bottom-[10%] left-[4%] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.8))]">
                  <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                      <polygon points="1,0.5 7.5,5 1,9.5" fill="white" />
                    </svg>
                  </div>
                  <span className="font-body text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-white leading-none">
                    Play Video
                  </span>
                </div>
              )}
            </div>

            {/* Info — no title, larger role text */}
            <div className="flex flex-col gap-2 pl-2">
              <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-black">
                {item.category}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
                {item.details.map((detail, i) => (
                  <span
                    key={i}
                    className="font-body text-[1rem] text-dark font-medium flex items-center gap-2"
                  >
                    {i > 0 && (
                      <span className="w-[3px] h-[3px] bg-light rounded-full shrink-0" />
                    )}
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
