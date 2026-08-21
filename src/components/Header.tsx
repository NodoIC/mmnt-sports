"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Enlaces con "#" son anclas de la Home: se prefijan con "/" para que
// funcionen también navegando desde /equipo (si no, un "#inicio" pulsado
// fuera de la Home no hace nada). "Representados" no está en la
// navegación pública por ahora — ver informe de rebranding: la ruta
// sigue existiendo internamente, pero MMNT Sports no tiene todavía
// representados que mostrar públicamente.
const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "La Agencia" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#por-que-elegirnos", label: "Método MMNT" },
];

const SECTION_IDS = NAV_LINKS.filter((link) => link.href.includes("#")).map(
  (link) => link.href.split("#")[1],
);

// Sombra de texto muy ligera: capa de contraste adicional para que el nav
// de escritorio siga siendo legible cuando el header (translúcido, nunca
// opaco) pasa por encima de secciones claras (Quiénes somos, Diferenciales).
const TEXT_SAFETY_SHADOW = "[text-shadow:0_1px_3px_rgba(0,0,0,0.5)]";

const CTA_CLASS =
  "items-center justify-center rounded-full bg-mmnt-signal px-5 py-2 text-sm font-semibold text-mmnt-carbon transition-[filter,box-shadow,transform] duration-200 hover:brightness-110 hover:shadow-[0_0_20px_-4px_rgba(231,255,0,0.55)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal";

