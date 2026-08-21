const PRINCIPLES = [
  {
    n: "01",
    word: "Cercanía",
    text: "Conocemos al futbolista y estamos presentes en su día a día.",
  },
  {
    n: "02",
    word: "Implicación",
    text: "Cada carrera la asumimos como un proyecto compartido.",
  },
  {
    n: "03",
    word: "Continuidad",
    text: "El seguimiento no termina con una firma. Acompañamos cada etapa.",
  },
];

/** Arco tipo saque de esquina: mismo detalle futbolístico abstracto que ya
 * usaba AboutVisual, reducido aquí a marca de esquina discreta. */
function CornerArc({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      className={className}
    >
      <path
        d="M0 0 A 32 32 0 0 1 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 overflow-hidden bg-mmnt-offwhite">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-mmnt-carbon/25 to-transparent"
      />

      {/* Detalles de marca: arcos de córner en las esquinas de la sección,
          y un círculo discontinuo en rotación muy lenta como capa de
          profundidad ambiental. Todo por debajo del 8% de opacidad: no
          compiten con la tipografía. */}
      <CornerArc className="pointer-events-none absolute -right-2 top-16 hidden h-24 w-24 text-mmnt-carbon/10 sm:block" />
      <CornerArc className="pointer-events-none absolute -left-2 bottom-24 hidden h-24 w-24 rotate-180 text-mmnt-carbon/10 sm:block" />
      <div
        aria-hidden
        className="animate-spin-slow pointer-events-none absolute right-[-6rem] top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-dashed border-mmnt-carbon/[0.08] lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-x-8 lg:py-36">
        <div className="flex flex-col items-start lg:col-span-7">
          <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-carbon/60">
            Quiénes somos
          </p>

          <h2
            className="font-display animate-fade-in-up mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-mmnt-carbon sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Una agencia construida alrededor del futbolista.
          </h2>

          <p
            className="animate-fade-in-up mt-8 max-w-xl text-lg leading-relaxed text-mmnt-carbon/80 sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            MMNT Sports nace con una forma diferente de entender la
            representación: estar cerca, implicarnos y acompañar cada
            decisión que puede marcar una carrera.
          </p>

          <p
            className="animate-fade-in-up mt-5 max-w-lg text-base leading-relaxed text-mmnt-carbon/55"
            style={{ animationDelay: "220ms" }}
          >
            No creemos en relaciones puntuales. Construimos vínculos a largo
            plazo basados en la confianza, el conocimiento del futbolista y
            un seguimiento continuo de su evolución.
          </p>
        </div>

        <div className="flex flex-col lg:col-span-4 lg:col-start-9 lg:mt-20">
          <div className="flex flex-col divide-y divide-mmnt-carbon/10 border-t border-mmnt-carbon/10 lg:border-t-0 lg:border-l lg:divide-y-0 lg:pl-10">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={principle.word}
                className="animate-fade-in-up relative py-7 first:pt-0 lg:py-8 lg:first:pt-0"
                style={{ animationDelay: `${320 + index * 120}ms` }}
              >
                <span
                  aria-hidden
                  className="font-mono pointer-events-none absolute -top-3 right-0 select-none text-6xl font-medium text-mmnt-signal/[0.09] sm:text-7xl"
                >
                  {principle.n}
                </span>

                <div className="relative flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-px w-6 shrink-0 bg-gradient-to-r from-mmnt-carbon to-mmnt-carbon/20"
                  />
                  <h3 className="font-mono text-sm font-medium uppercase tracking-[0.08em] text-mmnt-carbon">
                    {principle.word}
                  </h3>
                </div>

                <p className="relative mt-2 max-w-[26ch] text-sm leading-relaxed text-mmnt-carbon/65">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
