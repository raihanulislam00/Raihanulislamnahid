
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi';
import { FaDev } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: FiGithub,
      url: 'https://github.com/raihanulislam00',
      color: 'hover:text-gray-300'
    },
    {
      id: 2,
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/raihanulislam00/',
      color: 'hover:text-blue-400'
    },
    {
      id: 3,
      icon: FiInstagram,
      url: 'https://www.instagram.com/raihanulislam00',
      color: 'hover:text-pink-500'
    },

  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-gradient-to-b from-transparent via-gray-900/50 to-black overflow-hidden">
      {/* Enhanced Gradient Overlay with Animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/80 to-transparent pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.id}
                  className="relative group"
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 w-14 h-14 rounded-2xl bg-gray-800/60 backdrop-blur-sm flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 border-2 border-gray-700/50 hover:border-cyan-400/50`}
                    whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                  {/* Enhanced Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-xl opacity-0 group-hover:opacity-100 -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Divider */}
          <motion.div 
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Enhanced Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 text-gray-300 text-base mb-3 flex-wrap">
              <span className="font-medium">Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiHeart className="text-red-500 w-5 h-5" />
              </motion.div>
              <span className="font-medium">by</span>
              <motion.a
                href="https://github.com/raihanulislam00"
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-300 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                raihanulislam00
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-lg opacity-0 hover:opacity-100 -z-10 rounded-lg"
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            </div>
            <motion.p 
              className="text-gray-500 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} All rights reserved
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
