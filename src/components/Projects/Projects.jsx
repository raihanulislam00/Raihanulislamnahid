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
    <div className="min-h-screen px-4 py-20 relative overflow-hidden sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="section-shell mx-auto w-full max-w-[88rem] p-5 sm:p-7 lg:p-10"
      >
      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 text-center relative z-10"
      >
        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-5 backdrop-blur-sm"
        >
          <HiOutlineSparkles className="w-3.5 h-3.5" />
          Portfolio Showcase
        </motion.div>

        <h1
          className="mb-4 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          style={{ background: 'linear-gradient(135deg,#e2d9f3 0%,#67e8f9 45%,#c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Featured Projects
        </h1>
        <p className="max-w-xl mx-auto text-base text-gray-500 leading-relaxed">
          A curated collection of my recent work showcasing various technologies and creative solutions.
        </p>

        {/* Decorative divider */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            style={{ originX: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/70 to-cyan-500"
          />
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" style={{ boxShadow: '0 0 10px rgba(6,182,212,0.7)' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
          </div>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            style={{ originX: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="h-px w-24 bg-gradient-to-l from-transparent via-cyan-500/70 to-cyan-500"
          />
        </div>
      </motion.div>

      {/* Enhanced Filters Section */}
      <div className="mx-auto mb-20 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-between gap-12">
          {/* Search */}
          <motion.div
            className="relative w-full md:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-600/60 via-cyan-500/60 to-pink-500/60 blur-sm"
              animate={{ opacity: isSearchFocused ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects by name or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-12 pr-16 py-4 rounded-2xl text-white text-sm placeholder-gray-500 border border-white/8 focus:outline-none focus:border-violet-500/50 transition-all duration-300"
                style={{ background: 'rgba(13,13,26,0.85)', backdropFilter: 'blur(16px)' }}
              />
              {searchQuery && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-cyan-500/15 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/25"
                >
                  {filteredProjects.length}
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Category filters */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-2.5">
              {categories.map((category, index) => {
                const count   = getCategoryCount(category.id);
                const active  = activeCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index }}
                    className="relative px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2.5 overflow-hidden transition-colors duration-300"
                    style={{
                      background:    active ? 'linear-gradient(135deg,#7c3aed,#0891b2)' : 'rgba(255,255,255,0.04)',
                      color:         active ? '#fff' : '#9ca3af',
                      border:        active ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
                      boxShadow:     active ? '0 0 20px rgba(124,58,237,0.4)' : 'none',
                    }}
                  >
                    {!active && (
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    )}
                    <span className="relative z-10">{category.name}</span>
                    <span
                      className="relative z-10 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold"
                      style={{ background: active ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.07)', color: active ? '#fff' : '#6b7280' }}
                    >
                      {count}
                    </span>
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
              {/* Results bar */}
              <motion.div
                className="flex items-center justify-between mb-8 px-1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm font-medium">
                    Showing
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 text-sm font-bold">
                    {filteredProjects.length}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {filteredProjects.length === 1 ? 'project' : 'projects'}
                  </span>
                </div>
                {activeCategory !== 'all' && (
                  <motion.span
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-violet-500/15 border border-violet-500/25 text-violet-400"
                  >
                    {categories.find(c => c.id === activeCategory)?.name}
                  </motion.span>
                )}
              </motion.div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
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

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  className="flex justify-center items-center gap-3 mt-16"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    whileHover={{ scale: currentPage > 1 ? 1.04 : 1 }}
                    whileTap={{ scale: currentPage > 1 ? 0.96 : 1 }}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: currentPage === 1 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)',
                      color:      currentPage === 1 ? '#374151' : '#d1d5db',
                      border:     '1px solid rgba(255,255,255,0.08)',
                      cursor:     currentPage === 1 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    ← Prev
                  </motion.button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <motion.button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200"
                        style={{
                          background:  pageNum === currentPage ? 'linear-gradient(135deg,#7c3aed,#0891b2)' : 'rgba(255,255,255,0.05)',
                          color:       pageNum === currentPage ? '#fff' : '#6b7280',
                          border:      pageNum === currentPage ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
                          boxShadow:   pageNum === currentPage ? '0 0 16px rgba(124,58,237,0.45)' : 'none',
                        }}
                      >
                        {pageNum}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    whileHover={{ scale: currentPage < totalPages ? 1.04 : 1 }}
                    whileTap={{ scale: currentPage < totalPages ? 0.96 : 1 }}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: currentPage === totalPages ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)',
                      color:      currentPage === totalPages ? '#374151' : '#d1d5db',
                      border:     '1px solid rgba(255,255,255,0.08)',
                      cursor:     currentPage === totalPages ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Next →
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="py-28 text-center"
            >
              <div
                className="inline-flex flex-col items-center gap-5 px-14 py-12 rounded-3xl border border-white/8"
                style={{ background: 'rgba(13,13,26,0.7)', backdropFilter: 'blur(16px)' }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                >
                  <FaCode className="text-5xl text-violet-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">No projects found</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  {searchQuery
                    ? `No results for “${searchQuery}”. Try different keywords.`
                    : 'No projects match the current filter.'}
                </p>
                <motion.button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#0891b2)', boxShadow: '0 0 18px rgba(124,58,237,0.35)' }}
                >
                  Clear Filters
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
