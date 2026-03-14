import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  FiAward, FiBook, FiBriefcase, FiTarget, FiCalendar,
  FiStar, FiTrendingUp, FiExternalLink, FiZap, FiCode,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { roadmap } from "./Data";

/* ── Category config ──────────────────────────────────────── */
const CC = {
  Competition: {
    grad: "from-violet-500 via-purple-500 to-indigo-500",
    bg:   "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.28)",
    glow: "rgba(139,92,246,0.45)", accent: "#a78bfa",
    Icon: FiTarget,
  },
  Professional: {
    grad: "from-cyan-500 via-blue-500 to-indigo-500",
    bg:   "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.28)",
    glow: "rgba(6,182,212,0.40)", accent: "#22d3ee",
    Icon: FiBriefcase,
  },
  Academic: {
    grad: "from-amber-500 via-orange-400 to-yellow-500",
    bg:   "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.28)",
    glow: "rgba(245,158,11,0.40)", accent: "#fbbf24",
    Icon: FiBook,
  },
};

/* ── 3D tilt wrapper ──────────────────────────────────────── */
const TiltCard3D = ({ children, className, glowColor = "rgba(139,92,246,0.18)" }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const glowX = useMotionValue(50); const glowY = useMotionValue(50);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 280, damping: 34 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 280, damping: 34 });
  const glowBg = useTransform([glowX, glowY], ([lx, ly]) =>
    `radial-gradient(circle at ${lx}% ${ly}%, ${glowColor} 0%, transparent 65%)`
  );
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect(); if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
    glowX.set(((e.clientX - r.left) / r.width)  * 100);
    glowY.set(((e.clientY - r.top)  / r.height) * 100);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  return (
    <motion.div ref={ref} className={`relative ${className || ""}`}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ perspective: 900, rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none z-10" style={{ background: glowBg }} />
      {children}
    </motion.div>
  );
};

/* ── Single achievement card ──────────────────────────────── */
const AchievementCard = ({ achievement, index }) => {
  const [hovered, setHovered] = useState(false);
  const cfg = CC[achievement.category] || CC.Competition;
  const CatIcon = cfg.Icon;
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Vertical timeline connector */}
      {index < roadmap.length - 1 && (
        <motion.div
          className="absolute hidden lg:block w-px left-1/2 -translate-x-1/2 -bottom-8"
          style={{ height: 32, background: `linear-gradient(180deg,${cfg.border},transparent)` }}
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        />
      )}

      <div className="grid items-stretch grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 max-w-6xl mx-auto">

        {/* ── Image column ── */}
        <motion.div
          className={`lg:col-span-6 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
          whileHover={{ scale: 1.02 }} transition={{ duration: 0.35 }}
        >
          {/* Outer glow */}
          <motion.div
            className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${cfg.grad} blur-sm`}
            animate={{ opacity: hovered ? 0.9 : 0 }} transition={{ duration: 0.35 }}
          />
          <div className="relative rounded-2xl overflow-hidden border"
            style={{ borderColor: cfg.border }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          >
            {/* Number badge */}
            <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm border"
              style={{ background: "rgba(8,8,16,0.85)", borderColor: cfg.border, color: cfg.accent, backdropFilter: "blur(8px)" }}>
              {num}
            </div>

            <div className="aspect-[16/11] relative bg-[#0a0a12]">
              <img src={achievement.imageUrl} alt={achievement.title}
                loading="lazy" className="object-contain w-full h-full" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(4,4,12,0.55) 0%, transparent 40%)" }} />
            </div>

            {/* Ranking badge */}
            {achievement.ranking && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl border backdrop-blur-xl"
                style={{ background: "rgba(8,8,16,0.75)", borderColor: cfg.border }}>
                <span className="text-base font-black" style={{ color: cfg.accent }}>{achievement.ranking}</span>
              </div>
            )}

            {/* Date badge */}
            {achievement.date && (
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-xl"
                style={{ background: "rgba(8,8,16,0.75)", borderColor: cfg.border }}>
                <FiCalendar className="w-3 h-3" style={{ color: cfg.accent }} />
                <span className="text-xs font-bold text-white">{achievement.date}</span>
              </div>
            )}

            {/* Category pill bottom-right */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-xl"
              style={{ background: cfg.bg, borderColor: cfg.border }}>
              <CatIcon className="w-3 h-3" style={{ color: cfg.accent }} />
              <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: cfg.accent }}>{achievement.category}</span>
            </div>
          </div>
        </motion.div>

        {/* ── Content column ── */}
        <TiltCard3D
          className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
          glowColor={cfg.glow}
        >
          {/* Outer glow border */}
          <motion.div
            className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${cfg.grad} blur-sm`}
            animate={{ opacity: hovered ? 0.6 : 0 }} transition={{ duration: 0.35 }}
          />

          <div className="relative rounded-2xl border overflow-hidden flex flex-col h-full"
            style={{ background: "linear-gradient(145deg,#0d0d1a,#0f1220,#0a0c18)", borderColor: cfg.border }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          >
            {/* Top shimmer accent bar */}
            <div className={`h-[4px] w-full bg-gradient-to-r ${cfg.grad} relative overflow-hidden flex-shrink-0`}>
              <motion.div
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
              />
            </div>

            <div className="p-6 flex flex-col gap-5 flex-1">
              {/* Title row */}
              <div>
                <h3
                  className="text-2xl lg:text-3xl font-black leading-tight mb-2 transition-all duration-300"
                  style={hovered
                    ? { background: `linear-gradient(135deg,#fff,${cfg.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }
                    : { color: "#fff" }
                  }
                >
                  {achievement.title}
                </h3>
                <motion.div
                  className={`h-0.5 rounded-full bg-gradient-to-r ${cfg.grad}`}
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }} style={{ originX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.06 + 0.2 }}
                />
              </div>

              {/* Description */}
              <div className="relative rounded-xl p-4 border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                <p className="text-sm text-gray-300 leading-relaxed">{achievement.text}</p>
              </div>

              {/* Status + Category grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border"
                  style={{ background: cfg.bg, borderColor: cfg.border }}>
                  <div className="flex items-center gap-2 mb-1">
                    <FiStar className="w-3.5 h-3.5" style={{ color: cfg.accent }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: cfg.accent }}>Status</span>
                  </div>
                  <p className="text-sm font-bold text-white truncate">{achievement.status}</p>
                </div>
                <div className="p-3 rounded-xl border"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <FiTrendingUp className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Category</span>
                  </div>
                  <p className="text-sm font-bold text-white">{achievement.category}</p>
                </div>
              </div>

              {/* Impact level */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Impact</span>
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={i < (achievement.impactLevel || 5)
                        ? { background: `linear-gradient(135deg,${cfg.accent},#fff)`, boxShadow: `0 0 6px ${cfg.glow}` }
                        : { background: "rgba(255,255,255,0.08)" }
                      }
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 + i * 0.07, duration: 0.3, type: "spring" }}
                    />
                  ))}
                </div>
              </div>

              {/* View Certificate button */}
              {achievement.link && (
                <motion.a
                  href={achievement.link} target="_blank" rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 self-start px-4 py-2.5 rounded-xl text-sm font-bold border transition-all duration-300 overflow-hidden relative group/btn"
                  style={{ background: cfg.bg, borderColor: cfg.border, color: cfg.accent }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                >
                  {/* Wipe shine */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out" />
                  <FiExternalLink className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">View Certificate</span>
                </motion.a>
              )}
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-0 right-0 w-28 h-28 rounded-tl-3xl pointer-events-none"
              style={{ background: `linear-gradient(135deg,transparent,${cfg.bg})`, opacity: 0.7 }} />
          </div>
        </TiltCard3D>
      </div>
    </motion.div>
  );
};

