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

  return (
    <div className="min-h-screen py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-16 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* About Me and Skills Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          {/* Left Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-6xl font-bold text-white">
              About Me
            </h2>
            
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                Currently working as a <span className="text-gray-300 font-semibold">Associate Software Engineer I</span> at Cefalo Bangladesh Ltd.
              </p>
              <p>
                I also run a <span className="text-gray-300 font-semibold">YouTube channel</span>{" "}
                <a href="#" className="text-cyan-400 font-semibold hover:underline">Learn and Code</a> where I share knowledge and inspire others in their coding journey.
              </p>
            </div>

            {/* Stats Grid under About Me */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 text-center group hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <FiAward className="w-10 h-10 text-blue-400 mb-2" />
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-[#0f1419] backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
              {/* Terminal Content - No Header */}
              <div className="p-5 font-mono text-[13px] leading-relaxed">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-lg">●</span>
                    <span className="text-gray-300 font-semibold">Skills@expertise:~$</span>
                  </div>
                  <div className="text-gray-600 text-[11px]">
                    {new Date().toLocaleDateString('en-US', { 
                      month: '2-digit', 
                      day: '2-digit', 
                      year: 'numeric' 
                    })}, {new Date().toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit', 
                      second: '2-digit',
                      hour12: true 
                    })}
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className="space-y-1"
                      >
                        {/* Service Name and Status */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 flex-1 min-w-0">
                            <span className="text-cyan-400 text-base flex-shrink-0">●</span>
                            <span className="text-white font-medium text-[13px] flex-shrink-0">
                              {skill.name.toLowerCase().replace(/\s+/g, '_').replace(/\//g, '_').replace(/&/g, 'and').replace(/ui_ux/g, 'ui/ux')}.service
                            </span>
                            <span className="text-cyan-400 text-[11px] whitespace-nowrap flex-shrink-0">
                              active ({skill.level}% loaded)
                            </span>
                          </div>
                          <div className="flex items-center gap-2.5 flex-shrink-0">
                            <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
                                className="h-full bg-blue-500 rounded-full"
                              />
                            </div>
                            <span className="text-gray-500 text-[11px] w-7 text-right">{skill.level}%</span>
                          </div>
                        </div>
                        
                        {/* Dependencies */}
                        <div className="pl-6 text-gray-600 text-[11px] leading-relaxed">
                          <span className="text-gray-700">dependencies:</span>{" "}
                          {skill.technologies.map((tech, i) => (
                            <span key={i}>
                              {tech.toLowerCase()}
                              {i < skill.technologies.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Command Line */}
                <div className="mt-6 space-y-1.5">
                  <div className="text-purple-500 text-[12px]">
                    $ cat /proc/skills
                  </div>
                  <div className="text-cyan-400 text-[12px]">
                    Loading skill services...
                  </div>
                  <div className="text-purple-500 text-[12px]">
                    $ systemctl status skills
                  </div>
                  <div className="text-gray-600 text-[11px]">
                    ✓ {skills.length} services loaded, {skills.length} active, 0 failed
                  </div>
                  <div className="mt-3 flex items-center gap-1">
                    <span className="text-purple-500 text-[12px]">$</span>
                    <span className="text-white animate-pulse text-[12px]">_</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>





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
