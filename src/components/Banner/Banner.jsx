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
import backgroundImage from "./assets/cover.jpg";
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

  const handleNewsletterSubscribe = () => {
    window.open(
      "https://www.linkedin.com/newsletters/learn-code-weekly-7309186050084544512/",
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Enhanced Newsletter Subscribe Button - With improved animations */}
      <motion.button
        onClick={handleNewsletterSubscribe}
        className="fixed z-30 flex items-center gap-2 px-3 py-2.5 text-white border rounded-lg shadow-2xl bottom-8 left-8 bg-gradient-to-r from-blue-600 to-blue-800 border-blue-400/30 backdrop-blur-sm md:px-4 md:py-3 md:gap-3 xs:left-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.5,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(37, 99, 235, 0.6)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* LinkedIn Icon with Pulse Effect */}
        <motion.div
          className="relative flex items-center justify-center p-2 bg-white rounded-md"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.7)",
              "0 0 0 8px rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <FaLinkedin className="text-blue-600" size={20} />
          <motion.span
            className="absolute w-2 h-2 bg-red-500 rounded-full -top-1 -right-1"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text with Animated Underline - Hidden on mobile */}
        <div className="hidden md:flex md:flex-col">
          <span className="text-sm font-bold lg:text-base">
            Weekly Newsletter
          </span>
          <motion.div className="relative h-1">
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-blue-300 rounded"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* "New" Badge */}
        <motion.div
          className="flex items-center justify-center px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          NEW
        </motion.div>
      </motion.button>

      {/* Content Container */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-10 pb-20 mx-auto text-center"
      >
        {/* Main Heading */}
        <motion.h2
          variants={fadeInUp}
          className="mb-4 text-xl font-medium text-blue-400 md:text-2xl"
        >
          {bannerData.title}
        </motion.h2>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          {bannerData.name}
        </motion.h1>

        {/* Animated Roles */}
        <motion.div variants={fadeInUp} className="h-16 mb-8 md:h-20">
          <TypeAnimation
            sequence={[...bannerData.roles.flatMap((role) => [role, 2000])]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-xl text-gray-300 md:text-3xl"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl mb-12 text-lg text-gray-400"
        >
          <ReactMarkdown>{bannerData.description}</ReactMarkdown>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {bannerData.ctaButtons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300
                ${
                  button.primary
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700"
                }`}
            >
              {button.text}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeInUp} className="flex gap-6">
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
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <div className="flex justify-center w-6 h-10 p-2 border-2 border-gray-500 rounded-full">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
