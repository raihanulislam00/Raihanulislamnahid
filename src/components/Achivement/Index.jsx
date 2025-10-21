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
    <div className="min-h-screen py-20 relative overflow-hidden">

      <div className="container px-6 py-8 mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="relative mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="mb-3 text-3xl md:text-4xl font-bold text-white">
              Achievements
            </motion.h2>
            <p className="text-base text-gray-400">
              Milestones & recognitions along my journey
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="relative space-y-16">
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
                  <div className="grid items-center grid-cols-1 gap-4 mx-auto lg:grid-cols-12 lg:gap-6 max-w-6xl">
                    {/* Image Section */}
                    <div className={`lg:col-span-5 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative overflow-hidden rounded-2xl">
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
                          <div className="absolute px-3 py-1.5 border top-4 left-4 rounded-lg bg-black/60 backdrop-blur-xl border-white/20">
                            <span className="text-base font-bold text-cyan-400">
                              {achievement.ranking}
                            </span>
                          </div>
                        )}
                        
                        {/* Date Badge on Image */}
                        {achievement.date && (
                          <div className="absolute flex items-center gap-1.5 px-3 py-1.5 border bottom-4 left-4 rounded-lg bg-black/60 backdrop-blur-xl border-white/20">
                            <FiCalendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-xs font-medium text-white">{achievement.date}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Title */}
                      <div className="lg:text-left">
                        <h2 className="text-xl font-black leading-tight text-white lg:text-3xl">
                          {achievement.title}
                        </h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full lg:mx-0 mx-auto mt-2"></div>
                      </div>

                      {/* Description Card */}
                      <div className="relative p-5 border rounded-2xl bg-white/5 backdrop-blur-xl border-white/10">
                        <p className="text-sm text-gray-300 leading-relaxed lg:text-left">
                          {achievement.text}
                        </p>
                      </div>

                      {/* Status and Category Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Status Badge */}
                        <div className="p-3 border rounded-xl bg-gradient-to-br from-violet-700/20 to-violet-700/20 backdrop-blur-xl border-violet-400/20">
                          <div className="flex items-center gap-2 mb-1.5">
                            <FiStar className="w-4 h-4 text-violet-400" />
                            <span className="text-xs font-bold text-violet-400">STATUS</span>
                          </div>
                          <p className="text-sm font-bold text-white">{achievement.status}</p>
                        </div>

                        {/* Category Badge */}
                        <div className="p-3 border rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border-cyan-400/20">
                          <div className="flex items-center gap-2 mb-1.5">
                            <FiTrendingUp className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-bold text-cyan-400">CATEGORY</span>
                          </div>
                          <p className="text-sm font-bold text-white">{achievement.category}</p>
                        </div>
                      </div>

                      {/* Impact Level */}
                      <div className="flex items-center gap-3 lg:justify-start justify-center">
                        <span className="text-xs font-bold text-gray-400">IMPACT LEVEL</span>
                        <div className="flex gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`w-2.5 h-2.5 rounded-full ${
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