/* ── Stats banner items ───────────────────────────────────── */
const STATS = [
  { Icon: FiAward,      value: roadmap.length,                                   label: "Total Awards",    grad: "from-violet-400 to-purple-400", accent: "#a78bfa" },
  { Icon: FiTarget,     value: roadmap.filter(r => r.category === "Competition").length, label: "Competitions",  grad: "from-cyan-400 to-blue-400",   accent: "#22d3ee" },
  { Icon: FiBriefcase,  value: roadmap.filter(r => r.category === "Professional").length, label: "Professional",  grad: "from-pink-400 to-rose-400",   accent: "#f472b6" },
  { Icon: FiZap,        value: "5★ Max",                                          label: "Impact Level",   grad: "from-amber-400 to-orange-400", accent: "#fbbf24" },
];

/* ── Main component ───────────────────────────────────────── */
const Achievement = () => (
  <div className="min-h-screen py-20 relative overflow-hidden">
    <div className="px-4 py-8 mx-auto relative z-10 max-w-[88rem] sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="section-shell p-5 sm:p-7 lg:p-10"
      >

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-5 backdrop-blur-sm"
        >
          <HiOutlineSparkles className="w-3.5 h-3.5" />
          Recognition & Milestones
        </motion.div>

        <h2
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ background: "linear-gradient(135deg,#e2d9f3 0%,#a78bfa 40%,#22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Achievements
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          International recognitions, competition honours, and professional milestones earned along the journey.
        </p>

        {/* Animated divider */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            style={{ originX: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-violet-500/70 to-violet-500"
          />
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-violet-500" style={{ boxShadow: "0 0 10px rgba(139,92,246,0.7)" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            style={{ originX: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px w-24 bg-gradient-to-l from-transparent via-violet-500/70 to-violet-500"
          />
        </div>
      </motion.div>

      {/* ── Stats banner ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
        {STATS.map(({ Icon, value, label, grad, accent }, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.45 }}
            className="relative rounded-2xl border overflow-hidden p-5 text-center cursor-default"
            style={{ background: "linear-gradient(145deg,#0d0d1a,#0f1220)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${grad}`} />
            <Icon className="text-2xl mx-auto mb-2 mt-1" style={{ color: accent }} />
            <div className="text-3xl font-extrabold mb-1"
              style={{ background: `linear-gradient(135deg,#fff,${accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {value}
            </div>
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{label}</div>
          </motion.div>
        ))}
      </div>

      {/* ── Achievement cards ── */}
      <div className="space-y-16">
        <AnimatePresence mode="wait">
          {roadmap.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </AnimatePresence>
      </div>

      </motion.div>
    </div>
  </div>
);

export default Achievement;

