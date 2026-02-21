import { motion } from 'framer-motion';

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark px-6">
      <div className="text-center max-w-2xl">
        {/* Headshot placeholder */}
        <motion.div
          className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-dark ring-4 ring-coral/60 shadow-[0_0_40px_rgba(255,107,107,0.25)]"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp}
        >
          <span className="font-heading text-4xl font-semibold text-coral select-none">
            OP
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp}
        >
          Olesia Petrochenkova
        </motion.h1>

        {/* Title */}
        <motion.p
          className="mt-4 font-heading text-2xl font-medium text-coral sm:text-3xl"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp}
        >
          Content Producer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-4 font-body text-base leading-relaxed text-gray-400 sm:text-lg"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp}
        >
          Music and Media Storytelling | YouTube &amp; TV Projects | Strategy,
          Production, Promotion
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="mt-8 inline-block rounded-full bg-coral px-8 py-3 font-body text-sm font-semibold text-dark transition-opacity hover:opacity-90"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
