import React, { useState } from "react";

const CAR_LOGO_DATA_URI = "data:image/png;base64,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";

const COLORS = {
  bg: "#FFFFFF",
  surface: "#F8F9FA",
  border: "#E9ECEF",
  primary: "#111111",
  accent: "#111111",
  green: "#16A34A",
  greenLight: "#DCFCE7",
  amber: "#D97706",
  amberLight: "#FEF3C7",
  red: "#DC2626",
  redLight: "#FEE2E2",
  text: "#111827",
  textMid: "#6B7280",
  textLight: "#9CA3AF",
  white: "#FFFFFF",
  black: "#111111",
};

const STORES = [
  { name: "Ron Carter Ford" },
  { name: "Singing River Nissan" },
  { name: "Mazda of Fort Walton Beach" },
  { name: "Ron Carter Chevrolet" },
];

const Svg = ({ d, d2, d3, size = 22, color = COLORS.textMid }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>{d2 && <path d={d2}/>}{d3 && <path d={d3}/>}
  </svg>
);
const Ic = {
  home:    (s,c) => <Svg size={s} color={c} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1z" d2="M9 21V12h6v9"/>,
  pay:     (s,c) => <Svg size={s} color={c} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" d2="M14 2v6h6M16 13H8M16 17H8"/>,
  goal:    (s,c) => <Svg size={s} color={c} d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zM12 8v4l3 3"/>,
  star:    (s,c) => <Svg size={s} color={c} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>,
  users:   (s,c) => <Svg size={s} color={c} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>,
  bell:    (s,c) => <Svg size={s} color={c} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>,
  clock:   (s,c) => <Svg size={s} color={c} d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zM12 6v6l4 2"/>,
  cal:     (s,c) => <Svg size={s} color={c} d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>,
  cog:     (s,c) => <Svg size={s} color={c} d="M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>,
  user:    (s,c) => <Svg size={s} color={c} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>,
  help:    (s,c) => <Svg size={s} color={c} d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zM9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>,
  info:    (s,c) => <Svg size={s} color={c} d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zM12 8h.01M12 12v4"/>,
  mail:    (s,c) => <Svg size={s} color={c} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" d2="M22 6l-10 7L2 6"/>,
  logout:  (s,c) => <Svg size={s} color={c} d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>,
  lock:    (s,c) => <Svg size={s} color={c} d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4"/>,
  menu:    (s,c) => <Svg size={s} color={c} d="M3 12h18M3 6h18M3 18h18"/>,
  chevR:   (s,c) => <Svg size={s} color={c} d="M9 18l6-6-6-6"/>,
  chevL:   (s,c) => <Svg size={s} color={c} d="M15 18l-6-6 6-6"/>,
  dollar:  (s,c) => <Svg size={s} color={c} d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>,
  alert:   (s,c) => <Svg size={s} color={c} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/>,
  trophy:  (s,c) => <Svg size={s} color={c} d="M6 9H4a2 2 0 000 4h2M18 9h2a2 2 0 010 4h-2M6 5h12v7a6 6 0 01-12 0V5zM12 18v4M8 22h8"/>,
  check:   (s,c) => <Svg size={s} color={c} d="M20 6L9 17l-5-5"/>,
  box:     (s,c) => <Svg size={s} color={c} d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" d2="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>,
  phone:   (s,c) => <Svg size={s} color={c} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
  list:    (s,c) => <Svg size={s} color={c} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>,
};

// ── NAVIGATION CONTEXT ─────────────────────────────────────────────────
// Single global nav function — passed down to screens that need it
// Screen IDs match exactly what each role uses

// ── BASE COMPONENTS (exact same as your code) ──────────────────────────
const Phone = ({ children }) => (
  <div style={{
    width: 390, minHeight: 844, backgroundColor: COLORS.bg,
    borderRadius: 44, border: `2px solid ${COLORS.border}`,
    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
    overflow: "hidden", display: "flex", flexDirection: "column",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    position: "relative",
  }}>
    <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
    <div style={{ height:5, width:120, backgroundColor:COLORS.border, borderRadius:3, margin:"4px auto 4px", flexShrink:0 }}/>
  </div>
);

const TopBar = ({ title, subtitle, showBack, store, rightEl, onBack }) => (
  <div style={{ padding: "16px 20px 12px", borderBottom: `1px solid ${COLORS.border}`, backgroundColor: COLORS.bg }}>
    {showBack && (
      <div onClick={onBack} style={{ fontSize: 13, color: COLORS.accent, marginBottom: 4, display:"flex", alignItems:"center", gap:3, cursor:"pointer" }}>
        {Ic.chevL(13, COLORS.accent)} Back
      </div>
    )}
    {store && (
      <div style={{ fontSize:10, fontWeight:700, color:COLORS.black, letterSpacing:0.5, marginBottom:6 }}>
        {store.name.toUpperCase()}
      </div>
    )}
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
      <div>
        <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.primary }}>{title}</div>
        {subtitle && <div style={{ fontSize: 13, color: COLORS.textMid, marginTop: 2 }}>{subtitle}</div>}
      </div>
      {rightEl}
    </div>
  </div>
);

const Card = ({ children, style }) => (
  <div style={{ backgroundColor: COLORS.white, borderRadius: 14, border: `1px solid ${COLORS.border}`, padding: 16, ...style }}>
    {children}
  </div>
);

const Badge = ({ label, color = COLORS.amberLight, textColor = COLORS.amber }) => (
  <span style={{ backgroundColor: color, color: textColor, fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 20 }}>{label}</span>
);

// BottomNav — now accepts onTab for click navigation
const BottomNav = ({ tabs, active, onTab }) => (
  <div style={{ borderTop: `1px solid ${COLORS.border}`, backgroundColor: COLORS.white, display: "flex", padding: "12px", gap: 6 }}>
    {tabs.map(t => {
      const on = t.label === active;
      return (
        <div key={t.label} onClick={() => onTab && onTab(t.label)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer" }}>
          <div style={{
            width: 64, height: 64, borderRadius: 10,
            backgroundColor: on ? "#E5E7EB" : "#F3F4F6",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {t.icon(20, on ? COLORS.black : "#9CA3AF")}
          </div>
          <span style={{ fontSize: 9.5, fontWeight: on ? 700 : 400, color: on ? COLORS.black : "#9CA3AF" }}>{t.label}</span>
        </div>
      );
    })}
  </div>
);

const Row = ({ label, value, valueColor, sub }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 10, marginBottom: 10, borderBottom: `1px solid ${COLORS.border}` }}>
    <div>
      <span style={{ fontSize: 13, color: COLORS.textMid }}>{label}</span>
      {sub && <div style={{ fontSize: 11, color: COLORS.textLight, marginTop: 2 }}>{sub}</div>}
    </div>
    <span style={{ fontSize: 13, fontWeight: 600, color: valueColor || COLORS.text }}>{value}</span>
  </div>
);

const Pill = ({ label, color = COLORS.amberLight, textColor = COLORS.amber }) => (
  <div style={{ backgroundColor: color, color: textColor, fontSize: 12, fontWeight: 500, padding: "6px 12px", borderRadius: 20, display: "inline-block" }}>{label}</div>
);

const Bar = ({ pct, color }) => (
  <div style={{ height: 6, backgroundColor: COLORS.border, borderRadius: 4 }}>
    <div style={{ width: `${Math.min(pct,100)}%`, height: "100%", backgroundColor: color || COLORS.green, borderRadius: 4 }} />
  </div>
);

const SectionTitle = ({ children }) => (
  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>{children}</div>
);

const PrimaryBtn = ({ label, onClick }) => (
  <div onClick={onClick} style={{ backgroundColor: COLORS.black, borderRadius: 12, padding: "15px", textAlign: "center", cursor:"pointer" }}>
    <span style={{ color: COLORS.white, fontWeight: 700, fontSize: 15 }}>{label}</span>
  </div>
);

const OutlineBtn = ({ label, onClick }) => (
  <div onClick={onClick} style={{ border: `1.5px solid ${COLORS.black}`, borderRadius: 12, padding: "13px", textAlign: "center", cursor:"pointer" }}>
    <span style={{ color: COLORS.black, fontWeight: 600, fontSize: 14 }}>{label}</span>
  </div>
);

const BellWithBadge = ({ count, onClick }) => (
  <div onClick={onClick} style={{ position: "relative", cursor: "pointer" }}>
    {Ic.bell(22, COLORS.text)}
    {count > 0 && (
      <div style={{ position: "absolute", top: -3, right: -3, width: 15, height: 15, backgroundColor: COLORS.red, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 8, fontWeight: 800, color: COLORS.white }}>{count}</span>
      </div>
    )}
  </div>
);

// ── TAB SETS (exact same labels as your code) ──────────────────────────
const spTabs   = [{label:"Home",icon:Ic.home},{label:"Paysheet",icon:Ic.pay},{label:"Goals",icon:Ic.goal},{label:"Spiffs",icon:Ic.star}];
const smTabs   = [{label:"Home",icon:Ic.home},{label:"Team",icon:Ic.users},{label:"Paysheet",icon:Ic.pay},{label:"Spiffs",icon:Ic.star}];
const fiTabs   = [{label:"Home",icon:Ic.home},{label:"Paysheet",icon:Ic.pay},{label:"Spiffs",icon:Ic.star}];
const bdcTabs  = [{label:"Home",icon:Ic.home},{label:"Paysheet",icon:Ic.pay},{label:"Spiffs",icon:Ic.star}];
const gmTabs   = [{label:"Store",icon:Ic.box},{label:"Exceptions",icon:Ic.alert},{label:"Inventory",icon:Ic.list},{label:"Spiffs",icon:Ic.star}];
const liteTabs = [{label:"Paysheet",icon:Ic.pay},{label:"History",icon:Ic.clock}];

// ── LOGIN ──────────────────────────────────────────────────────────────
const LoginPage = ({ nav }) => (
  <Phone>
    <div style={{ padding: "60px 28px 40px", display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={{ marginBottom: 40, textAlign: "center" }}>
        <div style={{ width: 72, height: 72, backgroundColor: COLORS.white, border: `2px solid ${COLORS.black}`, borderRadius: 18, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <img src={CAR_LOGO_DATA_URI} alt="Logo" style={{ width: "78%", height: "auto" }} />
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.primary }}>Commissions</div>
        <div style={{ fontSize: 14, color: COLORS.textMid, marginTop: 4 }}>ZT Automotive Group</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid, marginBottom: 6 }}>EMAIL</div>
          <div style={{ border: `1.5px solid ${COLORS.border}`, borderRadius: 10, padding: "13px 14px", fontSize: 14, color: COLORS.textLight }}>you@ztautogroup.com</div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid, marginBottom: 6 }}>PASSWORD</div>
          <div style={{ border: `1.5px solid ${COLORS.border}`, borderRadius: 10, padding: "13px 14px", fontSize: 14, color: COLORS.textLight }}>••••••••</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 500 }}>Forgot password?</span>
        </div>
        <PrimaryBtn label="Sign in as a Sales Person " onClick={() => nav("sp-home")} />
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, height: 1, backgroundColor: COLORS.border }} />
            <span style={{ fontSize: 12, color: COLORS.textLight }}>or</span>
            <div style={{ flex: 1, height: 1, backgroundColor: COLORS.border }} />
          </div>
          <div onClick={() => nav("sm-home")} style={{ border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "13px", textAlign: "center", marginTop: 12, cursor:"pointer" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.text }}>Sign in as a Sales Manager</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign:"center", marginTop:24 }}>
        <span style={{ fontSize:11, color:COLORS.textLight }}></span>
      </div>
    </div>
  </Phone>
);

