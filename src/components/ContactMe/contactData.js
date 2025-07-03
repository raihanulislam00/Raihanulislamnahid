import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const contactInfo = {
  email: "raihanulislamnahid22@gmail.com",
  phone: "+880 1827491977",
  location: "Dhaka, Bangladesh",
  description: "I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect!"
};

export const socialLinks = [
  {
    id: 1,
    icon: FiGithub,
    name: "GitHub",
    url: "https://github.com/raihanulislam00",
    color: "hover:text-gray-300"
  },
  {
    id: 2,
    icon: FiLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raihanulislam00/",
    color: "hover:text-blue-400"
  },
  {
    id: 3,
    icon: FiTwitter,
    name: "Twitter",
    url: "https://twitter.com/Roll__Num__44",
    color: "hover:text-blue-500"
  },
  {
    id: 4,
    icon: FiFacebook,
    name: "Facebook",
    url: "https://www.facebook.com/raihanulislam00",
    color: "hover:text-blue-600"
  },
  {
    id: 5,
    icon: FiInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/raihanulislam00",
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