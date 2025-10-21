import { motion } from "framer-motion";
import React from "react";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { problemSolvingData } from "./problemSolvingData";

const ProblemSolving = () => {
  // Platform logos mapping
  const getPlatformLogo = (platformName) => {
    const logos = {
      LeetCode: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
      Codeforces: "https://sta.codeforces.com/s/50395/images/codeforces-logo-with-telegram.png",
      CodeChef: "https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png",
      AtCoder: "https://img.atcoder.jp/assets/atcoder.png"
    };
    return logos[platformName] || "";
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
            className="inline-flex flex-col items-center gap-2"
          >
            <motion.div
              className="px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 relative overflow-hidden text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/25 border border-white/10"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10">Problem Solving Platforms</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-75"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear"
                }}
              />
            </motion.div>
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
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
                <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${
                  platform.name === "LeetCode" ? "from-orange-500/10 to-red-600/10" :
                  platform.name === "Codeforces" ? "from-blue-500/10 to-indigo-600/10" :
                  platform.name === "CodeChef" ? "from-amber-500/10 to-orange-600/10" :
                  "from-purple-500/10 to-pink-600/10"
                } border-2 border-white/10 backdrop-blur-lg hover:border-white/30 transition-all duration-500 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]`}>
                  {/* Enhanced Background Glow Effects */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${
                    platform.name === "LeetCode" ? "from-orange-500 to-red-600" :
                    platform.name === "Codeforces" ? "from-blue-500 to-indigo-600" :
                    platform.name === "CodeChef" ? "from-amber-500 to-orange-600" :
                    "from-purple-500 to-pink-600"
                  } rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`} />
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"
                    animate={{
                      rotate: [45, 405],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Floating Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: Math.random() * 60 + 20,
                        height: Math.random() * 60 + 20,
                        background: platform.name === "LeetCode" ? 'rgba(249, 115, 22, 0.1)' :
                          platform.name === "Codeforces" ? 'rgba(59, 130, 246, 0.1)' :
                          platform.name === "CodeChef" ? 'rgba(251, 191, 36, 0.1)' :
                          'rgba(139, 92, 246, 0.1)',
                        filter: 'blur(20px)',
                      }}
                      animate={{
                        x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                        y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 8 + 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center p-2.5 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                          <img 
                            src={getPlatformLogo(platform.name)}
                            alt={platform.name}
                            className={`w-full h-full object-contain ${platform.name === "Codeforces" ? "scale-150" : ""}`}
                            style={{
                              filter: platform.name === "Codeforces" ? "brightness(1.2) contrast(1.1)" : "none"
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white tracking-wide">{platform.name || "Platform"}</h3>
                          <p className="text-gray-400 font-medium">@{platform.username || "username"}</p>
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
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {platform.stats ? Object.entries(platform.stats).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                          <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{value}</div>
                          <div className="text-sm text-gray-400 capitalize mt-1 font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      )) : (
                        <div className="col-span-2 text-center text-gray-400">No stats available</div>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 text-sm text-white mb-3">
                        <FiAward className="text-yellow-400 text-lg" />
                        <span className="font-semibold tracking-wide">Achievements</span>
                      </div>
                      {platform.achievements?.length > 0 ? platform.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-3 hover:text-white transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
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