// ── SALESPERSON ────────────────────────────────────────────────────────
const SPHome = ({ nav }) => {
  const s = STORES[0];
  const onTab = (label) => {
    if (label === "Home") nav("sp-home");
    if (label === "Paysheet") nav("sp-paysheet");
    if (label === "Goals") nav("sp-goals");
    if (label === "Spiffs") nav("sp-spiffs");
  };
  return (
    <Phone>
      <TopBar title="June · Jorge M " subtitle="Month to date estimate" store={s}
        rightEl={<div style={{ display:"flex", gap:12, alignItems:"center" }}><BellWithBadge count={2} onClick={() => nav("sp-notif")}/><div onClick={() => nav("sp-menu")} style={{cursor:"pointer"}}>{Ic.menu(22,COLORS.text)}</div></div>} />
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Month to date estimate</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>$6,500</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>Updates as deals close</div>
          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: COLORS.textMid }}>Unit goal</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>12 / 18</span>
            </div>
            <Bar pct={67} color={COLORS.black} />
          </div>
          <div style={{ marginTop: 12, backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 12px" }}>
            <span style={{ fontSize: 12, color: COLORS.amber, fontWeight: 600 }}>2 units from Tier 3 = +$150/unit retroactive</span>
          </div>
        </Card>

        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Active Spiffs</div>
        {[["Silverado Bonus · 2 of 3", "$300"], ["Weekend push · Sat–Sun", "$150"]].map(([label, val]) => (
          <div key={label} onClick={() => nav("sp-spiffs")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
            <span style={{ fontSize: 13, color: COLORS.amber, fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>{val}</span>
          </div>
        ))}

        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Task</div>

        <div onClick={() => nav("sp-paysheet")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 500 }}>Paysheet needs sign-off · due Jun 30</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.red }}>Sign</span>
        </div>
      </div>
      <BottomNav tabs={spTabs} active="Home" onTab={onTab} />
    </Phone>
  );
};

const SPPaysheet = ({ nav }) => {
  const s = STORES[0];
  const [ackDone, setAckDone] = useState(false);
  const onTab = (label) => {
    if (label === "Home") nav("sp-home");
    if (label === "Paysheet") nav("sp-paysheet");
    if (label === "Goals") nav("sp-goals");
    if (label === "Spiffs") nav("sp-spiffs");
  };
  return (
    <Phone>
      <TopBar title="June Paysheet" subtitle="Preliminary · review by Jun 30" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {["Jun 2026", "May ✓", "Apr ✓"].map((p, i) => (
            <div key={p} style={{ padding: "7px 12px", borderRadius: 8, backgroundColor: i===0 ? COLORS.black : COLORS.surface, border: `1.5px solid ${COLORS.black}`, cursor:"pointer" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: i===0 ? COLORS.white : COLORS.textMid }}>{p}</span>
            </div>
          ))}
        </div>
        <Badge label="Preliminary" />
        <Card>
          {[
            ["Front gross commission", null, "+$3,400", COLORS.green],
            ["Units bonus (12 units)", null, "+$600", COLORS.green],
            ["Spiff - Silverado", null, "+$300", COLORS.green],
            ["Chargeback #4471", "Mar deal, cancelled", "-$90", COLORS.red],
          ].map(([label, sub, val, vc]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{label}</div>
                {sub && <div style={{ fontSize: 11, color: COLORS.textLight }}>{sub}</div>}
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: vc }}>{val}</span>
            </div>
          ))}
          <div style={{ borderTop: `1.5px solid ${COLORS.border}`, paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: COLORS.text }}>Total commission</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: COLORS.primary }}>$4,210</span>
          </div>
        </Card>
        
        
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Commissioned Deal</div>

        <Card>
          {[
            ["Deal #5490 - Silverado", "Front gross commission", "+$1,200"],
            ["Deal #5503 - Tahoe", "Front gross commission", "+$950"],
            ["Deal #5510 - F-150", "Front gross commission", "+$800"],
            ["Deal #5521 - Camry", "Front gross commission", "+$450"],
          ].map(([deal, sub, amount], i) => (
            <div
              key={deal}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingBottom: i === 3 ? 0 : 10,
                marginBottom: i === 3 ? 0 : 10,
                borderBottom: i === 3 ? "none" : `1px solid ${COLORS.border}`,
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>
                  {deal}
                </div>
                <div style={{ fontSize: 11, color: COLORS.textMid, marginTop: 3 }}>
                  {sub}
                </div>
              </div>

              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.green }}>
                {amount}
              </span>
            </div>
          ))}
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Held / Unfunded</div>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, color: COLORS.text }}>Deal #5501 - Bronco Sport</div>
              <div style={{ fontSize: 12, color: COLORS.textMid, marginTop: 3 }}>Missing stip - insurance pending</div>
            </div>
            <Badge label="Held" />
          </div>
        </Card>
        <div style={{ fontSize: 11, color: COLORS.textLight, lineHeight: 1.5 }}>Acknowledging confirms these deals and grosses are accounted for as of close. It is not a waiver of later chargebacks or corrections.</div>
        {ackDone
          ? <div style={{ backgroundColor: COLORS.greenLight, borderRadius: 12, padding: "15px", textAlign: "center" }}><span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15 }}>Acknowledged ✓</span></div>
          : <PrimaryBtn label="Acknowledge Paysheet" onClick={() => setAckDone(true)} />
        }
        <OutlineBtn label="Flag a Correction" onClick={() => nav("sp-correction")} />
      </div>
      <BottomNav tabs={spTabs} active="Paysheet" onTab={onTab} />
    </Phone>
  );
};

