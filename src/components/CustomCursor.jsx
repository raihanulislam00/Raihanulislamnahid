import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);

  useEffect(() => {
    visibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCapability = () => {
      setIsEnabled(mediaQuery.matches && !reduceMotionQuery.matches);
    };

    updateCapability();
    mediaQuery.addEventListener("change", updateCapability);
    reduceMotionQuery.addEventListener("change", updateCapability);

    return () => {
      mediaQuery.removeEventListener("change", updateCapability);
      reduceMotionQuery.removeEventListener("change", updateCapability);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isEnabled) {
      root.classList.add("custom-cursor-enabled");
    } else {
      root.classList.remove("custom-cursor-enabled");
    }

    return () => {
      root.classList.remove("custom-cursor-enabled");
    };
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return undefined;

    let frameId;
    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, label';

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.22;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.22;
      setMousePosition({ x: currentRef.current.x, y: currentRef.current.y });
      frameId = window.requestAnimationFrame(animate);
    };

    const mouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };

      if (!visibleRef.current) {
        currentRef.current = { x: e.clientX, y: e.clientY };
        setMousePosition({ x: e.clientX, y: e.clientY });
      }

      setIsVisible(true);
    };

    const onPointerOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        setCursorVariant("hover");
      }
    };

    const onPointerOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        setCursorVariant("default");
      }
    };

    const onPointerDown = () => {
      setCursorVariant("pressed");
    };

    const onPointerUp = (e) => {
      if (e.target.closest(interactiveSelector)) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    const mouseLeave = () => {
      setIsVisible(false);
    };

    const visibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseout", mouseLeave);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("visibilitychange", visibilityChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseout", mouseLeave);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("visibilitychange", visibilityChange);
    };
  }, [isEnabled]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.55,
      backgroundColor: "rgba(59, 130, 246, 0.24)",
      borderColor: "rgba(56, 189, 248, 0.8)",
    },
    pressed: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.1,
      backgroundColor: "rgba(56, 189, 248, 0.45)",
      borderColor: "rgba(34, 211, 238, 1)",
    },
  };

  if (!isEnabled || !isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden lg:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 26,
          mass: 0.35,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-sky-300/80 bg-sky-400/15 shadow-[0_0_24px_rgba(56,189,248,0.45)]" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 pointer-events-none z-[9998] hidden lg:block"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
          mass: 0.14,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
      </motion.div>

      {/* Soft glow follower */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9997] hidden lg:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: cursorVariant === "hover" ? 0.32 : 0.18,
          scale: cursorVariant === "hover" ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
          mass: 0.2,
        }}
      >
        <div className="w-full h-full rounded-full bg-cyan-300/40 blur-md" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
