import Image from "next/image";

/**
 * Composición gráfica de "Quiénes somos": el logotipo oficial enmarcado en un
 * panel circular, con líneas, formas y detalles futbolísticos abstractos
 * (arcos de córner, textura de líneas de campo). Sin fotografías todavía.
 */
export default function AboutVisual() {
  return (
    <div className="relative flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
      <div
        aria-hidden
        className="absolute h-72 w-72 rounded-full bg-orange-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden
        className="animate-spin-slow absolute h-64 w-64 rounded-full border border-dashed border-orange-400/40 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden
        className="absolute h-64 w-64 overflow-hidden rounded-full opacity-[0.07] sm:h-80 sm:w-80"
      >
        <div className="h-full w-full bg-[repeating-linear-gradient(120deg,rgba(0,0,0,0.7)_0px,rgba(0,0,0,0.7)_1px,transparent_1px,transparent_26px)]" />
      </div>

      {/* Arcos tipo saque de esquina: detalle futbolístico abstracto */}
      <svg
        aria-hidden
        viewBox="0 0 64 64"
        className="absolute -right-1 -top-1 h-14 w-14 text-orange-400/60 sm:h-20 sm:w-20"
      >
        <path
          d="M0 0 A 32 32 0 0 1 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 64 64"
        className="absolute -bottom-1 -left-1 h-14 w-14 rotate-180 text-orange-400/60 sm:h-20 sm:w-20"
      >
        <path
          d="M0 0 A 32 32 0 0 1 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xl shadow-neutral-200/60 sm:h-64 sm:w-64">
        <Image
          src="/goals4players-logo.png"
          alt="Goals For Players"
          width={140}
          height={140}
          className="h-24 w-24 sm:h-28 sm:w-28"
        />

        <span
          aria-hidden
          className="absolute left-6 top-6 h-2.5 w-2.5 rounded-full bg-orange-500"
        />
        <span
          aria-hidden
          className="absolute bottom-6 right-6 h-2.5 w-2.5 rounded-full bg-orange-500"
        />
      </div>
    </div>
  );
}