const SPGoals = ({ nav }) => {
  const s = STORES[0];
  const onTab = (label) => {
    if (label === "Home") nav("sp-home");
    if (label === "Paysheet") nav("sp-paysheet");
    if (label === "Goals") nav("sp-goals");
    if (label === "Spiffs") nav("sp-spiffs");
  };
  return (
    <Phone>
      <TopBar title="My Goals" subtitle="June 2026" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Units this month</div>
          <div style={{ fontSize: 30, fontWeight: 600, color: COLORS.primary, margin: "4px 0" }}>12 / 18</div>
          <Bar pct={67} color={COLORS.black} />
          <div style={{ marginTop: 12, backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 12px" }}>
            <span style={{ fontSize: 12, color: COLORS.amber, fontWeight: 600 }}>2 more units unlock +$800 retroactive</span>
          </div>
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Pay Tiers</div>
        {[
          { range: "1 – 7 units", rate: "$200 per car", note: "base", active: false },
          { range: "8 – 10 units", rate: "$300 per car", note: "+$800 retroactive", active: true },
          { range: "11+ units", rate: "$400 per car", note: "+$2,400 retroactive", active: false },
        ].map((t, i) => (
          <div key={i} style={{ backgroundColor: t.active ? COLORS.black : COLORS.surface, borderRadius: 12, border: `1.5px solid ${COLORS.black}`, padding: "12px 14px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: t.active ? COLORS.white : COLORS.text }}>{t.range}</div>
              <div style={{ fontSize: 12, color: t.active ? "#bbb" : COLORS.textMid, marginTop: 2 }}>{t.rate}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              {t.active && <div style={{ fontSize: 10, fontWeight: 700, color: "#FCD34D", marginBottom: 3 }}>YOU ARE HERE</div>}
              <div style={{ fontSize: 12, color: t.active ? "#86efac" : COLORS.green, fontWeight: 700 }}>{t.note}</div>
            </div>
          </div>
        ))}
      </div>
      <BottomNav tabs={spTabs} active="Goals" onTab={onTab} />
    </Phone>
  );
};

const SPSpiffs = ({ nav }) => {
  const s = STORES[0];
  const onTab = (label) => {
    if (label === "Home") nav("sp-home");
    if (label === "Paysheet") nav("sp-paysheet");
    if (label === "Goals") nav("sp-goals");
    if (label === "Spiffs") nav("sp-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Spiffs" subtitle="Store posted · June 2026" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Per-unit Spiffs</div>
        {[
          { name: "Silverado Bonus", val: "$300", desc: "Sell 3 Silverados this month", note: "2 of 3 sold", pct: 67 },
          { name: "Weekend push bonus", val: "$150", desc: "Any unit Sat – Sun Jun 21–22", note: "Not earned yet", pct: 0 },
        ].map((sp, i) => (
          <div key={i} style={{ backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>{sp.name}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: COLORS.amber }}>{sp.val}</span>
            </div>
            <div style={{ fontSize: 12, color: COLORS.text, marginTop: 3, opacity: 0.7 }}>{sp.desc}</div>
            <div style={{ marginTop: 6 }}><Bar pct={sp.pct} color={COLORS.amber} /></div>
            <div style={{ fontSize: 11, color: COLORS.text, marginTop: 5, opacity: 0.7 }}>{sp.note}</div>
          </div>
        ))}
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Store Volume</div>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 13, color: COLORS.textMid }}>150 units · 56 sold</span>
            <Badge label="No payout" color={COLORS.surface} textColor={COLORS.textMid} />
          </div>
          <Bar pct={52} color={COLORS.textLight} />
          <div style={{ fontSize: 11, color: COLORS.textLight, marginTop: 6 }}>informational only - no payout tied to this number</div>
        </Card>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Spiffs earned MTD</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.amber, margin: "4px 0" }}>$300</div>
        </Card>
      </div>
      <BottomNav tabs={spTabs} active="Spiffs" onTab={onTab} />
    </Phone>
  );
};

// ── SALES MANAGER ──────────────────────────────────────────────────────
const SMHome = ({ nav }) => {
  const s = STORES[1];
  const onTab = (label) => {
    if (label === "Home") nav("sm-home");
    if (label === "Team") nav("sm-team");
    if (label === "Paysheet") nav("sm-paysheet");
    if (label === "Spiffs") nav("sm-spiffs");
  };
  return (
    <Phone>
      <TopBar title="June · Manager" subtitle="Action queue first" store={s}
        rightEl={<div style={{ display:"flex", gap:12, alignItems:"center" }}><BellWithBadge count={5} onClick={() => nav("sm-notif")}/><div onClick={() => nav("sm-menu")} style={{cursor:"pointer"}}>{Ic.menu(22,COLORS.text)}</div></div>} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Needs Action</div>
        <div onClick={() => nav("sm-split")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 500 }}>Split dispute - Deal #5490 · Martinez vs Patel</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.red }}>Resolve</span>
        </div>
        <div onClick={() => nav("sm-team")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span style={{ fontSize: 13, color: COLORS.amber, fontWeight: 500 }}>1 unacknowledged sheet - Ryan</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>1 due</span>
        </div>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Team pace · June</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>42 / 60</div>
          <Bar pct={70} color={COLORS.black} />
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <div style={{ flex: 1, backgroundColor: COLORS.surface, borderRadius: 10, padding: 10 }}>
              <div style={{ fontSize: 11, color: COLORS.textMid }}>Front gross</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.text }}>$182k / $250k</div>
            </div>
          </div>
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Closest to Next Tire</div>
        {[{name:"J. Martinez",note:"1 unit to Tier 3",unlock:"+$500"},{name:"K. Thompson",note:"2 to Tier 2",unlock:"+$300"}].map((r,i) => (
          <div key={i} onClick={() => nav("sm-team")} style={{ cursor: "pointer" }}>
            <Row label={r.name} sub={r.note} value={r.unlock} valueColor={COLORS.green} />
          </div>
        ))}
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Aged Units with Spiffs</div>
        <Card>
          {[
            { vehicle: "2023 Nissan Rogue SV", age: "80 days", spiff: "$500 spiff", status: "No activity" },
            { vehicle: "2024 Nissan Altima SR", age: "72 days", spiff: "$300 spiff", status: "2 test drives this week" }
          ].map((u, i, arr) => (
            <div key={i} style={{ paddingBottom: i < arr.length - 1 ? 12 : 0, marginBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? `1px solid ${COLORS.border}` : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>{u.vehicle}</div>
                  <div style={{ fontSize: 11, color: COLORS.textMid, marginTop: 3 }}>{u.age} · {u.status}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: COLORS.green }}>{u.spiff}</div>
              </div>
            </div>
          ))}
        </Card>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>My override MTD</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>$2,800</div>
        </Card>
      </div>
      <BottomNav tabs={smTabs} active="Home" onTab={onTab} />
    </Phone>
  );
};

const SMTeam = ({ nav }) => {
  const s = STORES[1];
  const reps=[{init:"JM",name:"Jorge Martinez",units:9,gross:20200,tier:"1 unit to Tier 3 - +$500"},{init:"AP",name:"Adam Patel",units:8,gross:15000},{init:"KT",name:"Kyle Thompson",units:6,gross:13100,tier:"2 to Tier 2 - +$300"},{init:"RC",name:"Ryan Collins",units:4,gross:10500,flag:"Sheet unacknowledged"}];
  const onTab = (label) => {
    if (label === "Home") nav("sm-home");
    if (label === "Team") nav("sm-team");
    if (label === "Paysheet") nav("sm-paysheet");
    if (label === "Spiffs") nav("sm-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Team" subtitle="Team Performance" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        {reps.map((r,i) => (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: COLORS.black, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.white }}>{r.init}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{r.name}</div>
                <div style={{ fontSize: 11, color: COLORS.textMid }}>${r.gross.toLocaleString()} gross</div>
              </div>
              <Badge label={`${r.units} units`} color={r.units>=9?COLORS.greenLight:r.units>=6?COLORS.amberLight:COLORS.redLight} textColor={r.units>=9?COLORS.green:r.units>=6?COLORS.amber:COLORS.red} />
            </div>
            <Bar pct={(r.units/14)*100} color={COLORS.black} />
            {r.tier && <div style={{ fontSize: 11, color: COLORS.green, marginTop: 6 }}>{r.tier}</div>}
            {r.flag && <div style={{ fontSize: 11, color: COLORS.red, marginTop: 4 }}>{r.flag}</div>}
          </Card>
        ))}
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Held Deals</div>
        {[{d:"Deal #5502 - missing trade title",a:"J. Martinez"},{d:"Deal #5511 - insurance pending",a:"A. Patel"}].map((h,i) => (
          <Row key={i} label={h.d} sub={h.a} value="" />
        ))}
      </div>
      <BottomNav tabs={smTabs} active="Team" onTab={onTab} />
    </Phone>
  );
};

const SMPaysheet = ({ nav }) => {
  const s = STORES[1];
  const [ackDone, setAckDone] = useState(false);
  const onTab = (label) => {
    if (label === "Home") nav("sm-home");
    if (label === "Team") nav("sm-team");
    if (label === "Paysheet") nav("sm-paysheet");
    if (label === "Spiffs") nav("sm-spiffs");
  };
  return (
<Phone>
  <TopBar title="Paysheet" subtitle="Override pay - May 2026" store={s} />

  <div
    style={{
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: "60%",
    }}
  >
    <Card>
      <Row label="Override commission" value="+$2,800" valueColor={COLORS.green} />
      <Row label="Team gross bonus" value="+$1,100" valueColor={COLORS.green} />
      <Row label="Spiff" value="+$200" valueColor={COLORS.green} />

      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 4 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>Total</span>
        <span style={{ fontSize: 18, fontWeight: 800, color: COLORS.primary }}>
          $4,100
        </span>
      </div>
    </Card>

    <div style={{ marginTop: 100 }}>
      {ackDone ? (
        <div
          style={{
            backgroundColor: COLORS.greenLight,
            borderRadius: 12,
            padding: "15px",
            textAlign: "center",
          }}
        >
          <span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15 }}>
            Acknowledged ✓
          </span>
        </div>
      ) : (
        <PrimaryBtn
          label="Acknowledge My Paysheet"
          onClick={() => setAckDone(true)}
        />
      )}
    </div>
  </div>

  <BottomNav tabs={smTabs} active="Paysheet" onTab={onTab} />
