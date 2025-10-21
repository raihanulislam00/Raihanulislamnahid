import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiAward,
  FiBook,
  FiBriefcase,
  FiTarget,
  FiCalendar,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { roadmap } from "./Data";

const Achievement = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categoryIcons = {
    Academic: FiBook,
    Professional: FiBriefcase,
    Competition: FiTarget,
  };

  // Function to render impact level dots
  const renderImpactLevel = (level = 5) => {
    return (
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Impact Level</span>
        <div className="flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i < level ? "bg-cyan-400" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20 bg-[#050510] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(5,5,16,1))]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container px-6 py-10 mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="relative mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="mb-4 text-4xl md:text-6xl font-bold text-white">
              Achievements
            </motion.h2>
            <p className="text-lg text-gray-400">
              Milestones & recognitions along my journey
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="relative space-y-24">
          <AnimatePresence mode="wait">
            {roadmap.map((achievement, index) => {
              const CategoryIcon = categoryIcons[achievement.category] || FiAward;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="grid items-center grid-cols-1 gap-6 mx-auto lg:grid-cols-12 lg:gap-10 max-w-7xl">
                    {/* Image Section */}
                    <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative overflow-hidden rounded-3xl">
                        <div className="aspect-[16/10] relative">
                          <img
                            src={achievement.imageUrl}
                            alt={achievement.title}
                            loading="lazy"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>
                        
                        {/* Ranking Badge on Image */}
                        {achievement.ranking && (
                          <div className="absolute px-4 py-2 border top-6 left-6 rounded-xl bg-black/60 backdrop-blur-xl border-white/20">
                            <span className="text-lg font-bold text-cyan-400">
                              {achievement.ranking}
                            </span>
                          </div>
                        )}
                        
                        {/* Date Badge on Image */}
                        {achievement.date && (
                          <div className="absolute flex items-center gap-2 px-4 py-2 border bottom-6 left-6 rounded-xl bg-black/60 backdrop-blur-xl border-white/20">
                            <FiCalendar className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm font-medium text-white">{achievement.date}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Title */}
                      <div className="lg:text-left">
                        <h2 className="text-2xl font-black leading-tight text-white lg:text-5xl">
                          {achievement.title}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full lg:mx-0 mx-auto mt-4"></div>
                      </div>

                      {/* Description Card */}
                      <div className="relative p-8 border rounded-3xl bg-white/5 backdrop-blur-xl border-white/10">
                        <p className="text-lg text-gray-300 leading-relaxed lg:text-left">
                          {achievement.text}
                        </p>
                      </div>

                      {/* Status and Category Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Status Badge */}
                        <div className="p-4 border rounded-2xl bg-gradient-to-br from-violet-700/20 to-violet-700/20 backdrop-blur-xl border-violet-400/20">
                          <div className="flex items-center gap-3 mb-2">
                            <FiStar className="w-5 h-5 text-violet-400" />
                            <span className="text-sm font-bold text-violet-400">STATUS</span>
                          </div>
                          <p className="font-bold text-white">{achievement.status}</p>
                        </div>

                        {/* Category Badge */}
                        <div className="p-4 border rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border-cyan-400/20">
                          <div className="flex items-center gap-3 mb-2">
                            <FiTrendingUp className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-bold text-cyan-400">CATEGORY</span>
                          </div>
                          <p className="font-bold text-white">{achievement.category}</p>
                        </div>
                      </div>

                      {/* Impact Level */}
                      <div className="flex items-center gap-4 lg:justify-start justify-center">
                        <span className="text-sm font-bold text-gray-400">IMPACT LEVEL</span>
                        <div className="flex gap-2">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < achievement.impactLevel
                                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                                  : "bg-gray-700"
                              }`}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connector Line (hidden on mobile) */}
                    {index < roadmap.length - 1 && (
                      <div className="absolute hidden w-px h-16 transform -translate-x-1/2 left-1/2 -bottom-8 bg-gradient-to-b from-cyan-400/50 to-transparent lg:block"></div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
