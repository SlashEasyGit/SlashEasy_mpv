"use client";

import { motion } from "framer-motion";

// ─── Brand color: #5547F0 = rgb(85, 71, 240) ──────────────
const AC = "85, 71, 240"; // accent color RGB for rgba()

// ─── Icons (12×12) ─────────────────────────────────────────
function CardIcon({ type }: { type: string }) {
  const p = { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "search":   return <svg {...p}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>;
    case "database": return <svg {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
    case "code":     return <svg {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    case "palette":  return <svg {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
    case "wrench":   return <svg {...p}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>;
    case "test":     return <svg {...p}><path d="M14 2v6h6"/><path d="M4 15l4 4 8-8"/><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/></svg>;
    case "rocket":   return <svg {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/></svg>;
    default: return null;
  }
}

// ─── Progress ring ─────────────────────────────────────────
function ProgressRing({ value, size = 34, sw = 2.5 }: { value: number; size?: number; sw?: number }) {
  const r = (size - sw) / 2, c = 2 * Math.PI * r, off = c * (1 - value / 100);
  return (
    <svg width={size} height={size} className="flex-shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`rgba(${AC},0.1)`} strokeWidth={sw} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`rgba(${AC},0.75)`} strokeWidth={sw}
        strokeDasharray={`${c}`} strokeDashoffset={off} strokeLinecap="round" transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x={size / 2} y={size / 2 + 3} textAnchor="middle" fill={`rgba(${AC},0.9)`} fontSize="9" fontWeight="700">
        {value}<tspan fontSize="6">%</tspan>
      </text>
    </svg>
  );
}

// ─── Sparkline ─────────────────────────────────────────────
function Sparkline({ points }: { points: number[] }) {
  const h = 18, w = 52, max = Math.max(...points), min = Math.min(...points), range = max - min || 1;
  const pts = points.map((v, i) => `${(i / (points.length - 1)) * w},${h - 2 - ((v - min) / range) * (h - 4)}`).join(" ");
  const last = points[points.length - 1], ly = h - 2 - ((last - min) / range) * (h - 4);
  return (
    <svg width={w} height={h} className="flex-shrink-0">
      <polyline points={pts} fill="none" stroke={`rgba(${AC},0.45)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={w} cy={ly} r="2" fill={`rgba(${AC},0.7)`} />
    </svg>
  );
}

// ─── Card analytics ────────────────────────────────────────
function CardViz({ day }: { day: string; done: boolean }) {
  const at = "text-[#5547F0]";
  const st = "text-white/40";
  const badge = "bg-[rgba(85,71,240,0.1)] text-[rgba(85,71,240,0.7)]";

  switch (day) {
    case "1": return (
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className={`text-[16px] font-bold leading-none ${at}`}>12</span>
          <span className={`text-[9px] ${st}`}>features</span>
        </div>
        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${badge}`}>Scoped</span>
      </div>
    );
    case "2": return (
      <div className="flex items-center gap-1.5">
        <span className={`text-[9px] font-medium ${st}`}>3 models</span>
        <div className="flex gap-0.5">
          {["Schema", "Auth", "Seed"].map(s => (
            <span key={s} className="text-[7px] font-bold px-1 py-0.5 rounded bg-[rgba(85,71,240,0.08)] text-[rgba(85,71,240,0.55)]">{s}</span>
          ))}
        </div>
      </div>
    );
    case "3": return (
      <div className="flex items-center justify-between gap-2">
        <Sparkline points={[2, 5, 8, 14, 22, 30, 47]} />
        <ProgressRing value={47} />
      </div>
    );
    case "4": return (
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className={`text-[16px] font-bold leading-none ${at}`}>8</span>
          <span className={`text-[9px] ${st}`}>screens</span>
        </div>
        <div className="flex gap-0.5">
          {["#5547F0", "#8B5CF6", "#14B8A6", "#F59E0B"].map(c => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.65 }} />
          ))}
        </div>
      </div>
    );
    case "5": return (
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <div className="flex justify-between text-[8px] mb-0.5">
            <span className={st}>Progress</span>
            <span className={`font-bold ${at}`}>5/7</span>
          </div>
          <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "71%", background: `rgba(${AC},0.55)` }} />
          </div>
        </div>
        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${badge}`}>Active</span>
      </div>
    );
    case "6": return (
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-[14px] font-bold leading-none text-white/55">24</span>
            <span className={`text-[9px] ${st}`}>tests</span>
          </div>
          <span className={`text-[8px] ${st}`}>passed</span>
        </div>
        <ProgressRing value={84} size={36} />
      </div>
    );
    case "7": return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: `rgba(${AC},0.6)` }} />
          <span className="text-[9px] font-medium text-white/45">Ready to deploy</span>
        </div>
        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${badge}`}>Go live</span>
      </div>
    );
    default: return null;
  }
}

