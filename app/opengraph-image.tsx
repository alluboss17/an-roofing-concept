import { ImageResponse } from "next/og";

export const alt = "RidgeCraft Roofing — AN Digital Studio concept";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "#0b1214", color: "#f4efe6", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ width: 70, height: 70, display: "flex", alignItems: "center", justifyContent: "center", background: "#d55d2a", fontSize: 27, fontWeight: 800 }}>RC</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 2 }}>RIDGECRAFT ROOFING</div>
        </div>
        <div style={{ fontSize: 18, letterSpacing: 4, color: "#d7cec2" }}>CONCEPT WEBSITE</div>
      </div>
      <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.03, maxWidth: 900 }}>Roofing built to stand up to British weather.</div>
      <div style={{ fontSize: 22, color: "#d7cec2" }}>Illustrative concept by AN Digital Studio · Fictional business content only</div>
    </div>,
    size
  );
}
