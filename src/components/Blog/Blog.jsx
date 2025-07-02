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
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-gray-400"
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
          className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3"
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
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl group hover:bg-gray-800/70"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <span className="absolute px-3 py-1 text-xs font-medium rounded-full bottom-4 left-4 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Author & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {blog.author.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {blog.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <FiClock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 line-clamp-2 group-hover:text-cyan-400">
                      {blog.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-400 line-clamp-2">
                      {blog.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium rounded-full text-cyan-400 bg-cyan-400/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors duration-300 text-cyan-400 hover:text-cyan-300"
                    >
                      Read More
                      <FiArrowRight className="w-4 h-4" />
                    </a>
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