</Phone>
);
};

const SplitAdj = ({ nav }) => {
  const s = STORES[1];
  const [applied, setApplied] = useState(false);
  const [martinez, setMartinez] = useState(360);
  const [reason, setReason] = useState("");

  const total = 600;
  const patel = total - martinez;
  const martinezPct = Math.round((martinez / total) * 100);
  const patelPct = 100 - martinezPct;

  return (
    <Phone>
      <TopBar
        title="Split Adjudication"
        subtitle="Deal #5490 - zero-sum"
        store={s}
        showBack
        onBack={() => nav("sm-home")}
      />

      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 600 }}>
            Deal #5490 - Martinez vs Patel · Total: $600
          </span>
        </div>

        <Card>
          <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 12 }}>
            Reallocation
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: COLORS.text }}>J. Martinez</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>
                ${martinez}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={total}
              step="10"
              value={martinez}
              onChange={(e) => setMartinez(Number(e.target.value))}
              disabled={applied}
              style={{ width: "100%", cursor: applied ? "not-allowed" : "pointer" }}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: COLORS.text }}>A. Patel</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>
                ${patel}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={total}
              step="10"
              value={patel}
              onChange={(e) => setMartinez(total - Number(e.target.value))}
              disabled={applied}
              style={{ width: "100%", cursor: applied ? "not-allowed" : "pointer" }}
            />
          </div>

          <div style={{ fontSize: 11, color: COLORS.textLight, textAlign: "center", marginTop: 10 }}>
            {martinezPct}% / {patelPct}% - adjust before applying
          </div>
        </Card>

        <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid }}>
          REASON - required for audit
        </div>

        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          disabled={applied}
          placeholder="Martinez sourced lead; Patel closed only..."
          style={{
            width: "100%",
            minHeight: 80,
            backgroundColor: COLORS.surface,
            borderRadius: 10,
            border: `1.5px solid ${COLORS.border}`,
            padding: "12px 14px",
            fontSize: 13,
            color: COLORS.text,
            resize: "none",
            boxSizing: "border-box",
            fontFamily: "inherit"
          }}
        />

        <div style={{ backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 14px" }}>
          <span style={{ fontSize: 12, color: COLORS.amber }}>
            This adjustment will void existing acknowledgements and require both salespeople to re-sign.
          </span>
        </div>

        {applied ? (
          <div style={{ backgroundColor: COLORS.greenLight, borderRadius: 12, padding: 14, textAlign: "center" }}>
            <span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15 }}>
              Applied — re-sign requests sent ✓
            </span>
          </div>
        ) : (
          <div
            onClick={() => setApplied(true)}
            style={{
              backgroundColor: COLORS.red,
              borderRadius: 12,
              padding: 14,
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            <span style={{ color: COLORS.white, fontWeight: 700, fontSize: 15 }}>
              Save & Apply
            </span>
          </div>
        )}

        <div style={{ fontSize: 12, color: COLORS.textLight, textAlign: "center" }}>
          Both reps will receive a re-sign request
        </div>
      </div>
    </Phone>
  );
};

const SMSpiffs = ({ nav }) => {
  const s = STORES[1];
  const onTab = (label) => {
    if (label === "Home") nav("sm-home");
    if (label === "Team") nav("sm-team");
    if (label === "Paysheet") nav("sm-paysheet");
    if (label === "Spiffs") nav("sm-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Spiffs" subtitle="Team-wide · June 2026" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 39 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Active Spiffs</div>
        {[{name:"Silverado Bonus",val:"$300",desc:"Team: 2 of 3 sold",pct:67},{name:"Weekend push bonus",val:"$150",desc:"Not earned yet",pct:0}].map((sp,i) => (
          <div key={i} style={{ backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>{sp.name}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: COLORS.amber }}>{sp.val}</span>
            </div>
            <div style={{ fontSize: 12, color: COLORS.text, marginTop: 3, opacity: 0.7 }}>{sp.desc}</div>
            <div style={{ marginTop: 6 }}><Bar pct={sp.pct} color={COLORS.amber} /></div>
          </div>
        ))}
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Store Volume</div>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 13, color: COLORS.textMid }}>150 units · 78 sold</span>
            <Badge label="No payout" color={COLORS.surface} textColor={COLORS.textMid} />
          </div>
          <Bar pct={52} color={COLORS.textLight} />
        </Card>
      </div>
      <BottomNav tabs={smTabs} active="Spiffs" onTab={onTab} />
    </Phone>
  );
};

// ── F&I MANAGER (exact same content, no nav wired — static for now) ────
const FIHome = ({ nav }) => {
  const s = STORES[2];
  const onTab = (label) => {
    if (label === "Home") nav("fi-home");
    if (label === "Paysheet") nav("fi-paysheet");
    if (label === "Spiffs") nav("fi-spiffs");
  };
  return (
    <Phone>
      <TopBar title="June · F&I" subtitle="PVR & compliance pace" store={s}
        rightEl={<div style={{ display:"flex", gap:12, alignItems:"center" }}><BellWithBadge count={4} onClick={() => nav("fi-notif")}/><div onClick={() => nav("fi-menu")} style={{cursor:"pointer"}}>{Ic.menu(22,COLORS.text)}</div></div>} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>PVR this month</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>$1,840</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>per vehicle retailed · goal $2,000</div>
          <Bar pct={92} color={COLORS.black} />
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <div style={{ flex: 1, backgroundColor: COLORS.surface, borderRadius: 10, padding: 10 }}>
              <div style={{ fontSize: 11, color: COLORS.textMid }}>Product penetration</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.text }}>68% / 75%</div>
            </div>
          </div>
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Needs Attention</div>
        <div onClick={() => nav("fi-paysheet")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span style={{ fontSize: 13, color: COLORS.amber, fontWeight: 500 }}>4 deliveries not finalized</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>Review</span>
        </div>
        <div onClick={() => nav("fi-paysheet")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 500 }}>2 compliance flags - missing disclosures</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.red }}>Fix</span>
        </div>
        <div onClick={() => nav("fi-paysheet")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 500 }}>Chargebacks landing this week - $1,200</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.red }}>View</span>
        </div>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Commission pace MTD</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>$6,420</div>
        </Card>
      </div>
      <BottomNav tabs={fiTabs} active="Home" onTab={onTab} />
    </Phone>
  );
};

const FIPaysheet = ({ nav }) => {
  const s = STORES[2];
  const [ackDone, setAckDone] = useState(false);
  const onTab = (label) => {
    if (label === "Home") nav("fi-home");
    if (label === "Paysheet") nav("fi-paysheet");
    if (label === "Spiffs") nav("fi-spiffs");
  };
  return (
    <Phone>
      <TopBar title="June Paysheet" subtitle="Preliminary · review by Jun 30" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {["Jun 2026", "May ✓", "Apr ✓"].map((p, i) => (
            <div key={p} style={{ padding: "7px 12px", borderRadius: 8, backgroundColor: i===0 ? COLORS.black : COLORS.surface, border: `1.5px solid ${COLORS.black}`, cursor:"pointer" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: i===0 ? COLORS.white : COLORS.textMid }}>{p}</span>
            </div>
          ))}
        </div>
        <Card>
          <Row label="Back-end gross" value="+$8,200" valueColor={COLORS.green} />
          <Row label="PVR bonus" value="+$600" valueColor={COLORS.green} />
          <Row label="Product split - GAP" value="+$340" valueColor={COLORS.green} />
          <Row label="Chargeback #4471" sub="Cancelled warranty, Mar deal" value="-$220" valueColor={COLORS.red} />
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>Total</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: COLORS.primary }}>$8,920</span>
          </div>
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Compliance Flags</div>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, color: COLORS.text }}>Deal #5512 - incomplete e-contract</div>
              <div style={{ fontSize: 12, color: COLORS.textMid, marginTop: 3 }}>Missing signature page 4</div>
            </div>
            <Badge label="Open" color={COLORS.redLight} textColor={COLORS.red} />
          </div>
        </Card>
        {ackDone
          ? <div style={{ backgroundColor: COLORS.greenLight, borderRadius: 12, padding: "15px", textAlign: "center" }}><span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15 }}>Acknowledged ✓</span></div>
          : <PrimaryBtn label="Acknowledge Paysheet" onClick={() => setAckDone(true)} />
        }
        <OutlineBtn label="Flag a Correction" onClick={() => nav("fi-notif")} />
      </div>
      <BottomNav tabs={fiTabs} active="Paysheet" onTab={onTab} />
    </Phone>
  );
};

