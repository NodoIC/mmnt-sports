"use client";

import { useState } from "react";

type Zone = {
  id: string;
  n: string;
  name: string;
  x: number;
  y: number;
};

// Posiciones en un espacio 0-100 (mapeadas 1:1 a % dentro del contenedor).
// El orden del array es el numérico (01-07), el que se lee en la lista de
// móvil: las seis zonas peninsulares primero, Madrid / Zona Centro cierra
// la lista como 07. La numeración es solo un índice — visualmente Madrid
// sigue ocupando el centro geométrico de las otras seis zonas y es el nodo
// desde el que parten la mayoría de conexiones (ver CORE_EDGES); numeración
// y protagonismo visual son dos cosas independientes.
const ZONES: Zone[] = [
  { id: "norte", n: "01", name: "Zona Norte", x: 46, y: 18 },
  { id: "mediterraneo", n: "02", name: "Corredor Mediterráneo", x: 74, y: 40 },
  { id: "sur", n: "03", name: "Zona Sur", x: 54, y: 76 },
  { id: "oeste", n: "04", name: "Zona Oeste", x: 32, y: 58 },
  { id: "portugal", n: "05", name: "Portugal", x: 20, y: 38 },
  { id: "baleares", n: "06", name: "Baleares y Canarias", x: 90, y: 48 },
  { id: "madrid", n: "07", name: "Zona Centro · Madrid", x: 47, y: 45 },
];

// Red orgánica, no una rueda de radios idénticos: Madrid conecta con los
// cuatro puntos cardinales del territorio peninsular; Portugal y Baleares
// se leen mejor como continuación de Oeste y Mediterráneo respectivamente,
// no como radios directos desde el centro.
const CORE_EDGES: [string, string][] = [
  ["madrid", "norte"],
  ["madrid", "mediterraneo"],
  ["madrid", "sur"],
  ["madrid", "oeste"],
  ["oeste", "portugal"],
  ["mediterraneo", "baleares"],
];

type IntlNode = {
  id: string;
  name: string;
  x: number;
  y: number;
  from: string;
};

const INTERNATIONAL: IntlNode[] = [
  { id: "estados-unidos", name: "Estados Unidos", x: 6, y: 24, from: "portugal" },
  { id: "sudamerica", name: "Sudamérica", x: 8, y: 82, from: "oeste" },
];

function byId(id: string) {
  return ZONES.find((z) => z.id === id) ?? INTERNATIONAL.find((n) => n.id === id)!;
}

/** Numeral en chip Carbon Black + texto Signal Yellow: sobre el fondo Off
 * White de esta sección, el amarillo puro como texto suelto pierde casi
 * todo el contraste (ambos son colores muy claros) — el chip oscuro
 * resuelve esto invirtiendo la relación (amarillo sobre negro), a la vez
 * que da al numeral más presencia de "sello" editorial. */
function ZoneNumeral({ n }: { n: string }) {
  return (
    <span className="font-mono mr-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-[3px] bg-mmnt-carbon px-1 text-[10px] font-medium text-mmnt-signal">
      {n}
    </span>
  );
}

/**
 * Composición territorial abstracta (solo escritorio/tablet ancho, lg+):
 * Madrid / Zona Centro funciona como nodo central del que parten cuatro
 * conexiones (Norte, Mediterráneo, Sur, Oeste); Portugal y Baleares cuelgan
 * de Oeste y Mediterráneo respectivamente. El resultado es una red, no el
 * contorno de un mapa — deliberadamente no son siete radios idénticos.
 * Desde Portugal y Oeste (los nodos más occidentales) salen dos líneas más
 * finas y discontinuas hacia Estados Unidos y Sudamérica: una segunda capa,
 * claramente más ligera, para el alcance internacional.
 *
 * Todo el texto (números y nombres) es HTML real superpuesto en posiciones
 * porcentuales idénticas a las del SVG decorativo (aria-hidden) — la
 * información nunca depende solo del gráfico ni del hover.
 *
 * Color: el estado "activo" (hover) usa Carbon Black, no Signal Yellow,
 * para líneas y aristas — un trazo amarillo puro sobre el fondo Off White
 * de esta sección apenas se distinguiría (contraste real ~1:1). Signal
 * Yellow sí se usa donde puede llevar un contorno o chip oscuro que le da
 * contraste real: el nodo de Madrid y los numerales.
 */
function TerritoryDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  const coreEdges = CORE_EDGES.map(([a, b]) => ({
    from: byId(a),
    to: byId(b),
    a,
    b,
  }));

  function isEdgeActive(a: string, b: string) {
    return hovered === a || hovered === b;
  }

  return (
    <div className="relative aspect-[6/5] w-full max-w-[640px]">
      {/* Retícula técnica muy tenue, de fondo */}
      <div
        aria-hidden
        className="absolute inset-0 text-mmnt-carbon opacity-[0.06] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:12.5%_16.6%]"
      />

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {/* Red territorial: Madrid como centro + segmentos perimetrales */}
        {coreEdges.map((edge) => (
          <line
            key={`${edge.a}-${edge.b}`}
            x1={edge.from.x}
            y1={edge.from.y}
            x2={edge.to.x}
            y2={edge.to.y}
            stroke="currentColor"
            strokeWidth={isEdgeActive(edge.a, edge.b) ? 0.5 : 0.35}
            className={`transition-[stroke,stroke-width] duration-300 ease-out motion-reduce:transition-none ${
              isEdgeActive(edge.a, edge.b) ? "text-mmnt-carbon" : "text-mmnt-silver"
            }`}
          />
        ))}

        {/* Líneas de alcance internacional: más finas, discontinuas */}
        {INTERNATIONAL.map((node) => {
          const origin = byId(node.from);
          const active = hovered === node.id;
          return (
            <line
              key={node.id}
              x1={origin.x}
              y1={origin.y}
              x2={node.x}
              y2={node.y}
              stroke="currentColor"
              strokeWidth={active ? 0.35 : 0.25}
              strokeDasharray="1.4 1.4"
              className={`transition-[stroke,stroke-width] duration-300 ease-out motion-reduce:transition-none ${
                active ? "text-mmnt-carbon" : "text-mmnt-silver"
              }`}
            />
          );
        })}
      </svg>

      {/* Nodos + etiquetas de las 7 zonas: texto HTML real, siempre visible.
          Madrid (nodo central) parte de un estado base ligeramente más
          visible que el resto — nunca una chincheta ni un icono, solo un
          punto algo mayor en Signal Yellow con un fino contorno Carbon
          que le da contraste sobre el fondo claro. */}
      {ZONES.map((zone) => {
        const active = hovered === zone.id;
        const isMadrid = zone.id === "madrid";
        return (
          <div
            key={zone.id}
            onMouseEnter={() => setHovered(zone.id)}
            onMouseLeave={() => setHovered(null)}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
            style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
          >
            <span
              aria-hidden
              className={`rounded-full transition-[background-color,transform] duration-300 ease-out motion-reduce:transition-none ${
                active
                  ? "h-1.5 w-1.5 scale-150 border border-mmnt-carbon/40 bg-mmnt-signal"
                  : isMadrid
                    ? "h-2 w-2 border border-mmnt-carbon/30 bg-mmnt-signal"
                    : "h-1.5 w-1.5 bg-mmnt-silver"
              }`}
            />
            <span
              className={`font-mono w-max max-w-[9rem] text-[11px] leading-tight font-medium tracking-wide text-balance transition-colors duration-300 ease-out motion-reduce:transition-none ${
                active ? "text-mmnt-carbon" : isMadrid ? "text-mmnt-carbon/70" : "text-mmnt-carbon/45"
              }`}
            >
              <ZoneNumeral n={zone.n} />
              {zone.name}
            </span>
          </div>
        );
      })}

      {/* Nodos internacionales: más pequeños y discretos, segunda jerarquía */}
      {INTERNATIONAL.map((node) => {
        const active = hovered === node.id;
        return (
          <div
            key={node.id}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span
              aria-hidden
              className={`h-1 w-1 rounded-full border transition-[border-color,transform] duration-300 ease-out motion-reduce:transition-none ${
                active ? "scale-150 border-mmnt-carbon" : "border-mmnt-silver"
              }`}
            />
            <span
              className={`font-mono w-max text-[10px] leading-tight font-medium tracking-wide uppercase transition-colors duration-300 ease-out motion-reduce:transition-none ${
                active ? "text-mmnt-carbon/70" : "text-mmnt-carbon/40"
              }`}
            >
              {node.name}
            </span>
          </div>
        );
      })}

      {/* Microdetalle editorial/técnico */}
      <p
        aria-hidden
        className="font-mono absolute bottom-0 left-0 text-[10px] font-medium tracking-[0.2em] text-mmnt-carbon/30 uppercase"
      >
        MMNT — Red de presencia
      </p>
    </div>
  );
}

