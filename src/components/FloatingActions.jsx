import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiBookmark,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/raihanulislam00",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raihanulislam00/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: FiMail,
      label: "Email",
      href: "mailto:your@email.com",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FiBookmark,
      label: "Resume",
      href: "/assets/Raihan_CV.pdf",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="fixed z-40 right-8 bottom-28 hidden lg:block">
      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-3 mb-3"
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.label === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 50, scale: 0 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: -8,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-5 py-3.5 text-white rounded-full shadow-2xl bg-gradient-to-br ${action.color} group border-2 border-white/20 backdrop-blur-sm`}
                >
                  <Icon className="w-5 h-5" />
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    {action.label}
                  </motion.span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ 
          scale: 1.1, 
          rotate: 90,
          boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-16 h-16 text-white transition-all duration-300 rounded-full shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-cyan-400/30"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingActions;