const FISpiffs = ({ nav }) => {
  const s = STORES[2];
  const onTab = (label) => {
    if (label === "Home") nav("fi-home");
    if (label === "Paysheet") nav("fi-paysheet");
    if (label === "Spiffs") nav("fi-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Spiffs" subtitle="Store posted · June 2026" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Product Spiffs</div>
        {[
          { name: "GAP attach bonus", val: "$250", desc: "10+ GAP contracts this month", note: "7 of 10", pct: 70 },
          { name: "Menu completion streak", val: "$150", desc: "Full menu presented every deal", note: "On track", pct: 85 },
        ].map((sp, i) => (
          <div key={i} style={{ backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>{sp.name}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: COLORS.amber }}>{sp.val}</span>
            </div>
            <div style={{ fontSize: 12, color: COLORS.text, marginTop: 3, opacity: 0.7 }}>{sp.desc}</div>
            <div style={{ marginTop: 6 }}><Bar pct={sp.pct} color={COLORS.amber} /></div>
            <div style={{ fontSize: 11, color: COLORS.text, marginTop: 5, opacity: 0.7 }}>{sp.note}</div>
          </div>
        ))}
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Spiffs earned MTD</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.amber, margin: "4px 0" }}>$175</div>
        </Card>
      </div>
      <BottomNav tabs={fiTabs} active="Spiffs" onTab={onTab} />
    </Phone>
  );
};

// ── BDC MANAGER ────────────────────────────────────────────────────────
const BDCHome = ({ nav }) => {
  const s = STORES[0];
  const onTab = (label) => {
    if (label === "Home") nav("bdc-home");
    if (label === "Paysheet") nav("bdc-paysheet");
    if (label === "Spiffs") nav("bdc-spiffs");
  };
  return (
    <Phone>
      <TopBar title="June · BDC" subtitle="Funnel & show rate today" store={s}
        rightEl={<div style={{ display:"flex", gap:12, alignItems:"center" }}><BellWithBadge count={3} onClick={() => nav("bdc-notif")}/><div onClick={() => nav("bdc-menu")} style={{cursor:"pointer"}}>{Ic.menu(22,COLORS.text)}</div></div>} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid, marginBottom: 8 }}>Today's funnel</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {[{l:"Set",v:24},{l:"Confirmed",v:19},{l:"Shown",v:14},{l:"Sold",v:5}].map((f,i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.primary }}>{f.v}</div>
                <div style={{ fontSize: 10, color: COLORS.textMid, marginTop: 2 }}>{f.l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 12px" }}>
            <span style={{ fontSize: 12, color: COLORS.amber, fontWeight: 600 }}>Show rate 73% - the daily lever</span>
          </div>
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Today's Appointments</div>
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.greenLight, borderRadius: 10, padding: "10px 14px" }}>
          <span style={{ fontSize: 13, color: COLORS.green, fontWeight: 500 }}>19 confirmed</span>
        </div>
        <div onClick={() => nav("bdc-notif")} style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 500 }}>5 unconfirmed - need a call</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.red }}>Call list</span>
        </div>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Bonus pace MTD</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>$1,920</div>
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Goal Progress</div>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 13, color: COLORS.textMid }}>Sold appointments</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>62 / 90</span>
          </div>
          <Bar pct={69} color={COLORS.black} />
        </Card>
      </div>
      <BottomNav tabs={bdcTabs} active="Home" onTab={onTab} />
    </Phone>
  );
};

const BDCPaysheet = ({ nav }) => {
  const s = STORES[0];
  const [ackDone, setAckDone] = useState(false);
  const onTab = (label) => {
    if (label === "Home") nav("bdc-home");
    if (label === "Paysheet") nav("bdc-paysheet");
    if (label === "Spiffs") nav("bdc-spiffs");
  };
  return (
    <Phone>
      <TopBar title="June Paysheet" subtitle="Semi-variable · review by Jun 30" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {["Jun 2026", "May ✓", "Apr ✓"].map((p, i) => (
            <div key={p} style={{ padding: "7px 12px", borderRadius: 8, backgroundColor: i===0 ? COLORS.black : COLORS.surface, border: `1.5px solid ${COLORS.black}`, cursor:"pointer" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: i===0 ? COLORS.white : COLORS.textMid }}>{p}</span>
            </div>
          ))}
        </div>
        <Card>
          <Row label="Base salary" value="+$2,800" valueColor={COLORS.green} />
          <Row label="Shown appointment bonus" value="+$700" valueColor={COLORS.green} />
          <Row label="Sold appointment bonus" value="+$420" valueColor={COLORS.green} />
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>Total pay</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: COLORS.primary }}>$3,920</span>
          </div>
        </Card>
        {ackDone
          ? <div style={{ backgroundColor: COLORS.greenLight, borderRadius: 12, padding: "15px", textAlign: "center" }}><span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15 }}>Acknowledged ✓</span></div>
          : <PrimaryBtn label="Acknowledge Paysheet" onClick={() => setAckDone(true)} />
        }
        <OutlineBtn label="Flag a Correction" onClick={() => nav("bdc-notif")} />
      </div>
      <BottomNav tabs={bdcTabs} active="Paysheet" onTab={onTab} />
    </Phone>
  );
};

const BDCSpiffs = ({ nav }) => {
  const s = STORES[0];
  const onTab = (label) => {
    if (label === "Home") nav("bdc-home");
    if (label === "Paysheet") nav("bdc-paysheet");
    if (label === "Spiffs") nav("bdc-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Spiffs" subtitle="Store posted · June 2026" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Show-Rate Spiffs</div>
        {[{name:"80% show rate bonus", val:"$200", desc:"Hit 80% confirmed-to-shown this month", note:"73% - close", pct:91}].map((sp,i) => (
          <div key={i} style={{ backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>{sp.name}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: COLORS.amber }}>{sp.val}</span>
            </div>
            <div style={{ fontSize: 12, color: COLORS.text, marginTop: 3, opacity: 0.7 }}>{sp.desc}</div>
            <div style={{ marginTop: 6 }}><Bar pct={sp.pct} color={COLORS.amber} /></div>
            <div style={{ fontSize: 11, color: COLORS.text, marginTop: 5, opacity: 0.7 }}>{sp.note}</div>
          </div>
        ))}
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Rep Performance</div>
        {[{n:"D. Hayes",v:"94 set · 71 shown"},{n:"L. Brooks",v:"81 set · 58 shown"}].map((r,i) => (
          <Row key={i} label={r.n} value={r.v} />
        ))}
      </div>
      <BottomNav tabs={bdcTabs} active="Spiffs" onTab={onTab} />
    </Phone>
  );
};

// ── GM ─────────────────────────────────────────────────────────────────
const GMStore = ({ nav }) => {
  const s = STORES[1];
  const onTab = (label) => {
    if (label === "Store") nav("gm-store");
    if (label === "Exceptions") nav("gm-except");
    if (label === "Inventory") nav("gm-inv");
    if (label === "Spiffs") nav("gm-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Store Cockpit" subtitle="June 2026 · read-mostly" store={s}
        rightEl={<div style={{ display:"flex", gap:12, alignItems:"center" }}><BellWithBadge count={6} onClick={() => nav("gm-notif")}/><div onClick={() => nav("gm-menu")} style={{cursor:"pointer"}}>{Ic.menu(22,COLORS.text)}</div></div>} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Net to date vs objective</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>$410k</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>goal $520k by Jun 30</div>
          <Bar pct={79} color={COLORS.black} />
        </Card>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid, marginBottom: 8 }}>Department gross rollup</div>
          {[{n:"New",v:"$182k"},{n:"Used",v:"$96k"},{n:"F&I",v:"$74k"},{n:"Service",v:"$58k"}].map((d,i) => (
            <Row key={i} label={d.n} value={d.v} />
          ))}
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>OEM Objective Pace</div>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 13, color: COLORS.textMid }}>Units that trip stair-steps</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>142 / 160</span>
          </div>
          <Bar pct={89} color={COLORS.black} />
          <div style={{ marginTop: 10, backgroundColor: COLORS.amberLight, borderRadius: 8, padding: "8px 11px" }}>
            <span style={{ fontSize: 11, color: COLORS.amber, fontWeight: 600 }}>18 units from next OEM stair-step bonus</span>
          </div>
        </Card>
        <div style={{ backgroundColor: COLORS.redLight, borderRadius: 10, padding: "11px 14px" }}>
          <span style={{ fontSize: 12, color: COLORS.red, fontWeight: 600 }}>Deficit carryforward: -$12,500</span>
          <div style={{ fontSize: 11, color: COLORS.text, marginTop: 2, opacity: 0.7 }}>prior-period deficit nets before this month pays</div>
        </div>
      </div>
      <BottomNav tabs={gmTabs} active="Store" onTab={onTab} />
    </Phone>
  );
};