// ─── Data ──────────────────────────────────────────────────
const DAYS = [
  { day: "1", task: "Discovery & scope lock",   done: true,  icon: "search" },
  { day: "2", task: "Auth + database setup",    done: true,  icon: "database" },
  { day: "3", task: "Core feature build",       done: true,  icon: "code" },
  { day: "4", task: "UI polish + integrations", done: true,  icon: "palette" },
  { day: "5", task: "Feature completion",       done: false, icon: "wrench" },
  { day: "6", task: "Testing & feedback",       done: false, icon: "test" },
  { day: "7", task: "Ship day",                 done: false, icon: "rocket" },
];

// ─── Layout (compact — fits viewport) ──────────────────────
const W = 920, H = 500; // scene container
const CARD_W = 190;     // card width px
const CARD_H = 100;     // approx card height px
const CW = (CARD_W / W) * 100;
const CHH = (CARD_H / H) * 100 / 2;

const CCX = 50, CCY = 46;
const CORE_R = 75; // circle visual radius px
const RX = (CORE_R / W) * 100;
const RY = (CORE_R / H) * 100;

type CP = { top: string; left?: string; right?: string; rot: number; dur: number; del: number; cx: boolean; lx: number; ly: number };

const CARDS: CP[] = [
  { top: "4%",  left: "4%",  rot: -2, dur: 5.2, del: 0.0, cx: false, lx: 4 + CW,       ly: 4 + CHH },
  { top: "36%", left: "2%",  rot: -4, dur: 5.6, del: 0.5, cx: false, lx: 2 + CW,       ly: 36 + CHH },
  { top: "66%", left: "4%",  rot: -2, dur: 5.0, del: 1.0, cx: false, lx: 4 + CW,       ly: 66 + CHH },
  { top: "82%", left: "50%", rot: 0,  dur: 5.4, del: 1.4, cx: true,  lx: 50,            ly: 82 },
  { top: "4%",  right: "4%", rot: 2,  dur: 5.3, del: 0.2, cx: false, lx: 100 - 4 - CW, ly: 4 + CHH },
  { top: "36%", right: "2%", rot: 4,  dur: 4.9, del: 0.7, cx: false, lx: 100 - 2 - CW, ly: 36 + CHH },
  { top: "66%", right: "4%", rot: 2,  dur: 5.1, del: 1.1, cx: false, lx: 100 - 4 - CW, ly: 66 + CHH },
];

function circleEdge(lx: number, ly: number) {
  const dx = lx - CCX, dy = ly - CCY;
  if (dx === 0 && dy === 0) return { x: CCX, y: CCY };
  const t = 1 / Math.sqrt((dx / RX) ** 2 + (dy / RY) ** 2);
  return { x: CCX + dx * t, y: CCY + dy * t };
}

