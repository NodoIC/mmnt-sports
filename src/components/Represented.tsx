import fs from "node:fs";
import path from "node:path";
import RepresentedGallery from "@/components/RepresentedGallery";

const PHOTO_PATTERN = /^player-(\d+)\.jpg$/i;

function getPlayerPhotos(): string[] {
  const dir = path.join(process.cwd(), "public", "players");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((file) => PHOTO_PATTERN.test(file))
    .sort((a, b) => {
      const numA = Number(a.match(PHOTO_PATTERN)?.[1]);
      const numB = Number(b.match(PHOTO_PATTERN)?.[1]);
      return numA - numB;
    });
}

/**
 * Carga automáticamente todas las fotos que sigan el patrón player-XX.jpg en
 * /public/players, ordenadas por número. Añadir player-05.jpg, player-06.jpg,
 * etc. las incorpora a la galería sin tocar este componente.
 */
export default function Represented() {
  const photos = getPlayerPhotos();

  if (photos.length === 0) {
    return null;
  }

  return (
    <section id="representados" className="scroll-mt-24 bg-neutral-50">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-10 sm:py-16">
        <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-orange-700">
          Nuestros jugadores
        </p>

        <h2
          className="animate-fade-in-up mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          style={{ animationDelay: "80ms" }}
        >
          Representados
        </h2>

        <div className="mt-8">
          <RepresentedGallery photos={photos} />
        </div>
      </div>
    </section>
  );
}