const GMExceptions = ({ nav }) => {
  const s = STORES[1];
  const onTab = (label) => {
    if (label === "Store") nav("gm-store");
    if (label === "Exceptions") nav("gm-except");
    if (label === "Inventory") nav("gm-inv");
    if (label === "Spiffs") nav("gm-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Exception Queue" subtitle="Needs GM attention" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Aging Splits</div>
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 500 }}>Deal #5490 - 6 days unresolved</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.red }}>View</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Unacknowledged Patterns</div>
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 14px" }}>
          <span style={{ fontSize: 13, color: COLORS.amber, fontWeight: 500 }}>R. Collins - 3 sheets in a row missed</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>Flag</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Large Chargebacks</div>
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.redLight, borderRadius: 10, padding: "10px 14px" }}>
          <span style={{ fontSize: 13, color: COLORS.red, fontWeight: 500 }}>F&I - Deal #4471 · -$2,200</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.red }}>Review</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Compliance Flags</div>
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: COLORS.amberLight, borderRadius: 10, padding: "10px 14px" }}>
          <span style={{ fontSize: 13, color: COLORS.amber, fontWeight: 500 }}>2 incomplete e-contracts this week</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.amber }}>Review</span>
        </div>
      </div>
      <BottomNav tabs={gmTabs} active="Exceptions" onTab={onTab} />
    </Phone>
  );
};

const GMInventory = ({ nav }) => {
  const s = STORES[1];
  const onTab = (label) => {
    if (label === "Store") nav("gm-store");
    if (label === "Exceptions") nav("gm-except");
    if (label === "Inventory") nav("gm-inv");
    if (label === "Spiffs") nav("gm-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Inventory" subtitle="Aged units & day supply" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>Day supply</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>52 days</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>target 45 days</div>
        </Card>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Aged Units With Spiffs Deployed</div>
        {[{n:"2024 Altima",d:47,spiff:"$500"},{n:"2023 Rogue",d:62,spiff:"$800"},{n:"2024 Sentra",d:38,spiff:"$300"}].map((u,i) => (
          <Card key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{u.n}</div>
                <div style={{ fontSize: 11, color: COLORS.textMid, marginTop: 2 }}>{u.d} days on lot</div>
              </div>
              <Badge label={u.spiff} />
            </div>
          </Card>
        ))}
      </div>
      <BottomNav tabs={gmTabs} active="Inventory" onTab={onTab} />
    </Phone>
  );
};

const GMSpiffs = ({ nav }) => {
  const s = STORES[1];
  const onTab = (label) => {
    if (label === "Store") nav("gm-store");
    if (label === "Exceptions") nav("gm-except");
    if (label === "Inventory") nav("gm-inv");
    if (label === "Spiffs") nav("gm-spiffs");
  };
  return (
    <Phone>
      <TopBar title="Spiffs - Authoring" subtitle="Post/load spiffs for this rooftop" store={s} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <PrimaryBtn label="+ Post a New Spiff" onClick={() => {}} />
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>Active Spiffs You Posted</div>
        {[{n:"Silverado Bonus",amt:"$300",type:"Achievement"},{n:"Weekend push bonus",amt:"$150",type:"Per-unit"},{n:"Aged Rogue clearance",amt:"$800",type:"Per-unit"}].map((sp,i) => (
          <Card key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{sp.n}</div>
                <div style={{ fontSize: 11, color: COLORS.textMid, marginTop: 2 }}>{sp.type}</div>
              </div>
              <Badge label={sp.amt} />
            </div>
          </Card>
        ))}
        <div style={{ fontSize: 11, color: COLORS.textLight, lineHeight: 1.5 }}>GM authority - no higher approval gate needed to post. Detection runs automatically against the deal feed.</div>
      </div>
      <BottomNav tabs={gmTabs} active="Spiffs" onTab={onTab} />
    </Phone>
  );
};

// ── RECEPTIONIST ────────────────────────────────────────────────────────
const LitePaysheet = ({ nav }) => {
  const s = STORES[0];
  const [ackDone, setAckDone] = useState(false);
  const onTab = (label) => {
    if (label === "Paysheet") nav("lite-pay");
    if (label === "History") nav("lite-hist");
  };
  return (
    <Phone>
      <TopBar title="June Paysheet" subtitle="Hours & pay · review by Jun 30" store={s} rightEl={<BellWithBadge count={1} onClick={() => nav("lite-notif")}/>} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <Badge label="Lite" color={COLORS.surface} textColor={COLORS.textMid} />
        <Card>
          <Row label="Hours worked" value="86.5" />
          <Row label="Hourly rate" value="$18.00" />
          <Row label="Discretionary bonus" value="+$75" valueColor={COLORS.green} />
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>Total</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: COLORS.primary }}>$1,632</span>
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: 13, color: COLORS.textMid }}>PTO balance</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.primary, margin: "4px 0" }}>32 hours</div>
        </Card>
        <div style={{ fontSize: 11, color: COLORS.textLight, textAlign: "center" }}>no goals or spiffs - pay + sign-off only</div>
        {ackDone
          ? <div style={{ backgroundColor: COLORS.greenLight, borderRadius: 12, padding: "15px", textAlign: "center" }}><span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15 }}>Acknowledged ✓</span></div>
          : <PrimaryBtn label="Acknowledge Paysheet" onClick={() => setAckDone(true)} />
        }
        <OutlineBtn label="Flag if Pay is Wrong" onClick={() => nav("lite-notif")} />
      </div>
      <BottomNav tabs={liteTabs} active="Paysheet" onTab={onTab} />
    </Phone>
  );
};

const LiteHistory = ({ nav }) => {
  const s = STORES[0];
  const items=[{t:"May 2026 total payout",d:"May 31, 2026",a:1580},{t:"Apr 2026 total payout",d:"Apr 30, 2026",a:1610}];
  const onTab = (label) => {
    if (label === "Paysheet") nav("lite-pay");
    if (label === "History") nav("lite-hist");
  };
  return (
    <Phone>
      <TopBar title="Pay History" store={s} showBack onBack={() => nav("lite-pay")} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((h,i) => (
          <Row key={i} label={h.t} sub={h.d} value={`+$${h.a.toLocaleString()}`} valueColor={COLORS.green} />
        ))}
      </div>
      <BottomNav tabs={liteTabs} active="History" onTab={onTab} />
    </Phone>
  );
};

// ── SHARED SCREENS ──────────────────────────────────────────────────────
const ROLE_META = {
  sp:   { store: STORES[0], name:"Jorge Martinez", initials:"JM", title:"Salesperson" },
  sm:   { store: STORES[1], name:"Sam Jose",       initials:"SJ", title:"Sales Manager" },
  fi:   { store: STORES[2], name:"David Ortiz",    initials:"DO", title:"F&I Manager" },
  bdc:  { store: STORES[0], name:"Lena Brooks",    initials:"LB", title:"BDC Manager" },
  gm:   { store: STORES[1], name:"Tom Reyes",      initials:"TR", title:"General Manager" },
  lite: { store: STORES[0], name:"Sandra Lee",     initials:"SL", title:"Receptionist" },
};

