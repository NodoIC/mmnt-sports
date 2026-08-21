import Image from "next/image";
import { COLLABORATORS } from "@/data/collaborators";

/**
 * "Red MMNT": fila editorial de logos de colaboradores reales (profesionales,
 * clínicas, empresas, marcas, servicios especializados con los que MMNT
 * trabaja) — nunca cards, nunca sombras, nunca carrusel automático. En
 * reposo los logos van en `grayscale` + opacidad reducida (un tratamiento
 * no destructivo: no recolorea nada, solo desatura, y se revierte por
 * completo en hover) para que la fila se sienta contenida y editorial; en
 * hover recuperan su color e intensidad original. Si algún logo pierde
 * legibilidad en escala de grises, quita `grayscale` solo para ese
 * colaborador — no fuerces el mismo tratamiento a toda costa.
 *
 * No hay colaboradores confirmados todavía (`COLLABORATORS` vacío) — la
 * sección no se renderiza en absoluto hasta que se añadan logos reales a
 * /public/collaborators (ver informe final para la ruta y el nombrado
 * exactos).
 */
export default function Collaborators() {
  if (COLLABORATORS.length === 0) {
    return null;
  }

  return (
    <section className="bg-mmnt-offwhite">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-10 sm:py-24">
        <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-carbon/60">
          Red MMNT
        </p>

        <h2 className="font-display animate-fade-in-up mt-6 max-w-xl text-3xl font-semibold tracking-tight text-mmnt-carbon sm:text-4xl">
          Una red que suma a cada carrera.
        </h2>

        <p className="animate-fade-in-up mt-4 max-w-xl text-base leading-relaxed text-mmnt-carbon/70">
          Trabajamos junto a profesionales y organizaciones especializadas
          para ampliar el acompañamiento cuando cada carrera lo necesita.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 sm:justify-between">
          {COLLABORATORS.map((collaborator) => (
            <div
              key={collaborator.id}
              className="relative h-10 w-32 grayscale opacity-60 transition-[filter,opacity] duration-300 ease-out hover:grayscale-0 hover:opacity-100 motion-reduce:transition-none"
            >
              <Image
                src={`/collaborators/${collaborator.logoFile}`}
                alt={collaborator.name}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
