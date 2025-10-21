import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
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

  return (
    <div className="min-h-screen py-20 overflow-hidden relative">
      
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
                I&apos;m a passionate <span className="text-gray-300 font-semibold">Computer Science and Engineering student</span> at AIUB (American International University-Bangladesh) with a deep fascination for technology and problem-solving. Currently serving as a <span className="text-gray-300 font-semibold">Junior Software Engineer</span>, I thrive on tackling complex challenges and creating innovative solutions.
              </p>
              <p>
                I&apos;m particularly passionate about <span className="text-gray-300 font-semibold">competitive programming</span> and actively participate on platforms like <span className="text-cyan-400 font-semibold">Codeforces, CodeChef, and AtCoder</span>. My journey in software development is driven by curiosity, continuous learning, and the desire to create meaningful impact through technology.
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
                  className="relative p-6 card-unique card-glow text-center group"
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





        {/* Modern Tab Switcher with Timeline Design */}
        <motion.div 
          className="relative max-w-md mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Track */}
          <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50"></div>
          
          {/* Animated Slider */}
          <motion.div
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl shadow-lg"
            animate={{
              x: activeTab === "experience" ? "0%" : "100%"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          {/* Tab Buttons */}
          <div className="relative flex">
            <motion.button
              onClick={() => setActiveTab("experience")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex-1 px-8 py-5 flex items-center justify-center gap-3 font-bold text-lg transition-all duration-300"
            >
              <FiBriefcase className={`w-6 h-6 transition-colors duration-300 ${
                activeTab === "experience" ? "text-white" : "text-gray-400"
              }`} />
              <span className={`transition-colors duration-300 ${
                activeTab === "experience" ? "text-white" : "text-gray-400"
              }`}>
                Experience
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab("education")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex-1 px-8 py-5 flex items-center justify-center gap-3 font-bold text-lg transition-all duration-300"
            >
              <FiBook className={`w-6 h-6 transition-colors duration-300 ${
                activeTab === "education" ? "text-white" : "text-gray-400"
              }`} />
              <span className={`transition-colors duration-300 ${
                activeTab === "education" ? "text-white" : "text-gray-400"
              }`}>
                Education
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Modern Timeline Content */}
        <motion.div layout className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>
          
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-gray-900 shadow-lg hidden md:block"
                      whileHover={{ scale: 1.3 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(6, 182, 212, 0.4)",
                          "0 0 0 10px rgba(6, 182, 212, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 5, y: -5 }}
                      className="relative group"
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
                      
                      {/* Main Card */}
                      <div className="relative card-unique card-shimmer p-8"
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                          {/* Header Section */}
                          <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                            <div className="flex-1 min-w-0">
                              <h4 className="mb-3 text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                                {job.title}
                              </h4>
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                                <p className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                  {job.company}
                                </p>
                              </div>
                            </div>
                            
                            {/* Info Pills */}
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
                                <FiCalendar className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-semibold text-cyan-400">{job.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm">
                                <FiMapPin className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-semibold text-blue-400">{job.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Divider */}
                          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-6"></div>
                          
                          {/* Description */}
                          <ul className="mb-6 space-y-3">
                            {job.description.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-300 group-hover:text-gray-100 transition-colors duration-300"
                              >
                                {item.startsWith("⭐") ? (
                                  <h5 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    <ReactMarkdown>{item}</ReactMarkdown>
                                  </h5>
                                ) : (
                                  <>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 flex-shrink-0"></div>
                                    <span className="leading-relaxed text-sm">
                                      <ReactMarkdown>{item}</ReactMarkdown>
                                    </span>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-800/80 text-gray-300 border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-gray-900 shadow-lg hidden md:block"
                      whileHover={{ scale: 1.3 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(139, 92, 246, 0.4)",
                          "0 0 0 10px rgba(139, 92, 246, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 5, y: -5 }}
                      className="relative group"
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
                      
                      {/* Main Card */}
                      <div className="relative card-unique card-shimmer p-8">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                          {/* Header Section */}
                          <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                            <div className="flex-1 min-w-0">
                              <h4 className="mb-3 text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                {edu.degree}
                              </h4>
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                                <p className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                  {edu.institution}
                                </p>
                              </div>
                            </div>
                            
                            {/* Info Pills */}
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg backdrop-blur-sm">
                                <FiCalendar className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-400">{edu.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-lg backdrop-blur-sm">
                                <FiMapPin className="w-4 h-4 text-pink-400" />
                                <span className="text-sm font-semibold text-pink-400">{edu.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Divider */}
                          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6"></div>
                          
                          {/* Achievements */}
                          <ul className="space-y-3">
                            {edu.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-300 group-hover:text-gray-100 transition-colors duration-300"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
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
