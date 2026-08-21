import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mmnt-silver/15 bg-mmnt-carbon">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 py-8 text-sm sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Image
            src="/brand/08_logo_horizontal.png"
            alt="MMNT Sports — Talent Manager"
            width={705}
            height={175}
            className="h-7 w-auto"
          />
          <p className="font-mono text-xs text-mmnt-silver/60">
            © {year} · Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:mmntsports@outlook.es"
            className="rounded-sm text-mmnt-silver transition-colors hover:text-mmnt-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
          >
            mmntsports@outlook.es
          </a>
          <Link
            href="/#contacto"
            className="rounded-sm text-mmnt-silver transition-colors hover:text-mmnt-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
