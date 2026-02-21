import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects.js';
import ProjectCard from './ProjectCard';

const filters = ['All', 'YouTube', 'TV / Broadcast', 'Music Videos', 'Branded Content'];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Portfolio
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-coral" />
        </div>

        {/* Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? 'bg-coral text-white'
                  : 'border border-dark-border bg-dark-card text-gray-muted hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
