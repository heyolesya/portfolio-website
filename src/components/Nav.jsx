export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 mix-blend-difference flex items-center justify-between py-6 px-7">
      <a
        href="#"
        className="font-display text-[0.95rem] tracking-[0.18em] uppercase text-white"
      >
        Olesia Petrochenkova
      </a>

      <ul className="flex gap-9">
        {[
          ["Work", "#work"],
          ["About", "#info"],
          ["Contact", "#info"],
        ].map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-white opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
