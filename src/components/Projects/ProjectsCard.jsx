import { motion } from 'framer-motion';
import { skillsConfig } from './projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
      className="h-full flex flex-col"
    >
      <div className="relative flex flex-col h-full bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800/50 backdrop-blur-sm group hover:border-gray-700/50 transition-all duration-500">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          
          {/* Hover Overlay with Icons */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 bg-black/0 group-hover:bg-black/20 group-hover:opacity-100">
            <div className="flex gap-4">
              {demo && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleButtonClick(demo)}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </motion.button>
              )}
              {github && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleButtonClick(github)}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.slice(0, 4).map((skill, index) => {
              const skillConfig = skillsConfig[skill];
              if (!skillConfig) return null;
              
              const Icon = skillConfig.icon;
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg backdrop-blur-sm border transition-all duration-300"
                  style={{
                    backgroundColor: `${skillConfig.color}15`,
                    borderColor: `${skillConfig.color}30`
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: skillConfig.color }} />
                  <span className="text-xs font-medium" style={{ color: skillConfig.color }}>
                    {skillConfig.name}
                  </span>
                </motion.div>
              );
            })}
            {skills.length > 4 && (
              <div className="flex items-center px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <span className="text-xs font-medium text-gray-400">
                  +{skills.length - 4}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {demo && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick(demo)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl transition-all duration-300 font-medium text-sm"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </motion.button>
            )}
            {github && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick(github)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-xl transition-all duration-300 font-medium text-sm border border-gray-700/50"
              >
                <FaGithub className="w-4 h-4" />
                <span>Code</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard; 