/**
 * Icono de menú: tres líneas del mismo color y grosor — deliberadamente
 * simple, sin ningún acento de marca dentro del propio icono. La central es
 * solo un par de píxeles más corta (detalle casi imperceptible). Top/bottom
 * mantienen su ancho fijo en todo momento (solo transform/opacity) para que
 * la rotación a X quede simétrica sin animar anchos. En hover, las tres
 * líneas se separan ~1px — nada de color, escala ni desplazamiento lateral.
 */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="group/icon flex h-[18px] w-6 flex-col items-center justify-between">
      <span
        aria-hidden
        className={`h-[1.5px] w-6 rounded-full bg-mmnt-offwhite/90 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open
            ? "translate-y-[8px] rotate-45"
            : "motion-safe:group-hover/icon:-translate-y-px"
        }`}
      />
      <span
        aria-hidden
        className={`h-[1.5px] w-[22px] rounded-full bg-mmnt-offwhite/90 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        aria-hidden
        className={`h-[1.5px] w-6 rounded-full bg-mmnt-offwhite/90 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open
            ? "-translate-y-[8px] -rotate-45"
            : "motion-safe:group-hover/icon:translate-y-px"
        }`}
      />
    </span>
  );
}

function ProximamenteBadge() {
  return (
    <span className="font-mono shrink-0 rounded-full border border-mmnt-silver/25 px-2 py-0.5 text-[10px] font-medium tracking-wide text-mmnt-silver uppercase">
      Próximamente
    </span>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-[18px] w-[18px] shrink-0 text-mmnt-silver"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-[18px] w-[18px] shrink-0 text-mmnt-silver"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-[18px] w-[18px] shrink-0 text-mmnt-silver"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m-15.432 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Las anclas solo existen en el DOM de la Home — en otras rutas esto
    // no encuentra nada y no hace falta observar.
    if (!isHome) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Cierre al pulsar fuera / Escape. Se aplica al menú compartido (panel de
  // escritorio y desplegable móvil): ninguno de los dos cambia de aspecto
  // por esto, solo ganan una forma adicional de cerrarse.
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuButtonRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setIsMenuOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Un enlace de ancla solo puede estar "activo" cuando de verdad estamos en
  // la Home; una ruta propia (Representados) se activa por pathname.
  function isLinkActive(href: string) {
    if (href.includes("#")) {
      return isHome && activeSection === href.split("#")[1];
    }
    return pathname === href;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out ${
        isScrolled
          ? "border-b border-mmnt-silver/[0.12] bg-mmnt-carbon/35 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 sm:px-10">
        {/* Columna izquierda deliberadamente vacía: mantiene el grid
            1fr/auto/1fr para que la navegación central quede centrada
            respecto al viewport (no respecto al espacio libre). El símbolo
            de marca ya protagoniza el Hero; repetirlo aquí era redundante. */}
        <div aria-hidden="true" className="col-start-1" />

        <nav className="col-start-2 hidden items-center gap-8 justify-self-center lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-sm py-1 text-[15px] font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal ${TEXT_SAFETY_SHADOW} ${
                  isActive
                    ? "text-mmnt-signal"
                    : "text-mmnt-offwhite/80 hover:text-mmnt-signal"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-mmnt-signal transition-transform duration-200 group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="relative col-start-3 flex items-center justify-self-end gap-3">
          <Link href="/#contacto" className={`hidden lg:inline-flex ${CTA_CLASS}`}>
            Contactar
          </Link>

          {/*
            Mismo botón en todos los tamaños: en móvil es el disparador real
            del menú de navegación (lg:hidden más abajo). En escritorio abre
            el panel secundario (equipo, presencia, portal personal) anclado
            a su esquina superior derecha.
          */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            className="inline-flex items-center justify-center rounded-md p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
          >
            <MenuIcon open={isMenuOpen} />
          </button>

          {isMenuOpen && (
            <div
              ref={panelRef}
              className="animate-panel-in absolute top-full right-0 z-50 mt-3 hidden w-64 origin-top-right flex-col gap-1 rounded-xl border border-mmnt-silver/15 bg-mmnt-carbon p-2 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.65)] lg:flex"
            >
              <Link
                href="/equipo"
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-mmnt-offwhite/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
              >
                <UsersIcon />
                <span className="text-sm font-medium text-mmnt-offwhite/85 group-hover:text-mmnt-signal">
                  Nuestro equipo
                </span>
              </Link>

              <Link
                href="/#presencia"
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-mmnt-offwhite/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
              >
                <GlobeIcon />
                <span className="text-sm font-medium text-mmnt-offwhite/85 group-hover:text-mmnt-signal">
                  Presencia y alcance
                </span>
              </Link>

              <div aria-hidden className="my-1 h-px bg-mmnt-silver/15" />

              <div className="flex items-center gap-3 rounded-lg px-3 py-2.5">
                <UserIcon />
                <span className="flex-1 text-sm font-medium text-mmnt-offwhite/85">
                  Portal personal
                </span>
                <ProximamenteBadge />
              </div>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-mmnt-silver/15 bg-mmnt-carbon/95 px-6 py-4 backdrop-blur-md sm:px-10 lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-md px-2 py-3 text-lg font-medium transition-colors hover:bg-mmnt-offwhite/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal ${
                    isActive ? "text-mmnt-signal" : "text-mmnt-offwhite/85"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#contacto"
              onClick={() => setIsMenuOpen(false)}
              className={`mt-3 flex w-full text-center ${CTA_CLASS}`}
            >
              Contactar
            </Link>

            {/* Navegación secundaria: en escritorio vive en el panel del
                icono de tres líneas; en móvil ese panel no es accesible
                (el mismo botón ya abre este desplegable), así que se
                repite aquí, más compacta, para no perder el equipo o
                presencia en pantallas pequeñas. */}
            <div
              aria-hidden
              className="my-3 h-px bg-mmnt-silver/15"
            />

            <Link
              href="/equipo"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-2 py-2.5 text-base font-medium text-mmnt-silver transition-colors hover:bg-mmnt-offwhite/5 hover:text-mmnt-signal"
            >
              Nuestro equipo
            </Link>
            <Link
              href="/#presencia"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-2 py-2.5 text-base font-medium text-mmnt-silver transition-colors hover:bg-mmnt-offwhite/5 hover:text-mmnt-signal"
            >
              Presencia y alcance
            </Link>
            <div className="flex items-center justify-between rounded-md px-2 py-2.5 text-base font-medium text-mmnt-silver/40">
              Portal personal
              <ProximamenteBadge />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
