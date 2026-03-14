import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  FiAward,
  FiBook,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiMapPin,
  FiCpu,
} from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi2";
import ReactMarkdown from "react-markdown";
import { education, experience, skills, stats } from "./aboutData";

/* ─── helpers ─────────────────────────────────── */
const expColors = {
  dot: "from-violet-500 to-indigo-500",
  badge: "bg-violet-500/15 border-violet-500/30 text-violet-300",
  divider: "via-violet-500/40",
  tech: "hover:border-violet-400/60 hover:text-violet-300",
  glow: "from-violet-500 via-indigo-500 to-purple-500",
  icon: "text-violet-400",
  pulse: "rgba(139,92,246,0.5)",
};

const eduColors = {
  dot: "from-pink-500 to-rose-500",
  badge: "bg-pink-500/15 border-pink-500/30 text-pink-300",
  divider: "via-pink-500/40",
  tech: "hover:border-pink-400/60 hover:text-pink-300",
  glow: "from-pink-500 via-rose-500 to-fuchsia-500",
  icon: "text-pink-400",
  pulse: "rgba(236,72,153,0.5)",
};

/* ─── single timeline card ────────────────────── */
const TimelineCard = ({ index, colors, icon: Icon, label, sublabel, duration, location, bullets, chips, type }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 320, damping: 32 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 320, damping: 32 });
  const glowBg = useTransform([glowX, glowY], ([lx, ly]) =>
    `radial-gradient(circle at ${lx}% ${ly}%, ${colors.pulse.replace(')', ',0.20)')} 0%, transparent 65%)`
  );

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };

  const isPresent = typeof duration === "string" && duration.toLowerCase().includes("present");
  const stepNum  = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.13, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-4 md:gap-12"
    >
      {/* Timeline stem + dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 mt-1" style={{ minWidth: 56 }}>
        {/* Outer pulse ring */}
        <div className="relative flex items-center justify-center">
          {isPresent && (
            <motion.div
              className={`absolute w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.dot} opacity-20`}
              animate={{ scale: [1, 1.35, 1], opacity: [0.18, 0, 0.18] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          )}
          <motion.div
            className={`relative w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${colors.dot} flex flex-col items-center justify-center shadow-lg flex-shrink-0 z-10`}
            animate={{
              boxShadow: hovered
                ? `0 0 22px 6px ${colors.pulse}66`
                : `0 0 8px 2px ${colors.pulse}33`,
            }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-white/50 font-mono text-[9px] font-bold leading-none">{stepNum}</span>
            <Icon className="w-4 h-4 text-white mt-0.5" />
          </motion.div>
        </div>
        {/* Animated connector line */}
        <motion.div
          className={`w-[2px] flex-1 mt-3 rounded-full bg-gradient-to-b ${colors.glow}`}
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 0.35 }}
          style={{ originY: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.13 + 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Card */}
      <motion.div
        ref={cardRef}
        className="flex-1 mb-12 relative group cursor-default"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 900, rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Glow border */}
        <motion.div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${colors.glow} blur-sm`}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* Cursor glow */}
        <motion.div className="absolute inset-0 rounded-2xl pointer-events-none z-10" style={{ background: glowBg }} />

        {/* Card body */}
        <div className="relative rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: "linear-gradient(145deg,#0d0d1a 0%,#0f1220 55%,#0a0c18 100%)" }}>

          {/* Corner step marker */}
          <div className="absolute top-3 right-3 z-20 rounded-lg border border-white/10 bg-black/25 px-2 py-1 font-mono text-[10px] text-gray-400">
            #{stepNum}
          </div>

          {/* Top gradient accent */}
          <div className={`h-[4px] w-full bg-gradient-to-r ${colors.glow} relative overflow-hidden`}>
            <motion.div
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ["-100%", "350%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div className="flex-1 min-w-0">
                {/* Step hint (mobile fallback) */}
                <span className={`md:hidden font-mono text-[10px] font-bold ${colors.icon} opacity-60 mb-1 block`}>
                  STEP {stepNum}
                </span>
                {/* Role / Degree */}
                <h4 className="text-xl md:text-2xl font-bold text-white leading-snug mb-1.5">
                  {label}
                </h4>
                {/* Company / Institution */}
                <div className="flex items-center gap-2 flex-wrap">
                  <p className={`text-base font-semibold ${colors.icon}`}>{sublabel}</p>
                  {isPresent && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                      LIVE
                    </span>
                  )}
                </div>

                {/* Type pill */}
                {type && (
                  <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-semibold border ${colors.badge}`}>
                    {type}
                  </span>
                )}
              </div>

              {/* Meta pills */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${colors.badge} backdrop-blur-sm`}>
                  <FiCalendar className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs font-semibold whitespace-nowrap">{duration}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/8 text-gray-400">
                  <FiMapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs font-semibold whitespace-nowrap">{location}</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px bg-gradient-to-r from-transparent ${colors.divider} to-transparent mb-5`} />

            {/* Bullet points */}
            <ul className="space-y-2.5 mb-5">
              {bullets.map((item, i) => {
                const isHeading = item.startsWith("⭐");
                return (
                  <li key={i} className={isHeading ? "" : "flex items-start gap-3"}>
                    {isHeading ? (
                      <p className={`text-sm font-bold ${colors.icon} flex items-center gap-1.5`}>
                        <FiAward className="w-3.5 h-3.5 opacity-70" />
                        {item.replace("⭐ ", "")}
                      </p>
                    ) : (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + i * 0.04, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${colors.dot} shadow-sm`}
                          style={{ boxShadow: `0 0 6px ${colors.pulse}` }}
                        />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                          <ReactMarkdown>{item}</ReactMarkdown>
                        </span>
                      </motion.li>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Tech chips */}
            {chips && chips.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {chips.map((chip, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.04, duration: 0.3 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className={`px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-400 border border-white/8 transition-all duration-300 cursor-default ${colors.tech}`}
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom accent corner decoration */}
          <div className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl bg-gradient-to-tl ${colors.glow} opacity-5 pointer-events-none`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const skillHighlights = Array.from(
    new Set(skills.flatMap((skill) => skill.technologies))
  ).slice(0, 16);

  return (
    <div className="min-h-screen py-20 overflow-hidden relative">
      <div className="container px-4 mx-auto relative z-10">

        {/* ── About + Skills ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          {/* Left – About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
<h2 className="text-6xl font-bold text-white heading-3d heading-3d-deep">
              About Me
            </h2>

            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                I&apos;m a passionate{" "}
                <span className="text-gray-300 font-semibold">Computer Science and Engineering student</span>{" "}
                at AIUB (American International University-Bangladesh) with a deep fascination for technology
                and problem-solving. Currently serving as a{" "}
                <span className="text-gray-300 font-semibold">Junior Software Engineer</span>, I thrive on
                tackling complex challenges and creating innovative solutions.
              </p>
              <p>
                I&apos;m particularly passionate about{" "}
                <span className="text-gray-300 font-semibold">competitive programming</span> and actively
                participate on platforms like{" "}
                <span className="text-violet-400 font-semibold">Codeforces, CodeChef, and AtCoder</span>. My
                journey is driven by curiosity, continuous learning, and the desire to create meaningful impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5, translateZ: 20, transition: { duration: 0.2 } }}
                  style={{ transformStyle: "preserve-3d", perspective: 600 }}
                  className="relative p-6 card-unique card-glow holographic-border text-center group cursor-default"
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <FiAward className="w-10 h-10 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Skills Terminal (enhanced) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal window chrome */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/8"
              style={{ background: "linear-gradient(145deg,#0d0d1a 0%,#0f1419 60%,#0a0f1e 100%)" }}>

              {/* Window top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/6"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 shadow shadow-red-500/40" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80 shadow shadow-yellow-400/40" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80 shadow shadow-green-400/40" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[12px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-400">Skills</span>
                  <span className="text-purple-400">@expertise</span>
                  <span className="text-gray-600">:~$</span>
                </div>
                <div className="text-gray-600 font-mono text-[10px]">
                  {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
                </div>
              </div>

              {/* Boot line */}
              <div className="px-5 pt-3 pb-1 font-mono text-[11px] flex items-center gap-2 border-b border-white/4">
                <span className="text-purple-400">▶</span>
                <span className="text-gray-500">Scanning services…</span>
                <span className="ml-auto text-green-400">✓ {skills.length} loaded</span>
              </div>

              {/* Quick skill highlights */}
              <div className="px-4 pt-3 pb-2 border-b border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.18em]">Skill Highlights</p>
                  <p className="text-[10px] font-mono text-violet-400">top stack</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillHighlights.map((tech, i) => (
                    <span
                      key={`${tech}-${i}`}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-violet-500/25 text-violet-300 bg-violet-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill cards */}
              <div className="p-4 space-y-3 max-h-[540px] overflow-y-auto scrollbar-none">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const gradColors = [
                    { bar: "from-blue-500 to-cyan-400", glow: "rgba(99,102,241,0.35)", badge: "rgba(59,130,246,0.15)", border: "border-blue-500/25", text: "text-blue-400" },
                    { bar: "from-emerald-500 to-teal-400", glow: "rgba(16,185,129,0.35)", badge: "rgba(16,185,129,0.15)", border: "border-emerald-500/25", text: "text-emerald-400" },
                    { bar: "from-purple-500 to-pink-400", glow: "rgba(168,85,247,0.35)", badge: "rgba(168,85,247,0.15)", border: "border-purple-500/25", text: "text-purple-400" },
                    { bar: "from-orange-500 to-red-400", glow: "rgba(249,115,22,0.35)", badge: "rgba(249,115,22,0.15)", border: "border-orange-500/25", text: "text-orange-400" },
                    { bar: "from-yellow-400 to-orange-400", glow: "rgba(234,179,8,0.35)", badge: "rgba(234,179,8,0.12)", border: "border-yellow-500/25", text: "text-yellow-400" },
                    { bar: "from-pink-500 to-rose-400", glow: "rgba(236,72,153,0.35)", badge: "rgba(236,72,153,0.15)", border: "border-pink-500/25", text: "text-pink-400" },
                  ][index % 6];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.07, duration: 0.45 }}
                      whileHover={{ scale: 1.012, y: -1 }}
                      className={`group relative rounded-xl border ${gradColors.border} p-3.5 cursor-default transition-all duration-300`}
                      style={{ background: "rgba(255,255,255,0.03)", boxShadow: `0 0 0 0 ${gradColors.glow}` }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 18px ${gradColors.glow}`; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
                    >
                      {/* Row 1: icon + name + level badge */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`flex items-center justify-center w-8 h-8 rounded-lg ${gradColors.text} border ${gradColors.border} transition-transform duration-300 group-hover:scale-110`}
                            style={{ background: gradColors.badge }}
                          >
                            {Icon && <Icon size={15} />}
                          </span>
                          <div>
                            <p className="text-white text-[13px] font-semibold leading-tight">{skill.name}</p>
                            <p className="font-mono text-gray-600 text-[10px]">
                              {skill.name.toLowerCase().replace(/\s+/g, "_").replace(/\//g, "_").replace(/&/g, "and")}.service
                            </p>
                          </div>
                        </div>
                        <span
                          className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded-full border ${gradColors.border} ${gradColors.text}`}
                          style={{ background: gradColors.badge }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Row 2: progress bar */}
                      <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.3, delay: index * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${gradColors.bar}`}
                          style={{ boxShadow: `0 0 8px ${gradColors.glow}` }}
                        />
                        {/* Shimmer */}
                        <motion.div
                          className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                          initial={{ x: -48 }}
                          whileInView={{ x: `calc(${skill.level}vw)` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.3, delay: index * 0.07 + 0.2, ease: "easeOut" }}
                        />
                      </div>

                      {/* Row 3: tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {skill.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${gradColors.border} ${gradColors.text} opacity-75 hover:opacity-100 transition-opacity`}
                            style={{ background: gradColors.badge }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer status bar */}
              <div className="px-5 py-2.5 border-t border-white/5 font-mono text-[10px] flex items-center justify-between"
                style={{ background: "rgba(168,85,247,0.05)" }}>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">$ status</span>
                  <span className="text-gray-600">→</span>
                  <span className="text-green-400">all systems operational</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-600">cursor</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-purple-400"
                  >▌</motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── JOURNEY SHOWCASE ───────────────────────── */}
        <section className="relative mb-10">
          <div className="pointer-events-none absolute -top-12 left-1/2 h-64 w-[90%] -translate-x-1/2 rounded-[2.5rem] bg-gradient-to-r from-violet-600/15 via-fuchsia-500/10 to-sky-500/15 blur-3xl" />

          <div className="section-shell relative px-4 py-10 md:px-8 md:py-14"
            style={{ boxShadow: "0 30px 80px rgba(8,10,28,0.55), inset 0 1px 0 rgba(255,255,255,0.08)" }}>

            {/* ── SECTION HEADER ─────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-10 md:mb-12 relative"
            >
              {/* Label pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-5 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Career &amp; Education Timeline
              </motion.div>

              {/* Main heading */}
              <h2
                className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
                style={{ background: "linear-gradient(135deg,#e2d9f3 0%,#a78bfa 40%,#f472b6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                My Journey
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                A curated timeline of professional growth and academic milestones, presented in an interactive story format.
              </p>

              {/* Decorative divider */}
              <div className="mt-7 flex items-center justify-center gap-3">
                <motion.div
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                  style={{ originX: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
                  className="h-px w-24 bg-gradient-to-r from-transparent via-violet-500/70 to-violet-500"
                />
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-lg" style={{ boxShadow: "0 0 10px rgba(139,92,246,0.7)" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                </div>
                <motion.div
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                  style={{ originX: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                  className="h-px w-24 bg-gradient-to-l from-transparent via-violet-500/70 to-violet-500"
                />
              </div>
            </motion.div>

            {/* ── TAB SWITCHER ───────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-10 md:mb-12"
            >
              <div className="relative flex gap-2 p-2 rounded-2xl bg-black/25 border border-white/10 backdrop-blur-md"
                style={{ boxShadow: "0 0 40px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.08)" }}>
                {[
                  { id: "experience", label: "Experience", icon: FiBriefcase, accent: "violet",
                    grad: "from-violet-600 to-indigo-600", glow: "rgba(139,92,246,0.5)" },
                  { id: "education",  label: "Education",  icon: HiAcademicCap, accent: "pink",
                    grad: "from-pink-600 to-rose-600",     glow: "rgba(236,72,153,0.5)" },
                ].map((tab) => {
                  const active = activeTab === tab.id;
                  const Icon   = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="relative px-5 md:px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2.5 transition-colors duration-300 z-10"
                      style={{ color: active ? "#fff" : "#8b95a7" }}
                    >
                      {active && (
                        <motion.div
                          layoutId="tab-pill"
                          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.grad}`}
                          style={{ zIndex: -1, boxShadow: `0 0 22px ${tab.glow}` }}
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      <motion.span whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
                        <Icon className={`w-4 h-4 ${active ? "text-white" : "text-gray-400"}`} />
                      </motion.span>
                      {tab.label}
                      <span className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${active ? "bg-white/25 text-white" : "bg-white/5 text-gray-400"}`}>
                        {tab.id === "experience" ? experience.length : education.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* ── TIMELINE ───────────────────────────── */}
            <div className="max-w-[92rem] mx-auto w-full px-0 md:px-3">
              <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                  >
                    {experience.map((job, index) => (
                      <TimelineCard
                        key={index}
                        index={index}
                        colors={expColors}
                        icon={FiBriefcase}
                        label={job.title}
                        sublabel={job.company}
                        duration={job.duration}
                        location={job.location}
                        type={job.type}
                        bullets={job.description}
                        chips={job.technologies}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                  >
                    {education.map((edu, index) => (
                      <TimelineCard
                        key={index}
                        index={index}
                        colors={eduColors}
                        icon={HiAcademicCap}
                        label={edu.degree}
                        sublabel={edu.institution}
                        duration={edu.duration}
                        location={edu.location}
                        type={null}
                        bullets={edu.achievements}
                        chips={null}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
