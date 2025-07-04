import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const contactInfo = {
  email: "raihanulislamnahid22@gmail.com",
  emailSubject: "👋 Let's Connect!",
  phone: "+880 1827491977",
  location: "Dhaka, Bangladesh",
  availability: "Open to opportunities",
  response: "Usually responds within 24 hours",
  description: "I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect!",
  gradient: "from-cyan-500 via-blue-500 to-purple-500",
  backgroundGlow: "shadow-cyan-500/20"
};

export const socialLinks = [
  {
    id: 1,
    icon: FiGithub,
    name: "GitHub",
    url: "https://github.com/raihanulislam00",
    color: "hover:text-gray-300",
    gradient: "from-gray-600 to-gray-300",
    description: "Check out my open source projects",
    bgGlow: "shadow-gray-500/20"
  },
  {
    id: 2,
    icon: FiLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raihanulislam00/",
    color: "hover:text-blue-400",
    gradient: "from-blue-600 to-blue-400",
    description: "Connect with me professionally",
    bgGlow: "shadow-blue-500/20"
  },
  {
    id: 3,
    icon: FiTwitter,
    name: "Twitter",
    url: "https://twitter.com/Roll__Num__44",
    color: "hover:text-blue-500",
    gradient: "from-blue-500 to-cyan-400",
    description: "Follow me for tech updates",
    bgGlow: "shadow-cyan-500/20"
  },
  {
    id: 4,
    icon: FiFacebook,
    name: "Facebook",
    url: "https://www.facebook.com/raihanulislam00",
    color: "hover:text-blue-600",
    gradient: "from-blue-600 to-indigo-400",
    description: "Connect with me socially",
    bgGlow: "shadow-blue-500/20"
  },
  {
    id: 5,
    icon: FiInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/raihanulislam00",
    color: "hover:text-pink-500",
    gradient: "from-pink-600 to-purple-400",
    description: "Follow my creative journey",
    bgGlow: "shadow-pink-500/20"
  }
];

export const contactFields = [
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "What should I call you? ✨",
    icon: "�",
    required: true,
    pattern: "^[A-Za-z ]{2,50}$",
    errorMessage: "Please enter a valid name (2-50 characters)",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    glow: "shadow-cyan-500/30",
    hoverGradient: "from-cyan-300 via-blue-400 to-indigo-400",
    focusGlow: "shadow-cyan-500/50",
    animation: "pulse"
  },
  {
    id: "email",
    label: "Your Email",
    type: "email",
    placeholder: "Let's stay connected! 📧",
    icon: "✨",
    required: true,
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    errorMessage: "Please enter a valid email address",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    glow: "shadow-blue-500/30",
    hoverGradient: "from-blue-300 via-indigo-400 to-purple-400",
    focusGlow: "shadow-blue-500/50",
    animation: "bounce"
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What's on your mind? 💭",
    icon: "🌟",
    required: true,
    minLength: 5,
    maxLength: 100,
    errorMessage: "Subject should be between 5 and 100 characters",
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    glow: "shadow-purple-500/30",
    hoverGradient: "from-purple-300 via-pink-400 to-rose-400",
    focusGlow: "shadow-purple-500/50",
    animation: "float"
  }
]; 