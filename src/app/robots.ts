import type { MetadataRoute } from "next";

// No se define `sitemap` aquí: requeriría una URL absoluta de producción y
// todavía no hay un dominio definitivo confirmado (ver informe final) — no
// se inventa uno.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/representados"],
      },
    ],
  };
}
