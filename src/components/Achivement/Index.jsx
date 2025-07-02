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
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        {/* Header with Search */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Achievements & Milestones
            </h2>
            <p className="text-lg text-gray-400">
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
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onClick={() => achievement.link && window.open(achievement.link, '_blank')}
                    className={`relative rounded-xl overflow-hidden group h-[400px] bg-gray-800/30 backdrop-blur-sm ${
                      achievement.link ? 'cursor-pointer' : ''
                    }`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={achievement.imageUrl}
                        alt={achievement.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-sm">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-gray-800/50 backdrop-blur-sm">
                          {achievement.date}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400 line-clamp-2">
                        {achievement.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                        {achievement.text}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm
                                text-yellow-400 bg-yellow-400/10`}
                          >
                            {achievement.status}
                          </span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
                            {achievement.category}
                          </span>
                        </div>
                        {achievement.link && (
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm">
                            <FiExternalLink className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cyan-400/20 to-transparent"
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