/** Representación simplificada para móvil / tablet estrecho: nada de SVG
 * complejo ni intento de encoger el diagrama de escritorio — una línea con
 * siete puntos a modo de referencia visual (decorativa), seguida de la
 * lista real de zonas (Madrid incluido, en primer lugar) y, separado con
 * claridad, el alcance internacional. */
function SimplifiedTerritory() {
  return (
    <div className="lg:hidden">
      <div
        aria-hidden
        className="mt-10 flex items-center justify-between px-1"
      >
        {ZONES.map((zone, index) => (
          <span
            key={zone.id}
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-mmnt-silver"
            style={{ marginTop: index % 2 === 1 ? "0.5rem" : 0 }}
          />
        ))}
      </div>
      <div
        aria-hidden
        className="-mt-[9px] h-px bg-mmnt-carbon/15 sm:-mt-2"
      />

      <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
        {ZONES.map((zone) => (
          <li
            key={zone.id}
            className="font-mono flex items-center text-sm leading-snug font-medium text-mmnt-carbon"
          >
            <ZoneNumeral n={zone.n} />
            {zone.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PresenceReach() {
  return (
    <section id="presencia" className="scroll-mt-24 bg-mmnt-offwhite">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-mmnt-carbon/25 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28 lg:py-32">
        <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-16">
          <div>
            <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-carbon/60">
              Presencia y alcance
            </p>

            <h2
              className="font-display animate-fade-in-up mt-6 max-w-md text-4xl font-semibold tracking-tight text-mmnt-carbon sm:text-5xl"
              style={{ animationDelay: "80ms" }}
            >
              Cerca, estés donde estés.
            </h2>

            <p
              className="animate-fade-in-up mt-5 max-w-md text-base leading-relaxed text-mmnt-carbon/70 sm:text-lg"
              style={{ animationDelay: "140ms" }}
            >
              Una estructura pensada para mantener el contacto directo con el
              futbolista y conocer de cerca cada entorno deportivo.
            </p>

            <p
              className="font-mono animate-fade-in-up mt-6 text-sm font-medium tracking-wide text-mmnt-carbon"
              style={{ animationDelay: "180ms" }}
            >
              España · Portugal · Islas
            </p>

            {/* En escritorio esta franja queda justo debajo del microcopy de
                arriba (SimplifiedTerritory no ocupa espacio, es lg:hidden).
                En móvil, al venir después de la lista de zonas en el
                marcado, respeta el orden pedido: territorio → zonas →
                alcance internacional en último lugar. */}
            <SimplifiedTerritory />

            <div
              className="animate-fade-in-up mt-8 border-t border-mmnt-carbon/10 pt-6 lg:mt-10"
              style={{ animationDelay: "220ms" }}
            >
              <p className="font-mono text-xs font-medium tracking-[0.25em] text-mmnt-carbon/45 uppercase">
                Alcance internacional
              </p>
              <p className="font-mono mt-2 text-sm font-medium text-mmnt-carbon/70">
                Sudamérica · Estados Unidos
              </p>
            </div>
          </div>

          <div className="mt-16 hidden justify-center lg:mt-0 lg:flex">
            <TerritoryDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
