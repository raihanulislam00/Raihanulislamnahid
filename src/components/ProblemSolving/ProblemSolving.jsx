import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiExternalLink, FiTrendingUp, FiCode, FiAward, FiTarget, FiZap, FiCpu } from "react-icons/fi";
import { problemSolvingData } from "./problemSolvingData";

const ProblemSolving = () => {
  const [activeTab, setActiveTab] = useState("platforms");

  // Icon mapping function
  const getIcon = (iconName) => {
    const iconMap = {
      FiCode: FiCode,
      FiTarget: FiTarget,
      FiZap: FiZap,
      FiCpu: FiCpu,
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="text-3xl" /> : <div className="text-3xl">🏆</div>;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-400 bg-green-500/10 border-green-500/20";
      case "medium":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
      case "hard":
        return "text-red-400 bg-red-500/10 border-red-500/20";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20";
    }
  };

  // Debug function to check data
  console.log("Active Tab:", activeTab);
  console.log("Problem Solving Data:", problemSolvingData);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6"
          >
            <FiCode className="text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Problem Solving</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-4">
            {problemSolvingData?.title || "Competitive Programming & Problem Solving"}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {problemSolvingData?.description || "Passionate about algorithmic problem solving and competitive programming"}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["platforms", "skills", "recent", "statistics"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                console.log("Tab clicked:", tab);
                setActiveTab(tab);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                activeTab === tab
                  ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25"
                  : "text-gray-400 bg-gray-800/50 hover:bg-gray-700/50 hover:text-white"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 capitalize">
                {tab === "recent" ? "Recent Problems" : 
                 tab === "statistics" ? "Statistics" : tab}
              </span>
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="min-h-[600px]"
        >
          {/* Debug: Show current active tab */}
          <div className="text-center mb-4 text-gray-400 text-sm">
            Current Tab: {activeTab}
          </div>

          {/* Platforms Tab */}
          {activeTab === "platforms" && (
            <motion.div
              key="platforms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {problemSolvingData?.platforms?.length > 0 ? (
                problemSolvingData.platforms.map((platform, index) => (
                  <motion.div
                    key={platform.id || index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`p-8 rounded-2xl bg-gradient-to-br ${platform.color || 'from-gray-700 to-gray-800'} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 relative overflow-hidden`}>
                      {/* Background Glow */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${platform.color || 'from-gray-500 to-gray-600'} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div>{getIcon(platform.icon)}</div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{platform.name || "Platform"}</h3>
                              <p className="text-gray-400">@{platform.username || "username"}</p>
                            </div>
                          </div>
                          <motion.a
                            href={platform.profileUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiExternalLink className="text-gray-400" />
                          </motion.a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {platform.stats ? Object.entries(platform.stats).slice(0, 4).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-white">{value}</div>
                              <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          )) : (
                            <div className="col-span-2 text-center text-gray-400">No stats available</div>
                          )}
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                            <FiAward className="text-yellow-400" />
                            <span className="font-medium">Achievements</span>
                          </div>
                          {platform.achievements?.length > 0 ? platform.achievements.map((achievement, idx) => (
                            <div key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                              {achievement}
                            </div>
                          )) : (
                            <div className="text-sm text-gray-400">No achievements listed</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400">
                  <p className="text-xl mb-4">No platforms data available</p>
                  <p className="text-sm">Please check the problemSolvingData.js file</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {problemSolvingData?.skills?.length > 0 ? (
                problemSolvingData.skills.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category || index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-500"
                  >
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <FiTrendingUp className="text-cyan-400" />
                      {skillCategory.category || "Skills"}
                    </h3>
                    <div className="space-y-3">
                      {skillCategory.items?.length > 0 ? skillCategory.items.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-600/30 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                          <span className="text-gray-300 font-medium">{skill}</span>
                        </motion.div>
                      )) : (
                        <div className="text-gray-400">No skills listed</div>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400">
                  <p className="text-xl mb-4">No skills data available</p>
                  <p className="text-sm">Please check the problemSolvingData.js file</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Recent Problems Tab */}
          {activeTab === "recent" && (
            <motion.div
              key="recent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {problemSolvingData?.recentProblems?.length > 0 ? (
                  problemSolvingData.recentProblems.map((problem, index) => (
                    <motion.div
                      key={problem.id || index}
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {problem.title || "Problem Title"}
                          </h4>
                          <p className="text-gray-400 text-sm">{problem.platform || "Platform"}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getDifficultyColor(problem.difficulty || "medium")}`}>
                            {problem.difficulty || "Medium"}
                          </span>
                          {problem.solved && (
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {problem.topics?.length > 0 ? problem.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-md text-xs bg-gray-700/50 text-gray-300"
                          >
                            {topic}
                          </span>
                        )) : (
                          <span className="px-2 py-1 rounded-md text-xs bg-gray-700/50 text-gray-300">
                            No topics
                          </span>
                        )}
                      </div>
                      
                      <motion.a
                        href={problem.solutionUrl || "#"}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        View Solution
                        <FiExternalLink className="w-3 h-3" />
                      </motion.a>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-400">
                    <p className="text-xl mb-4">No recent problems data available</p>
                    <p className="text-sm">Please check the problemSolvingData.js file</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Statistics Tab */}
          {activeTab === "statistics" && (
            <motion.div
              key="statistics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Overall Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{problemSolvingData?.statistics?.totalProblems || "0"}</h3>
                  <p className="text-cyan-400 font-medium">Total Problems Solved</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{problemSolvingData?.statistics?.totalContests || "0"}</h3>
                  <p className="text-purple-400 font-medium">Contests Participated</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{problemSolvingData?.statistics?.averageRating || "0"}</h3>
                  <p className="text-green-400 font-medium">Average Rating</p>
                </motion.div>
              </div>

              {/* Recent Contests */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {problemSolvingData?.contests?.length > 0 ? (
                  problemSolvingData.contests.map((contest, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300"
                    >
                      <h4 className="text-lg font-bold text-white mb-2">{contest.name || "Contest Name"}</h4>
                      <p className="text-gray-400 text-sm mb-3">{contest.platform || "Platform"}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rank:</span>
                          <span className="text-white font-medium">{contest.rank || "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rating:</span>
                          <span className="text-green-400 font-medium">{contest.rating || "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Problems:</span>
                          <span className="text-white font-medium">{contest.problems || "0"}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-400">
                    <p className="text-xl mb-4">No contest data available</p>
                    <p className="text-sm">Please check the problemSolvingData.js file</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;
