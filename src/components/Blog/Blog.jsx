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
} from "react-icons/fi";
import { blogs, categories } from "./blogData";

const ITEMS_PER_PAGE = 6;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-5xl md:text-6xl font-bold relative inline-block"
          >
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Latest Blog Posts
            </motion.span>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-2xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
          >
            Sharing my thoughts, experiences, and knowledge about software
            development, technology, and career growth.
          </motion.p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12 space-y-8">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-full px-6 py-3 pl-12 rounded-full bg-gray-800/50 text-white placeholder-gray-400 outline-none border-2 transition-all duration-300 ${
                  isSearchFocused ? "border-cyan-400/50" : "border-transparent"
                }`}
              />
              <FiSearch className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = categoryIcons[category.icon];
              return (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {paginatedBlogs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center col-span-full"
              >
                <p className="text-lg text-gray-400">
                  No blog posts found matching your criteria.
                </p>
              </motion.div>
            ) : (
              paginatedBlogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl group hover:shadow-2xl hover:shadow-cyan-500/20 border-2 border-gray-700/50 hover:border-cyan-500/30"
                >
                  {/* Enhanced Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
                    }}
                  />

                  {/* Enhanced Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      src={blog.image}
                      alt={blog.title}
                      className="object-cover w-full h-full transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                    
                    {/* Floating Category Badge */}
                    <motion.span 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="absolute px-4 py-2 text-sm font-semibold rounded-2xl bottom-4 left-4 text-cyan-400 bg-cyan-400/15 backdrop-blur-md border border-cyan-400/30 shadow-lg"
                    >
                      {blog.category}
                    </motion.span>
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-sm border border-white/10" />
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6">
                    {/* Author & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="w-10 h-10 rounded-full border-2 border-cyan-400/30"
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {blog.author.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {blog.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                        <FiClock className="w-4 h-4 text-cyan-400" />
                        <span className="font-medium">{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <motion.h3 
                      whileHover={{ x: 5 }}
                      className="mb-3 text-xl font-bold text-white transition-all duration-300 line-clamp-2 group-hover:text-cyan-400"
                    >
                      {blog.title}
                    </motion.h3>
                    <p className="mb-4 text-sm text-gray-300 line-clamp-2 leading-relaxed">
                      {blog.description}
                    </p>

                    {/* Enhanced Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 text-xs font-semibold rounded-xl text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Enhanced Read More Link */}
                    <motion.a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                      Read More
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {filteredBlogs.length > 0 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                onClick={() => setCurrentPage(page)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {page}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
