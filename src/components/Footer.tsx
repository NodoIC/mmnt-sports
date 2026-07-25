export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-foreground/70 sm:flex-row sm:justify-between">
        <p>© {year} Goals For Players. Todos los derechos reservados.</p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Instagram
          </a>
          <a href="#" className="hover:text-foreground">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
