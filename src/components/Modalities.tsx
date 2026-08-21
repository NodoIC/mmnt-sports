"use client";

import { useEffect, useRef, useState } from "react";

type Level = {
  n: string;
  name: string;
  claim: string;
  description: string;
  /** Fórmula acumulativa ("base", "base + desarrollo"...) — explica la
   * progresión por arquitectura, nunca con frases tipo "incluye X". */
  formula: string;
  concepts: string[];
};

const LEVELS: Level[] = [
  {
    n: "01",
    name: "Representación",
    claim: "Tu carrera, bien dirigida.",
    description:
      "Gestión deportiva y acompañamiento profesional para tomar mejores decisiones en cada etapa.",
    formula: "Base de acompañamiento",
    concepts: [
      "Representación deportiva",
      "Asesoramiento fiscal",
      "Planificación de carrera",
      "Oportunidades",
      "Seguimiento",
    ],
  },
  {
    n: "02",
    name: "Performance",
    claim: "Desarrollar al futbolista.",
    description:
      "Amplía la representación con un seguimiento orientado al rendimiento, el bienestar y la evolución deportiva.",
    formula: "Representación + Desarrollo",
    concepts: [
      "Preparación física",
      "Entrenamiento específico",
      "Nutrición",
      "Psicología deportiva",
      "Seguimiento del rendimiento",
    ],
  },
  {
    n: "03",
    name: "MMNT 360º",
    claim: "Construir una carrera dentro y fuera del campo.",
    description:
      "El acompañamiento más completo de MMNT Sports integra la gestión deportiva, el desarrollo del futbolista y su posicionamiento profesional.",
    formula: "Representación + Desarrollo + Posicionamiento",
    concepts: [
      "Marca personal",
      "Imagen",
      "Comunicación",
      "Marketing",
      "Promoción",
      "Posicionamiento",
    ],
  },
];

/** Revela el bloque al entrar en viewport. prefers-reduced-motion se
 * resuelve por CSS (motion-reduce:) en cada fila, no aquí en JS. */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

export default function Modalities() {
  const [sectionRef, inView] = useInView<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="modalidades" className="scroll-mt-24 bg-mmnt-carbon">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-mmnt-silver/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 lg:py-20">
        <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-silver">
          Acompañamiento
        </p>

        <h2
          className="animate-fade-in-up font-display mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-mmnt-offwhite sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          Cada carrera necesita algo diferente.
        </h2>

        <p
          className="animate-fade-in-up mt-5 max-w-3xl text-lg leading-relaxed text-mmnt-offwhite/90 sm:text-xl"
          style={{ animationDelay: "140ms" }}
        >
          Adaptamos el acompañamiento al momento, las necesidades y los
          objetivos de cada futbolista.
        </p>

        <p
          className="animate-fade-in-up mt-3 max-w-3xl text-base leading-relaxed text-mmnt-silver sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          Desde la representación deportiva hasta un ecosistema integral de
          desarrollo, rendimiento y posicionamiento.
        </p>

        {/* Tres franjas horizontales a todo el ancho — una pieza editorial
            continua, no tres cards ni tres columnas de precios. La
            progresión 01→02→03 se lee en el propio contenido y en el
            tratamiento (numeral, nombre, ligero acento Signal Yellow en
            360º), nunca repetida en un label aparte. Mismo lenguaje de
            interacción que Método MMNT: fondo a todo el ancho vía
            -mx/px, group-hover, desplazamiento de contenido. */}
        <div
          ref={sectionRef}
          className="mt-14 border-t border-mmnt-silver/15 sm:mt-16"
        >
          {LEVELS.map((level, index) => {
            const isActive = hovered === index;
            const isDimmed = hovered !== null && hovered !== index;
            const isLast = index === 2;

            return (
              <div
                key={level.n}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative -mx-6 border-b px-6 transition-[opacity,transform,border-color] duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 sm:-mx-10 sm:px-10 ${
                  isActive ? "border-mmnt-signal/25" : "border-mmnt-silver/15"
                } ${inView ? "translate-y-0" : "translate-y-3"}`}
                style={{
                  transitionDelay: inView ? `${index * 110}ms` : "0ms",
                  opacity: inView ? (isDimmed ? 0.6 : 1) : 0,
                }}
              >
                <div className="flex flex-col gap-4 py-7 transition-[background-color] duration-300 ease-out motion-reduce:transition-none group-hover:bg-mmnt-offwhite/[0.03] sm:py-8 lg:flex-row lg:items-center lg:gap-10 lg:py-9">
                  <div className="flex flex-1 flex-col gap-4 transition-transform duration-300 ease-out motion-reduce:transition-none lg:flex-row lg:items-center lg:gap-10 lg:group-hover:translate-x-1">
                    {/* 01 + Nombre — los tres numerales pertenecen al mismo
                        sistema (Signal Yellow, opacidad contenida en
                        reposo, intensidad plena en hover); ninguno se
                        diferencia por color respecto a los otros dos. */}
                    <div className="flex items-baseline gap-3 lg:w-64 lg:shrink-0">
                      <span
                        className={`font-mono text-2xl font-medium transition-colors duration-300 ease-out motion-reduce:transition-none sm:text-3xl ${
                          isActive ? "text-mmnt-signal" : "text-mmnt-signal/30"
                        }`}
                      >
                        {level.n}
                      </span>
                      <h3
                        className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ease-out motion-reduce:transition-none sm:text-3xl ${
                          isActive ? "text-mmnt-signal" : "text-mmnt-offwhite"
                        }`}
                      >
                        {level.name}
                      </h3>
                    </div>

                    {/* Claim + descripción */}
                    <div className="lg:w-[26rem] lg:shrink-0">
                      <p className="font-display text-base font-medium text-mmnt-offwhite/85 sm:text-lg">
                        {level.claim}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-mmnt-silver lg:max-w-none">
                        {level.description}
                      </p>
                    </div>

                    {/* Ámbitos de trabajo — menor protagonismo. La fórmula
                        ("Base de acompañamiento" → "...+ Desarrollo" →
                        "...+ Posicionamiento") es la que explica la
                        progresión acumulativa; nunca repetimos "incluye X".
                        MMNT 360º gana algo más de presencia mediante Signal
                        Yellow en su propia fórmula, sin llegar a leerse
                        como un plan recomendado. */}
                    <div className="lg:flex-1">
                      <p
                        className={`font-mono text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ease-out motion-reduce:transition-none ${
                          isLast
                            ? "text-mmnt-signal/70"
                            : isActive
                              ? "text-mmnt-offwhite/70"
                              : "text-mmnt-silver/50"
                        }`}
                      >
                        {level.formula}
                      </p>
                      <p
                        className={`mt-1.5 max-w-md text-sm transition-colors duration-300 ease-out motion-reduce:transition-none lg:max-w-none ${
                          isActive ? "text-mmnt-offwhite/70" : "text-mmnt-silver/60"
                        }`}
                      >
                        {level.concepts.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-in-up mt-12 max-w-xl border-t border-mmnt-silver/15 pt-8 sm:mt-14">
          <p className="font-display text-lg font-semibold text-mmnt-offwhite sm:text-xl">
            Cada modalidad es un punto de partida.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mmnt-silver sm:text-base">
            El acompañamiento se configura de forma personalizada según la
            situación, objetivos y necesidades de cada futbolista.
          </p>

          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-mmnt-silver/30 px-6 py-2.5 text-sm font-semibold text-mmnt-offwhite transition-colors duration-200 hover:border-mmnt-signal hover:text-mmnt-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
          >
            Cuéntanos tu situación
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
