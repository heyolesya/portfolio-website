import { useState, useEffect, useRef } from "react";
import { featuredProjects, projects, filters } from "../data/projects";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const filteredFeatured =
    activeFilter === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.filterCat === activeFilter);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCat === activeFilter);

  return (
    <section id="work" className="relative px-10 pt-24 max-sm:px-5 sm:max-md:px-8" ref={sectionRef}>
      {/* Header */}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between py-16 pb-8 border-b border-line mb-8">
        <span className="font-display text-[0.85rem] tracking-[0.2em] uppercase text-dim">
          Selected Work
        </span>

        <div className="flex gap-1">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`font-body text-[0.68rem] font-medium tracking-[0.06em] uppercase px-3.5 py-1.5 bg-transparent border cursor-pointer transition
                ${
                  activeFilter === f.value
                    ? "text-white border-line"
                    : "text-dim border-transparent hover:text-mid"
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
              className="reveal group relative aspect-video overflow-hidden bg-surface cursor-pointer"
            >
              {/* Background thumbnail */}
              <div
                className={`absolute inset-0 ${item.thumbClass} transition-[transform,filter] duration-[600ms,400ms] saturate-[0.5] brightness-75 group-hover:scale-[1.04] group-hover:saturate-100 group-hover:brightness-100`}
              />

              {/* Placeholder label */}
              <span className="absolute inset-0 flex items-center justify-center text-[0.6rem] tracking-[0.14em] uppercase text-dim">
                thumbnail
              </span>

              {/* Overlay */}
              <div className="absolute inset-0 z-[1] flex flex-col justify-end p-7 bg-gradient-to-t from-black/100 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[0.58rem] font-semibold tracking-[0.14em] uppercase text-neon mb-1.5">
                  {item.category}
                </span>
                <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.4rem)] tracking-wide uppercase leading-tight">
                  {item.title}
                </h3>
                <span className="text-[0.7rem] text-mid mt-1.5">
                  {item.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project rows */}
      <div className="flex flex-col">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="reveal group grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[minmax(200px,1fr)_2.8fr_1fr] gap-6 items-center py-3 border-b border-line cursor-pointer transition-[background-color] duration-300 hover:bg-white/[0.015]"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-video overflow-hidden bg-surface relative">
              <div
                className={`w-full h-full ${item.thumbClass} transition-[transform,filter] duration-[500ms,400ms] saturate-[0.6] brightness-[0.85] group-hover:scale-[1.04] group-hover:saturate-100 group-hover:brightness-100`}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[0.55rem] tracking-[0.14em] uppercase text-dim">
                thumbnail
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 pl-2">
              <span className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase text-neon">
                {item.category}
              </span>
              <h4 className="font-display text-[clamp(1.4rem,2.5vw,2.2rem)] tracking-wide uppercase text-mid leading-tight transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h4>
              <div className="flex gap-4 mt-0.5">
                {item.details.map((detail, i) => (
                  <span
                    key={i}
                    className="text-[0.75rem] text-dim flex items-center gap-1"
                  >
                    {i > 0 && (
                      <span className="w-[3px] h-[3px] bg-dim rounded-full" />
                    )}
                    {detail}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — hidden below md */}
            <div className="hidden md:flex flex-col items-end gap-2 pr-2">
              <span className="text-[0.68rem] tracking-[0.06em] text-dim text-right leading-relaxed">
                {item.role}
              </span>
              <span className="text-xl text-neon opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                &#8594;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
