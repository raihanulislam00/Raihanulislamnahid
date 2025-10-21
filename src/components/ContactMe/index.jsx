import { motion } from "framer-motion";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { contactFields, contactInfo, socialLinks } from "./contactData";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2 className="mb-6 text-5xl md:text-6xl font-bold relative inline-block">
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Get In Touch
            </motion.span>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-2xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            {contactInfo.description}
          </p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <Fade cascade triggerOnce>
              {/* Enhanced Contact Details */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 space-y-6 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-700/50 shadow-2xl hover:border-cyan-400/30 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border-2 border-cyan-400/30">
                    <FiMail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-base"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 border-2 border-green-400/30">
                    <FiPhone className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-base"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-2 border-purple-400/30">
                    <FiMapPin className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Location</h3>
                    <p className="text-gray-300 text-base">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-700/50 shadow-2xl hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="mb-6 font-bold text-white text-xl">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-14 h-14 rounded-2xl bg-gray-800/60 hover:bg-gray-700/80 flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 border-2 border-gray-700/50 hover:border-cyan-400/50 group`}
                      >
                        <Icon className="w-6 h-6 relative z-10" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </Fade>
          </div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-700/50 shadow-2xl"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {contactFields.map((field) => (
                <motion.div 
                  key={field.id}
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <label
                    htmlFor={field.id}
                    className="block mb-3 font-semibold text-white text-base"
                  >
                    {field.label} {field.icon}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-5 py-4 text-white placeholder-gray-400 transition-all duration-300 rounded-2xl outline-none bg-gray-800/60 focus:bg-gray-800/80 border-2 border-gray-700/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                  />
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <label
                  htmlFor="message"
                  className="block mb-3 font-semibold text-white text-base"
                >
                  Your Message 💭
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={6}
                  className="w-full px-5 py-4 text-white placeholder-gray-400 transition-all duration-300 rounded-2xl outline-none resize-none bg-gray-800/60 focus:bg-gray-800/80 border-2 border-gray-700/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-white font-bold text-lg transition-all duration-300 overflow-hidden ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:shadow-2xl hover:shadow-cyan-500/30"
                }`}
              >
                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-3 rounded-full border-white/30 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <FiSend className="w-6 h-6" />
                    </motion.div>
                  </>
                )}
              </motion.button>

              {/* Enhanced Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className={`p-5 rounded-2xl text-center font-semibold text-base border-2 ${
                    submitStatus === "success"
                      ? "bg-green-500/15 text-green-400 border-green-500/30"
                      : "bg-red-500/15 text-red-400 border-red-500/30"
                  }`}
                >
                  {submitStatus === "success"
                    ? "✅ Message sent successfully! I will get back to you soon."
                    : "❌ Oops! Something went wrong. Please try again."}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
