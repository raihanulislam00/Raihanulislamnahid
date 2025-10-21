import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10 flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl border border-indigo-500/30 shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 group"
        >
          {/* Green online indicator */}
          <div className="absolute top-3 right-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>

          <div className="flex items-center gap-5">
            {/* Mail Icon with green dot */}
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <FiMail className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-indigo-600" />
            </div>

            {/* Content */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-1">
                Weekly Newsletter
              </h3>
              <div className="h-0.5 w-24 bg-white/30 rounded-full mb-2" />
              <p className="text-indigo-100 text-base font-medium">
                6 subscribers
              </p>
            </div>

            {/* New Badge */}
            <span className="px-4 py-1.5 bg-green-500 text-white font-bold text-sm rounded-full shadow-lg">
              New
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Newsletter;
