import Image from "next/image";
import { CLUBS } from "@/data/clubs";

/**
 * "Presencia en clubes": banda horizontal discreta con los escudos de los
 * clubes en los que compiten actualmente futbolistas representados por
 * MMNT. Deliberadamente más callada que "Red MMNT" — es una señal de
 * implantación deportiva, no un bloque de partners: sin cards, sin
 * sombras, sin nombres grandes debajo, sin autoplay. Un solo scroll
 * horizontal manual (accesible por teclado/trackpad) si en el futuro hay
 * más escudos de los que caben en una fila — sin slider automático.
 *
 * IMPORTANTE: aparecer aquí no implica ninguna relación contractual,
 * patrocinio ni colaboración entre MMNT y el club — solo que un futbolista
 * representado compite actualmente en él. El texto de la sección debe
 * mantener siempre esa distinción.
 *
 * No hay escudos reales todavía (`CLUBS` vacío) — la sección no se
 * renderiza en absoluto hasta que se añadan archivos reales a
 * /public/clubs (ver informe final para la ruta y el nombrado exactos).
 */
export default function PresenceClubs() {
  if (CLUBS.length === 0) {
    return null;
  }

  return (
    <section className="bg-mmnt-carbon">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-10 sm:py-16">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-mmnt-silver">
          Presencia en clubes
        </p>

        <h2 className="font-display mt-4 max-w-xl text-2xl font-semibold tracking-tight text-mmnt-offwhite sm:text-3xl">
          Talento MMNT en el terreno de juego.
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-mmnt-silver">
          Clubes en los que compiten actualmente futbolistas representados
          por MMNT Sports.
        </p>

        <div className="mt-10 flex items-center gap-12 overflow-x-auto pb-2">
          {CLUBS.map((club) => (
            <div
              key={club.id}
              className="relative h-12 w-12 shrink-0 opacity-75 transition-[opacity,transform] duration-200 ease-out hover:translate-y-[-2px] hover:opacity-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Image
                src={`/clubs/${club.crestFile}`}
                alt={club.name}
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