// ─── Component ─────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background ──────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0918] via-[#120e2a] to-[#080614]" />

      {/* ── Ambient glows (brand purple, subtle) ────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-[140px]" style={{ background: `rgba(${AC},0.08)` }} />
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full blur-[130px]" style={{ background: "rgba(139,92,246,0.06)" }} />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: `rgba(${AC},0.06)` }} />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: `rgba(${AC},0.06)` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] w-[280px] h-[280px] rounded-full blur-[60px]" style={{ background: `rgba(${AC},0.05)` }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
      </div>

      {/* ── Keyframes ───────────────────────────────── */}
      <style>{`
        @keyframes hero-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes hero-ring-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hero-glow-pulse { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.03); } }
      `}</style>

      {/* ── Main ────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 py-20 md:py-24">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-6 md:mb-8">
          <h1 className="text-[28px] md:text-[38px] lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
            Turn your idea into an{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, #5547F0, #8B5CF6, #A78BFA)` }}>
              MVP in 7 days
            </span>
          </h1>
        </motion.div>

        {/* ── Desktop scene ─────────────────────────── */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }} className="hidden md:block">
          <div className="relative mx-auto" style={{ maxWidth: `${W}px`, height: `${H}px` }}>

            {/* Connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
              <defs>
                <filter id="lg"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              {CARDS.map((cp, i) => {
                const e = circleEdge(cp.lx, cp.ly);
                return (
                  <g key={i} filter="url(#lg)">
                    <line x1={`${e.x}%`} y1={`${e.y}%`} x2={`${cp.lx}%`} y2={`${cp.ly}%`} stroke={`rgba(${AC},0.12)`} strokeWidth="1" />
                    <circle cx={`${cp.lx}%`} cy={`${cp.ly}%`} r="3" fill={`rgba(${AC},0.05)`} stroke={`rgba(${AC},0.25)`} strokeWidth="0.8" />
                    <circle cx={`${cp.lx}%`} cy={`${cp.ly}%`} r="1.2" fill={`rgba(${AC},0.5)`} />
                    <circle cx={`${e.x}%`} cy={`${e.y}%`} r="2" fill={`rgba(${AC},0.06)`} stroke={`rgba(${AC},0.2)`} strokeWidth="0.6" />
                    <circle cx={`${e.x}%`} cy={`${e.y}%`} r="0.8" fill={`rgba(${AC},0.4)`} />
                  </g>
                );
              })}
            </svg>

            {/* AI Core Circle */}
            <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full blur-[80px]" style={{ background: `rgba(${AC},0.08)`, animation: "hero-glow-pulse 5s ease-in-out infinite" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[40px]" style={{ background: `rgba(${AC},0.06)` }} />

              {/* Orbit ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full" style={{ border: `1px solid rgba(${AC},0.12)`, animation: "hero-ring-spin 25s linear infinite" }}>
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `rgba(${AC},0.5)`, boxShadow: `0 0 6px rgba(${AC},0.35)` }} />
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ backgroundColor: `rgba(${AC},0.3)` }} />
              </div>

              {/* Counter orbit */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[128px] h-[128px] rounded-full border border-dashed" style={{ borderColor: `rgba(${AC},0.06)`, animation: "hero-ring-spin 35s linear infinite reverse" }} />

              {/* Glass circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108px] h-[108px] rounded-full backdrop-blur-xl" style={{
                border: `2px solid rgba(${AC},0.25)`,
                background: `radial-gradient(circle at 40% 35%, rgba(${AC},0.08), rgba(${AC},0.02) 60%, transparent)`,
                boxShadow: `0 0 25px rgba(${AC},0.1), 0 0 50px rgba(${AC},0.04), inset 0 0 20px rgba(${AC},0.04)`,
              }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full" style={{ border: `1px solid rgba(${AC},0.08)` }} />

              {/* Shield */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill={`rgba(${AC},0.07)`} stroke={`rgba(${AC},0.4)`} strokeWidth="1" />
                  <path d="M9 12l2 2 4-4" stroke={`rgba(${AC},0.65)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Day cards */}
            {DAYS.map((d, i) => {
              const cp = CARDS[i];

              // For centered cards (Day 4): separate the centering div from
              // the motion div so Framer Motion's y-animation doesn't
              // overwrite translateX(-50%).
              if (cp.cx) {
                return (
                  <div
                    key={d.day}
                    className="absolute z-20"
                    style={{ top: cp.top, left: "50%", transform: "translateX(-50%)", width: `${CARD_W}px` }}
                  >
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.45 }}>
                      <div style={{ animation: `hero-float ${cp.dur}s ease-in-out ${cp.del}s infinite` }}>
                        <div className="backdrop-blur-xl rounded-2xl p-3 cursor-default transition-all duration-300 hover:scale-[1.02]" style={{
                          background: "rgba(14,18,30,0.75)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          boxShadow: "0 4px 20px -4px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.02)",
                        }}>
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `rgba(${AC},0.12)`, color: "#5547F0" }}>
                              <CardIcon type={d.icon} />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest" style={{ color: "#5547F0" }}>DAY {d.day}</span>
                            {d.done && (
                              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="ml-auto" style={{ color: `rgba(${AC},0.55)` }}>
                                <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <p className="text-[11px] leading-snug text-white/50 mb-2">{d.task}</p>
                          <div className="border-t border-white/[0.04] pt-2">
                            <CardViz day={d.day} done={d.done} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              }

              const pos: React.CSSProperties = { top: cp.top };
              if (cp.left !== undefined) pos.left = cp.left;
              else if (cp.right !== undefined) pos.right = cp.right;

              return (
                <motion.div key={d.day} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.45 }}
                  className="absolute z-20" style={{ ...pos, width: `${CARD_W}px` }}>
                  <div style={{ transform: `rotate(${cp.rot}deg)` }}>
                    <div style={{ animation: `hero-float ${cp.dur}s ease-in-out ${cp.del}s infinite` }}>
                      <div className="backdrop-blur-xl rounded-2xl p-3 cursor-default transition-all duration-300 hover:scale-[1.02]" style={{
                        background: "rgba(14,18,30,0.75)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        boxShadow: "0 4px 20px -4px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.02)",
                      }}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `rgba(${AC},0.12)`, color: "#5547F0" }}>
                            <CardIcon type={d.icon} />
                          </div>
                          <span className="text-[10px] font-bold tracking-widest" style={{ color: "#5547F0" }}>DAY {d.day}</span>
                          {d.done && (
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="ml-auto" style={{ color: `rgba(${AC},0.55)` }}>
                              <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <p className="text-[11px] leading-snug text-white/50 mb-2">{d.task}</p>
                        <div className="border-t border-white/[0.04] pt-2">
                          <CardViz day={d.day} done={d.done} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Mobile ─────────────────────────────────── */}
        <div className="md:hidden">
          <div className="flex justify-center mb-6">
            <div className="relative w-[80px] h-[80px]">
              <div className="absolute inset-0 rounded-full backdrop-blur-md" style={{
                border: `1.5px solid rgba(${AC},0.2)`,
                background: `radial-gradient(circle, rgba(${AC},0.06), transparent 70%)`,
                boxShadow: `0 0 20px rgba(${AC},0.08)`,
              }} />
              <div className="absolute inset-[-10px] rounded-full" style={{ border: `1px solid rgba(${AC},0.08)`, animation: "hero-ring-spin 20s linear infinite" }}>
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ backgroundColor: `rgba(${AC},0.4)` }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill={`rgba(${AC},0.08)`} stroke={`rgba(${AC},0.4)`} strokeWidth="1" />
                  <path d="M9 12l2 2 4-4" stroke={`rgba(${AC},0.65)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {DAYS.map(d => (
              <div key={d.day} className={`backdrop-blur-md rounded-xl p-3 ${d.day === "4" ? "col-span-2" : ""}`} style={{
                background: "rgba(14,18,30,0.75)", border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: `rgba(${AC},0.12)`, color: "#5547F0" }}>
                    <CardIcon type={d.icon} />
                  </div>
                  <span className="text-[9px] font-bold tracking-wider" style={{ color: "#5547F0" }}>DAY {d.day}</span>
                </div>
                <p className="text-[10px] leading-snug text-white/50">{d.task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
