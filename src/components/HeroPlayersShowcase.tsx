import fs from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import Image from "next/image";

type PlayerSlot = {
  file: string;
  alt: string;
};

const PRIMARY_SLOT: PlayerSlot = {
  file: "player-01.jpg",
  alt: "Jugador representado por Goals For Players",
};

const SECONDARY_SLOT: PlayerSlot = {
  file: "player-02.jpg",
  alt: "Jugador representado por Goals For Players",
};

const TERTIARY_SLOT: PlayerSlot = {
  file: "player-03.jpg",
  alt: "Jugador representado por Goals For Players",
};

// Máscara radial: desvanece el borde de cada foto hacia el fondo, en vez de
// un recorte rectangular evidente. El drop-shadow sigue la silueta ya
// desvanecida (a diferencia de box-shadow, que ignora la máscara).
const MASK_STYLE: CSSProperties = {
  maskImage:
    "radial-gradient(ellipse 62% 68% at 50% 46%, black 58%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 62% 68% at 50% 46%, black 58%, transparent 100%)",
  filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.5))",
};

function playerImageExists(fileName: string): boolean {
  try {
    return fs.existsSync(
      path.join(process.cwd(), "public", "players", fileName),
    );
  } catch {
    return false;
  }
}

function PlaceholderGlyph() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white/[0.04]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="h-8 w-8 text-white/15"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75 8.69 9.3a2.25 2.25 0 0 1 3.182 0l5.68 5.68M14.25 13.5l1.318-1.318a2.25 2.25 0 0 1 3.182 0l2.5 2.5M6 21h12a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 18 4.5H6a2.25 2.25 0 0 0-2.25 2.25v12A2.25 2.25 0 0 0 6 21Z"
        />
      </svg>
    </div>
  );
}

function PlayerCard({
  slot,
  className,
  priority = false,
  depth = "front",
}: {
  slot: PlayerSlot & { exists: boolean };
  className: string;
  priority?: boolean;
  depth?: "front" | "back";
}) {
  const isBack = depth === "back";

  return (
    <div className={`absolute ${className}`}>
      <div className={isBack ? "h-full w-full" : "h-full w-full animate-float-subtle"}>
        <div style={MASK_STYLE} className="relative h-full w-full">
          {slot.exists ? (
            <Image
              src={`/players/${slot.file}`}
              alt={slot.alt}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 260px, 220px"
              priority={priority}
              className={`object-cover ${isBack ? "opacity-75 saturate-[0.7] blur-[1.5px]" : ""}`}
            />
          ) : (
            <PlaceholderGlyph />
          )}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent_60%)]"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Composición fotográfica cinematográfica del Hero: tres futbolistas
 * distintos, integrados en el fondo mediante máscaras radiales suaves (sin
 * bordes rectangulares evidentes). 01 = plano principal, nítido y con ligera
 * flotación; 02 = plano de fondo, atenuado y desenfoqueado para dar
 * profundidad; 03 = plano frontal, pequeño, superpuesto sobre el principal.
 * Cada archivo se lee del disco en cada render; si alguno faltase se
 * muestra un icono discreto en su mismo hueco.
 */
export default function HeroPlayersShowcase() {
  const primary = {
    ...PRIMARY_SLOT,
    exists: playerImageExists(PRIMARY_SLOT.file),
  };
  const secondary = {
    ...SECONDARY_SLOT,
    exists: playerImageExists(SECONDARY_SLOT.file),
  };
  const tertiary = {
    ...TERTIARY_SLOT,
    exists: playerImageExists(TERTIARY_SLOT.file),
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        aria-hidden
        className="absolute h-72 w-72 rounded-full bg-orange-600/[0.08] blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative h-[440px] w-[280px] sm:h-[480px] sm:w-[400px] lg:h-[520px] lg:w-[460px]">
        {/* 02: plano de fondo, atenuado, aporta profundidad */}
        <PlayerCard
          slot={secondary}
          depth="back"
          className="right-[2%] top-[4%] z-0 hidden h-[55%] w-[42%] rotate-2 sm:block"
        />

        {/* 01: plano principal, protagonista */}
        <PlayerCard
          slot={primary}
          depth="front"
          priority
          className="left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 sm:left-[47%] sm:top-[52%] sm:h-[86%] sm:w-[56%] lg:h-[82%] lg:w-[48%]"
        />

        {/* 03: plano frontal, se superpone ligeramente al principal */}
        <PlayerCard
          slot={tertiary}
          depth="front"
          className="bottom-[2%] left-[4%] z-20 hidden h-[46%] w-[40%] -rotate-1 sm:block"
        />
      </div>
    </div>
  );
}
