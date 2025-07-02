import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const contactInfo = {
  email: "sumontasaha80@gmail.com",
  phone: "+880 1845359479",
  location: "Dhaka, Bangladesh",
  description: "I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect!"
};

export const socialLinks = [
  {
    id: 1,
    icon: FiGithub,
    name: "GitHub",
    url: "https://github.com/Sumonta056",
    color: "hover:text-gray-300"
  },
  {
    id: 2,
    icon: FiLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sumonta-saha-mridul-b6b57b197/",
    color: "hover:text-blue-400"
  },
  {
    id: 3,
    icon: FiTwitter,
    name: "Twitter",
    url: "https://twitter.com/sumonta056",
    color: "hover:text-blue-500"
  },
  {
    id: 4,
    icon: FiFacebook,
    name: "Facebook",
    url: "https://www.facebook.com/sumonta.mridul",
    color: "hover:text-blue-600"
  },
  {
    id: 5,
    icon: FiInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/sumonta.mridul",
    color: "hover:text-pink-500"
  }
];

export const contactFields = [
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Please write your name",
    icon: "👤"
  },
  {
    id: "email",
    label: "Your Email",
    type: "email",
    placeholder: "x@example.com",
    icon: "✉️"
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "How can I help you?",
    icon: "📝"
  }
]; 