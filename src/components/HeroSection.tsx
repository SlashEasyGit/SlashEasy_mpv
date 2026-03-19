"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const TRUST = [
  "50+ MVPs shipped",
  "7-day delivery",
  "Fixed pricing",
  "NDA signed Day 1",
];

const DAYS = [
  { day: "1", task: "Discovery & scope lock", done: true },
  { day: "2", task: "Auth + database setup", done: true },
  { day: "3", task: "Core feature build", done: true },
  { day: "4", task: "UI polish + integrations", done: true },
  { day: "5", task: "Feature completion", done: false },
  { day: "6", task: "Testing & feedback", done: false },
  { day: "7", task: "Ship day", done: false },
];

// Card positions around the cube: top, left/right, rotation, float speed, float delay
type CardPos = {
  top: string;
  left?: string;
  right?: string;
  rot: number;
  dur: number;
  del: number;
};

const CARD_LAYOUT: CardPos[] = [
  // Left column — cards lean right toward cube
  { top: "1%",  left: "0%",   rot: -3, dur: 5.2, del: 0.0 },
  { top: "27%", left: "-3%",  rot: -5, dur: 5.6, del: 0.5 },
  { top: "53%", left: "0%",   rot: -2, dur: 5.0, del: 1.0 },
  // Bottom center
  { top: "79%", left: "26%",  rot: 1,  dur: 5.4, del: 1.4 },
  // Right column — cards lean left toward cube
  { top: "1%",  right: "0%",  rot: 3,  dur: 5.3, del: 0.2 },
  { top: "27%", right: "-3%", rot: 5,  dur: 4.9, del: 0.7 },
  { top: "53%", right: "0%",  rot: 2,  dur: 5.1, del: 1.1 },
];

const TEAM_BADGES = [
  { label: "SE", top: "20%", left: "42%", bg: "#6C3FE6" },
  { label: "AI", top: "80%", left: "56%", bg: "#8B5CF6" },
  { label: "DV", top: "48%", left: "73%", bg: "#413A7C" },
];

