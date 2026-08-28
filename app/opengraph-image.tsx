import { ImageResponse } from "next/og";

export const alt = "Akash Kinjawadekar — BCA student exploring software, AI, and the web.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          padding: "72px 80px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a1a1aa",
            letterSpacing: "-0.02em",
          }}
        >
          Akash Kinjawadekar
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 600,
            color: "#fafafa",
            letterSpacing: "-0.04em",
            lineHeight: 1.15,
          }}
        >
          <div style={{ display: "flex" }}>Exploring software, AI,</div>
          <div style={{ display: "flex" }}>
            and{" "}
            <span style={{ color: "#8b7cf6", marginLeft: 16 }}>the web.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#a1a1aa",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          BCA Student · Bengaluru, India
        </div>
      </div>
    ),
    { ...size },
  );
}
