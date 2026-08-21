import fs from "node:fs";
import path from "node:path";
import { PLAYER_METADATA, type Player } from "@/data/players";

const PHOTO_PATTERN = /^player-(\d+)\.(?:jpg|png)$/i;

/**
 * Lee /public/players en el momento de la build/petición (Server
 * Component) y construye la lista de jugadores real, en el mismo orden que
 * ya usaba la galería de la Home. No inventa nombres de archivo: si el
 * directorio no existe o está vacío, devuelve una lista vacía.
 *
 * Vive en un módulo separado (con sufijo .server) porque usa node:fs — si
 * estuviera en data/players.ts, cualquier "use client" que importe los
 * tipos/constantes de ese archivo arrastraría fs al bundle del navegador.
 */
export function getPlayers(): Player[] {
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
    })
    .map((file) => {
      const id = file.replace(/\.(jpg|png)$/i, "");
      return { id, file, ...PLAYER_METADATA[id] };
    });
}
