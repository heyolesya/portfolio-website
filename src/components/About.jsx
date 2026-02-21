import { motion } from 'framer-motion';

const stats = [
  { value: '9+', label: 'Years of Experience' },
  { value: '60+', label: 'Successful Projects' },
  { value: '5+', label: 'Countries' },
];

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-coral" />
        </div>

        {/* Bio */}
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-muted">
          With over 9 years of international experience in content production
          and more than 60 successful projects spanning TV, digital, and social
          media, I bring stories to life across every platform. My work includes
          collaborations with MTV Unplugged and multi-million-subscriber YouTube
          channels, as well as volunteer podcast production at the BraveMaker
          nonprofit. I thrive on turning creative visions into compelling media
          that resonates with global audiences.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-dark-card px-6 py-8 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="block text-4xl font-bold text-coral">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm text-gray-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