// ─── Cube face data ────────────────────────────────────────
const CUBE_FACES = [
  { ry: 0,    rx: 0,    tz: 85,  fill: 0.06, stroke: 0.35 },  // front
  { ry: 180,  rx: 0,    tz: 85,  fill: 0.02, stroke: 0.12 },  // back
  { ry: 90,   rx: 0,    tz: 85,  fill: 0.04, stroke: 0.25 },  // right
  { ry: -90,  rx: 0,    tz: 85,  fill: 0.03, stroke: 0.15 },  // left
  { ry: 0,    rx: 90,   tz: 85,  fill: 0.05, stroke: 0.30 },  // top
  { ry: 0,    rx: -90,  tz: 85,  fill: 0.02, stroke: 0.10 },  // bottom
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background ──────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#100822] via-[#1c0e3d] to-[#0a0616]" />

      {/* ── Ambient glows ───────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-brand-primary/15 blur-[160px]" />
        <div className="absolute top-[40%] right-[8%] w-[550px] h-[550px] rounded-full bg-teal-500/[0.08] blur-[140px]" />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-secondary/10 blur-[130px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ── Keyframes ───────────────────────────────────────── */}
      <style>{`
        @keyframes hero-cube {
          0%, 100% { transform: rotateX(-22deg) rotateY(-35deg) translateY(0); }
          50%      { transform: rotateX(-18deg) rotateY(-30deg) translateY(-10px); }
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* ── Left: Copy ──────────────────────────────────── */}
          <div className="max-w-xl">
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-[13px] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Accepting New Projects
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-7 text-[42px] md:text-[56px] lg:text-[64px] font-extrabold text-white leading-[1.06] tracking-tight"
            >
              Turn your idea into an{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  MVP in 7 days
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-brand-primary/20 rounded-sm -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed"
            >
              Book a free call, tell us your idea, and our senior dev team + AI tooling
              will build, design, and ship your production-ready MVP — in one week.
              No long timelines. No bloated agencies. Just execution.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#book-call"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold text-base shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Book Free Call
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-xl border border-white/20 text-white/90 font-medium text-base hover:bg-white/10 hover:border-white/35 transition-all duration-200 text-center backdrop-blur-sm"
              >
                View Process
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
            >
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3D Cube + Floating Cards (desktop) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative" style={{ height: "560px" }}>
              {/* ── Cube scene ───────────── */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ perspective: "800px" }}
              >
                {/* Cube ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-teal-400/[0.10] blur-[80px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-teal-300/[0.06] blur-[40px]" />

                {/* The 3D cube */}
                <div
                  className="relative w-[170px] h-[170px]"
                  style={{
                    transformStyle: "preserve-3d",
                    animation: "hero-cube 8s ease-in-out infinite",
                  }}
                >
                  {/* 6 faces */}
                  {CUBE_FACES.map((f, i) => (
                    <div
                      key={i}
                      className="absolute inset-0"
                      style={{
                        transform: `rotateY(${f.ry}deg) rotateX(${f.rx}deg) translateZ(${f.tz}px)`,
                        background: `rgba(20, 184, 166, ${f.fill})`,
                        border: `1px solid rgba(20, 184, 166, ${f.stroke})`,
                        boxShadow: `inset 0 0 30px rgba(20, 184, 166, 0.03), 0 0 10px rgba(20, 184, 166, ${f.stroke * 0.15})`,
                        backdropFilter: "blur(2px)",
                      }}
                    />
                  ))}

                  {/* Shield icon — centered on front face */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transform: "translateZ(86px)" }}
                  >
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                        fill="rgba(20,184,166,0.08)"
                        stroke="rgba(20,184,166,0.45)"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="rgba(20,184,166,0.65)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── Floating day cards ───── */}
              {DAYS.map((d, i) => {
                const p = CARD_LAYOUT[i];
                const posStyle: React.CSSProperties = { top: p.top };
                if (p.left !== undefined) posStyle.left = p.left;
                if (p.right !== undefined) posStyle.right = p.right;

                return (
                  <motion.div
                    key={d.day}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    className="absolute w-[200px]"
                    style={posStyle}
                  >
                    {/* Rotation wrapper (static tilt) */}
                    <div style={{ transform: `rotate(${p.rot}deg)` }}>
                      {/* Float wrapper (continuous animation) */}
                      <div
                        style={{
                          animation: `hero-float ${p.dur}s ease-in-out ${p.del}s infinite`,
                        }}
                      >
                        {/* Card */}
                        <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-xl px-4 py-3 shadow-lg hover:bg-white/[0.09] hover:border-teal-400/20 hover:shadow-[0_8px_32px_-8px_rgba(20,184,166,0.12)] hover:scale-[1.04] transition-all duration-300 cursor-default">
                          <div className="flex items-center gap-2.5 mb-1">
                            <div
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                d.done
                                  ? "bg-teal-400 shadow-[0_0_6px_rgba(20,184,166,0.5)]"
                                  : "bg-white/20"
                              }`}
                            />
                            <span
                              className={`text-[11px] font-bold tracking-wider ${
                                d.done ? "text-teal-400/90" : "text-white/30"
                              }`}
                            >
                              DAY {d.day}
                            </span>
                            {d.done && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="ml-auto text-teal-400/50"
                              >
                                <path
                                  d="M2 6L5 9L10 3"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <p
                            className={`text-[12px] leading-snug ${
                              d.done ? "text-white/60" : "text-white/30"
                            }`}
                          >
                            {d.task}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* ── Team badges ──────────── */}
              {TEAM_BADGES.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.6 + i * 0.12,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute z-20"
                  style={{ top: t.top, left: t.left }}
                >
                  <div
                    className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white/90 backdrop-blur-sm border border-white/[0.08]"
                    style={{
                      backgroundColor: `${t.bg}40`,
                      boxShadow: `0 0 16px ${t.bg}20, 0 2px 8px rgba(0,0,0,0.3)`,
                    }}
                  >
                    {t.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Mobile: Simplified day grid ──────────────── */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-3">
              {DAYS.map((d) => (
                <div
                  key={d.day}
                  className={`bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 ${
                    d.day === "7" ? "col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        d.done ? "bg-teal-400" : "bg-white/20"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-bold tracking-wider ${
                        d.done ? "text-teal-400/90" : "text-white/30"
                      }`}
                    >
                      DAY {d.day}
                    </span>
                    {d.done && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="ml-auto text-teal-400/50"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <p
                    className={`text-[12px] leading-snug ${
                      d.done ? "text-white/60" : "text-white/30"
                    }`}
                  >
                    {d.task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-xs font-medium tracking-wider uppercase">
            Scroll
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            className="text-white/25"
          >
            <path
              d="M10 4V16M10 16L5 11M10 16L15 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
