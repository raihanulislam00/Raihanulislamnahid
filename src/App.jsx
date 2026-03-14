import { AnimatePresence, motion } from "framer-motion";
import React, { lazy, Suspense } from "react";
import ScrollProgressBar from "react-scroll-progress-bar";
import "./app.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ThreeBackground from "./components/ThreeBackground";
import FloatingActions from "./components/FloatingActions";
const Project = lazy(() => import("./components/Projects/Projects.jsx"));
const ProblemSolving = lazy(() => import("./components/ProblemSolving/ProblemSolving.jsx"));
const Achievement = lazy(() => import("./components/Achivement/Index.jsx"));
const Blog = lazy(() => import("./components/Blog/Blog.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Contact = lazy(() => import("./components/ContactMe/index.jsx"));

function App() {
  const [showScrollUp, setShowScrollUp] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-bodyColor">
          {/* 3D Animated Background */}
          <ThreeBackground />

          {/* Floating Actions */}
          <FloatingActions />
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[51]">
        <ScrollProgressBar bgcolor="#46e7dadc" height="3px" />
      </div>

      <Banner />

      {/* <Suspense>
        <Particle />
      </Suspense>  */}

      <div id="about">
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <About />
        </Suspense>
      </div>

      <div id="project">
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <Project />
        </Suspense>
      </div>

      <div id="problemsolving">
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <ProblemSolving />
        </Suspense>
      </div>

      <div id="achivement">
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <Achievement />
        </Suspense>
      </div>

      <div id="blog">
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <Blog />
        </Suspense>
      </div>

      <div id="contact">
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <Contact />
        </Suspense>
      </div>

      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Footer />
      </Suspense>

          {/* Custom Scroll Up Button */}
          <AnimatePresence>
            {showScrollUp && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed z-50 flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-full shadow-2xl bottom-8 right-8 bg-gradient-to-br from-blue-500 to-cyan-500 hover:scale-110 border border-cyan-400/30"
                whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
