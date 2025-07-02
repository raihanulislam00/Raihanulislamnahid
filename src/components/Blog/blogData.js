import blog1 from './assets/blog-1.webp';
import blog2 from './assets/blog-2.webp';
import blog3 from './assets/blog-3.webp';
import blog4 from './assets/blog-4.webp';
import blog5 from './assets/blog-5.webp';
import blog6 from './assets/blog-6.webp';

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
    title: "Building Modern Web Applications with React and TypeScript",
    description: "Learn how to leverage TypeScript with React to build more robust and maintainable web applications. Explore best practices, common patterns, and advanced techniques.",
    image: blog1,
    category: "Web Development",
    date: "March 10, 2024",
    readTime: "8 min read",
    author: {
      name: "Sumonta Saha",
      avatar: "https://github.com/Sumonta056.png",
      role: "Software Engineer"
    },
    tags: ["React", "TypeScript", "Web Development"],
    link: "https://dev.to/your-blog-1"
  },
  {
    id: 2,
    title: "Mastering Data Structures and Algorithms",
    description: "A comprehensive guide to understanding and implementing essential data structures and algorithms. Perfect for coding interviews and becoming a better programmer.",
    image: blog2,
    category: "Programming",
    date: "March 5, 2024",
    readTime: "12 min read",
    author: {
      name: "Sumonta Saha",
      avatar: "https://github.com/Sumonta056.png",
      role: "Software Engineer"
    },
    tags: ["DSA", "Programming", "Interviews"],
    link: "https://dev.to/your-blog-2"
  },
  {
    id: 3,
    title: "The Future of AI in Software Development",
    description: "Exploring how artificial intelligence is transforming the software development landscape and what developers need to know to stay ahead.",
    image: blog3,
    category: "Technology",
    date: "March 1, 2024",
    readTime: "10 min read",
    author: {
      name: "Sumonta Saha",
      avatar: "https://github.com/Sumonta056.png",
      role: "Software Engineer"
    },
    tags: ["AI", "Technology", "Future"],
    link: "https://dev.to/your-blog-3"
  },
  {
    id: 4,
    title: "From Intern to Software Engineer: My Journey",
    description: "Personal insights and lessons learned during my transition from an internship to a full-time software engineering role at Cefalo Bangladesh Ltd.",
    image: blog4,
    category: "Career",
    date: "February 28, 2024",
    readTime: "6 min read",
    author: {
      name: "Sumonta Saha",
      avatar: "https://github.com/Sumonta056.png",
      role: "Software Engineer"
    },
    tags: ["Career", "Personal Growth", "Software Engineering"],
    link: "https://dev.to/your-blog-4"
  },
  {
    id: 5,
    title: "Building Scalable Backend Systems with Node.js",
    description: "A deep dive into architecting and implementing scalable backend systems using Node.js, Express, and modern best practices.",
    image: blog5,
    category: "Web Development",
    date: "February 25, 2024",
    readTime: "15 min read",
    author: {
      name: "Sumonta Saha",
      avatar: "https://github.com/Sumonta056.png",
      role: "Software Engineer"
    },
    tags: ["Node.js", "Backend", "Architecture"],
    link: "https://dev.to/your-blog-5"
  },
  {
    id: 6,
    title: "Essential Tools for Modern Web Development",
    description: "A curated list of must-have tools, extensions, and resources that every web developer should know about to boost productivity.",
    image: blog6,
    category: "Web Development",
    date: "February 20, 2024",
    readTime: "8 min read",
    author: {
      name: "Sumonta Saha",
      avatar: "https://github.com/Sumonta056.png",
      role: "Software Engineer"
    },
    tags: ["Tools", "Productivity", "Web Development"],
    link: "https://dev.to/your-blog-6"
  }
]; 