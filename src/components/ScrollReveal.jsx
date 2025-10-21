import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({ children, animation = "fadeUp", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 75 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -75 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 75 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
    fadeRight: {
      hidden: { opacity: 0, x: -75 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10, scale: 0.95 },
      visible: { 
        opacity: 1, 
        rotate: 0,
        scale: 1,
        transition: {
          duration: 0.7,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
