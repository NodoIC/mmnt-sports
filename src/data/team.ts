export type TeamMember = {
  id: string;
  name: string;
  /** Jerarquía 1 — cargo principal. */
  role: string;
  /** Jerarquía 2 — zona territorial o especialización, según la persona. */
  detail: string;
  /** Ruta real en /public/team. */
  avatarFile: string;
  /** Aspect ratio real del archivo (evita letterboxing con object-contain). */
  avatarAspect: string;
};

// Equipo público de MMNT Sports. Datos exactamente como se han facilitado
// — no se añade zona, cargo, apellido ni ninguna información adicional que
// no esté aquí. Sergio Naves ya NO forma parte del equipo público (ver
// informe): no debe reaparecer en /equipo.
export const TEAM: TeamMember[] = [
  {
    id: "marta-alvarez",
    name: "Marta Álvarez",
    role: "CEO · Talent Manager",
    detail: "Zona Norte",
    avatarFile: "AvatarMarta.png",
    avatarAspect: "3 / 4",
  },
  {
    id: "mikel",
    name: "Mikel",
    role: "Talent Manager",
    detail: "Asesoramiento jurídico",
    avatarFile: "AvatarMikel.png",
    avatarAspect: "1 / 1",
  },
];
