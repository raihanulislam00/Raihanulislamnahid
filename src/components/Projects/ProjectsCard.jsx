import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { skillsConfig } from './projectsData';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

const ProjectsCard = ({ image, title, date, description, github, demo, skills, featured, category }) => {
  const cardRef    = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]),  { stiffness: 300, damping: 32 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8,  8]), { stiffness: 300, damping: 32 });
  const glowBg  = useTransform(
    [glowX, glowY],
    ([lx, ly]) => `radial-gradient(circle at ${lx}% ${ly}%, rgba(168,85,247,0.18) 0%, transparent 62%)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };
  const openUrl = (url) => { if (url) window.open(url, '_blank'); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="h-full flex flex-col"
    >
      {/* Outer glow border */}
      <div className="relative h-full flex flex-col">
        <motion.div
          className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 blur-sm"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        <div
          className="relative flex flex-col h-full rounded-2xl border border-white/8 overflow-hidden group"
          style={{ background: 'linear-gradient(145deg,#0d0d1a 0%,#0f1220 55%,#0a0c18 100%)' }}
        >
          {/* Cursor glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
            style={{ background: glowBg }}
          />

          {/* ── Image ── */}
          <div className="relative h-56 overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient fades */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

            {/* Featured badge */}
            {featured && (
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm">
                <FaStar className="w-3 h-3 text-amber-400" />
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wide">Featured</span>
              </div>
            )}

            {/* Category badge */}
            {category && (
              <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-sm">
                <span className="text-[10px] font-bold text-violet-300 capitalize">{category}</span>
              </div>
            )}

            {/* Date strip */}
            {date && (
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5">
                <FiCalendar className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-400 font-medium">{date}</span>
              </div>
            )}

            {/* Hover overlay — quick-action buttons */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 backdrop-blur-[2px] z-20"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {demo && (
                <motion.button
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: hovered ? 1 : 0.7, opacity: hovered ? 1 : 0 }}
                  transition={{ delay: 0.05, type: 'spring', stiffness: 400, damping: 20 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => openUrl(demo)}
                  className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 hover:bg-cyan-500/35 transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </motion.button>
              )}
              {github && (
                <motion.button
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: hovered ? 1 : 0.7, opacity: hovered ? 1 : 0 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 20 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => openUrl(github)}
                  className="w-14 h-14 rounded-full bg-violet-500/20 border border-violet-400/50 flex items-center justify-center text-violet-300 hover:bg-violet-500/35 transition-colors duration-200"
                >
                  <FaGithub className="w-6 h-6" />
                </motion.button>
              )}
            </motion.div>
          </div>

          {/* Top accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 relative overflow-hidden flex-shrink-0">
            <motion.div
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ['-100%', '400%'] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
            />
          </div>

          {/* ── Content ── */}
          <div className="flex flex-col flex-1 p-6 gap-4">
            {/* Title */}
            <h3
              className="text-xl font-bold text-white leading-tight transition-all duration-300"
              style={{ background: hovered ? 'linear-gradient(90deg,#e2d9f3,#a78bfa,#67e8f9)' : 'none', WebkitBackgroundClip: hovered ? 'text' : 'unset', WebkitTextFillColor: hovered ? 'transparent' : 'white' }}
            >
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {skills.slice(0, 5).map((skill, i) => {
                const sc = skillsConfig[skill];
                if (!sc) return null;
                const Icon = sc.icon;
                return (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -2, scale: 1.08 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border backdrop-blur-sm cursor-default transition-all duration-200"
                    style={{ backgroundColor: `${sc.color}12`, borderColor: `${sc.color}28`, color: sc.color }}
                  >
                    <Icon className="w-3 h-3" />
                    {sc.name}
                  </motion.span>
                );
              })}
              {skills.length > 5 && (
                <span className="flex items-center px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-500 text-[11px] font-semibold">
                  +{skills.length - 5} more
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            {/* Action buttons */}
            <div className="flex gap-3 mt-auto">
              {demo && (
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openUrl(demo)}
                  className="relative flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#0891b2,#6366f1)', boxShadow: hovered ? '0 0 18px rgba(99,102,241,0.45)' : 'none', transition: 'box-shadow 0.3s' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.45 }}
                  />
                  <FaExternalLinkAlt className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">Live Demo</span>
                </motion.button>
              )}
              {github && (
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openUrl(github)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white hover:border-violet-500/40 transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Source</span>
                </motion.button>
              )}
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl bg-gradient-to-tl from-violet-600 via-cyan-500 to-transparent opacity-[0.06] pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;