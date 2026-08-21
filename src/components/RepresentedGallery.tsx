import Image from "next/image";
import type { Player } from "@/data/players";

const GALLERY_ALT = "Futbolista representado por MMNT Sports";

// Proporción real (medida sobre los PNG en /public/players: ~1058-1070 x
// ~1470-1492, ratio ancho/alto entre 0.706 y 0.728). 5/7 = 0.714, el valor
// más cercano a la media real — con object-contain nunca recorta aunque
// algún archivo individual varíe una fracción respecto a esa proporción.
function PhotoCard({ player, delay }: { player: Player; delay: number }) {
  return (
    <div
      className="hover-lift animate-fade-in-up relative aspect-[5/7] overflow-hidden rounded-xl bg-mmnt-carbon"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src={`/players/${player.file}`}
        alt={GALLERY_ALT}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-contain"
      />
    </div>
  );
}

/**
 * Cuadrícula pura de cromos — sin estado propio. La decidir cuántos
 * jugadores mostrar (preview en Home vs. listado completo filtrado en
 * /representados) vive en quien la usa, no aquí.
 */
export default function RepresentedGallery({ players }: { players: Player[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {players.map((player, index) => (
        <PhotoCard key={player.id} player={player} delay={140 + (index % 8) * 60} />
      ))}
    </div>
  );
}
