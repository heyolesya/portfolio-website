function Footer() {
  return (
    <footer className="border-t border-dark-border bg-[#050505] py-8 px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Social Links */}
        <div className="mb-4 flex justify-center gap-6">
          <a
            href="mailto:olesya.petrochenkova@gmail.com"
            className="text-gray-muted transition-colors hover:text-coral"
          >
            ✉ Email
          </a>
          <a
            href="https://linkedin.com/in/olesiapetrochenkova"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-muted transition-colors hover:text-coral"
          >
            🔗 LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-muted">
          &copy; 2026 Olesia Petrochenkova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
