export type Club = {
  id: string;
  name: string;
  /** Nombre de archivo real dentro de /public/clubs. */
  crestFile: string;
};

// Ningún escudo real disponible todavía — no se inventan clubes ni se
// descargan escudos de Internet. Mostrar un club aquí NO implica ninguna
// relación contractual entre MMNT y ese club (ver el texto de
// `PresenceClubs.tsx`): solo indica que compite en él un futbolista
// representado por MMNT. Cuando se añadan escudos reales a /public/clubs,
// basta con añadir aquí una entrada por cada uno. Mientras este array esté
// vacío, `PresenceClubs.tsx` no renderiza la sección.
export const CLUBS: Club[] = [];
