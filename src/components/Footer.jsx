
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi';
import { FaDev } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: FiGithub,
      url: 'https://github.com/Sumonta056',
      color: 'hover:text-gray-300'
    },
    {
      id: 2,
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/sumonta-saha-mridul-b6b57b197/',
      color: 'hover:text-blue-400'
    },
    {
      id: 3,
      icon: FiInstagram,
      url: 'https://www.instagram.com/sumonta.mridul',
      color: 'hover:text-pink-500'
    },
    {
      id: 4,
      icon: FaDev,
      url: 'https://dev.to/sumonta056',
      color: 'hover:text-purple-400'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-gradient-to-b from-transparent to-gray-900">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 backdrop-blur-sm`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm mb-2">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <FiHeart className="text-red-500 w-4 h-4" />
              </motion.div>
              <span>by</span>
              <motion.a
                href="https://github.com/Sumonta056"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                @Sumonta056
              </motion.a>
            </div>
            <p className="text-gray-500 text-xs">
              © {currentYear} All rights reserved
            </p>
          </motion.div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
