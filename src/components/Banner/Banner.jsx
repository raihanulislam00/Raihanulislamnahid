import { motion } from "framer-motion";
import { BiLogoDevTo } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { TypeAnimation } from "react-type-animation";
import { bannerData } from "./bannerData";
import CodingAvatar from "../CodingAvatar";

const Banner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050510]">

      {/* ── AURORA BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#050510] to-[#000d1a]" />

        {/* Aurora blob 1 – purple */}
        <motion.div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(109,40,217,0.08) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora blob 2 – indigo-blue */}
        <motion.div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{ x: [0, -50, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Aurora blob 3 – pink */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.06) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Aurora blob 4 – cyan accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,16,0.8)_100%)]" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 mx-auto gap-12 pt-20 pb-10"
      >
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-start justify-center flex-1 text-left max-w-2xl">

          {/* Status badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 border border-purple-500/25 text-purple-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-base font-medium text-gray-500 tracking-widest uppercase"
          >
            {bannerData.title}
          </motion.p>

          {/* Name – gradient */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #fff 0%, #e2d9f3 30%, #a855f7 60%, #6366f1 100%)",
              }}
            >
              {bannerData.name}
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div variants={fadeInUp} className="mb-8 h-12">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-purple-500 rounded-full" />
              <TypeAnimation
                sequence={[...bannerData.roles.flatMap((role) => [role, 2000])]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            className="max-w-xl mb-10 text-base lg:text-[17px] text-gray-400 leading-relaxed border-l-2 border-purple-500/30 pl-4"
          >
            <ReactMarkdown>{bannerData.description}</ReactMarkdown>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-start gap-4 mb-10"
          >
            {bannerData.ctaButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 overflow-hidden group ${
                  button.primary
                    ? "text-white shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-purple-500/40 backdrop-blur-sm"
                }`}
                style={button.primary ? {
                  background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #4f46e5 100%)",
                } : {}}
              >
                {button.primary && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #6366f1 100%)",
                    }}
                  />
                )}
                <span className="relative z-10">{button.text}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex gap-3 flex-wrap">
            {bannerData.socialLinks.map((link, index) => {
              const Icon = {
                FaGithub, FaLinkedin, FaEnvelope, FaYoutube,
                FaFacebook, FaInstagram, FaMedium, BiLogoDevTo, FaWhatsapp,
              }[link.icon];

              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.name === "Email" ? "_self" : "_blank"}
                  rel={link.name === "Email" ? "" : "noopener noreferrer"}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                  className="group relative flex items-center justify-center w-11 h-11 rounded-xl backdrop-blur-sm text-gray-500 transition-all duration-300 hover:text-white border border-white/8 hover:border-purple-500/50"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <Icon className="w-[18px] h-[18px] relative z-10 transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(99,102,241,0.2))" }} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Decorative stats strip */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex gap-8 border-t border-white/5 pt-8 w-full"
          >
            {[
              { label: "Years of Experience", value: "1+" },
              { label: "Projects Completed", value: "25+" },
              { label: "Problems Solved", value: "1500+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-gray-500 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: 3D Orb + decorative ring */}
        <motion.div
          variants={fadeInUp}
          className="relative flex-shrink-0 w-full lg:w-[500px] h-[320px] lg:h-[540px] flex items-center justify-center"
        >
          {/* Outer glow rings */}
          <motion.div
            className="absolute w-[380px] h-[380px] rounded-full border border-purple-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full border border-indigo-500/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {/* Big ambient glow */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute w-[250px] h-[250px] rounded-full bg-indigo-600/10 blur-2xl" />
          {/* 3D Coding Avatar */}
          <div className="relative w-full h-full">
            <CodingAvatar />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-600">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-purple-400"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;

