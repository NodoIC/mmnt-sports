import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { TEAM } from "@/data/team";
import TeamMemberBlock from "@/components/TeamMemberBlock";

export const metadata: Metadata = {
  title: "Nuestro equipo — MMNT Sports",
  description: "El equipo detrás de MMNT Sports.",
};

function avatarExists(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "team", file));
}

export default function EquipoPage() {
  return (
    <section className="bg-mmnt-carbon pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10">
        <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-silver">
          Nuestro equipo
        </p>

        <h1
          className="animate-fade-in-up font-display mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-mmnt-offwhite sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          El equipo detrás de MMNT Sports.
        </h1>

        <p
          className="animate-fade-in-up mt-5 max-w-xl text-lg leading-relaxed text-mmnt-silver"
          style={{ animationDelay: "140ms" }}
        >
          Profesionales con experiencia, visión y una misma forma de
          entender la representación: estar cerca del futbolista y construir
          carreras con perspectiva de largo plazo.
        </p>

        <div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-20">
          {TEAM.map((member, index) => (
            <TeamMemberBlock
              key={member.id}
              member={member}
              reversed={index % 2 === 1}
              hasAvatar={avatarExists(member.avatarFile)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
