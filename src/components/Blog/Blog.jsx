import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiCode,
  FiCpu,
  FiGrid,
  FiSearch,
  FiTerminal,
  FiBookOpen,
  FiTrendingUp,
  FiUser,
  FiCalendar,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { blogs, categories } from "./blogData";

const ITEMS_PER_PAGE = 6;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categoryIcons = {
    FiGrid,
    FiCode,
    FiCpu,
    FiTerminal,
    FiBriefcase,
  };

  // Filter blogs based on category and search
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset to first page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">

      <div className="mx-auto max-w-[88rem] px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="section-shell p-5 sm:p-7 lg:p-10"
        >
        {/* Modern Header with Stats */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-5 backdrop-blur-sm"
            >
              <HiOutlineSparkles className="w-3.5 h-3.5" />
              Knowledge Hub
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
              style={{ background: "linear-gradient(135deg,#e2d9f3 0%,#67e8f9 45%,#c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Latest Writings
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
              Insights on algorithms, data structures, and competitive programming
            </p>

            <div className="mt-7 flex items-center justify-center gap-3">
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                style={{ originX: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/70 to-cyan-500"
              />
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" style={{ boxShadow: "0 0 10px rgba(6,182,212,0.7)" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              </div>
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                style={{ originX: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="h-px w-24 bg-gradient-to-l from-transparent via-cyan-500/70 to-cyan-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Modern Search and Filter Section */}
        <div className="mb-16 space-y-8">
          {/* Search Bar with Glass Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 transition duration-500 ${
                isSearchFocused ? 'opacity-50' : 'group-hover:opacity-30'
              }`}></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-6 py-4 pl-14 pr-6 rounded-2xl bg-gray-800/60 backdrop-blur-xl text-white placeholder-gray-400 outline-none border border-gray-700/50 focus:border-cyan-500/50 transition-all duration-300"
                />
                <FiSearch className={`absolute left-5 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  isSearchFocused ? 'text-cyan-400' : 'text-gray-400'
                }`} size={20} />
                {searchQuery && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    ×
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Modern Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => {
              const Icon = categoryIcons[category.icon];
              const isActive = selectedCategory === category.name;
              return (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl flex items-center gap-2 font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl" />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm">{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Results Counter */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-gray-400 text-sm"
            >
              Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
            </motion.div>
          )}
        </div>

        {/* Masonry-style Blog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {paginatedBlogs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center col-span-full"
              >
                <FiSearch className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <p className="text-xl text-gray-400 mb-2">
                  No articles found
                </p>
                <p className="text-sm text-gray-500">
                  Try adjusting your search or filters
                </p>
              </motion.div>
            ) : (
              paginatedBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(blog.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                  {/* Animated Border Gradient */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500`}></div>
                  
                  {/* Main Card */}
                  <div className="relative h-full card-unique card-shimmer">
                    {/* Image Section with Overlay */}
                    <div className="relative h-52 overflow-hidden">
                      <motion.img
                        animate={hoveredCard === blog.id ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.6 }}
                        src={blog.image}
                        alt={blog.title}
                        className="object-cover w-full h-full"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-700/50">
                        <FiCalendar className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-gray-300 font-medium">{blog.date}</span>
                      </div>

                      {/* Read Time Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-700/50">
                        <FiClock className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-gray-300 font-medium">{blog.readTime}</span>
                      </div>

                      {/* Category Tag at Bottom */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="mb-3 text-xl font-bold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {blog.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-4 text-sm text-gray-400 line-clamp-3 leading-relaxed">
                        {blog.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-5"></div>

                      {/* Bottom Section */}
                      <div className="flex items-center justify-between">
                        {/* Author */}
                        <div className="flex items-center gap-3">
                          <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-8 h-8 rounded-full border-2 border-cyan-500/30"
                          />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {blog.author.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {blog.author.role}
                            </p>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <motion.a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                        >
                          Read
                          <FiArrowRight className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Modern Pagination */}
        {filteredBlogs.length > 0 && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                onClick={() => setCurrentPage(page)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center font-semibold transition-all duration-300 ${
                  currentPage === page
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {currentPage === page && (
                  <motion.div
                    layoutId="activePage"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {currentPage !== page && (
                  <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl" />
                )}
                <span className="relative z-10">{page}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
