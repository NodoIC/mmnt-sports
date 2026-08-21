import Link from "next/link";
import { getPlayers } from "@/data/players.server";
import RepresentedGallery from "@/components/RepresentedGallery";

const PREVIEW_COUNT = 8;

/**
 * Preview de la Home: una muestra de cromos + enlace a /representados, que
 * es donde vive el listado completo con filtros. No repite la lógica de
 * expandir/contraer que tenía antes — para ver el resto, se navega.
 */
export default function Represented() {
  const players = getPlayers();

  if (players.length === 0) {
    return null;
  }

  const preview = players.slice(0, PREVIEW_COUNT);
  const hasMore = players.length > PREVIEW_COUNT;

  return (
    <section id="representados" className="scroll-mt-24 bg-mmnt-offwhite">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-mmnt-carbon/25 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-10 sm:py-16">
        <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-mmnt-carbon/60">
          Nuestros jugadores
        </p>

        <h2
          className="animate-fade-in-up mt-3 text-2xl font-bold tracking-tight text-mmnt-carbon sm:text-3xl"
          style={{ animationDelay: "80ms" }}
        >
          Representados
        </h2>

        <div className="mt-8">
          <RepresentedGallery players={preview} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/representados"
            className="hover-lift inline-flex items-center gap-2 rounded-full border border-mmnt-carbon/20 px-6 py-2.5 text-sm font-semibold text-mmnt-carbon transition-colors hover:border-mmnt-carbon hover:text-mmnt-carbon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal"
          >
            {hasMore ? "Ver todos los representados" : "Ver representados"}
          </Link>
        </div>
      </div>
    </section>
  );
}
