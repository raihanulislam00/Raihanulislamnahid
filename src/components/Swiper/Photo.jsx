import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { swiperData } from './swiperData';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Fade } from "react-awesome-reveal";
import { FaCamera, FaCameraRetro, FaUnsplash } from "react-icons/fa";

const Photo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Fade cascade triggerOnce>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCamera className="text-3xl text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Photography
              </h2>
            </div>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Capturing moments and sharing stories through the lens
            </p>
          </div>

          {/* Photography Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="https://mri-shot.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <FaCameraRetro className="text-xl" />
              Visit MriShot
            </motion.a>
            <motion.a
              href="https://unsplash.com/@raihanulislam00"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all"
            >
              <FaUnsplash className="text-xl" />
              Follow on Unsplash
            </motion.a>
          </div>
        </Fade>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Swiper */}
          <div className="relative">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Navigation, Autoplay]}
              className="w-[280px] h-[380px] md:w-[320px] md:h-[420px]"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {swiperData.map((item, index) => (
                <SwiperSlide key={item.id} className="rounded-2xl overflow-hidden bg-gray-800">
                  <div className="relative w-full h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Info Panel */}
          <div className="text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">
                    {swiperData[activeIndex].title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full lg:mx-0 mx-auto"></div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {swiperData[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-cyan-400">
                    #{activeIndex + 1} of {swiperData.length}
                  </span>
                  <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">
                    Photography
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Image Counter */}
        <div className="mt-12 text-center">
          <div className="inline-flex gap-2 px-4 py-2 bg-gray-800/50 rounded-full">
            {swiperData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
                animate={{
                  scale: index === activeIndex ? 1.2 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
