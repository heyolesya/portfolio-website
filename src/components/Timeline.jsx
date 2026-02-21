import { motion } from 'framer-motion';
import experience from '../data/experience.js';

export default function Timeline() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          <span className="text-coral">Experience</span>
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical coral line — left on mobile, center on desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-coral" />

          <div className="flex flex-col gap-12">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`relative flex items-center ${
                    isLeft
                      ? 'md:flex-row-reverse md:text-right'
                      : 'md:flex-row'
                  }`}
                >
                  {/* Timeline node — coral circle */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-coral z-10 ring-4 ring-dark" />

                  {/* Spacer for the opposite side (desktop only) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-coral font-medium mt-1">
                        {item.company}
                      </p>
                      <p className="text-gray-muted text-sm mt-1">
                        {item.period}
                      </p>
                      <p className="text-gray-muted mt-3 text-sm leading-relaxed">
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
