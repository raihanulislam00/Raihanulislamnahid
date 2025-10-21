import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiAward,
  FiBook,
  FiBriefcase,
  FiCamera,
  FiCode,
  FiTarget,
  FiExternalLink,
} from "react-icons/fi";
import { roadmap } from "./Data";

const Achievement = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    "All",
    "Academic",
    "Professional",
    "Competition",
  ];
  const categoryIcons = {
    Academic: FiBook,
    Professional: FiBriefcase,
    Competition: FiTarget,
  };

  const getCategoryStats = () => {
    const stats = {};
    roadmap.forEach((item) => {
      stats[item.category] = (stats[item.category] || 0) + 1;
    });
    return stats;
  };

  const filteredAchievements = roadmap.filter((achievement) => {
    const matchesCategory =
      selectedCategory === "All" || achievement.category === selectedCategory;
    const matchesSearch =
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Enhanced Header with Search */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <motion.h2 className="mb-6 text-5xl md:text-6xl font-bold relative inline-block">
              <motion.span
                className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Achievements & Milestones
              </motion.span>
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-yellow-400/10 to-red-400/10 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey of success and accomplishments
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full px-6 py-3 rounded-full bg-gray-800/50 text-white placeholder-gray-400 outline-none border-2 transition-all duration-300 ${
                isSearchFocused ? "border-cyan-400/50" : "border-transparent"
              }`}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const CategoryIcon = categoryIcons[category] || FiAward;
            const count =
              category === "All"
                ? roadmap.length
                : categoryStats[category] || 0;

            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                <CategoryIcon className="w-4 h-4" />
                <span>{category}</span>
                <span className="ml-2 px-2 py-0.5 text-sm rounded-full bg-white/10">
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-1"
        >
          {[
            {
              icon: FiAward,
              number: "5+",
              label: "Awards & Recognitions",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden group rounded-xl bg-gray-800/50 backdrop-blur-sm"
            >
              <div
                className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-br opacity-20 group-hover:opacity-30"
                style={{
                  background: `linear-gradient(to bottom right, ${stat.color})`,
                }}
              />
              <div className="relative z-10 flex flex-col items-center p-8">
                <stat.icon className="w-10 h-10 mb-4 transition-transform duration-300 transform text-cyan-400 group-hover:scale-110" />
                <h3 className="mb-2 text-4xl font-bold text-white">
                  {stat.number}
                </h3>
                <p className="text-center text-gray-300">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredAchievements.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center col-span-full"
              >
                <p className="text-lg text-gray-400">
                  No achievements found matching your criteria.
                </p>
              </motion.div>
            ) : (
              filteredAchievements.map((achievement, index) => {
                const CategoryIcon =
                  categoryIcons[achievement.category] || FiAward;
                return (
                  <motion.div
                    key={achievement.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.03, y: -8 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onClick={() => achievement.link && window.open(achievement.link, '_blank')}
                    className={`relative rounded-3xl overflow-hidden group h-[450px] bg-gray-800/40 backdrop-blur-xl border-2 border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 ${
                      achievement.link ? 'cursor-pointer' : ''
                    }`}
                  >
                    {/* Enhanced Background Image */}
                    <div className="absolute inset-0">
                      <motion.img
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        src={achievement.imageUrl}
                        alt={achievement.title}
                        className="object-cover w-full h-full transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/60" />
                      
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-cyan-500/5 group-hover:to-transparent transition-all duration-500"
                      />
                    </div>

                    {/* Enhanced Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-8">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-4 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-md border-2 border-white/20 shadow-lg"
                        >
                          <CategoryIcon className="w-7 h-7 text-white" />
                        </motion.div>
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 text-sm font-semibold text-gray-200 rounded-2xl bg-gray-800/60 backdrop-blur-md border border-gray-600/50 shadow-lg"
                        >
                          {achievement.date}
                        </motion.span>
                      </div>
                      
                      <motion.h3 
                        whileHover={{ x: 5 }}
                        className="mb-3 text-2xl font-bold text-white transition-all duration-300 group-hover:text-cyan-400 line-clamp-2"
                      >
                        {achievement.title}
                      </motion.h3>
                      
                      <p className="mb-5 text-base text-gray-200 transition-all duration-300 line-clamp-2 group-hover:line-clamp-3 leading-relaxed">
                        {achievement.text}
                      </p>
                      
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 text-sm font-semibold rounded-2xl backdrop-blur-md text-yellow-300 bg-yellow-400/20 border border-yellow-400/30 shadow-lg"
                          >
                            {achievement.status}
                          </motion.span>
                          <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 text-sm font-semibold rounded-2xl text-cyan-300 bg-cyan-400/20 backdrop-blur-md border border-cyan-400/30 shadow-lg"
                          >
                            {achievement.category}
                          </motion.span>
                        </div>
                        {achievement.link && (
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg"
                          >
                            <FiExternalLink className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </div>

                      {/* Enhanced Hover Overlay */}
                      <motion.div
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cyan-400/10 via-blue-400/5 to-transparent"
                      />
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievement;
