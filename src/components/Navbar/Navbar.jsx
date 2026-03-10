import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiCode, FiUser, FiFolder, FiAward, FiBookOpen,
  FiMail, FiDownload, FiMenu, FiX, FiGithub, FiZap,
} from "react-icons/fi";
import { Link } from "react-scroll";

const navItems = [
  { name: "About",           to: "about",          Icon: FiUser      },
  { name: "Projects",        to: "project",         Icon: FiFolder    },
  { name: "Problem Solving", to: "problemsolving",  Icon: FiCode      },
  { name: "Achievements",    to: "achivement",      Icon: FiAward     },
  { name: "Blog",            to: "blog",            Icon: FiBookOpen  },
  { name: "Contact",         to: "contact",         Icon: FiMail      },
];

const Navbar = () => {
  const [isOpen,         setIsOpen]         = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07070f]/85 backdrop-blur-2xl border-b border-violet-500/10 shadow-[0_4px_30px_rgba(139,92,246,0.08)]"
          : "bg-transparent"
      }`}
    >
      {/* Subtle top glow line */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent pointer-events-none" />
      )}

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Brand ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="https://github.com/raihanulislam00"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group px-3 py-2 rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-xl hover:border-violet-400/30 hover:bg-white/[0.07] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Monogram avatar */}
              <div className="relative flex-shrink-0">
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 opacity-30"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-lg overflow-hidden">
                  <span className="relative z-10">RI</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                    animate={{ x: ["-120%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Name + title */}
              <div className="flex flex-col leading-none">
                <span
                  className="text-[15px] font-black tracking-tight"
                  style={{ background: "linear-gradient(135deg,#fff 0%,#c4b5fd 60%,#67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  raihanulislam00
                </span>
                <span className="text-[10px] text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 font-medium tracking-wide mt-0.5">
                  Software Engineer
                </span>
              </div>

              <FiGithub className="w-3.5 h-3.5 text-gray-600 group-hover:text-violet-400 transition-colors duration-300 ml-1" />
            </motion.a>
          </motion.div>

          {/* ── Desktop nav + actions ── */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            {/* Nav pill */}
            <div className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl shadow-lg">
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className="relative px-3.5 py-2 cursor-pointer rounded-xl group flex items-center gap-1.5"
                >
                  {/* Active sliding background */}
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.9),rgba(99,102,241,0.9),rgba(6,182,212,0.7))" }}
                      initial={false}
                      transition={{ type: "spring", bounce: 0.22, duration: 0.55 }}
                    />
                  )}

                  {/* Hover bg (only when not active) */}
                  {activeSection !== item.to && (
                    <span className="absolute inset-0 rounded-xl bg-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}

                  <item.Icon
                    className="w-3 h-3 relative z-10 transition-colors duration-200 flex-shrink-0"
                    style={{ color: activeSection === item.to ? "#fff" : undefined }}
                  />
                  <motion.span
                    className="relative z-10 text-[13px] font-semibold transition-colors duration-200 whitespace-nowrap"
                    style={{ color: activeSection === item.to ? "#fff" : undefined }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.35 }}
                  >
                    {item.name}
                  </motion.span>

                  {/* Active glow dot underneath */}
                  {activeSection === item.to && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                      layoutId="navDot"
                      style={{ boxShadow: "0 0 6px rgba(34,211,238,0.9)" }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CV button */}
            <motion.a
              href="/assets/Raihan_CV.pdf"
              download="Raihan_CV.pdf"
              className="relative hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white overflow-hidden border border-violet-400/30 shadow-lg shadow-violet-500/15 group"
              style={{ background: "linear-gradient(135deg,#7c3aed,#6366f1,#06b6d4)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.5, type: "spring" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
              <FiDownload className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-gray-300 hover:text-white hover:bg-white/10 hover:border-violet-400/30 transition-all duration-300 focus:outline-none"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
                {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden border-t border-white/[0.07]"
          >
            <div className="px-4 pt-3 pb-6 bg-[#07070f]/95 backdrop-blur-3xl">
              {/* Thin top accent */}
              <div className="h-px w-full mb-4 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

              <div className="flex flex-col gap-1.5">
                {navItems.map((item, i) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.05, duration: 0.4 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 group ${
                        activeSection === item.to
                          ? "border-violet-500/40 bg-violet-500/10 text-white"
                          : "border-white/[0.06] bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.07] hover:border-white/10"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        activeSection === item.to ? "bg-violet-500/20 border border-violet-400/30" : "bg-white/[0.05] border border-white/[0.08] group-hover:border-violet-400/20"
                      }`}>
                        <item.Icon className="w-4 h-4" style={{ color: activeSection === item.to ? "#a78bfa" : undefined }} />
                      </div>
                      <span className="font-semibold text-sm">{item.name}</span>
                      {activeSection === item.to && (
                        <motion.div
                          layoutId="mobileActive"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400"
                          style={{ boxShadow: "0 0 8px rgba(167,139,250,0.8)" }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}

                {/* Mobile CV button */}
                <motion.a
                  href="/assets/Raihan_CV.pdf"
                  download="Raihan_CV.pdf"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white overflow-hidden border border-violet-400/30 relative group"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#6366f1,#06b6d4)" }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  <FiDownload className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Download CV</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
