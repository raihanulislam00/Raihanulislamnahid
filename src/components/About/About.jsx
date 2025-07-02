import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowRight,
  FiAward,
  FiBook,
  FiBriefcase,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { education, experience, skills, stats } from "./aboutData";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const iconFloatVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textShimmerVariants = {
    hidden: { backgroundPosition: "-200% 0" },
    visible: {
      backgroundPosition: "200% 0",
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-16 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Enhanced Header with improved particle effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mb-20 text-center"
        >
          {/* Enhanced floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 4,
                  height: Math.random() * 6 + 4,
                  background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#3b82f6' : '#8b5cf6',
                  opacity: 0.3,
                }}
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: 0,
                }}
                animate={{
                  y: [
                    Math.random() * 100 + "%", 
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%"
                  ],
                  x: [
                    Math.random() * 100 + "%", 
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%"
                  ],
                  scale: [0, 1, 0.5, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: Math.random() * 5 + 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          <motion.h2
            className="relative z-10 mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            variants={textShimmerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background:
                "linear-gradient(90deg, #ffffff 20%, #06b6d4 40%, #3b82f6 60%, #ffffff 80%)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
            }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="relative z-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative p-8 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
              <p className="relative text-lg leading-relaxed text-gray-300 mb-4">
                I'm a passionate <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Software Engineering student</span> at 
                <span className="font-bold text-white"> AIUB (American International University-Bangladesh)</span> with a deep fascination for technology and problem-solving. 
                Currently serving as a <span className="font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Junior Software Engineer</span>, 
                I thrive on tackling complex challenges and creating innovative solutions.
              </p>
              <p className="relative text-lg leading-relaxed text-gray-300">
                I'm particularly passionate about <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">competitive programming</span> and actively participate on platforms like{" "}
                <motion.span
                  className="relative font-bold text-cyan-400"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Codeforces, CodeChef, and AtCoder
                  <motion.span 
                    className="absolute -inset-1 bg-cyan-400/20 rounded blur-sm -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.span>. 
                My journey in software development is driven by curiosity, continuous learning, and the desire to create meaningful impact through technology.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats with improved design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 mb-20 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
              className="relative p-8 overflow-hidden text-center transition-all duration-500 cursor-pointer bg-gray-800/40 backdrop-blur-xl rounded-2xl group border border-gray-700/50 shadow-xl"
            >
              {/* Enhanced animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))",
                    "linear-gradient(225deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))",
                    "linear-gradient(315deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.3), transparent, rgba(59, 130, 246, 0.3), transparent)",
                  backgroundSize: "400% 400%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="flex justify-center mb-6"
                variants={iconFloatVariants}
                animate="animate"
              >
                <div className="relative">
                  <FiAward className="relative z-10 w-10 h-10 transition-all duration-500 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110" />
                  <motion.div 
                    className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              <motion.h3
                className="relative z-10 mb-3 text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {stat.value}
              </motion.h3>
              <p className="relative z-10 text-gray-400 group-hover:text-gray-300 font-medium transition-colors duration-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3 
            className="mb-12 text-3xl font-bold text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -8, 
                    transition: { type: "spring", stiffness: 300 } 
                  }}
                  className="relative p-8 transition-all duration-500 bg-gray-800/40 backdrop-blur-xl rounded-2xl group hover:bg-gray-800/60 border border-gray-700/50 shadow-xl overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color.includes('cyan') ? 'rgba(6, 182, 212, 0.1)' : 
                        skill.color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : 
                        skill.color.includes('green') ? 'rgba(34, 197, 94, 0.1)' :
                        skill.color.includes('purple') ? 'rgba(139, 92, 246, 0.1)' :
                        skill.color.includes('pink') ? 'rgba(236, 72, 153, 0.1)' :
                        'rgba(6, 182, 212, 0.1)'}, transparent)`
                    }}
                  />
                  
                  <div className="flex items-center gap-6 mb-6">
                    <motion.div
                      className={`relative p-4 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-500`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      <motion.div 
                        className="absolute inset-0 bg-white/10 rounded-xl blur-xl"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (techIndex * 0.05), duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-2 text-xs font-medium rounded-lg text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 transition-all duration-300 border border-cyan-400/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Experience/Education Switcher */}
        <motion.div 
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setActiveTab("experience")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500 font-semibold text-lg relative overflow-hidden ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl shadow-cyan-500/30"
                : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
            }`}
          >
            {activeTab === "experience" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <FiBriefcase className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Experience</span>
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("education")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500 font-semibold text-lg relative overflow-hidden ${
              activeTab === "education"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl shadow-cyan-500/30"
                : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
            }`}
          >
            {activeTab === "education" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <FiBook className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Education</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Experience/Education Content */}
        <motion.div layout className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="relative p-8 transition-all duration-500 bg-gray-800/40 backdrop-blur-xl rounded-2xl hover:bg-gray-800/60 border border-gray-700/50 shadow-xl group overflow-hidden"
                  >
                    {/* Enhanced background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))"
                      }}
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                        <div className="flex-1 min-w-0">
                          <motion.h4 
                            className="mb-2 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            {job.title}
                          </motion.h4>
                          <p className="font-semibold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            {job.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-3 mb-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <FiCalendar className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium">{job.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <FiMapPin className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium">{job.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="mb-6 space-y-3">
                        {job.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (i * 0.05) }}
                            className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                          >
                            {item.startsWith("⭐") ? (
                              <h5 className="text-xl font-bold text-cyan-400">
                                <ReactMarkdown>{item}</ReactMarkdown>
                              </h5>
                            ) : (
                              <>
                                <FiArrowRight className="w-5 h-5 mt-1 text-cyan-400 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  <ReactMarkdown>{item}</ReactMarkdown>
                                </span>
                              </>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.1) + (techIndex * 0.03) }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 text-sm font-medium rounded-xl text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 transition-all duration-300 border border-cyan-400/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="relative p-8 transition-all duration-500 bg-gray-800/40 backdrop-blur-xl rounded-2xl hover:bg-gray-800/60 border border-gray-700/50 shadow-xl group overflow-hidden"
                  >
                    {/* Enhanced background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))"
                      }}
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                        <div className="flex-1 min-w-0">
                          <motion.h4 
                            className="mb-2 text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            {edu.degree}
                          </motion.h4>
                          <p className="font-semibold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-3 mb-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <FiCalendar className="w-5 h-5 text-purple-400" />
                            <span className="font-medium">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <FiMapPin className="w-5 h-5 text-purple-400" />
                            <span className="font-medium">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (i * 0.05) }}
                            className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                          >
                            <FiArrowRight className="w-5 h-5 mt-1 text-purple-400 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
