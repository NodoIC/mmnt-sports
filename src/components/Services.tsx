type Pillar = {
  key: string;
  title: string;
  text: string;
  concepts: string[];
  primary?: boolean;
  /** Posición en la secuencia apilada de móvil (Representación va primero). */
  mobileOrder: 1 | 2 | 3;
  /** Variante de flotación (duración/desfase distintos por círculo). */
  floatVariant: "a" | "b" | "c";
};

// El orden del array = orden visual de columnas en escritorio, de izquierda
// a derecha. `mobileOrder` controla el orden aparte que pide móvil
// (Representación primero), sin tocar este orden de columnas.
const PILLARS: Pillar[] = [
  {
    key: "desarrollo",
    title: "Desarrollo integral",
    text: "Cuidamos el rendimiento, el bienestar y la evolución del futbolista.",
    concepts: [
      "Nutrición",
      "Psicología deportiva",
      "Preparación física",
      "Entrenamiento personal",
      "Entrenamiento específico de fútbol",
      "Medicina deportiva",
    ],
    mobileOrder: 2,
    floatVariant: "b",
  },
  {
    key: "representacion",
    title: "Representación",
    text: "Diseñamos y acompañamos la carrera deportiva del futbolista en cada etapa.",
    concepts: [
      "Planificación de carrera",
      "Negociación deportiva",
      "Gestión contractual",
      "Búsqueda de oportunidades",
      "Acompañamiento continuo",
      "Seguimiento personalizado",
    ],
    primary: true,
    mobileOrder: 1,
    floatVariant: "a",
  },
  {
    key: "promocion",
    title: "Promoción y marca",
    text: "Impulsamos la imagen y el posicionamiento del futbolista dentro y fuera del terreno de juego.",
    concepts: [
      "Marketing",
      "Marca personal",
      "Redes sociales",
      "Comunicación",
      "Imagen",
      "Patrocinios",
      "Promoción deportiva",
    ],
    mobileOrder: 3,
    floatVariant: "c",
  },
];

const CIRCLE_BASE =
  "flex items-center justify-center rounded-full text-center transition-[transform,border-color,box-shadow] duration-300 motion-safe:hover:scale-[1.03]";

// Solo hay un puñado de valores posibles en cada uno de estos mapas: se
// escriben tal cual para que Tailwind pueda detectar las clases (no se
// pueden construir dinámicamente con template strings y esperar que el
// escáner de contenido las encuentre).
const MOBILE_ORDER_CLASS: Record<1 | 2 | 3, string> = {
  1: "order-1 sm:order-none",
  2: "order-2 sm:order-none",
  3: "order-3 sm:order-none",
};

const FLOAT_CLASS: Record<"a" | "b" | "c", string> = {
  a: "animate-float-circle-a",
  b: "animate-float-circle-b",
  c: "animate-float-circle-c",
};

function AccentLine({ primary }: { primary?: boolean }) {
  return (
    <span
      aria-hidden
      className={`block h-1 w-8 rounded-full bg-gradient-to-r ${
        primary
          ? "from-mmnt-signal to-mmnt-signal/30"
          : "from-mmnt-silver to-mmnt-silver/20"
      }`}
    />
  );
}

/** Círculo + su propia franja de altura fija, para que los tres círculos
 * queden centrados sobre un mismo eje horizontal aunque tengan tamaños
 * distintos, y para que el título de cada columna empiece siempre a la
 * misma altura. */
