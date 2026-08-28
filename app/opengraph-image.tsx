import { ImageResponse } from "next/og";

export const alt = "Akash Kinjawadekar — BCA Student & Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0c",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8b7cf6",
          }}
        >
          BCA Student · Bengaluru
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#ededf0",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Akash Kinjawadekar
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              color: "#8b8b93",
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            Exploring software, AI, and the web.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#8b8b93",
            fontFamily: "monospace",
          }}
        >
          Christ University
        </div>
      </div>
    ),
    { ...size },
  );
}
