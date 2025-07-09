import { BsKanban } from 'react-icons/bs';
import {
  FaAndroid, FaGamepad,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaPhp,
  FaHtml5,
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
  SiTypescript,
  SiPhp,
} from 'react-icons/si';

// Import all project images
import f2018 from './assets/f2018.png';
import s2022 from './assets/s2022.png';
import c2024 from './assets/c2024.png';
import n2024 from "./assets/n2024.png";
import b2025 from "./assets/b2025.png";
import a2025 from "./assets/a2025.png";
import t2025 from "./assets/t2025.png";
import bm2025 from "./assets/bm2025.png";
import ss2024 from "./assets/ss2024.png";
import cc2023 from "./assets/cc2023.png";
import ms2025 from "./assets/mm.png";
// Using available images as placeholders for missing images
const ecosyncwaste = f2018;
const GithubBot = s2022;
const GithubTutorial = c2024;
const GPTvai = n2024;
const kiddo = f2018;
const MriShot = s2022;
const Portfolio = c2024;
const reactSimplify = ms2025; // Updated to use ms2025.png
const rentit = f2018;
const survivalWarrior = s2022;
const surviveIT = c2024;
const sustARMS = n2024;
const TaskMate = f2018;
const tasknext = s2022;
const typerush = c2024;
const codecraft = n2024;
const fixhub = f2018;
const atomsense = s2022;
const babaAI = c2024;
const DALLvishon = f2018; // fallback image since mm2025.png does not exist

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
  html: { icon: FaHtml5, color: '#E34F26', name: 'HTML' },
  php: { icon: FaPhp, color: '#777BB4', name: 'PHP' },
  'c#': { icon: SiCplusplus, color: '#239120', name: 'C#' },
  '.net': { icon: SiCplusplus, color: '#512BD4', name: '.NET' },
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
    id: 51,
    image: t2025,
    title: "TaskMaster",
    date: "Jun 4, 2025 - Jun 9, 2025",
    description: "FixHub is a powerful and intuitive issue tracker built using Next.js and SQL, designed to streamline bug management and project tracking. With a focus on efficiency and user-friendliness, FixHub allows for seamless creation, viewing, updating, and deletion of issues. Key features include:",
    github: "https://github.com/raihanulislam00/TaskMaster",
    demo: "https://task-master-red-nu.vercel.app/",
    skills: ['html',"nextjs", "typescript", "tailwind" ,"mongodb",'express'],
    category: 'web',
    featured: true
  },
  {
    id: 5,
    image: a2025,
    title: "☁️ Abohochitro",
    date: "Jun 3, 2025 - July 4, 2025",
    description: "Abohochitro: Bangladesh's Air Quality and Cyclone Tracker",
    github: "https://github.com/raihanulislam00/Abohochitro",
    demo: "https://youtu.be/LfcAvnbAchM?si=HmYpvEQRRMRRtW7x",
    skills: ['php', 'html', 'css', 'mysql'],
    category: 'web',
    featured: false
  },
  {
    id: 42,
    image: b2025,
    title: "BanglaVerse",
    date: "May 24, 2025 - Jun 31, 2025",
    description: "AI-powered Bengali platform for translation, chat, and content creation.",
    github: "https://github.com/raihanulislam00/BanglaVerse",
    demo: "https://banglaverse.vercel.app/",
    skills: ['nextjs', 'typescript', 'tailwind', 'postgres', 'ai','react','mongodb','express'],
    category: 'web',
    featured: true
  },
  {
    id: 8,
    image: ms2025, // fallback image since mm2025.png does not exist
    title: "MathUtils",
    date: "Jul 09, 2025 - Aug 20, 2025",
    description: "Automated GitHub bot that sends notifications for new followers and interactions.",
    github: "https://github.com/raihanulislam00/MathUtils",
    demo: "https://mathutils.vercel.app/",
    skills: ['java', 'jdkfromwork', 'gul'],
    category: 'app',
    featured: false
  },
  {
    id: 52,
    image: bm2025,
    title: "Bank Management",
    date: "Jun 4, 2025 - Jun 30, 2025",
    description: "A Complete Toolkit for Software Engineering Students...All in one extension for your development journey.",
    github: "https://github.com/raihanulislam00/Bank-Management",
    demo: "https://code-craft-extension.vercel.app/",
    skills: ["react", "tailwind", "node"],
    category: 'web',
    featured: true
  },
  {
    id: 7,
    image: cc2023,
    title: "Babysetter Management System",
    date: "Aug 4, 2023 - Dec 30, 2023",
    description: "Action-packed 2D warrior game with multiple levels and combat mechanics.",
    github: "https://github.com/raihanulislam00/Babysetter_Management_System",
    demo: "",
    skills: ['c#', '.net'],
    category: 'App',
    featured: false
  },
  {
    id: 8,
    image: GithubBot,
    title: "Rent management",
    date: "Jan 20, 2022 - Feb 20, 2022",
    description: "Automated GitHub bot that sends notifications for new followers and interactions.",
    github: "https://github.com/raihanulislam00/Rent-management",
    demo: "",
    skills: ['java', 'jdkfromwork', 'gul'],
    category: 'app',
    featured: false
  },
  {
    id: 3,
    image: n2024,
    title: "Ninja Game",
    date: "March 24, 2024 - March 31, 2024",
    description: "Game where players control a ninja character, navigating through levels, defeating enemies, and completing objectives.",
    github: "https://github.com/raihanulislam00/Ninja-game",
    demo: "https://ninja-game-sepia.vercel.app/",
    skills: ['react', 'tailwind', 'node', 'mongodb', 'express','game'],
    category: 'web',
    featured: true
  },
  {
    id: 6,
    image: ss2024,
    title: "Sailor",
    date: "Mar 30, 2024 - Sept 30, 2024",
    description: "An exciting survival game built with Java, featuring dynamic environments and challenging gameplay mechanics.",
    github: "https://github.com/raihanulislam00/Sailor",
    demo: "https://sailor1.vercel.app/",
    skills: ['html','js','css','game'],
    category: 'game',
    featured: false
  },
  {
    id: 4,
    image: c2024,
    title: "Chess-RI",
    date: "Dec 24, 2023 - Nov 31, 2023",
    description: "Chess-RI is a web-based chess game that allows users to play chess against a computer opponent or with friends. It features a user-friendly interface, real-time gameplay, and various difficulty levels.",
    github: "https://github.com/raihanulislam00/Chess-RI",
    demo: "https://raihanulislam00.github.io/Chess-RI/",
    skills: ['HTML', 'Css','game'],
    category: 'web',
    featured: true
  },
  {
    id: 2,
    image: s2022,
    title: "Sharkie",
    date: "Sept 4, 2023 - Dec 30, 2023",
    description: "This A game",
    github: "https://github.com/raihanulislam00/Sharkie",
    demo: "https://sharkie-rho.vercel.app/",
    skills: ['html', 'css', 'js','express','game'],
    category: 'web',
    featured: true
  },
  {
    id: 1,
    image: f2018,
    title: "World Cup 2018",
    date: "Jan 4, 2022 - April 30, 2022",
    description: "This Is a Foootball World Cup 2018 Website. It is a fully responsive website built with React.js and Tailwind CSS. The website provides information about the teams, players, and matches of the World Cup 2018.",
    github: "https://github.com/raihanulislam00/World-Cup-2018",
    demo: "https://world-cup-2018-rosy.vercel.app/",
    skills: ['js', 'html', 'css', 'tailwind','game'],
    category: 'game',
    featured: true
  },
];

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'featured', name: 'Featured' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'game', name: 'Games' }
]; 