const NotifPage = ({ role = "sp", nav }) => {
  const m = ROLE_META[role];
  const backMap = { sp:"sp-home", sm:"sm-home", fi:"fi-home", bdc:"bdc-home", gm:"gm-store", lite:"lite-pay" };
  const lists = {
    sp:  [ { icon:Ic.pay(18,COLORS.red),    title:"Paysheet ready to sign",          sub:"May 2026 preliminary released",                       time:"8:14 AM", dot:true,  goTo:"sp-paysheet" },
           { icon:Ic.trophy(18,COLORS.amber),title:"Tier 2 within reach",            sub:"Sell 2 more units to unlock +$800",                   time:"7:00 AM", dot:true,  goTo:"sp-goals"    },
           { icon:Ic.dollar(18,COLORS.green),title:"Paysheet updated",               sub:"A correction was applied - please re-review and sign", time:"8:02 AM", dot:false, goTo:"sp-paysheet" } ],
    sm:  [ { icon:Ic.alert(18,COLORS.red),  title:"Split dispute flagged",           sub:"Deal #5490 - Martinez vs Patel",                      time:"8:30 AM", dot:true,  goTo:"sm-split"    },
           { icon:Ic.pay(18,COLORS.amber),  title:"1 sheet unacknowledged",          sub:"Ryan Collins",                                        time:"7:00 AM", dot:true,  goTo:"sm-team"     },
           { icon:Ic.users(18,COLORS.green),title:"Team milestone",                  sub:"Martinez hit Tier 2 - +$500",                         time:"Jun 18",  dot:false, goTo:"sm-team"     } ],
    fi:  [ { icon:Ic.alert(18,COLORS.red),  title:"Compliance flag",                sub:"Deal #5512 missing signature page",                   time:"9:02 AM", dot:true,  goTo:"fi-paysheet" },
           { icon:Ic.dollar(18,COLORS.amber),title:"Chargeback landing",            sub:"-$220 - Deal #4471",                                  time:"7:40 AM", dot:true,  goTo:"fi-paysheet" },
           { icon:Ic.box(18,COLORS.green),  title:"PVR goal nearly hit",            sub:"$1,840 / $2,000 this month",                          time:"Jun 18",  dot:false, goTo:"fi-home"     } ],
    bdc: [ { icon:Ic.phone(18,COLORS.red),  title:"5 unconfirmed appointments today",sub:"Call list ready",                                    time:"8:00 AM", dot:true,  goTo:"bdc-home"    },
           { icon:Ic.trophy(18,COLORS.amber),title:"Show rate spiff close",         sub:"73% - need 80%",                                      time:"7:15 AM", dot:true,  goTo:"bdc-spiffs"  },
           { icon:Ic.users(18,COLORS.green),title:"Rep milestone",                  sub:"D. Hayes hit 70 shown",                               time:"Jun 18",  dot:false, goTo:"bdc-home"    } ],
    gm:  [ { icon:Ic.alert(18,COLORS.red),  title:"Aging split - 6 days",          sub:"Deal #5490 unresolved",                               time:"6:50 AM", dot:true,  goTo:"gm-except"   },
           { icon:Ic.box(18,COLORS.amber),  title:"Day supply rising",              sub:"52 days, target 45",                                  time:"Jun 18",  dot:true,  goTo:"gm-inv"      },
           { icon:Ic.dollar(18,COLORS.green),title:"OEM stair-step close",         sub:"18 units from next bonus tier",                        time:"Jun 17",  dot:false, goTo:"gm-store"    } ],
    lite:[ { icon:Ic.pay(18,COLORS.red),    title:"Paysheet ready to sign",         sub:"May 2026 - review by Jun 30",                         time:"8:00 AM", dot:true,  goTo:"lite-pay"    },
           { icon:Ic.check(18,COLORS.green),title:"Paysheet acknowledged",          sub:"April 2026 confirmed",                                time:"May 2",   dot:false, goTo:"lite-hist"   } ],
  };
  const list = lists[role] || lists.sp;
  return (
    <Phone>
      <TopBar title="Notifications" store={m.store} showBack onBack={() => nav(backMap[role])}
        rightEl={<span onClick={() => {}} style={{ fontSize:12, color:COLORS.black, fontWeight:600, cursor:"pointer" }}>Mark all read</span>} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {list.map((n, i) => (
          <div key={i} onClick={() => nav(n.goTo)} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 14px", backgroundColor: n.dot ? COLORS.surface : COLORS.bg, borderRadius: 12, border: `1px solid ${COLORS.border}`, cursor: "pointer" }}>
            <div style={{ width: 38, height: 38, backgroundColor: COLORS.surface, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{n.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{n.title}</span>
                {n.dot && <div style={{ width: 8, height: 8, backgroundColor: COLORS.black, borderRadius: 4, marginTop: 4 }} />}
              </div>
              <div style={{ fontSize: 12, color: COLORS.textMid, marginTop: 2 }}>{n.sub}</div>
              <div style={{ fontSize: 11, color: COLORS.textLight, marginTop: 4 }}>{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </Phone>
  );
};

const HistPage = ({ role = "sp", nav }) => {
  const m = ROLE_META[role];
  const backMap = { sp:"sp-home", sm:"sm-home", fi:"fi-home", bdc:"bdc-home", gm:"gm-store", lite:"lite-pay" };
  const historyByRole = {
    sp:   [{ t:"May 2026 total payout",    d:"May 31, 2026", a:5840 },{ t:"Deal #5390 commission",    d:"May 22, 2026", a:410  },{ t:"Chargeback #4390",         d:"May 10, 2026", a:-120 }],
    sm:   [{ t:"May 2026 override payout", d:"May 31, 2026", a:4100 },{ t:"Team gross bonus",         d:"May 25, 2026", a:1100 },{ t:"Manager spiff",            d:"May 18, 2026", a:200  }],
    fi:   [{ t:"May 2026 F&I payout",      d:"May 31, 2026", a:8920 },{ t:"PVR bonus",                d:"May 24, 2026", a:600  },{ t:"Warranty chargeback",      d:"May 10, 2026", a:-220 }],
    bdc:  [{ t:"May 2026 BDC payout",      d:"May 31, 2026", a:2450 },{ t:"Shown appointment bonus", d:"May 20, 2026", a:300  }],
    gm:   [{ t:"May 2026 GM summary",      d:"May 31, 2026", a:0    },{ t:"Store net objective reviewed", d:"May 28, 2026", a:0 }],
    lite: [{ t:"May 2026 total pay",        d:"May 31, 2026", a:1580 },{ t:"Hourly pay",              d:"May 31, 2026", a:1400 },{ t:"Discretionary bonus",      d:"May 20, 2026", a:180  }],
  };
  const items = historyByRole[role] || historyByRole.sp;
  return (
    <Phone>
      <TopBar title="Pay History" store={m.store} showBack onBack={() => nav(backMap[role])} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.textMid }}>May 2026 - Paid</div>
        {items.map((h,i) => (
          <React.Fragment key={i}>
            {i === 1 && (
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginTop: 4, marginBottom: -6 }}>Activity</div>
            )}
            <Row label={h.t} sub={h.d}
              value={h.a < 0 ? `-$${Math.abs(h.a)}` : `+$${h.a.toLocaleString()}`}
              valueColor={h.a < 0 ? COLORS.red : COLORS.green} />
          </React.Fragment>
        ))}
      </div>
    </Phone>
  );
};

const SideMenuPage = ({ role = "sp", nav }) => {
  const m = ROLE_META[role];
  const homeMap = { sp:"sp-home", sm:"sm-home", fi:"fi-home", bdc:"bdc-home", gm:"gm-store", lite:"lite-pay" };
  const navByRole = {
    sp:   [{label:"Home",icon:Ic.home,goTo:"sp-home"},{label:"Paysheet",icon:Ic.pay,goTo:"sp-paysheet"},{label:"Goals",icon:Ic.goal,goTo:"sp-goals"},{label:"Spiffs",icon:Ic.star,goTo:"sp-spiffs"}],
    sm:   [{label:"Home",icon:Ic.home,goTo:"sm-home"},{label:"Team",icon:Ic.users,goTo:"sm-team"},{label:"Paysheet",icon:Ic.pay,goTo:"sm-paysheet"},{label:"Spiffs",icon:Ic.star,goTo:"sm-spiffs"},{label:"Split Adjudication",icon:Ic.alert,goTo:"sm-split"}],
    fi:   [{label:"Home",icon:Ic.home,goTo:"fi-home"},{label:"Paysheet",icon:Ic.pay,goTo:"fi-paysheet"},{label:"Spiffs",icon:Ic.star,goTo:"fi-spiffs"}],
    bdc:  [{label:"Home",icon:Ic.home,goTo:"bdc-home"},{label:"Paysheet",icon:Ic.pay,goTo:"bdc-paysheet"},{label:"Spiffs",icon:Ic.star,goTo:"bdc-spiffs"}],
    gm:   [{label:"Store",icon:Ic.box,goTo:"gm-store"},{label:"Exceptions",icon:Ic.alert,goTo:"gm-except"},{label:"Inventory",icon:Ic.list,goTo:"gm-inv"},{label:"Spiffs",icon:Ic.star,goTo:"gm-spiffs"}],
    lite: [{label:"Paysheet",icon:Ic.pay,goTo:"lite-pay"},{label:"History",icon:Ic.clock,goTo:"lite-hist"}],
  };
  const notifMap = { sp:"sp-notif", sm:"sm-notif", fi:"fi-notif", bdc:"bdc-notif", gm:"gm-notif", lite:"lite-notif" };
  const histMap  = { sp:"sp-hist",  sm:"sm-hist",  fi:"fi-hist",  bdc:"bdc-hist",  gm:"gm-hist",  lite:"lite-hist"  };
  const allNav = [...navByRole[role],
    {label:"Calendar",    icon:Ic.cal,  goTo:null},
    {label:"Notifications",icon:Ic.bell,goTo:notifMap[role], badge:3},
    {label:"History",     icon:Ic.clock,goTo:histMap[role]},
  ];
  const more = [{label:"Profile",icon:Ic.user,goTo:null},{label:"Settings",icon:Ic.cog,goTo:null},{label:"Help",icon:Ic.help,goTo:null},{label:"About",icon:Ic.info,goTo:null}];
  return (
    <Phone>
      <div style={{ backgroundColor: COLORS.black, padding: "22px 18px 18px" }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 800, color: COLORS.white }}>{m.initials}</span>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.white }}>{m.name}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{m.title}</div>
        <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 4, padding: "2px 8px", marginTop: 8 }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: COLORS.white, letterSpacing: 0.5 }}>{m.store.name.toUpperCase()}</span>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {allNav.map((n,i) => (
          <div key={i} onClick={() => n.goTo && nav(n.goTo)} style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 18px", borderBottom: `1px solid ${COLORS.border}`, cursor: n.goTo ? "pointer" : "default" }}>
            {n.icon(18, COLORS.textMid)}
            <span style={{ flex: 1, fontSize: 14, color: COLORS.text }}>{n.label}</span>
            {n.badge && <Badge label={String(n.badge)} color={COLORS.redLight} textColor={COLORS.red} />}
          </div>
        ))}
        <div style={{ height: 1, backgroundColor: COLORS.black, margin: "6px 0" }} />
        {more.map((n,i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 18px", borderBottom: `1px solid ${COLORS.border}`, cursor: "pointer" }}>
            {n.icon(18, COLORS.textLight)}
            <span style={{ flex: 1, fontSize: 14, color: COLORS.textMid }}>{n.label}</span>
            {Ic.chevR(15, COLORS.textLight)}
          </div>
        ))}
        <div style={{ height: 1, backgroundColor: COLORS.black, margin: "6px 0" }} />
        <div onClick={() => nav("login")} style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 18px", cursor: "pointer" }}>
          {Ic.logout(18, COLORS.red)}
          <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.red }}>Log out</span>
        </div>
      </div>
    </Phone>
  );
};
const SPCorrectionPage = ({ nav }) => {
  const s = STORES[0];
  const [submitted, setSubmitted] = useState(false);

  return (
    <Phone>
      <TopBar
        title="Flag a Correction"
        subtitle="Paysheet issue"
        store={s}
        showBack
        onBack={() => nav("sp-home")}
      />

      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        {!submitted ? (
          <>
            <Card>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 8 }}>
                Reason for correction
              </div>

              <textarea
                placeholder="Explain what needs to be corrected..."
                style={{
                  width: "100%",
                  minHeight: 120,
                  border: `1.5px solid ${COLORS.border}`,
                  borderRadius: 10,
                  padding: 12,
                  fontSize: 13,
                  resize: "none",
                  boxSizing: "border-box",
                  fontFamily: "inherit"
                }}
              />
            </Card>

            <PrimaryBtn
              label="Submit Correction"
              onClick={() => setSubmitted(true)}
            />
          </>
        ) : (
          <Card>
            <div style={{ color: COLORS.green, fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              Submitted ✓
            </div>

            <div style={{ fontSize: 14, color: COLORS.textMid, lineHeight: 1.5 }}>
              Your manager will review this request and notify you when a decision is made.
            </div>
          </Card>
        )}
      </div>
    </Phone>
  );
};
const SettingsPage = ({ role = "sp", nav }) => {
  const m = ROLE_META[role];
  const backMap = { sp:"sp-home", sm:"sm-home", fi:"fi-home", bdc:"bdc-home", gm:"gm-store", lite:"lite-pay" };
  return (
    <Phone>
      <TopBar title="Settings" store={m.store} showBack onBack={() => nav(backMap[role])} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <Card style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: COLORS.black, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: COLORS.white }}>{m.initials}</span>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>{m.name}</div>
            <div style={{ fontSize: 12, color: COLORS.textMid, marginTop: 2 }}>{m.title} · {m.store.name}</div>
          </div>
        </Card>
        <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid }}>APPEARANCE</div>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, marginBottom: 12, borderBottom: `1px solid ${COLORS.border}` }}>
            <span style={{ fontSize: 13, color: COLORS.text }}>Theme</span>
            <div style={{ display: "flex", gap: 6 }}>
              {["Light","Dark"].map((th,i) => (
                <div key={th} style={{ padding: "5px 12px", borderRadius: 20, backgroundColor: i===0 ? COLORS.black : COLORS.surface, cursor:"pointer" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: i===0 ? COLORS.white : COLORS.textMid }}>{th}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: COLORS.text }}>Notifications</span>
            <Badge label="On" color={COLORS.greenLight} textColor={COLORS.green} />
          </div>
        </Card>
        <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid }}>ACCOUNT</div>
        <Card>
          {[ {icon:Ic.lock, label:"Login info"}, {icon:Ic.user, label:"Profile"}, {icon:Ic.clock, label:"History"} ].map((r,i,arr) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i<arr.length-1 ? `1px solid ${COLORS.border}` : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>{r.icon(16,COLORS.textMid)}<span style={{ fontSize: 13, color: COLORS.text }}>{r.label}</span></div>
              {Ic.chevR(14, COLORS.textLight)}
            </div>
          ))}
        </Card>
        <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid }}>SUPPORT</div>
        <Card>
          {[{icon:Ic.help,l:"Help"},{icon:Ic.info,l:"About"},{icon:Ic.mail,l:"Contact us"}].map((r,i,arr) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i<arr.length-1 ? `1px solid ${COLORS.border}` : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>{r.icon(16,COLORS.textMid)}<span style={{ fontSize: 13, color: COLORS.text }}>{r.l}</span></div>
              {Ic.chevR(14, COLORS.textLight)}
            </div>
          ))}
        </Card>
        <div onClick={() => nav("login")} style={{ backgroundColor: COLORS.black, borderRadius: 12, padding: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, cursor:"pointer" }}>
          {Ic.logout(16, COLORS.white)}
          <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.white }}>Log out</span>
        </div>
      </div>
    </Phone>
  );
};

