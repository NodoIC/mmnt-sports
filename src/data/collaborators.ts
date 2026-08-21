export type Collaborator = {
  id: string;
  name: string;
  /** Nombre de archivo real dentro de /public/collaborators. */
  logoFile: string;
};

// Ningún colaborador real confirmado todavía — no se inventan nombres ni
// logos. Cuando se añadan archivos reales a /public/collaborators, basta
// con añadir aquí una entrada por cada uno (ver informe: rutas y nombres
// exactos a usar). Mientras este array esté vacío, `Collaborators.tsx` no
// renderiza la sección.
export const COLLABORATORS: Collaborator[] = [];
