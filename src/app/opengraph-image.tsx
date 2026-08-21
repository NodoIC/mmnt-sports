import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagen Open Graph generada — misma paleta de marca (Carbon/Off
 * White/Metal Silver/Signal Yellow), sin depender de ningún asset externo.
 * Sustituir por una versión con el logo real cuando exista como archivo.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              fontSize: 132,
              fontWeight: 600,
              color: "#F3F2ED",
              letterSpacing: -2,
            }}
          >
            MMNT
          </span>
          <span
            style={{
              marginLeft: 18,
              width: 20,
              height: 44,
              background: "#E7FF00",
              transform: "skewX(-12deg)",
            }}
          />
        </div>
        <span
          style={{
            marginTop: 8,
            fontSize: 34,
            fontWeight: 500,
            letterSpacing: 14,
            color: "#E7FF00",
          }}
        >
          SPORTS
        </span>
        <span
          style={{
            marginTop: 20,
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: 6,
            color: "#B8BCC2",
          }}
        >
          TALENT MANAGER
        </span>
      </div>
    ),
    { ...size },
  );
}
