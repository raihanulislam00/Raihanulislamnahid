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
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            {contactInfo.description}
          </p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <Fade cascade triggerOnce>
              {/* Contact Details */}
              <div className="p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10">
                    <FiMail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-400 transition-colors hover:text-cyan-400"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10">
                    <FiPhone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-400 transition-colors hover:text-cyan-400"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10">
                    <FiMapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-gray-400">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl">
                <h3 className="mb-6 font-medium text-white">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 ${link.color} transition-colors`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </Fade>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block mb-2 font-medium text-white"
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
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all rounded-lg outline-none bg-gray-700/50 focus:ring-2 focus:ring-cyan-400/50"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-white"
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
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all rounded-lg outline-none resize-none bg-gray-700/50 focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 rounded-full border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-lg text-center ${
                    submitStatus === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus === "success"
                    ? "Message sent successfully! I will get back to you soon."
                    : "Oops! Something went wrong. Please try again."}
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
