import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCode, FaSearch } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import ProjectsCard from "./ProjectsCard";
import { categories, projects } from "./projectsData";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate category counts
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return projects.length;
    if (categoryId === "featured")
      return projects.filter((p) => p.featured).length;
    return projects.filter((p) => p.category === categoryId).length;
  };

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" ||
        (activeCategory === "featured" && project.featured) ||
        project.category === activeCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="min-h-screen px-4 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden sm:px-6 lg:px-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
              opacity: 0.2,
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%",
              ],
              x: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center relative z-10"
      >
        <motion.div
          className="relative inline-block p-4 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-gray-700/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)",
              backgroundSize: "400% 400%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative z-10 flex items-center justify-center gap-6 px-8 py-4">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <FaCode className="text-5xl text-blue-400" />
            </motion.div>
            
            <motion.h1
              className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text md:text-7xl"
              style={{
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              My Projects
            </motion.h1>
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HiOutlineSparkles className="text-5xl text-purple-400" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.p
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore my collection of projects showcasing modern web development, 
          innovative solutions, and creative problem-solving across various technologies.
        </motion.p>
      </motion.div>

      {/* Enhanced Filters Section */}
      <div className="mx-auto mb-20 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-between gap-12">
          {/* Enhanced Search Input */}
          <motion.div
            className="relative w-full md:max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative group">
              <motion.div
                className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  isSearchFocused 
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-105" 
                    : "bg-gray-800/40"
                }`}
                animate={{
                  boxShadow: isSearchFocused 
                    ? "0 0 30px rgba(59, 130, 246, 0.3)" 
                    : "0 0 0px rgba(59, 130, 246, 0)",
                }}
              />
              
              <input
                type="text"
                placeholder="🔍 Search projects by name or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="relative w-full px-8 py-5 text-lg text-white placeholder-gray-400 transition-all duration-500 border-2 rounded-2xl bg-gray-800/60 focus:outline-none border-gray-700/50 backdrop-blur-xl hover:bg-gray-800/80 focus:border-blue-500/50"
              />
              
              <motion.div
                className="absolute right-6 top-1/2 transform -translate-y-1/2"
                animate={{
                  scale: isSearchFocused ? 1.2 : 1,
                  rotate: isSearchFocused ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <FaSearch className="text-xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.div>
              
              {/* Search results indicator */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full"
                >
                  {filteredProjects.length} found
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Enhanced Category Filters */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => {
                const count = getCategoryCount(category.id);
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-500 flex items-center gap-3 overflow-hidden group
                      ${
                        activeCategory === category.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl shadow-blue-500/30"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50 backdrop-blur-sm"
                      }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {/* Animated background for non-active buttons */}
                    {activeCategory !== category.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    )}
                    
                    {/* Active button glow effect */}
                    {activeCategory === category.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                    
                    <span className="relative z-10 font-bold">{category.name}</span>
                    <motion.span
                      className={`relative z-10 inline-flex items-center justify-center w-8 h-8 text-sm rounded-xl font-bold transition-all duration-300
                      ${
                        activeCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50 group-hover:text-white"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {count}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Projects Grid with Animation */}
      <motion.div
        className="mx-auto max-w-7xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Projects count and sort info */}
              <motion.div
                className="flex items-center justify-between mb-12 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {filteredProjects.length > 1 ? 'Projects' : 'Project'} Found
                  </h3>
                  <div className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-xl font-semibold">
                    {filteredProjects.length}
                  </div>
                </div>
                {activeCategory !== "all" && (
                  <motion.div
                    className="text-gray-400"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    Filtered by: <span className="text-blue-400 font-semibold">
                      {categories.find(cat => cat.id === activeCategory)?.name}
                    </span>
                  </motion.div>
                )}
              </motion.div>

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:gap-12">
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={`${project.id}-${activeCategory}`}
                    initial={{ 
                      opacity: 0, 
                      y: 50,
                      scale: 0.9
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -50,
                      scale: 0.9
                    }}
                    transition={{ 
                      delay: index * 0.15,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ProjectsCard {...project} />
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Pagination */}
              {totalPages > 1 && (
                <motion.div
                  className="flex justify-center items-center gap-4 mt-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    whileHover={{ scale: currentPage > 1 ? 1.05 : 1 }}
                    whileTap={{ scale: currentPage > 1 ? 0.95 : 1 }}
                    className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                      currentPage === 1
                        ? "bg-gray-800/30 text-gray-600 cursor-not-allowed"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50"
                    }`}
                  >
                    ← Previous
                  </motion.button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (pageNum) => (
                        <motion.button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold transition-all duration-300 relative overflow-hidden
                          ${
                            pageNum === currentPage
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl shadow-blue-500/30"
                              : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50"
                          }`}
                        >
                          {pageNum === currentPage && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          )}
                          <span className="relative z-10">{pageNum}</span>
                        </motion.button>
                      )
                    )}
                  </div>

                  <motion.button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    whileHover={{ scale: currentPage < totalPages ? 1.05 : 1 }}
                    whileTap={{ scale: currentPage < totalPages ? 0.95 : 1 }}
                    className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                      currentPage === totalPages
                        ? "bg-gray-800/30 text-gray-600 cursor-not-allowed"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50"
                    }`}
                  >
                    Next →
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-32 text-center"
            >
              <div className="inline-block p-12 border-2 border-dashed rounded-3xl bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="mb-6"
                >
                  <FaSearch className="mx-auto text-6xl text-gray-400" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-300 mb-4">
                  No projects found
                </h3>
                <p className="text-xl text-gray-500 mb-6 max-w-md mx-auto">
                  {searchQuery 
                    ? `No projects match "${searchQuery}". Try different keywords.`
                    : "No projects found matching your current filter settings."
                  }
                </p>
                <motion.button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Clear Filters
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
