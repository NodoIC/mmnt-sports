const PHILOSOPHY = [
  {
    label: "Nuestra misión",
    text: "Guiar al jugador hacia la excelencia deportiva y personal con un servicio global y personalizado.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    ),
  },
  {
    label: "Nuestra visión",
    text: "Agencia de referencia internacional en gestión y formación integral.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m-15.432 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253"
      />
    ),
  },
  {
    label: "Nuestros valores",
    text: "Potenciar carreras, garantizar ética profesional, ofrecer oportunidades y generar impacto positivo.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 text-center sm:px-10 sm:py-16">
        <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-orange-700">
          Filosofía
        </p>

        <h2
          className="animate-fade-in-up mx-auto mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          style={{ animationDelay: "80ms" }}
        >
          Nuestra filosofía
        </h2>

        <p
          className="animate-fade-in-up mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base"
          style={{ animationDelay: "120ms" }}
        >
          Acompañamos tu carrera futbolística de forma integral, del amateur a
          lo profesional.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY.map((item, index) => (
            <div
              key={item.label}
              className="hover-lift animate-fade-in-up flex flex-col items-center rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
              style={{ animationDelay: `${160 + index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6 text-orange-600"
                  aria-hidden
                >
                  {item.icon}
                </svg>
              </div>

              <h3 className="mt-5 text-base font-bold tracking-tight text-neutral-900">
                {item.label}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
