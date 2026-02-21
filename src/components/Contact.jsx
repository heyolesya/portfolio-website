import { motion } from 'framer-motion';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-coral" />
        </div>

        {/* Contact Links */}
        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="mailto:olesya.petrochenkova@gmail.com"
            className="flex items-center gap-2 text-gray-muted transition-colors hover:text-coral"
          >
            <span className="text-lg">✉</span>
            <span>olesya.petrochenkova@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/olesiapetrochenkova"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-muted transition-colors hover:text-coral"
          >
            <span className="text-lg">🔗</span>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-lg border border-dark-border bg-dark-card px-4 py-3 text-white placeholder-gray-muted outline-none transition-colors focus:border-coral"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg border border-dark-border bg-dark-card px-4 py-3 text-white placeholder-gray-muted outline-none transition-colors focus:border-coral"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg border border-dark-border bg-dark-card px-4 py-3 text-white placeholder-gray-muted outline-none transition-colors focus:border-coral resize-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded-lg bg-coral px-8 py-3 font-semibold text-white transition-colors hover:bg-coral-dark"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
