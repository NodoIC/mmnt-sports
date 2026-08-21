"use client";

import { useMemo, useState } from "react";
import RepresentedGallery from "@/components/RepresentedGallery";
import {
  CATEGORIAS,
  COMPETICIONES,
  type Categoria,
  type Competicion,
  type Player,
} from "@/data/players";

type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

// Control editorial: texto + línea inferior, sin cápsulas ni dropdowns.
// Mismo lenguaje visual que el subrayado activo de la navegación del
// Header, adaptado a fondo claro.
function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative rounded-sm py-1 text-sm font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mmnt-signal ${
        active
          ? "text-mmnt-carbon"
          : "text-mmnt-carbon/45 hover:text-mmnt-carbon"
      }`}
    >
      {label}
      <span
        aria-hidden
        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-mmnt-carbon transition-transform duration-200 group-hover:scale-x-100 ${
          active ? "scale-x-100" : ""
        }`}
      />
    </button>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] font-bold tracking-[0.2em] text-mmnt-carbon/40 uppercase">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">{children}</div>
    </div>
  );
}

export default function RepresentedFilters({ players }: { players: Player[] }) {
  const [competicion, setCompeticion] = useState<Competicion | "todos">("todos");
  const [categoria, setCategoria] = useState<Categoria | "todos">("todos");

  const filtered = useMemo(
    () =>
      players.filter((player) => {
        const matchesCompeticion =
          competicion === "todos" || player.competicion === competicion;
        const matchesCategoria =
          categoria === "todos" || player.categoria === categoria;
        return matchesCompeticion && matchesCategoria;
      }),
    [players, competicion, categoria],
  );

  return (
    <div>
      <div className="flex flex-col gap-8 border-y border-mmnt-carbon/10 py-8 sm:flex-row sm:items-start sm:gap-16">
        <FilterGroup label="Competición">
          <FilterButton
            label="Todos"
            active={competicion === "todos"}
            onClick={() => setCompeticion("todos")}
          />
          {COMPETICIONES.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              active={competicion === option.value}
              onClick={() => setCompeticion(option.value)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Categoría">
          <FilterButton
            label="Todos"
            active={categoria === "todos"}
            onClick={() => setCategoria("todos")}
          />
          {CATEGORIAS.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              active={categoria === option.value}
              onClick={() => setCategoria(option.value)}
            />
          ))}
        </FilterGroup>
      </div>

      <div className="mt-10">
        {filtered.length > 0 ? (
          <RepresentedGallery players={filtered} />
        ) : (
          <p className="py-16 text-center text-sm text-mmnt-carbon/50">
            Aún no hay fichas clasificadas en esta combinación de filtros.
          </p>
        )}
      </div>
    </div>
  );
}
