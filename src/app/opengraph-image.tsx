import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.center}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "radial-gradient(120% 90% at 70% -10%, #7e2240 0%, #46091f 48%, #2e0614 100%)",
          color: "#fcf7ec",
          position: "relative",
        }}
      >
        {/* decorative gold ring */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 70,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "2px solid rgba(200,161,74,0.25)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "2px solid rgba(200,161,74,0.18)",
            display: "flex",
          }}
        />

        {/* mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              transform: "rotate(45deg)",
              background: "linear-gradient(135deg,#e9d08a,#a9853a)",
              borderRadius: 12,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#e9d08a",
              display: "flex",
            }}
          >
            Est. 2015
          </div>
        </div>

        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            textAlign: "center",
            color: "#e9d08a",
            display: "flex",
          }}
        >
          Hare Krishna Movement
        </div>
        <div style={{ fontSize: 52, marginTop: 6, color: "#fcf7ec", display: "flex" }}>
          Visakhapatnam
        </div>

        <div
          style={{
            marginTop: 34,
            fontSize: 26,
            color: "rgba(252,247,236,0.78)",
            display: "flex",
          }}
        >
          {SITE.center} · Daily Darshan & Prasadam
        </div>
      </div>
    ),
    { ...size },
  );
}
