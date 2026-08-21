import fs from "node:fs";
import path from "node:path";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MethodMMNT from "@/components/MethodMMNT";
import PresenceReach from "@/components/PresenceReach";
import Modalities from "@/components/Modalities";
import Collaborators from "@/components/Collaborators";
import PresenceClubs from "@/components/PresenceClubs";
import Contact from "@/components/Contact";

// El isotipo real MMNT SPORTS ya existe en /public/brand/09_isotipo.png —
// MethodMMNT lo usa como marca de agua; si algún día se sustituye por otro
// archivo, basta con actualizar esta comprobación.
const HAS_MMNT_3D_RENDER = fs.existsSync(
  path.join(process.cwd(), "public", "brand", "09_isotipo.png"),
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MethodMMNT has3dRender={HAS_MMNT_3D_RENDER} />
      <PresenceReach />
      <Modalities />
      {/* Colaboradores y Clubes no se renderizan mientras no haya datos
          reales (arrays vacíos en @/data) — ver informe final. */}
      <Collaborators />
      <PresenceClubs />
      <Contact />
    </>
  );
}
