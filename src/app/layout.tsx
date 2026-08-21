import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Interfaz / texto general (párrafos, navegación, botones, labels). Sans
// extremadamente limpia — no cambia respecto al sistema anterior porque ya
// resuelve bien el cuerpo de texto (ver informe: no hacía falta una
// tercera familia para esto).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Titulares / identidad de marca (Hero, "MMNT", nombres de sección) — uso
// deliberadamente acotado, ver globals.css (utilidad `font-display`).
// Geométrica y técnica sin caer en ciencia ficción: la referencia más
// próxima a Lombok disponible de forma legal vía next/font/google.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Técnica/mono — eyebrows, numeración 01/02/03, etiquetas, coordenadas.
// Nunca para párrafos largos (ver componentes que aplican `font-mono`).
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MMNT Sports — Talent Manager",
  description:
    "MMNT Sports: gestión integral de carreras futbolísticas — representación, formación, marketing y oportunidades internacionales.",
  openGraph: {
    title: "MMNT Sports — Talent Manager",
    description:
      "MMNT Sports: gestión integral de carreras futbolísticas — representación, formación, marketing y oportunidades internacionales.",
    siteName: "MMNT Sports",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMNT Sports — Talent Manager",
    description:
      "MMNT Sports: gestión integral de carreras futbolísticas — representación, formación, marketing y oportunidades internacionales.",
  },
  // Referenciados directamente desde /public/brand (assets reales del kit
  // de marca) en vez de las convenciones favicon.ico/icon.png/apple-icon.png
  // de src/app: esos archivos son PNG sin canal alfa y el pipeline de
  // imágenes de Turbopack los rechaza ("The PNG is not in RGBA format").
  // Referenciarlos como metadata.icons evita ese procesado — se sirven tal
  // cual, sin optimizar.
  icons: {
    icon: [
      { url: "/brand/favicon_32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon_192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/favicon_512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple_touch_icon_180.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${robotoMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