// ── APP ─────────────────────────────────────────────────────────────────
const SCREENS = {
  login:       (nav) => <LoginPage nav={nav} />,
  "sp-home":   (nav) => <SPHome    nav={nav} />,
  "sp-paysheet":(nav)=> <SPPaysheet nav={nav} />,
  "sp-correction": (nav) => <SPCorrectionPage nav={nav} />,
  "sp-goals":  (nav) => <SPGoals   nav={nav} />,
  "sp-spiffs": (nav) => <SPSpiffs  nav={nav} />,
  "sp-notif":  (nav) => <NotifPage  role="sp" nav={nav} />,
  "sp-hist":   (nav) => <HistPage   role="sp" nav={nav} />,
  "sp-menu":   (nav) => <SideMenuPage role="sp" nav={nav} />,
  "sp-settings":(nav)=> <SettingsPage role="sp" nav={nav} />,
  "sm-home":   (nav) => <SMHome    nav={nav} />,
  "sm-team":   (nav) => <SMTeam    nav={nav} />,
  "sm-paysheet":(nav)=> <SMPaysheet nav={nav} />,
  "sm-split":  (nav) => <SplitAdj  nav={nav} />,
  "sm-spiffs": (nav) => <SMSpiffs  nav={nav} />,
  "sm-notif":  (nav) => <NotifPage  role="sm" nav={nav} />,
  "sm-hist":   (nav) => <HistPage   role="sm" nav={nav} />,
  "sm-menu":   (nav) => <SideMenuPage role="sm" nav={nav} />,
  "sm-settings":(nav)=> <SettingsPage role="sm" nav={nav} />,
  "fi-home":   (nav) => <FIHome    nav={nav} />,
  "fi-paysheet":(nav)=> <FIPaysheet nav={nav} />,
  "fi-spiffs": (nav) => <FISpiffs  nav={nav} />,
  "fi-notif":  (nav) => <NotifPage  role="fi" nav={nav} />,
  "fi-hist":   (nav) => <HistPage   role="fi" nav={nav} />,
  "fi-menu":   (nav) => <SideMenuPage role="fi" nav={nav} />,
  "fi-settings":(nav)=> <SettingsPage role="fi" nav={nav} />,
  "bdc-home":  (nav) => <BDCHome   nav={nav} />,
  "bdc-paysheet":(nav)=><BDCPaysheet nav={nav} />,
  "bdc-spiffs":(nav) => <BDCSpiffs nav={nav} />,
  "bdc-notif": (nav) => <NotifPage  role="bdc" nav={nav} />,
  "bdc-hist":  (nav) => <HistPage   role="bdc" nav={nav} />,
  "bdc-menu":  (nav) => <SideMenuPage role="bdc" nav={nav} />,
  "bdc-settings":(nav)=><SettingsPage role="bdc" nav={nav} />,
  "gm-store":  (nav) => <GMStore   nav={nav} />,
  "gm-except": (nav) => <GMExceptions nav={nav} />,
  "gm-inv":    (nav) => <GMInventory nav={nav} />,
  "gm-spiffs": (nav) => <GMSpiffs  nav={nav} />,
  "gm-notif":  (nav) => <NotifPage  role="gm" nav={nav} />,
  "gm-hist":   (nav) => <HistPage   role="gm" nav={nav} />,
  "gm-menu":   (nav) => <SideMenuPage role="gm" nav={nav} />,
  "gm-settings":(nav)=> <SettingsPage role="gm" nav={nav} />,
  "lite-pay":  (nav) => <LitePaysheet nav={nav} />,
  "lite-hist": (nav) => <LiteHistory nav={nav} />,
  "lite-notif":(nav) => <NotifPage   role="lite" nav={nav} />,
  "lite-menu": (nav) => <SideMenuPage role="lite" nav={nav} />,
  "lite-settings":(nav)=><SettingsPage role="lite" nav={nav} />,
};

export default function App() {
  const [screen, setScreen] = useState("login");
  const nav = (id) => { setScreen(id); window.scrollTo(0, 0); };
  const render = SCREENS[screen] || SCREENS["login"];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F1F5F9", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ backgroundColor: COLORS.black, padding: "16px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, backgroundColor: COLORS.white, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
          <img src={CAR_LOGO_DATA_URI} alt="Logo" style={{ width: "80%", height: "auto" }} />
        </div>
        <div>
          <div style={{ color: COLORS.white, fontWeight: 700, fontSize: 16 }}>Commissions App - ZT Automotive</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>All 6 roles · clickable demo</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "40px 24px" }}>
        {render(nav)}
      </div>
    </div>
  );
}
