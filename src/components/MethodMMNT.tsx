"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PRINCIPLES = [
  {
    n: "01",
    word: "Cercanía",
    title: "Estar cerca cambia las decisiones.",
    text: "Mantenemos una relación directa y constante con el futbolista para conocer su realidad deportiva, personal y profesional.",
  },
  {
    n: "02",
    word: "Compromiso",
    title: "No observamos desde fuera.",
    text: "Nos involucramos en cada etapa de la carrera, coordinando decisiones y acompañando al futbolista cuando realmente lo necesita.",
  },
  {
    n: "03",
    word: "Continuidad",
    title: "El seguimiento no termina con una firma.",
    text: "Analizamos la evolución, revisamos objetivos y adaptamos la estrategia a medida que avanza la carrera.",
  },
];

/**
 * Revela el bloque cuando entra en viewport. La preferencia
 * prefers-reduced-motion no se resuelve aquí en JS (evita disparar un
 * setState síncrono al montar): las clases `motion-reduce:` en cada fila
 * fuerzan el estado final visible por CSS sin esperar a `inView`.
 */
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
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

export default function MethodMMNT({
  has3dRender = false,
}: {
  has3dRender?: boolean;
}) {
  const [sectionRef, inView] = useInView<HTMLDivElement>();

  return (
    <section id="por-que-elegirnos" className="scroll-mt-24 bg-mmnt-carbon">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-mmnt-silver/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-10 sm:py-24 lg:py-24">
        <div className="relative lg:grid lg:grid-cols-[45%_55%] lg:gap-8">
          {/* Versión de fondo para <lg: el wordmark actúa como textura muy
              tenue detrás del propio texto, nunca como composición lateral
              (así lo pediste para tablet/móvil) — nunca compromete la
              legibilidad porque su opacidad es casi nula. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.05] lg:hidden"
          >
            <span
              className="font-display absolute top-1/2 -right-6 -translate-y-1/2 leading-none font-medium tracking-wide whitespace-nowrap text-mmnt-offwhite select-none"
              style={{ fontSize: "clamp(6rem, 28vw, 10rem)" }}
            >
              MMNT
            </span>
          </div>

          <div className="relative z-10">
            <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-silver">
              Nuestra forma de trabajar
            </p>

            <h2
              className="font-display animate-fade-in-up mt-6 max-w-lg text-4xl font-semibold tracking-tight text-mmnt-offwhite sm:text-5xl"
              style={{ animationDelay: "80ms" }}
            >
              El Método MMNT
            </h2>

            <p
              className="font-display animate-fade-in-up mt-5 max-w-lg text-lg font-medium text-mmnt-offwhite/90 sm:text-xl"
              style={{ animationDelay: "140ms" }}
            >
              Una carrera no se gestiona desde la distancia.
            </p>

            <p
              className="animate-fade-in-up mt-3 max-w-lg text-base leading-relaxed text-mmnt-silver sm:text-lg"
              style={{ animationDelay: "180ms" }}
            >
              Estamos presentes en cada etapa, entendemos el contexto de cada
              futbolista y tomamos decisiones con una visión de largo plazo.
            </p>
          </div>

          {/* Pieza escultórica de marca, solo desde lg: — el propio
              wordmark "MMNT" a gran escala, en varias capas (eco
              desenfocado, un duplicado en Metal Silver desplazado unos
              píxeles a modo de relieve/registro editorial, y la capa
              nítida principal en Off White), parcialmente cortado por el
              borde derecho del contenedor. Tipografía coherente con el
              resto de titulares (font-display). Nada de imagen pegada: es
              tipografía tratada como objeto. */}
          <div
            aria-hidden
            className="relative hidden overflow-hidden lg:block lg:self-stretch"
          >
            <div className="animate-pulse-glow absolute top-1/2 right-0 h-80 w-80 translate-x-1/4 -translate-y-1/2 rounded-full bg-mmnt-signal/[0.07] blur-3xl" />

            {has3dRender ? (
              // Isotipo real MMNT SPORTS, tratado como una marca de agua:
              // se funde con el fondo negro mediante una máscara de
              // degradado (sin recorte rectangular, sin marco, sin card) y
              // queda parcialmente cortado por el borde derecho del
              // contenedor. El archivo tiene fondo negro sólido (sin
              // canal alfa) — la máscara disuelve ese borde en vez de
              // dejarlo como un rectángulo pegado encima. El wrapper usa
              // el aspect ratio real del isotipo (260/160 = 13/8): si no
              // coincidiera, `object-contain` dejaría barras vacías dentro
              // de la caja y la máscara (calculada sobre el tamaño de la
              // caja) no llegaría a coincidir con el borde real de la
              // imagen, dejando un rectángulo negro visible.
              <div
                className="absolute top-1/2 right-[-6%] aspect-[13/8] w-[85%] -translate-y-1/2"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 68% 68% at 50% 50%, black 35%, transparent 78%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 68% 68% at 50% 50%, black 35%, transparent 78%)",
                }}
              >
                <Image
                  src="/brand/09_isotipo.png"
                  alt=""
                  fill
                  className="object-contain opacity-80"
                  sizes="(min-width: 1024px) 47vw, 0px"
                />
              </div>
            ) : (
              <>
                <span
                  className="font-display absolute top-1/2 right-[-1.5rem] -translate-y-1/2 translate-x-[15%] leading-none font-medium tracking-wide whitespace-nowrap text-mmnt-offwhite/[0.02] blur-md select-none"
                  style={{ fontSize: "clamp(7rem, 13vw, 13rem)" }}
                >
                  MMNT
                </span>

                <span
                  className="font-display absolute top-[calc(50%+8px)] right-[-1.44rem] -translate-y-1/2 translate-x-[15%] leading-none font-medium tracking-wide whitespace-nowrap text-mmnt-silver/[0.06] select-none"
                  style={{ fontSize: "clamp(7rem, 13vw, 13rem)" }}
                >
                  MMNT
                </span>

                <span
                  className="font-display absolute top-1/2 right-[-1.5rem] -translate-y-1/2 translate-x-[15%] leading-none font-medium tracking-wide whitespace-nowrap text-mmnt-offwhite/[0.055] select-none"
                  style={{
                    fontSize: "clamp(7rem, 13vw, 13rem)",
                    filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.5))",
                  }}
                >
                  MMNT
                </span>
              </>
            )}
          </div>
        </div>

        {/* Una única superficie editorial: mismo contenedor, filas
            separadas por líneas finas — no tres cards. El hover vive por
            fila (CSS puro, `group`/`group-hover`) así que nunca afecta a
            las filas vecinas. */}
        <div
          ref={sectionRef}
          className="mt-14 border-t border-mmnt-silver/15 sm:mt-16"
        >
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.n}
              className={`group relative -mx-6 border-b border-mmnt-silver/15 px-6 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:-mx-10 sm:px-10 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col gap-4 py-7 transition-[background-color] duration-300 ease-out motion-reduce:transition-none group-hover:bg-mmnt-offwhite/[0.03] sm:py-8 lg:flex-row lg:items-center lg:gap-10 lg:py-9">
                <div className="flex flex-1 flex-col gap-4 transition-transform duration-300 ease-out motion-reduce:transition-none lg:flex-row lg:items-center lg:gap-10 lg:group-hover:translate-x-1">
                  <span
                    aria-hidden
                    className="font-mono text-2xl leading-none font-medium text-mmnt-signal/45 transition-colors duration-300 ease-out motion-reduce:transition-none group-hover:text-mmnt-signal sm:text-3xl lg:w-14 lg:shrink-0"
                  >
                    {principle.n}
                  </span>

                  <div className="flex items-center gap-3 lg:w-44 lg:shrink-0">
                    <span
                      aria-hidden
                      className="h-px w-6 shrink-0 bg-mmnt-silver/50 transition-[background-color,width] duration-300 ease-out motion-reduce:transition-none group-hover:w-8 group-hover:bg-mmnt-signal"
                    />
                    <p className="font-mono text-xs font-medium tracking-[0.25em] text-mmnt-silver uppercase transition-colors duration-300 ease-out motion-reduce:transition-none group-hover:text-mmnt-signal">
                      {principle.word}
                    </p>
                  </div>

                  <h3 className="font-display text-xl font-semibold tracking-tight text-mmnt-offwhite sm:text-2xl lg:w-72 lg:shrink-0">
                    {principle.title}
                  </h3>

                  <p className="max-w-xl text-base leading-relaxed text-mmnt-silver lg:max-w-none lg:flex-1">
                    {principle.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="font-display animate-fade-in-up mt-16 text-2xl font-semibold tracking-tight text-mmnt-offwhite sm:mt-20 sm:text-3xl"
          style={{ animationDelay: "260ms" }}
        >
          Representar es{" "}
          <span className="text-mmnt-signal">
            estar cuando toca tomar decisiones.
          </span>
        </p>
      </div>
    </section>
  );
}
