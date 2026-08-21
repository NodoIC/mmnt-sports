import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Representados — MMNT Sports",
  description: "Talento representado por MMNT Sports.",
  // Página de espera sin contenido real todavía — fuera de la navegación
  // pública (ver Header) y sin indexar mientras no haya representados.
  robots: { index: false, follow: false },
};

/**
 * MMNT Sports todavía no tiene representados que mostrar públicamente
 * (el rebranding retiró a los jugadores de la etapa G4P — ver informe).
 * La ruta y la arquitectura de datos/filtros (`@/data/players*`,
 * `RepresentedFilters`, `RepresentedGallery`) se conservan intactas para
 * cuando haya representados reales que incorporar; mientras tanto esta
 * página es una simple pantalla de espera, sin filtros vacíos ni grid de
 * placeholders.
 */
export default function RepresentadosPage() {
  return (
    <section className="flex min-h-[70svh] flex-1 items-center bg-mmnt-carbon">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-32 sm:px-10">
        <p className="font-mono animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-mmnt-signal">
          Representados
        </p>

        <h1
          className="animate-fade-in-up font-display mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-mmnt-offwhite sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          Talento que construye su camino.
        </h1>

        <p
          className="animate-fade-in-up mt-5 max-w-lg text-base leading-relaxed text-mmnt-silver sm:text-lg"
          style={{ animationDelay: "140ms" }}
        >
          Estamos construyendo esta sección para MMNT Sports. Próximamente
          conocerás a los futbolistas que representamos.
        </p>
      </div>
    </section>
  );
}
