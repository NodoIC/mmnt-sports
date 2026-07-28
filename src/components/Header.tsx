"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "La Agencia" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-elegirnos", label: "¿Por qué nosotros?" },
  { href: "#representados", label: "Representados" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${
        isScrolled
          ? "border-b border-black/10 bg-white/95 shadow-sm dark:border-white/10 dark:bg-black/95"
          : "border-b border-transparent bg-white/70 dark:bg-black/70"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          aria-label="Goals For Players — Inicio"
        >
          <Image
            src="/goals4players-logo.png"
            alt="Goals For Players"
            width={160}
            height={160}
            priority
            className="h-10 w-10 sm:h-12 sm:w-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-sm py-1 text-[15px] font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                  isActive
                    ? "text-orange-600"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-orange-500 transition-transform duration-200 group-hover:scale-x-100 ${
                    isActive ? "scale-x-100 bg-orange-600" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="#contacto"
          className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:hover:bg-neutral-200 lg:inline-block"
        >
          Contactar
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          className="inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:hidden"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-foreground transition-transform ${
                isMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-foreground transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-foreground transition-transform ${
                isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/10 px-6 py-4 dark:border-white/10 lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-md px-2 py-2 text-[15px] font-medium transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:hover:bg-white/5 ${
                  isActive ? "text-orange-600" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-full bg-foreground px-5 py-2 text-center text-sm font-semibold text-background transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:hover:bg-neutral-200"
          >
            Contactar
          </Link>
        </nav>
      )}
    </header>
  );
}