function PillarCircle({ pillar }: { pillar: Pillar }) {
  return (
    <div className="relative flex h-32 w-full shrink-0 items-center justify-center sm:h-52 lg:h-80">
      {pillar.primary && (
        <div
          aria-hidden
          className="animate-pulse-glow absolute h-32 w-32 rounded-full bg-mmnt-signal/25 blur-xl sm:h-56 sm:w-56 lg:h-80 lg:w-80"
        />
      )}

      <div
        className={`${CIRCLE_BASE} ${FLOAT_CLASS[pillar.floatVariant]} ${
          pillar.primary
            ? "h-28 w-28 border-2 border-mmnt-signal/50 bg-gradient-to-br from-mmnt-signal/15 via-mmnt-carbon to-black shadow-xl shadow-black/50 hover:border-mmnt-signal/70 hover:shadow-mmnt-signal/20 sm:h-48 sm:w-48 lg:h-72 lg:w-72"
            : "h-24 w-24 border border-mmnt-silver/20 bg-[#1c1c1c] shadow-lg shadow-black/40 hover:border-mmnt-silver/40 hover:shadow-mmnt-silver/10 sm:h-40 sm:w-40 lg:h-56 lg:w-56"
        }`}
      >
        <span
          className={`font-display font-medium leading-tight ${
            pillar.primary
              ? "px-4 text-[clamp(0.875rem,1.8vw,1.5rem)] text-mmnt-offwhite sm:px-5 lg:px-6"
              : "px-3 text-[clamp(0.75rem,1.3vw,1.125rem)] text-mmnt-offwhite/85 sm:px-4 lg:px-5"
          }`}
        >
          {pillar.title}
        </span>
      </div>
    </div>
  );
}

function PillarColumn({ pillar }: { pillar: Pillar }) {
  return (
    <div
      className={`flex flex-col items-center gap-4 text-center ${MOBILE_ORDER_CLASS[pillar.mobileOrder]}`}
    >
      <PillarCircle pillar={pillar} />
      <AccentLine primary={pillar.primary} />

      <h3
        className={`font-display font-semibold tracking-tight text-mmnt-offwhite ${
          pillar.primary ? "text-xl" : "text-lg"
        }`}
      >
        {pillar.title}
      </h3>

      <p className="max-w-xs text-sm leading-relaxed text-mmnt-silver">
        {pillar.text}
      </p>

      <p className="max-w-xs text-xs leading-relaxed text-mmnt-silver/60">
        {pillar.concepts.join(" · ")}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-mmnt-carbon">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-silver">
          Nuestro modelo
        </p>

        <h2
          className="font-display animate-fade-in-up mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-mmnt-offwhite sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          Tres pilares. Un único objetivo.
        </h2>

        <p
          className="animate-fade-in-up mt-5 max-w-2xl text-base leading-relaxed text-mmnt-offwhite/75 sm:text-lg"
          style={{ animationDelay: "140ms" }}
        >
          Representamos al futbolista, impulsamos su desarrollo integral y
          construimos su proyección profesional.
        </p>

        {/*
          Una sola composición: cada pilar es una columna autocontenida
          (círculo → título → descripción → conceptos). La línea de conexión
          horizontal es un elemento aparte, detrás de los círculos (-z-10),
          que atraviesa el hueco entre ellos sin pasar por encima. En móvil
          se oculta (una columna apilada no necesita línea horizontal) y el
          orden cambia a Representación primero mediante `order`, sin tocar
          el orden de columnas de escritorio.
        */}
        <div className="animate-fade-in-up relative mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0 lg:gap-x-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[16.6667%] -z-10 hidden h-px overflow-hidden bg-gradient-to-r from-mmnt-silver/15 via-mmnt-signal/35 to-mmnt-silver/15 sm:top-[104px] sm:block lg:top-40"
          >
            <span className="animate-line-shine absolute top-0 h-px w-1/5 bg-gradient-to-r from-transparent via-mmnt-signal/90 to-transparent shadow-[0_0_6px_1px_rgba(231,255,0,0.45)]" />
          </div>

          {PILLARS.map((pillar) => (
            <PillarColumn key={pillar.key} pillar={pillar} />
          ))}
        </div>

        <p
          className="font-display animate-fade-in-up mt-16 text-center text-2xl font-semibold tracking-tight text-mmnt-offwhite sm:text-3xl"
          style={{ animationDelay: "620ms" }}
        >
          No representamos únicamente futbolistas.{" "}
          <span className="text-mmnt-signal">
            Desarrollamos carreras deportivas.
          </span>
        </p>
      </div>
    </section>
  );
}
