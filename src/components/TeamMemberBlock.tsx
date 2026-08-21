import Image from "next/image";
import type { TeamMember } from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Composición editorial por persona: avatar contenido (≈30% del bloque en
 * desktop, nunca protagonista) con mucho espacio negativo entre imagen e
 * información — el hueco vive en el propio `gap`, no rellenamos el ancho
 * restante a la fuerza. Información siempre fuera de la imagen, nunca
 * texto encima de la cara. Sin card ni marco — solo un trazo Signal
 * Yellow fino como firma de marca. Si el avatar real todavía no existe en
 * /public/team, se muestra un panel con las iniciales en vez de romper la
 * página o mostrar una imagen rota.
 */
export default function TeamMemberBlock({
  member,
  reversed,
  hasAvatar,
}: {
  member: TeamMember;
  reversed: boolean;
  hasAvatar: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-16 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-[30%] lg:shrink-0">
        <div
          className="relative mx-auto w-[72%] max-w-[15rem] overflow-hidden rounded-2xl bg-gradient-to-b from-[#1c1c1c] to-mmnt-carbon sm:w-[60%] lg:w-full lg:max-w-none"
          style={{ aspectRatio: member.avatarAspect }}
        >
          {hasAvatar ? (
            <Image
              src={`/team/${member.avatarFile}`}
              alt={member.name}
              fill
              sizes="(min-width: 1024px) 30vw, 250px"
              className="object-contain"
            />
          ) : (
            <div
              aria-hidden
              className="flex h-full w-full items-center justify-center"
            >
              <span className="font-display text-4xl font-medium text-mmnt-offwhite/[0.08] sm:text-5xl">
                {initials(member.name)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="lg:w-[56%]">
        <span
          aria-hidden
          className="block h-px w-10 bg-gradient-to-r from-mmnt-signal to-mmnt-signal/30"
        />

        <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-mmnt-offwhite sm:text-3xl">
          {member.name}
        </h2>

        <p className="font-mono mt-2.5 text-sm font-medium tracking-[0.15em] text-mmnt-offwhite/80 uppercase">
          {member.role}
        </p>

        <p className="font-mono mt-1.5 text-xs font-medium tracking-[0.2em] text-mmnt-silver/70 uppercase">
          {member.detail}
        </p>
      </div>
    </div>
  );
}
