"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Composición de marca del Hero: el logo principal/completo oficial de
 * MMNT SPORTS (`/public/brand/01_logo_principal_web.png` — incluye
 * "MMNT SPORTS" y "Talent Manager" tal cual la composición oficial),
 * integrado sobre Carbon Black mediante una máscara de degradado — el
 * archivo tiene fondo negro sólido (sin canal alfa), así que la máscara
 * disuelve ese borde rectangular en vez de dejarlo como un recorte pegado
 * encima. Es el único lugar de la web que usa el logo completo; el
 * isotipo (09_isotipo.png) queda para el Método MMNT como recurso gráfico
 * secundario, para no repetir la misma composición dos veces. Sin card,
 * sin marco, sin glow de neón: solo un resplandor ambiental muy contenido
 * en Signal Yellow detrás. Parallax de ratón extremadamente sutil (2-6px)
 * para dar profundidad sin movimiento evidente; se desactiva por completo
 * con prefers-reduced-motion.
 */
export default function HeroBrandShowcase() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    function handleMouseMove(event: MouseEvent) {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        setParallax({
          x: event.clientX / window.innerWidth - 0.5,
          y: event.clientY / window.innerHeight - 0.5,
        });
        frameRef.current = null;
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const front = { x: parallax.x * 6, y: parallax.y * 6 };

  return (
    <div aria-hidden className="relative flex items-center justify-center">
      {/* Resplandor ambiental: muy difuminado, respira lentamente, da
          profundidad de fondo sin leerse como un halo de neón. */}
      <div
        className="animate-pulse-glow pointer-events-none absolute h-64 w-64 rounded-full bg-mmnt-signal/[0.08] blur-3xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]"
        style={{ transform: `translate3d(${front.x * 0.4}px, ${front.y * 0.4}px, 0)` }}
      />

      {/* El contenedor usa el aspect ratio real del logo principal
          (815/275 = 163/55) — si no coincidiera, `object-contain` dejaría
          barras vacías dentro de la caja y el degradado de máscara (que se
          calcula sobre el tamaño de la caja) no llegaría a coincidir con
          el borde real de la imagen, dejando un rectángulo negro visible. */}
      <div
        className="relative aspect-[163/55] w-[320px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out sm:w-[420px] lg:w-[480px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 82%)",
          transform: `translate3d(${front.x}px, ${front.y}px, 0)`,
        }}
      >
        <Image
          src="/brand/01_logo_principal_web.png"
          alt="MMNT Sports — Talent Manager"
          fill
          priority
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 320px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
