export type Competicion = "la-liga" | "rfef" | "futbol-base";
export type Categoria = "masculino" | "femenino";

export type Player = {
  /** Nombre de archivo sin extensión, p. ej. "player-01". */
  id: string;
  /** Nombre de archivo real dentro de /public/players. */
  file: string;
  /** Sin dato real disponible todavía — ver informe de la tarea. No se
   * inventa: si no está aquí, el filtro correspondiente no lo captura. */
  competicion?: Competicion;
  categoria?: Categoria;
};

export const COMPETICIONES: { value: Competicion; label: string }[] = [
  { value: "la-liga", label: "La Liga" },
  { value: "rfef", label: "RFEF" },
  { value: "futbol-base", label: "Fútbol base" },
];

export const CATEGORIAS: { value: Categoria; label: string }[] = [
  { value: "masculino", label: "Masculino" },
  { value: "femenino", label: "Femenino" },
];

/**
 * Metadata real conocida por jugador (clave = id de archivo, sin
 * extensión). Deliberadamente vacío: no existe todavía competición ni
 * categoría verificada para ningún futbolista. Cuando el dato esté
 * disponible, se añade aquí una entrada — no requiere tocar ningún
 * componente, los filtros ya están conectados a este objeto.
 */
export const PLAYER_METADATA: Record<
  string,
  Partial<Pick<Player, "competicion" | "categoria">>
> = {};
