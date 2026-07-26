export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-foreground/70 sm:flex-row sm:justify-between">
        <p>© {year} Goals For Players. Todos los derechos reservados.</p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/goals4players?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Goals For Players"
            className="hover:text-foreground"
          >
            Instagram
          </a>
          <a href="#contacto" className="hover:text-foreground">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
