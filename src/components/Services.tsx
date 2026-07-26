const ICONS = {
  briefcase: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026M3.75 9.776A2.25 2.25 0 0 0 2.25 12v3.377c0 1.108.806 2.05 1.907 2.185 2.583.316 5.207.48 7.843.48s5.26-.164 7.843-.48c1.101-.135 1.907-1.077 1.907-2.185V12a2.25 2.25 0 0 0-1.5-2.224M3.75 9.776V9.75A2.25 2.25 0 0 1 6 7.5h12a2.25 2.25 0 0 1 2.25 2.25v.026M9 12.75h6"
    />
  ),
  globe: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m-15.432 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253"
    />
  ),
  academic: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14.25 4.5 10.5 12 6.75l7.5 3.75L12 14.25Zm0 0v6.75m-7.5-3.879V16.5c0 .983 3.358 2.25 7.5 2.25s7.5-1.267 7.5-2.25v-3.129"
    />
  ),
  megaphone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73s-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
    />
  ),
};

const REPRESENTATION = {
  title: "Representación de futbolistas",
  badge: "Servicio principal",
  audiences: ["Fútbol masculino", "Fútbol femenino"],
  intro:
    "Intermediación, representación y asesoramiento para alcanzar el máximo potencial y rendimiento.",
  items: [
    "Negociación de contratos y acuerdos.",
    "Asesoramiento legal y estratégico.",
    "Gestión de traspasos y cesiones.",
    "Planificación de carrera (corto/medio/largo).",
  ],
};

const USA_PROGRAM = {
  title: "Carrera de fútbol en EE. UU.",
  subtitle: "Goals4Players4EEUU",
  badge: "Servicio especializado",
  intro:
    "Proyecto completo: formación académica, inmersión lingüística y competición en clubes del sistema norteamericano.",
  groups: [
    {
      title: "Programas Internacionales",
      items: [
        "Alianzas con universidades (Texas, Miami, Michigan).",
        "Integración en clubes de alto nivel.",
        "Residencia y estudios adaptados al calendario.",
      ],
    },
    {
      title: "Becas y Financiación",
      items: [
        "Becas de Alto Rendimiento (según nivel).",
        "Facilidades de financiación para familias.",
        "Programas cuatrimestrales/semestrales/anuales.",
      ],
    },
  ],
};

const COMPLEMENTARY_SERVICES = [
  {
    title: "Desarrollo y Formación Deportiva",
    items: [
      "Programas de tecnificación individual y colectiva.",
      "Entrenamientos personalizados por posición.",
      "Seguimiento con datos y vídeo.",
      "Formación táctica, técnica y física.",
    ],
    icon: ICONS.academic,
  },
  {
    title: "Comunicación, Marketing & Sponsoring",
    items: [
      "Gestión de redes y proyección de imagen.",
      "Contenido audiovisual profesional.",
      "Búsqueda y gestión de patrocinadores.",
      "Estrategias de visibilidad y posicionamiento.",
    ],
    icon: ICONS.megaphone,
  },
];

function ServiceIcon({
  path,
  className,
}: {
  path: React.ReactNode;
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      {path}
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-orange-400/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-orange-300">
      {children}
    </span>
  );
}

function AccentLine({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-400/40 ${className}`}
    />
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">
      {children}
    </p>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-neutral-900">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
          Qué hacemos
        </p>

        <h2
          className="animate-fade-in-up mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          Servicios
        </h2>

        {/* Fila principal: dos bloques con el mismo peso visual */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Bloque 1: Representación de futbolistas */}
          <div
            className="hover-lift animate-fade-in-up flex flex-col rounded-2xl border border-orange-500/25 bg-gradient-to-br from-orange-500/[0.08] via-white/[0.03] to-transparent p-8 hover:border-orange-500/50 sm:p-10"
            style={{ animationDelay: "160ms" }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <ServiceIcon
                path={ICONS.briefcase}
                className="h-10 w-10 text-orange-400"
              />
              <Badge>{REPRESENTATION.badge}</Badge>
            </div>

            <AccentLine className="mt-6" />
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {REPRESENTATION.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {REPRESENTATION.audiences.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3"
                    aria-hidden
                  >
                    <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  {audience}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
              {REPRESENTATION.intro}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {REPRESENTATION.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-neutral-300">
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400 active:scale-[0.98] sm:w-auto sm:self-start"
            >
              Solicitar representación
            </a>
          </div>

          {/* Bloque 2: Carrera de fútbol en EE. UU. */}
          <div
            className="hover-lift animate-fade-in-up flex flex-col rounded-2xl border border-orange-500/25 bg-gradient-to-br from-orange-500/[0.08] via-white/[0.03] to-transparent p-8 hover:border-orange-500/50 sm:p-10"
            style={{ animationDelay: "260ms" }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <ServiceIcon
                path={ICONS.globe}
                className="h-10 w-10 text-orange-400"
              />
              <Badge>{USA_PROGRAM.badge}</Badge>
            </div>

            <AccentLine className="mt-6" />
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {USA_PROGRAM.title}
            </h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-orange-400/80">
              {USA_PROGRAM.subtitle}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
              {USA_PROGRAM.intro}
            </p>

            <div className="mt-6 grid flex-1 grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
              {USA_PROGRAM.groups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-semibold text-white">
                    {group.title}
                  </h4>
                  <ul className="mt-3 flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-neutral-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Servicios complementarios */}
        <div className="mt-16">
          <GroupLabel>Servicios complementarios</GroupLabel>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {COMPLEMENTARY_SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="hover-lift animate-fade-in-up flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-orange-500/30 hover:bg-white/[0.04]"
                style={{ animationDelay: `${420 + index * 100}ms` }}
              >
                <ServiceIcon
                  path={service.icon}
                  className="mt-0.5 h-6 w-6 shrink-0 text-orange-400/80"
                />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <ul className="mt-2 flex flex-col gap-1">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-neutral-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
