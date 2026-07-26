import HeroPlayersShowcase from "@/components/HeroPlayersShowcase";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[90svh] scroll-mt-24 items-center overflow-hidden bg-neutral-950"
    >
      {/* Textura deportiva sutil (líneas de campo) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_80px)]"
      />

      {/* Resplandor naranja controlado, superior izquierda */}
      <div
        aria-hidden
        className="absolute -left-32 -top-32 -z-20 h-[32rem] w-[32rem] rounded-full bg-orange-600/15 blur-3xl"
      />

      {/* Degradado radial de profundidad */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.14),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(234,88,12,0.1),_transparent_55%)]"
      />

      {/* Viñeta oscura para dar profundidad y contraste */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.92))]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-28 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:py-32">
        {/* Columna izquierda: contenido */}
        <div className="flex flex-col items-start">
          <div
            className="animate-fade-in-up flex items-center gap-3"
            style={{ animationDelay: "0ms" }}
          >
            <span aria-hidden className="h-px w-8 bg-orange-500/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
              Goals4Players
            </p>
          </div>

          <h1
            className="animate-fade-in-up mt-7 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Take the Chance
          </h1>

          <p
            className="animate-fade-in-up mt-7 max-w-xl text-lg font-medium text-white/85 sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Gestión integral de carreras futbolísticas: representación, formación,
            marketing y oportunidades internacionales.
          </p>

          <p
            className="animate-fade-in-up mt-4 max-w-md text-base text-white/55"
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-500/35 active:scale-[0.98]"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
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
          <HeroPlayersShowcase />
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-8 flex animate-bounce justify-center text-orange-300/60"
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
