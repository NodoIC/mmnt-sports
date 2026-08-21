import ContactForm from "@/components/ContactForm";

const BENEFITS = [
  "🤝 Asesoramiento personalizado",
  "🎓 Plan formativo y tecnificación",
  "🌎 Oportunidades nacionales e internacionales",
];

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-mmnt-carbon">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-mmnt-signal/40 to-transparent"
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div className="flex flex-col items-start">
          <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-signal">
            Contacto
          </p>

          <h2
            className="font-display animate-fade-in-up mt-6 text-4xl font-semibold tracking-tight text-mmnt-offwhite sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            ¿Hablamos de tu carrera?
          </h2>

          <p
            className="animate-fade-in-up mt-4 max-w-md text-base leading-relaxed text-mmnt-offwhite/75"
            style={{ animationDelay: "140ms" }}
          >
            Envíanos tu consulta. Te respondemos rápido.
          </p>

          <ul
            className="animate-fade-in-up mt-8 flex flex-col gap-3"
            style={{ animationDelay: "200ms" }}
          >
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5 text-sm text-mmnt-silver">
                <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-mmnt-signal" />
                {benefit}
              </li>
            ))}
          </ul>

          <a
            href="mailto:mmntsports@outlook.es"
            className="font-mono animate-fade-in-up mt-8 text-sm font-medium tracking-wide text-mmnt-silver transition-colors hover:text-mmnt-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
            style={{ animationDelay: "260ms" }}
          >
            mmntsports@outlook.es
          </a>
        </div>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
