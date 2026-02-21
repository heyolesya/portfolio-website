import { motion } from 'framer-motion';
import skills from '../data/skills.js';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Skills & Tools
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-coral" />
        </div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={badgeVariants}
              className="rounded-full border border-coral/30 bg-coral/10 px-5 py-2 text-sm font-medium text-coral transition-colors hover:bg-coral/20 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
