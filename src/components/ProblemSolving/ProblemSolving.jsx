import { motion } from "framer-motion";
import React from "react";
import { FiExternalLink, FiCode, FiAward } from "react-icons/fi";
import { FiTarget, FiZap, FiCpu } from "react-icons/fi";
import { problemSolvingData } from "./problemSolvingData";

const ProblemSolving = () => {
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
            transition={{ duration: .5, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6"
          >
            <FiCode className="text-cyan-400 text-3xl" />
            <span className="text-cyan-400 font-bold text-3xl">Problem Solving</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-4">
            {problemSolvingData?.title || ""}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
          <motion.div
            className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="relative z-10">Platforms</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl" />
          </motion.div>
        </motion.div>

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:gap-12"
        >
          {problemSolvingData?.platforms?.length > 0 ? (
            problemSolvingData.platforms.map((platform, index) => (
              <motion.div
                key={platform.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative h-full"
              >
                <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${platform.color || 'from-gray-700 to-gray-800'} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]`}>
                  {/* Background Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${platform.color || 'from-gray-500 to-gray-600'} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
                  
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
      </div>
    </section>
  );
};

export default ProblemSolving;
