import { motion } from 'framer-motion';
import { skillsConfig } from './projectsData';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const ProjectsCard = ({ image, title, date, description, github, demo, skills }) => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full"
    >
      <motion.div 
        whileHover={{ y: -12, rotateY: 2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 rounded-3xl overflow-hidden border border-gray-700/50 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] group hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500"
        style={{ perspective: '1000px' }}
      >
        {/* Enhanced Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Image Section with Enhanced Overlay */}
        <div className="relative h-60 md:h-72 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </motion.div>
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-95 group-hover:opacity-80 transition-all duration-500" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"></div>
            </motion.div>
          </div>

          {/* Project Title and Date */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent"
          >
            {/* Enhanced Date Badge */}
            <div className="flex items-center gap-3 mb-4">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 text-sm font-semibold backdrop-blur-sm"
              >
                <FaCalendarAlt className="w-4 h-4" />
                {date}
              </motion.span>
            </div>
            
            {/* Enhanced Title with Gradient */}
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #06b6d4 50%, #ffffff 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {title}
            </motion.h2>
          </motion.div>
        </div>
        {/* Enhanced Content Section */}
        <div className="p-8">
          {/* Enhanced Description */}
          <motion.p 
            className="text-gray-300 mb-8 line-clamp-3 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Enhanced Skills Section */}
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill, index) => {
              const skillConfig = skillsConfig[skill];
              if (!skillConfig) return null;
              
              const Icon = skillConfig.icon;
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    boxShadow: `0 8px 25px ${skillConfig.color}40`
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:border-opacity-60"
                  style={{
                    backgroundColor: `${skillConfig.color}15`,
                    border: `1px solid ${skillConfig.color}30`
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: skillConfig.color }} />
                  <span className="text-sm font-semibold" style={{ color: skillConfig.color }}>
                    {skillConfig.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleButtonClick(demo)}
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-blue-400 hover:to-purple-500 text-white rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 font-semibold text-base relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <FaExternalLinkAlt className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Live Demo</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleButtonClick(github)}
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/30 font-semibold text-base border border-gray-600/50 hover:border-gray-500/50 backdrop-blur-sm"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Hover Effect Overlay */}
        <motion.div 
          className="absolute inset-0 rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 50%)'
          }}
          animate={{
            background: [
              'radial-gradient(800px circle at 20% 50%, rgba(59, 130, 246, 0.05), transparent 50%)',
              'radial-gradient(800px circle at 80% 50%, rgba(139, 92, 246, 0.05), transparent 50%)',
              'radial-gradient(800px circle at 20% 50%, rgba(59, 130, 246, 0.05), transparent 50%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectsCard; 