import { useState } from "react";

const CarCard = () => {
  const specs = [
    { icon: "⚡", label: "Range", value: "590", unit: "km" },
    { icon: "⚙", label: "Consumption", value: "167", unit: "Wh/km" },
    { icon: "🔋", label: "Power", value: "200", unit: "kW" },
    { icon: "⏱", label: "0–100 km/h", value: "6.2", unit: "s" },
    { icon: "⚖", label: "Weight", value: "2,195", unit: "kg" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0f2f5",
      padding: 24,
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    }}>
      <div style={{
        width: 400,
        borderRadius: 20,
        background: "#fff",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
        overflow: "hidden",
      }}>
        {/* Header bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          background: "#fff",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#1a2332",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}>1D</div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#8a919c", letterSpacing: 1.2, textTransform: "uppercase" }}>Luxury Sedans</span>
          </div>
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <rect width="28" height="20" rx="2" fill="#006AA7"/>
            <rect x="8" y="0" width="4" height="20" fill="#FECC02"/>
            <rect x="0" y="8" width="28" height="4" fill="#FECC02"/>
          </svg>
        </div>

        {/* Car image area */}
        <div style={{
          background: "linear-gradient(145deg, #1a2332 0%, #2a3a50 100%)",
          padding: "40px 24px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 220,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Subtle background glow */}
          <div style={{
            position: "absolute",
            width: 300,
            height: 120,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(100,160,255,0.08) 0%, transparent 70%)",
            bottom: 40,
          }}/>
          {/* Car silhouette */}
          <svg width="260" height="90" viewBox="0 0 260 90" fill="none" style={{ position: "relative", zIndex: 1 }}>
            <ellipse cx="130" cy="82" rx="120" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M30 62 C30 62 45 28 80 22 C95 19 165 19 180 22 C215 28 230 62 230 62 L235 62 C240 62 242 65 242 68 L242 72 C242 75 240 76 237 76 L220 76 C218 76 216 74 215 72 C213 68 208 65 200 65 L60 65 C52 65 47 68 45 72 C44 74 42 76 40 76 L23 76 C20 76 18 75 18 72 L18 68 C18 65 20 62 25 62 Z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
            <path d="M68 60 C68 60 78 32 95 27 C105 24 155 24 165 27 C182 32 192 60 192 60" fill="rgba(150,200,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
            <circle cx="62" cy="70" r="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <circle cx="62" cy="70" r="7" fill="rgba(40,50,65,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
            <circle cx="198" cy="70" r="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <circle cx="198" cy="70" r="7" fill="rgba(40,50,65,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
            <rect x="35" y="56" width="18" height="6" rx="2" fill="rgba(255,200,100,0.2)" stroke="rgba(255,200,100,0.3)" strokeWidth="0.5"/>
            <rect x="207" y="56" width="18" height="6" rx="2" fill="rgba(255,80,80,0.2)" stroke="rgba(255,80,80,0.3)" strokeWidth="0.5"/>
          </svg>
          {/* Brand label */}
          <div style={{
            marginTop: 20,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 4,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
          }}>Polestar</div>
        </div>

        {/* Title section */}
        <div style={{ padding: "20px 24px 8px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "#8a919c", textTransform: "uppercase", marginBottom: 4 }}>Polestar</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#1a2332", lineHeight: 1.2 }}>Polestar 4 Long Range</div>
        </div>

        {/* Specs */}
        <div style={{ padding: "12px 24px 24px" }}>
          {specs.map((s, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "11px 0",
              borderBottom: i < specs.length - 1 ? "1px solid #f0f2f5" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26, width: 34, textAlign: "center", opacity: 0.5 }}>{s.icon}</span>
                <span style={{ fontSize: 14, color: "#5a6270", fontWeight: 500 }}>{s.label}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#1a2332", minWidth: 58, textAlign: "right" }}>{s.value}</span>
                <span style={{ fontSize: 12, color: "#8a919c", fontWeight: 500, minWidth: 72, textAlign: "left", paddingLeft: 6 }}>{s.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
