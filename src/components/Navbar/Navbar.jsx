import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import { Link } from "react-scroll";

const navItems = [
  { name: "About", to: "about" },
  { name: "Projects", to: "project" },
  { name: "Problem Solving", to: "problemsolving" },
  { name: "Achievements", to: "achivement" },
  { name: "Photography", to: "photo" },
  { name: "Blog", to: "blog" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-2xl shadow-2xl shadow-black/20 border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        animate={{
          opacity: scrolled ? 1 : 0,
          background: [
            "linear-gradient(90deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(79, 70, 229, 0.05) 100%)",
            "linear-gradient(90deg, rgba(79, 70, 229, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(90deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(79, 70, 229, 0.05) 100%)",
          ],
        }}
        transition={{
          background: { duration: 8, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.5 }
        }}
      />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Personal Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.a
              href="https://github.com/raihanulislam00"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group relative p-3 rounded-3xl transition-all duration-700 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-400/20"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Professional Glow Aura */}
              <motion.div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15), rgba(79, 70, 229, 0.15), rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.15))",
                  filter: "blur(20px)"
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Sophisticated Avatar Container */}
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  className="relative p-3 rounded-2xl bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 group-hover:from-gray-700/90 group-hover:via-gray-600/90 group-hover:to-gray-700/90 transition-all duration-700 border border-gray-600/40 group-hover:border-cyan-400/50 shadow-2xl"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {/* Premium Avatar */}
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-xl relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="relative z-10">R</span>
                    
                    {/* Animated shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 2,
                      }}
                    />
                  </motion.div>
                  
                  {/* Dynamic Glow Pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Enhanced Professional Information */}
              <div className="relative flex flex-col justify-center space-y-1">
                {/* Animated Name with Premium Typography */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.h1
                    className="text-xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent tracking-tight"
                    style={{
                      backgroundSize: "400% 100%",
                      fontFamily: "'Inter', 'system-ui', sans-serif",
                      letterSpacing: "-0.025em"
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    raihanulislam00
                  </motion.h1>
                  
                  {/* Elegant underline animation */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </motion.div>
                
                {/* Simple Professional Title */}
                <motion.div
                  className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors duration-500 font-medium"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Junior Software Engineer
                </motion.div>
              </div>
            </motion.a>
          </motion.div>

          {/* All-in-One Compact Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            {/* Desktop Navigation Links */}
            <div className="items-center hidden lg:flex">
              <div className="flex items-center space-x-1 p-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={() => setActiveSection(item.to)}
                    className="relative px-4 py-2.5 cursor-pointer group rounded-2xl transition-all duration-300"
                  >
                    <motion.span
                      className={`relative z-10 text-sm font-semibold transition-all duration-300
                        ${
                          activeSection === item.to
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Enhanced active indicator */}
                    {activeSection === item.to && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Compact CV Download Button */}
            <motion.a
              href="/assets/Sumonta_CV.pdf"
              download="Raihanul_Islam_CV.pdf"
              className="relative group overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, type: "spring", bounce: 0.3 }}
            >
              <motion.div
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 relative overflow-hidden border border-emerald-400/30 shadow-xl shadow-emerald-500/25"
                style={{
                  background: "linear-gradient(135deg, #10b981, #14b8a6, #059669)",
                }}
              >
                {/* Content */}
                <span className="relative z-20 text-sm font-bold text-white flex items-center gap-2 tracking-wide">
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ y: [0, -2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                  <span className="hidden sm:inline">Download CV</span>
                  <span className="sm:hidden">CV</span>
                </span>
                
                {/* Animated wave shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  initial={{ x: "-150%" }}
                  whileHover={{ x: "150%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                
                {/* Enhanced outer glow */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-green-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.a>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="relative z-10 p-3 text-gray-300 rounded-2xl lg:hidden bg-white/5 hover:bg-white/10 hover:text-white focus:outline-none transition-all duration-300 border border-white/10 backdrop-blur-xl shadow-lg"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="sr-only">Open menu</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <RiCloseLine className="w-6 h-6" />
                ) : (
                  <RiMenu4Line className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden border-t border-white/10"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-6 pt-6 pb-8 bg-gray-900/98 backdrop-blur-3xl"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="relative overflow-hidden rounded-2xl group"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-4 text-lg font-semibold text-gray-300 transition-all duration-300 group-hover:text-white relative bg-white/5 group-hover:bg-white/10 backdrop-blur-xl border border-white/10 group-hover:border-cyan-400/30 rounded-2xl"
                    >
                      {/* Background gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                      />
                      
                      {/* Icon */}
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="relative z-10">{item.name}</span>
                      </div>
                      
                      {/* Border effect */}
                      <motion.div
                        className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                ))}
                
                {/* Enhanced mobile CV download button - centered */}
                <div className="flex justify-center mt-6">
                  <motion.a
                    href="/assets/Sumonta_CV.pdf"
                    download="Raihanul_Islam_CV.pdf"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 overflow-hidden group flex items-center justify-center gap-3 backdrop-blur-xl border border-emerald-400/30 shadow-xl shadow-emerald-500/25 w-full max-w-xs"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="relative z-10">Download CV</span>
                    
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-emerald-400/30"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
