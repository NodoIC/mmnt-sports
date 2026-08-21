import HeroBrandShowcase from "@/components/HeroBrandShowcase";
// import HeroPlayersShowcase from "@/components/HeroPlayersShowcase"; // versión anterior conservada para comparar; ver nota más abajo.

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[90svh] scroll-mt-24 items-center overflow-hidden bg-mmnt-carbon"
    >
      {/* Textura deportiva sutil (líneas de campo) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_80px)]"
      />

      {/* Iluminación ambiental muy contenida en Signal Yellow — nada de
          glow neón: es apenas perceptible, solo aporta profundidad. */}
      <div
        aria-hidden
        className="absolute -left-32 -top-32 -z-20 h-[32rem] w-[32rem] rounded-full bg-mmnt-signal/[0.06] blur-3xl"
      />

      {/* Degradado radial de profundidad: Signal Yellow apenas perceptible
          arriba, Metal Silver aún más tenue abajo — evita que todo el
          ambiente dependa del amarillo. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_rgba(231,255,0,0.05),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(184,188,194,0.07),_transparent_55%)]"
      />

      {/* Viñeta oscura para dar profundidad y contraste */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.92))]"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 py-28 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:py-32">
        {/* Columna izquierda: contenido */}
        <div className="flex flex-col items-start">
          <div
            className="animate-fade-in-up flex items-center gap-3"
            style={{ animationDelay: "0ms" }}
          >
            <span aria-hidden className="h-px w-8 bg-mmnt-silver/60" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-mmnt-silver">
              MMNT Sports
            </p>
          </div>

          {/* Una sola composición tipográfica (font-display, Space
              Grotesk): "Take the" en semibold, tracking cerrado; "Chance."
              en light, tracking abierto y escala algo mayor — el contraste
              viene de peso/tracking/escala dentro de la misma familia, no
              de mezclar dos tipografías distintas. */}
          <h1 className="font-display mt-7">
            <span
              className="animate-fade-in-up block text-5xl leading-[0.95] font-semibold tracking-tight text-mmnt-offwhite uppercase sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              Take the
            </span>
            <span
              className="animate-fade-in-up mt-2 block font-light tracking-[0.06em] text-mmnt-signal uppercase"
              style={{
                animationDelay: "220ms",
                fontSize: "clamp(3rem, 9vw, 6.5rem)",
                lineHeight: 0.95,
              }}
            >
              Chance.
            </span>
          </h1>

          <p
            className="animate-fade-in-up mt-7 max-w-xl text-lg font-medium text-mmnt-offwhite/85 sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Gestión integral de carreras futbolísticas: representación, formación,
            marketing y oportunidades internacionales.
          </p>

          <p
            className="animate-fade-in-up mt-4 max-w-md text-base text-mmnt-silver"
            style={{ animationDelay: "340ms" }}
          >
            Acompañamos tu carrera futbolística de forma integral, del amateur a lo
            profesional.
          </p>

          <div
            className="animate-fade-in-up mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "440ms" }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mmnt-signal px-8 py-3.5 text-sm font-semibold text-mmnt-carbon shadow-lg shadow-mmnt-signal/20 transition-[filter,box-shadow,transform] duration-200 hover:shadow-mmnt-signal/35 hover:brightness-110 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
            >
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Solicitar información
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-mmnt-silver/30 px-8 py-3.5 text-sm font-semibold text-mmnt-offwhite transition-[border-color,background-color,transform] duration-200 hover:border-mmnt-silver/50 hover:bg-mmnt-offwhite/5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
            >
              Escríbenos
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

        {/* Columna derecha: composición fotográfica de jugadores */}
        <div className="flex items-center justify-center lg:justify-end">
          <HeroBrandShowcase />
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-8 flex animate-float-subtle justify-center text-mmnt-silver/60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
