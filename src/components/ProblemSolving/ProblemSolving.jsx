import { motion } from "framer-motion";
import React from "react";
import { FiExternalLink, FiAward, FiTrendingUp, FiCode, FiActivity } from "react-icons/fi";
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

  const getPlatformGradient = (platformName) => {
    const gradients = {
      LeetCode: "from-orange-500/20 via-yellow-500/20 to-red-500/20",
      Codeforces: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      CodeChef: "from-amber-500/20 via-orange-500/20 to-brown-500/20",
      AtCoder: "from-purple-500/20 via-pink-500/20 to-red-500/20"
    };
    return gradients[platformName] || "from-gray-500/20 to-gray-600/20";
  };

  const getPlatformBorderGradient = (platformName) => {
    const gradients = {
      LeetCode: "from-orange-500 via-yellow-500 to-red-500",
      Codeforces: "from-blue-500 via-indigo-500 to-purple-500",
      CodeChef: "from-amber-500 via-orange-500 to-brown-500",
      AtCoder: "from-purple-500 via-pink-500 to-red-500"
    };
    return gradients[platformName] || "from-gray-500 to-gray-600";
  };



  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Problem Solving Journey
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Mastering algorithms and data structures across multiple competitive programming platforms
          </p>

          {/* Overall Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
                <FiActivity className="text-cyan-400 text-2xl mb-2 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{problemSolvingData.statistics?.totalProblems || '2448'}</div>
                <div className="text-sm text-gray-400">Total Problems</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
                <FiTrendingUp className="text-green-400 text-2xl mb-2 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{problemSolvingData.statistics?.totalContests || '144'}</div>
                <div className="text-sm text-gray-400">Contests</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
                <FiAward className="text-yellow-400 text-2xl mb-2 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">4</div>
                <div className="text-sm text-gray-400">Platforms</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
                <FiCode className="text-purple-400 text-2xl mb-2 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{problemSolvingData.statistics?.averageRating || '1569'}</div>
                <div className="text-sm text-gray-400">Avg Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemSolvingData?.platforms?.length > 0 ? (
            problemSolvingData.platforms.map((platform, index) => (
              <motion.div
                key={platform.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${getPlatformBorderGradient(platform.name)} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500`}></div>
                
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br ${getPlatformGradient(platform.name)} backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 group-hover:border-gray-600/70`}>
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                    }}
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />

                  {/* Platform Header */}
                  <div className="relative z-10 flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      {/* Logo with glow */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${getPlatformBorderGradient(platform.name)} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                        <div className="relative w-14 h-14 flex items-center justify-center p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50">
                          <img 
                            src={getPlatformLogo(platform.name)}
                            alt={platform.name}
                            className={`w-full h-full object-contain ${platform.name === "Codeforces" ? "scale-150" : ""}`}
                          />
                        </div>
                      </div>
                      
                      {/* Platform Info */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {platform.name}
                        </h3>
                        <p className="text-gray-400 text-sm">@{platform.username}</p>
                      </div>
                    </div>

                    {/* External Link */}
                    <motion.a
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </motion.a>
                  </div>

                  {/* Stats Grid */}
                  <div className="relative z-10 grid grid-cols-4 gap-3 mb-6">
                    {platform.stats ? Object.entries(platform.stats).slice(0, 4).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                        className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 text-center group-hover:bg-gray-900/80 transition-all duration-300"
                      >
                        <div className={`text-lg font-bold bg-gradient-to-r ${getPlatformBorderGradient(platform.name)} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    )) : null}
                  </div>

                  {/* Achievements Section */}
                  <div className="relative z-10 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <FiAward className="text-yellow-400 text-lg" />
                      <span className="text-white font-semibold text-sm">Key Achievements</span>
                    </div>
                    <div className="space-y-2.5">
                      {platform.achievements?.slice(0, 3).map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4 }}
                          className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors"
                        >
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${getPlatformBorderGradient(platform.name)} mt-2 flex-shrink-0`}></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-20">
              <p className="text-xl">No platforms data available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
