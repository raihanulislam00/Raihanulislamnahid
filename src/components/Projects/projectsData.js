import { BsKanban } from 'react-icons/bs';
import {
  FaAndroid, FaGamepad,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

// Import all project images
import atomsense from './assets/atomsense.jpg';
import babaAI from './assets/babaAI.png';
import DALLvishon from './assets/DALLvishon.jpg';
import devstories from "./assets/dev-stories.png";
import ecosyncwaste from './assets/ecosyncwaste.jpg';
import GithubBot from './assets/GithubBot.jpg';
import GithubTutorial from './assets/GithubTutorial.jpg';
import GPTvai from './assets/GPTvai.jpg';
import kiddo from './assets/kiddo.jpg';
import MriShot from './assets/MriShot.jpg';
import Portfolio from './assets/Portfolio.jpg';
import reactSimplify from './assets/reactSimplify.jpg';
import rentit from './assets/rentit.jpg';
import survivalWarrior from './assets/survivalWarrior.jpg';
import surviveIT from './assets/surviveIT.jpg';
import sustARMS from './assets/sustARMS.jpg';
import TaskMate from './assets/TaskMate.jpg';
import tasknext from './assets/tasknext.png';
import typerush from './assets/typerush.png';
import codecraft from './assets/codecraft.png';
import fixhub from "./assets/fixhub.png";

export const skillsConfig = {
  react: { icon: FaReact, color: '#61DAFB', name: 'React' },
  tailwind: { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
  nextjs: { icon: FaReact, color: '#Ffffff', name: 'Next.js' },
  node: { icon: FaNodeJs, color: '#A0C878', name: 'Node.js' },
  mysql: { icon: SiMysql, color: '#A1E3F9', name: 'MySQL' },
  express: { icon: SiExpress, color: '#ffffff', name: 'Express' },
  socket: { icon: SiSocketdotio, color: '#ffffff', name: 'Socket.io' },
  bootstrap: { icon: SiBootstrap, color: '#A9B5DF', name: 'Bootstrap' },
  mongodb: { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  java: { icon: FaJava, color: '#E8F9FF', name: 'Java' },
  android: { icon: FaAndroid, color: '#3DDC84', name: 'Android' },
  firebase: { icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
  figma: { icon: SiFigma, color: '#F24E1E', name: 'Figma' },
  css: { icon: SiCss3, color: '#1572B6', name: 'CSS' },
  game: { icon: FaGamepad, color: '#FF4154', name: 'Game Dev' },
  c: { icon: SiCplusplus, color: '#C7D9DD', name: 'C/C++' },
  javascript: { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  typescript: { icon: SiTypescript, color: '#8F87F1', name: 'TypeScript' },
  postgres: { icon: SiPostgresql, color: '#A1E3F9', name: 'Postgresql' },
  python: { icon: FaPython, color: '#98D8EF', name: 'Python' },
  workflow: { icon: BsKanban, color: '#FF4154', name: 'Workflow' },
  github: { icon: FaGithub, color: '#F2EFE7', name: 'GitHub' },
  ai: { icon: GiArtificialIntelligence, color: '#FF4154', name: 'AI' },
  prisma: { icon: SiPrisma, color: '#A1E3F9', name: 'Prisma' },
};

export const projects = [
  {
    id: 1,
    image: devstories,
    title: "✍️ Dev Stories Blog Platform",
    date: "Jan 4, 2025 - April 30, 2025",
    description: "A fullstack blog application for developers to share their stories, featuring rich text editing, authentication, and real-time updates.",
    github: "https://github.com/Sumonta056/dev-stories-frontend",
    demo: "https://dev-stories-frontend.vercel.app/",
    skills: ['react', 'typescript', 'postgres', 'node', 'express'],
    category: 'web',
    featured: true
  },
  {
    id: 2,
    image: sustARMS,
    title: "🛺 SUST Autorickshaw System",
    date: "Sept 4, 2023 - Dec 30, 2023",
    description: "A comprehensive management system for SUST's autorickshaw service, featuring real-time tracking, automated scheduling, and digital payments.",
    github: "https://github.com/Sumonta056/SUST_Autorickshaw_Management_System",
    demo: "https://youtu.be/nqDUCzSChFY?si=cckyMgi1jATgqvpI",
    skills: ['react', 'css', 'mysql', 'node', 'express'],
    category: 'web',
    featured: true
  },
  {
    id: 3,
    image: ecosyncwaste,
    title: "🗑️ Eco-Sync : Waste Management",
    date: "March 24, 2024 - March 31, 2024",
    description: "Smart waste management solution with IoT integration, real-time monitoring, and optimized collection routes for sustainable cities.",
    github: "https://github.com/Sumonta056/EcoSync-Waste-Management-Website",
    demo: "https://github.com/Sumonta056/https://github.com/Sumonta056/EcoSync-Waste-Management-Website",
    skills: ['react', 'tailwind', 'node', 'mongodb', 'express'],
    category: 'web',
    featured: true
  },

  {
    id: 4,
    image: rentit,
    title: "📱 RENT IT",
    date: "Dec 24, 2023 - Nov 31, 2023",
    description: "Mobile application for renting and sharing items within communities, featuring secure payments and real-time chat.",
    github: "https://github.com/Sumonta056/Rent_IT-App",
    demo: "https://github.com/Sumonta056/Rent_IT-App",
    skills: ['java', 'android', 'firebase', 'figma'],
    category: 'mobile',
    featured: true
  },
  {
    id: 42,
    image: babaAI,
    title: "🛩️ BabaAI Content Generator",
    date: "Sept 24, 2024 - Nov 31, 2024",
    description: "BabaAI is a comprehensive full-stack AI content generator platform that leverages Gemini AI to create content based on your prompts.",
    github: "https://github.com/Sumonta056/BabaAI-Content-Generator",
    demo: "https://github.com/Sumonta056/BabaAI-Content-Generator",
    skills: ['nextjs', 'typescript', 'tailwind', 'postgres', 'ai'],
    category: 'web',
    featured: true
  },
  {
    id: 5,
    image: atomsense,
    title: "☁️ Atoms-Sense",
    date: "Nov 3, 2023 - Nov 4, 2023",
    description: "IoT-based environmental monitoring system with real-time data visualization and predictive analytics.",
    github: "https://github.com/Sumonta056/AtomSense-DU_ITVerse_Hackathon",
    demo: "https://github.com/Sumonta056/AtomSense-DU_ITVerse_Hackathon",
    skills: ['react', 'tailwind', 'node', 'mysql', 'express'],
    category: 'web',
    featured: false
  },
  {
    id: 51,
    image: fixhub,
    title: "⛏️ FixHub - Complete Issue Tracker",
    date: "Aug 4, 2024 - Mov 30, 2024",
    description: "FixHub is a powerful and intuitive issue tracker built using Next.js and SQL, designed to streamline bug management and project tracking. With a focus on efficiency and user-friendliness, FixHub allows for seamless creation, viewing, updating, and deletion of issues. Key features include:",
    github: "https://github.com/Sumonta056/FixHub-Issue-Tracker-Website",
    demo: "https://github.com/Sumonta056/FixHub-Issue-Tracker-Website",
    skills: ["nextjs", "typescript", "tailwind", "prisma" ,"mysql"],
    category: 'web',
    featured: true
  },
  {
    id: 52,
    image: codecraft,
    title: "🧑‍💻 CodeCraft Crome Extension",
    date: "March 4, 2024 - Mov 30, 2024",
    description: "A Complete Toolkit for Software Engineering Students...All in one extension for your development journey.",
    github: "https://github.com/Sumonta056/CodeCraft-Extension",
    demo: "https://code-craft-extension.vercel.app/",
    skills: ["react", "tailwind", "node"],
    category: 'web',
    featured: true
  },
  {
    id: 6,
    image: surviveIT,
    title: "🏃‍♀️ Survive IT Game",
    date: "Mar 30, 2022 - Sept 30, 2022",
    description: "An exciting survival game built with Java, featuring dynamic environments and challenging gameplay mechanics.",
    github: "https://github.com/Sumonta056/Survive-IT",
    demo: "https://youtu.be/xrBm0B-sxXk?si=Mhqop_U3IVfD7qnf",
    skills: ['java', 'game'],
    category: 'game',
    featured: false
  },
  {
    id: 7,
    image: survivalWarrior,
    title: "🥷 Survival of Warrior",
    date: "Aug 4, 2021 - Dec 30, 2021",
    description: "Action-packed 2D warrior game with multiple levels and combat mechanics.",
    github: "https://github.com/Sumonta056/Survival-of-Warrior",
    demo: "https://github.com/Sumonta056/Survival-of-Warrior",
    skills: ['c', 'game'],
    category: 'game',
    featured: false
  },
  {
    id: 8,
    image: GithubBot,
    title: "🤖 GitHub Follower Notification Bot",
    date: "Jan 20, 2024 - Feb 20, 2024",
    description: "Automated GitHub bot that sends notifications for new followers and interactions.",
    github: "https://github.com/Sumonta056/GitHub-Follower-Notification-Action-Bot",
    demo: "https://github.com/Sumonta056/GitHub-Follower-Notification-Action-Bot",
    skills: ['python', 'workflow', 'github'],
    category: 'web',
    featured: false
  },
  {
    id: 80,
    image: tasknext,
    title: "📝 TaskNext - Simple To Do List",
    date: "Aug 4, 2024 - Mov 30, 2024",
    description: "TaskNext is a minimalistic website designed to help you manage your tasks efficiently. It provides a simple and intuitive interface for users to create, read, update, and delete tasks, as well as mark tasks as complete.",
    github: "https://github.com/Sumonta056/TaskNext",
    demo: "https://github.com/Sumonta056/TaskNext",
    skills: ["nextjs", "typescript", "tailwind", "mongodb", "node"],
    category: 'web',
    featured: false
  },
  {
    id: 81,
    image: typerush,
    title: "⌨️ TypeRush - Typing Speed Test",
    date: "Aug 4, 2024 - Mov 30, 2024",
    description: "TypeRush is a minimalistic website designed to test your typing speed. It provides a simple and intuitive interface for users to practice and improve their typing skills.",
    github: "https://github.com/Sumonta056/TypeRush-Typing-Speed-Test",
    demo: "https://github.com/Sumonta056/TypeRush-Typing-Speed-Test",
    skills: ["react", "typescript", "tailwind", "node" ,"firebase"],
    category: 'web',
    featured: false
  },
  {
    id: 90,
    image: reactSimplify,
    title: "🧐 React Simplify Template",
    date: "Aug 4, 2023 - Mar 30, 2024",
    description: "React Simplify Template: Your go-to for streamlining React setups, using features with library integration and Tailwind CSS",
    github: "https://github.com/Sumonta056/ReactJS-Simplify-Template",
    demo: "https://react-js-simplify-template.vercel.app/",
    skills: ["react", "tailwind", "node"],
    category: 'web',
    featured: false
  },
  {
    id: 91,
    image: kiddo,
    title: "👶 KIDDO - Child Care",
    date: "Oct 14, 2023 - Oct 15, 2023",
    description: "Empowering parents through a comprehensive ecosystem. Instant advisor communication, personalized consultations, emergency support, community interaction, marketplace for child products, and a reading library",
    github: "https://github.com/Sumonta056/Kiddo-LU-Hackathon",
    demo: "https://github.com/Sumonta056/Kiddo-LU-Hackathon/",
    skills: ["react", "bootstrap", "node", "socket"],
    category: 'web',
    featured: false
  },
  {
    id: 92,
    image: MriShot,
    title: "📸 Mri-Shot",
    date: "Jan 4, 2024 - Jan 14, 2024",
    description: "MriShot - Capturing the Vision of Mridul - A Website Showcasing my photography skills & Represenation of my Programming Skill",
    github: "https://github.com/Sumonta056/Mri-Shot",
    demo: "https://mri-shot.vercel.app/",
    skills: ["react", "tailwind", "node"],
    category: 'web',
    featured: false
  },
  {
    id: 93,
    image: TaskMate,
    title: "📝 Task-Mate",
    date: "May 4, 2023 - Aug 30, 2023",
    description: "Stay organized and boost productivity with intuitive To-Do List app. It allows users to create, read, update, sort and delete tasks. The app features a user-friendly interface and implements backend functionality to manage task data efficiently.",
    github: "https://github.com/Sumonta056/Task-Mate",
    demo: "https://youtu.be/ZOf62tfcezM?si=Cn6rc3_DtwnSd7Dx",
    skills: ["javascript", "css", "node", "mysql", "express"],
    category: 'web',
    featured: false
  },
  {
    id: 94,
    image: Portfolio ,
    title: "🦾 Personal Portfolio",
    date: "Jan 4, 2023 - Jul 30, 2023",
    description: "Personal Portfolio Website showcasing my projects, skills, and experience. The website is built using HTML, CSS, and JavaScript.",
    github: "https://github.com/Sumonta056/sumonta056.github.io",
    demo: "https://youtu.be/QzW2DaR7KEc?si=wlaibLJRDQkEx_UO",
    skills: ["javascript", "css", "node"],
    category: 'web',
    featured: true
  },
  {
    id: 95,
    image: GithubTutorial ,
    title: "✍🏻 GitHub Tutorial",
    date: "Jan 20, 2023 - Dec 20, 2023",
    description: "A comprehensive guide to GitHub, covering the basics of Git, repositories, branches, pull requests, and more.",
    github: "https://github.com/Sumonta056/GitHub-Tutorial",
    demo: "https://github.com/Sumonta056/GitHub-Tutorial",
    skills: ["python", "github"],
    category: 'web',
    featured: false
  },
  {
    id: 96,
    image: GPTvai ,
    title: "👨‍🦰 GPT-Vai",
    date: "Oct 20, 2023 - Oct 30, 2023",
    description: "GPT-Vai is a Bengali language model trained on the GPT-3 architecture. It is capable of generating human-like text in Bengali.",
    github: "https://github.com/Sumonta056/GPT-Vai",
    demo: "https://github.com/Sumonta056/GPT-Vai",
    skills: ["react", "tailwind", "node", "ai"],
    category: 'web',
    featured: false
  },
  {
    id: 97,
    image: DALLvishon,
    title: "👁️ DALL·E ভিশন",
    date: "Oct 20, 2023 - Oct 30, 2023",
    description: "DALL·E ভিশন is a web application that generates images based on textual descriptions using the OpenAI DALL·E model.",
    github: "https://github.com/Sumonta056/DALL-E-Vision",
    demo: "https://github.com/Sumonta056/DALL-E-Vision",
    skills: ["react", "tailwind", "node" ,"ai"],
    category: 'web',
    featured: false
  },
];

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'featured', name: 'Featured' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'game', name: 'Games' }
]; 