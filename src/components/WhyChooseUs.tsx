const REASONS = [
  {
    title: "Acompañamiento personalizado",
    text: "Acompañamos al deportista en cada etapa con profesionalidad y compromiso.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    ),
  },
  {
    title: "Representación de fútbol masculino y femenino",
    text: "Intermediación, representación y asesoramiento para alcanzar el máximo potencial y rendimiento.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026M3.75 9.776A2.25 2.25 0 0 0 2.25 12v3.377c0 1.108.806 2.05 1.907 2.185 2.583.316 5.207.48 7.843.48s5.26-.164 7.843-.48c1.101-.135 1.907-1.077 1.907-2.185V12a2.25 2.25 0 0 0-1.5-2.224M3.75 9.776V9.75A2.25 2.25 0 0 1 6 7.5h12a2.25 2.25 0 0 1 2.25 2.25v.026M9 12.75h6"
      />
    ),
  },
  {
    title: "Oportunidades académicas y deportivas en EE. UU.",
    text: "Proyecto completo: formación académica, inmersión lingüística y competición en clubes del sistema norteamericano.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14.25 4.5 10.5 12 6.75l7.5 3.75L12 14.25Zm0 0v6.75m-7.5-3.879V16.5c0 .983 3.358 2.25 7.5 2.25s7.5-1.267 7.5-2.25v-3.129"
      />
    ),
  },
  {
    title: "Alcance nacional e internacional",
    text: "Gestión integral de carreras futbolísticas: representación, formación, marketing y oportunidades internacionales.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m-15.432 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253"
      />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="scroll-mt-24 bg-orange-50">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-10 sm:py-16">
        <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-orange-700">
          Diferenciales
        </p>

        <h2
          className="animate-fade-in-up mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          style={{ animationDelay: "80ms" }}
        >
          ¿Por qué elegirnos?
        </h2>

        <p
          className="animate-fade-in-up mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base"
          style={{ animationDelay: "120ms" }}
        >
          Acompañamos tu carrera futbolística de forma integral, del amateur a
          lo profesional.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {REASONS.map((reason, index) => (
            <div
              key={reason.title}
              className="animate-fade-in-up flex flex-col items-start gap-3"
              style={{ animationDelay: `${160 + index * 80}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 text-orange-600"
                  aria-hidden
                >
                  {reason.icon}
                </svg>
              </div>

              <h3 className="text-sm font-bold text-neutral-900">
                {reason.title}
              </h3>

              <p className="text-sm leading-relaxed text-neutral-600">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
