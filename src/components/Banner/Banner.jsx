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
import Navbar from "../Navbar/Navbar";
import backgroundImage from "./assets/cover.jpeg";
import { bannerData } from "./bannerData";

const Banner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Background Image Layer - More Clear and Visible */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'brightness(0.6) contrast(1.15) saturate(1.1)',
          }}
        />
        {/* Lighter gradient overlay to keep background clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/30 via-transparent to-[#0a0a0f]/30" />
      </div>

      {/* Accent overlays and effects */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-violet-500/5 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Content Container - Centered and Clean */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-6 mx-auto text-center"
      >
        {/* Clean Greeting */}
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-lg font-medium text-gray-400"
        >
          {bannerData.title}
        </motion.p>

        {/* Large Name */}
        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
        >
          {bannerData.name}
        </motion.h1>

        {/* Typing Animation for Roles */}
        <motion.div variants={fadeInUp} className="h-20 mb-8">
          <TypeAnimation
            sequence={[...bannerData.roles.flatMap((role) => [role, 2000])]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Simple Description */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl mb-12 text-lg text-gray-400 leading-relaxed"
        >
          <ReactMarkdown>{bannerData.description}</ReactMarkdown>
        </motion.p>

        {/* Clean CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {bannerData.ctaButtons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 btn-glow ${
                button.primary
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-purple-500/40 backdrop-blur-sm"
              }`}
            >
              {button.text}
            </motion.a>
          ))}
        </motion.div>

        {/* Minimal Social Links */}
        <motion.div variants={fadeInUp} className="flex gap-4">
          {bannerData.socialLinks.map((link, index) => {
            const Icon = {
              FaGithub,
              FaLinkedin,
              FaEnvelope,
              FaYoutube,
              FaFacebook,
              FaInstagram,
              FaMedium,
              BiLogoDevTo,
              FaWhatsapp,
            }[link.icon];

            return (
              <motion.a
                key={index}
                href={link.url}
                target={link.name === "Email" ? "_self" : "_blank"}
                rel={link.name === "Email" ? "" : "noopener noreferrer"}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm text-gray-400 transition-all duration-300 hover:text-purple-400 hover:bg-white/10 border border-white/10 hover:border-purple-500/30"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Simple Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-purple-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
