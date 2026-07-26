import AboutVisual from "@/components/AboutVisual";

const ABOUT_BLOCKS = [
  {
    title: "Equipo multidisciplinar",
    text: "Especialistas en gestión deportiva, comunicación, marketing, derecho, preparación física, nutrición y psicología.",
  },
  {
    title: "Colaboradores",
    text: "Nuestros colaboradores son un pilar clave. Acompañamos al deportista en cada etapa con profesionalidad y compromiso.",
  },
  {
    title: "De amateur a profesional",
    text: "Intermediación, representación y asesoramiento para alcanzar el máximo potencial y rendimiento.",
  },
];

const CONCEPT_CARDS = [
  {
    title: "Intermediación y Representación",
    text: "Negociación de contratos y acuerdos.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026M3.75 9.776A2.25 2.25 0 0 0 2.25 12v3.377c0 1.108.806 2.05 1.907 2.185 2.583.316 5.207.48 7.843.48s5.26-.164 7.843-.48c1.101-.135 1.907-1.077 1.907-2.185V12a2.25 2.25 0 0 0-1.5-2.224M3.75 9.776V9.75A2.25 2.25 0 0 1 6 7.5h12a2.25 2.25 0 0 1 2.25 2.25v.026M9 12.75h6"
      />
    ),
  },
  {
    title: "Desarrollo y Formación Deportiva",
    text: "Programas de tecnificación individual y colectiva.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14.25 4.5 10.5 12 6.75l7.5 3.75L12 14.25Zm0 0v6.75m-7.5-3.879V16.5c0 .983 3.358 2.25 7.5 2.25s7.5-1.267 7.5-2.25v-3.129"
      />
    ),
  },
  {
    title: "Comunicación, Marketing & Sponsoring",
    text: "Gestión de redes y proyección de imagen.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73s-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
      />
    ),
  },
];

export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-white">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-24 lg:py-36">
        <div className="flex flex-col items-start">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-orange-700">
            Quiénes somos
          </p>

          <h2
            className="animate-fade-in-up mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Sobre Goals For Players
          </h2>

          <div className="mt-12 flex flex-col gap-10">
            {ABOUT_BLOCKS.map((block, index) => (
              <div
                key={block.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${160 + index * 100}ms` }}
              >
                <h3 className="text-base font-semibold text-neutral-900">
                  {block.title}
                </h3>
                <p className="mt-2 max-w-lg text-base leading-relaxed text-neutral-600">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-in-up flex items-center justify-center lg:justify-end"
          style={{ animationDelay: "200ms" }}
        >
          <AboutVisual />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] border-t border-neutral-100 px-6 pb-24 sm:px-10 sm:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 divide-y divide-neutral-200 pt-16 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {CONCEPT_CARDS.map((card, index) => (
            <div
              key={card.title}
              className="animate-fade-in-up flex flex-col items-start gap-4 py-8 first:pt-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
              style={{ animationDelay: `${300 + index * 120}ms` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-7 w-7 text-orange-600"
                aria-hidden
              >
                {card.icon}
              </svg>
              <h3 className="text-base font-semibold text-neutral-900">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
