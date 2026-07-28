import ContactForm from "@/components/ContactForm";

const BENEFITS = [
  "🤝 Asesoramiento personalizado",
  "🎓 Plan formativo y tecnificación",
  "🌎 Oportunidades nacionales e internacionales",
];

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-neutral-950">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div className="flex flex-col items-start">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
            Contacto
          </p>

          <h2
            className="animate-fade-in-up mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            ¿Hablamos de tu carrera?
          </h2>

          <p
            className="animate-fade-in-up mt-4 max-w-md text-base leading-relaxed text-neutral-300"
            style={{ animationDelay: "140ms" }}
          >
            Envíanos tu consulta. Te respondemos rápido.
          </p>

          <ul
            className="animate-fade-in-up mt-8 flex flex-col gap-3"
            style={{ animationDelay: "200ms" }}
          >
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="text-sm text-neutral-300">
                {benefit}
              </li>
            ))}
          </ul>

          <div
            className="animate-fade-in-up mt-10 flex flex-col gap-4 border-t border-white/10 pt-8"
            style={{ animationDelay: "260ms" }}
          >
            <a
              href="mailto:info@goals4players.com"
              className="inline-flex items-center gap-3 rounded-sm text-base font-semibold text-white transition-colors hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-5 w-5 shrink-0 text-orange-400"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              info@goals4players.com
            </a>

            <a
              href="https://www.instagram.com/goals4players?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Goals For Players"
              className="inline-flex items-center gap-3 rounded-sm text-base font-semibold text-white transition-colors hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-5 w-5 shrink-0 text-orange-400"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364"
                />
              </svg>
              Instagram (@goals4players)
            </a>

            <p className="text-sm text-neutral-500">
              También en X, LinkedIn y TikTok como @Goals4Players.
            </p>
          </div>
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
