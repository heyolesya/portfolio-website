import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  const { title, description, category, thumbnail } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="group overflow-hidden rounded-xl border border-dark-border bg-dark-card transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,107,107,0.15)]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-dark-card to-dark-border">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              className="h-12 w-12 text-coral/60 transition-colors duration-300 group-hover:text-coral"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-muted">
          {description}
        </p>
        <span className="mt-3 inline-block rounded-full border border-coral/40 px-3 py-0.5 text-xs text-coral">
          {category}
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
