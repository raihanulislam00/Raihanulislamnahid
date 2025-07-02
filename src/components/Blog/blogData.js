import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';
import blog4 from './assets/blog4.png';

export const categories = [
  {
    name: "All",
    icon: "FiGrid"
  },
  {
    name: "Web Development",
    icon: "FiCode"
  },
  {
    name: "Technology",
    icon: "FiCpu"
  },
  {
    name: "Programming",
    icon: "FiTerminal"
  },
  {
    name: "Career",
    icon: "FiBriefcase"
  }
];

export const blogs = [
  {
    id: 1,
    title: "Bitwise Tricks Or Regret Later",
    description: "Explore essential bitwise tricks for efficient coding—master techniques to optimize performance and avoid regrets in programming.",
    image: blog1,
    category: "Competitive Programming",
    date: "Oct 01, 2024",
    readTime: "15 min read",
    author: {
      name: "raihanulislam00",
      avatar: "https://github.com/raihanulislam00.png",
      role: "Software Engineer"
    },
    tags: ["C++", "Competitive Programming", "Bitwise Tricks"],
    link: "https://raihanulislam00.github.io/Bitwise-Tricks-Or-Regret-Later/"
  },
  {
    id: 2,
    title: "The big (o) notation",
    description: "Master Big O Notation to analyze algorithm efficiency and optimize performance—essential for coding interviews and scalable solutions.",
    image: blog2,
    category: "Programming",
    date: "March 23, 2024",
    readTime: "17 min read",
    author: {
      name: "raihanulislam00",
      avatar: "https://github.com/raihanulislam00.png",
      role: "Software Engineer"
    },
    tags: ["DSA", "Programming", "Interviews"],
    link: "https://dev.to/your-blog-2"
  },
  {
    id: 3,
    title: "Maximum Subarray Sum: Kadane's Algorithm (Dynamic Programming)",
    description: "Learn Kadane's Algorithm for maximum subarray sum—optimize solutions in O(n) time for efficient problem-solving.",
    image: blog3,
    category: "Programming",
    date: "March 31, 2024",
    readTime: "20 min read",
    author: {
      name: "raihanulislam00",
      avatar: "https://github.com/raihanulislam00.png",
      role: "Software Engineer"
    },
    tags: ["DSA", "Programming", "Interviews"],
    link: "https://raihanulislam00.github.io/Maximum-Subarray-Sum-Kadanes-Algorithm/"
  },
  {
    id: 4,
    title: "Elementary Number Theory",
    description: "Master key number theory concepts for competitive programming and efficient algorithm design—primes, divisibility, GCD, and modular arithmetic.",
    image: blog4,
    category: "Competitive Programming",
    date: "February 28, 2024",
    readTime: "23 min read",
    author: {
      name: "raihanulislam00",
      avatar: "https://github.com/raihanulislam00.png",
      role: "Software Engineer"
    },
    tags: ["DSA", "Programming", "Interviews"],
    link: "https://raihanulislam00.github.io/Elementary-Number-Theory/"
  },
  {
    id: 5,
    title: "Additional Silver Topics",
    description: "Master key silver-level competitive programming techniques—optimize solutions with efficient algorithms, data structures, and problem-solving strategies.",
    image: blog3,
    category: "Competitive Programming",
    date: "February 25, 2024",
    readTime: "15 min read",
    author: {
      name: "raihanulislam00",
      avatar: "https://github.com/raihanulislam00.png",
      role: "Software Engineer"
    },
    tags: ["DSA", "Programming", "Interviews"],
    link: "https://raihanulislam00.github.io/Additional-Silver-Topics/"
  },
]; 