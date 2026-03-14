import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiExternalLink, FiAward, FiTrendingUp, FiCode, FiActivity } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { problemSolvingData } from "./problemSolvingData";

/* ── Platform config ───────────────────────────────────── */
const PC = {
  LeetCode:   { grad: "from-orange-500 via-yellow-500 to-red-500",   bg: "rgba(249,115,22,0.08)",  border: "rgba(249,115,22,0.25)",  glow: "rgba(249,115,22,0.4)",  accent: "#f97316", logo: "https://leetcode.com/static/images/LeetCode_logo_rvs.png" },
  Codeforces: { grad: "from-blue-500 via-indigo-500 to-violet-500",  bg: "rgba(99,102,241,0.08)",  border: "rgba(99,102,241,0.25)",  glow: "rgba(99,102,241,0.4)",  accent: "#818cf8", logo: "https://sta.codeforces.com/s/50395/images/codeforces-logo-with-telegram.png" },
  CodeChef:   { grad: "from-amber-500 via-orange-400 to-yellow-500", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.25)",  glow: "rgba(245,158,11,0.4)",  accent: "#fbbf24", logo: "https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png" },
  AtCoder:    { grad: "from-purple-500 via-pink-500 to-rose-500",    bg: "rgba(168,85,247,0.08)",  border: "rgba(168,85,247,0.25)",  glow: "rgba(168,85,247,0.4)",  accent: "#c084fc", logo: "https://img.atcoder.jp/assets/atcoder.png" },
};

const DC = {
  Easy:   { bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.3)",  text: "#4ade80" },
  Medium: { bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.3)",  text: "#fbbf24" },
  Hard:   { bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.3)", text: "#f87171" },
};

/* ── 3D tilt wrapper ─────────────────────────────────────── */
const TiltCard3D = ({ children, className, glowColor = "rgba(139,92,246,0.18)", initial, whileInView, viewport, transition }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 35 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 35 });
  const glowBg = useTransform([glowX, glowY], ([lx, ly]) =>
    `radial-gradient(circle at ${lx}% ${ly}%, ${glowColor} 0%, transparent 65%)`
  );
  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  return (
    <motion.div
      ref={ref}
      className={`relative ${className || ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      style={{ perspective: 800, rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <motion.div className="absolute inset-0 rounded-xl pointer-events-none z-10" style={{ background: glowBg }} />
      {children}
    </motion.div>
  );
};

/* ── Platform card ────────────────────────────────────────── */
const PlatformCard = ({ platform, index }) => {
  const [hovered, setHovered] = useState(false);
  const cfg = PC[platform.name] || PC.LeetCode;
  const statEntries = platform.stats ? Object.entries(platform.stats).slice(0, 4) : [];

  return (
    <TiltCard3D
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      glowColor={cfg.glow}
      className="group h-full"
    >
      {/* Outer glow border */}
      <motion.div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${cfg.grad} blur-sm`}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      <div
        className="relative h-full rounded-2xl border overflow-hidden flex flex-col"
        style={{ background: "linear-gradient(145deg,#0d0d1a,#0f1220,#0a0c18)", borderColor: cfg.border }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top accent bar with shimmer */}
        <div className={`h-[4px] w-full bg-gradient-to-r ${cfg.grad} relative overflow-hidden flex-shrink-0`}>
          <motion.div
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          />
        </div>

        <div className="p-6 flex flex-col flex-1 gap-5">
          {/* Header: logo + name + link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cfg.grad} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl border p-2.5"
                  style={{ background: "rgba(8,8,16,0.95)", borderColor: cfg.border }}>
                  <img src={cfg.logo} alt={platform.name}
                    className={`w-full h-full object-contain ${platform.name === "Codeforces" ? "scale-[1.4]" : ""}`} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{platform.name}</h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border"
                  style={{ background: cfg.bg, borderColor: cfg.border, color: cfg.accent }}>
                  @{platform.username}
                </span>
              </div>
            </div>
            <motion.a
              href={platform.profileUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.94 }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all duration-300"
              style={{ background: cfg.bg, borderColor: cfg.border, color: cfg.accent }}
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Profile
            </motion.a>
          </div>

          {/* Stats 2×2 grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {statEntries.map(([key, value], idx) => (
              <motion.div key={key}
                initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: index * 0.08 + idx * 0.05, duration: 0.35 }}
                className="rounded-xl p-3 text-center border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="text-xl font-extrabold mb-0.5"
                  style={{ background: `linear-gradient(135deg,#fff,${cfg.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {value}
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px" style={{ background: `linear-gradient(90deg,transparent,${cfg.border},transparent)` }} />

          {/* Achievements */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <FiAward className="w-4 h-4 flex-shrink-0" style={{ color: cfg.accent }} />
              <span className="text-sm font-bold text-white">Key Achievements</span>
            </div>
            <ul className="space-y-2">
              {platform.achievements?.slice(0, 4).map((ach, idx) => (
                <motion.li key={idx}
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.06 + idx * 0.05, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${cfg.accent},#fff)`, boxShadow: `0 0 6px ${cfg.glow}` }} />
                  {ach}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl pointer-events-none"
          style={{ background: `linear-gradient(135deg,transparent,${cfg.bg})`, opacity: 0.6 }} />
      </div>
    </TiltCard3D>
  );
};


const ProblemSolving = () => (
  <section className="min-h-screen py-20 relative overflow-hidden">
    <div className="mx-auto max-w-[88rem] px-4 relative z-10">
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
          Competitive Programming
        </motion.div>

        <h2
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ background: "linear-gradient(135deg,#e2d9f3 0%,#a78bfa 40%,#22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Problem Solving Journey
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          Mastering algorithms and data structures across multiple competitive programming platforms &mdash; consistently pushing ratings higher.
        </p>

        {/* Divider */}
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
        {[
          { Icon: FiActivity,   value: "1500+",                                         label: "Problems Solved",  glow: "rgba(6,182,212,0.35)",   accent: "#22d3ee", grad: "from-cyan-400 to-blue-400"     },
          { Icon: FiTrendingUp, value: problemSolvingData.statistics?.totalContests  || "144",  label: "Contests",         glow: "rgba(74,222,128,0.35)",  accent: "#4ade80", grad: "from-green-400 to-emerald-400" },
          { Icon: FiAward,      value: "4",                                                      label: "Platforms",        glow: "rgba(251,191,36,0.35)",  accent: "#fbbf24", grad: "from-yellow-400 to-amber-400"  },
          { Icon: FiCode,       value: problemSolvingData.statistics?.averageRating  || "1569", label: "Avg Rating",       glow: "rgba(167,139,250,0.35)", accent: "#c084fc", grad: "from-violet-400 to-purple-400" },
        ].map(({ Icon, value, label, glow, accent, grad }, i) => (
          <TiltCard3D key={i} glowColor={glow}>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
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
          </TiltCard3D>
        ))}
      </div>

      {/* ── Platform cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {problemSolvingData?.platforms?.map((platform, i) => (
          <PlatformCard key={platform.id || i} platform={platform} index={i} />
        ))}
      </div>

      </motion.div>
    </div>
  </section>
);

export default ProblemSolving;


