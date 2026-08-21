import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MMNT Sports — Talent Manager",
    short_name: "MMNT Sports",
    description:
      "MMNT Sports: gestión integral de carreras futbolísticas — representación, formación, marketing y oportunidades internacionales.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#111111",
    icons: [
      { src: "/brand/favicon_192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/favicon_512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
