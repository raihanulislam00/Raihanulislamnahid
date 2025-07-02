import {
  FiCamera,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayout,
  FiServer,
} from "react-icons/fi";

export const skills = [
  {
    name: "Frontend Development",
    icon: FiLayout,
    level: 95,
    color: "from-blue-400 to-cyan-400",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    name: "Backend Development",
    icon: FiServer,
    level: 85,
    color: "from-green-400 to-emerald-400",
    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "Docker",
      "Postman",
      "Prisma",
      "Knex.js",
      "Nest.js",
    ],
  },
  {
    name: "Problem Solving",
    icon: FiCode,
    level: 95,
    color: "from-purple-400 to-pink-400",
    technologies: [
      "Data Structures",
      "Algorithms",
      "LeetCode",
      "Codeforces",
      "HackerRank",
      "CodeChef",
    ],
  },
  {
    name: "Database Management",
    icon: FiDatabase,
    level: 80,
    color: "from-orange-400 to-red-400",
    technologies: [
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    name: "Other Skills",
    icon: FiGlobe,
    level: 85,
    color: "from-yellow-400 to-orange-400",
    technologies: [
      "C",
      "C++",
      "Python",
      "Java",
      "Game Dev",
      "Android App Development",
      "Git",
      "Github",
    ],
  },
  {
    name: "UI/UX Design",
    icon: FiCamera,
    level: 75,
    color: "from-pink-400 to-rose-400",
    technologies: [
      "Figma",
      "Canva",
      "Responsive Design",
      "Adobe Photoshop",
      "Adobe Lightroom",
    ],
  },
];

export const experience = [
  {
    title: "Associate Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    duration: "June 2024 - Present",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    description: [
      "⭐ Cefalo ATS (Applicant Tracking System)",
      "Actively Participate in Sprint & Daily Standup",
      "Worked on 10 Bug Fix / Improvements Task",
      "Worked on emergency HOTFIX Bug Issue in Production",
      "Implemented a Client Requirement Needed Feature Task (Successfully Delivered)",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Nest.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Docker",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    duration: "Dec 2024 - May 2025",
    type: "Intenship",
    location: "Dhaka, Bangladesh",
    description: [
      "⭐ Backend Development",
      "Designed, developed, and maintained a Blog Website Backend using Node.js, PostgreSQL, and Knex.js.",
      "Built and maintained **RESTful APIs** to ensure seamless communication with frontend system.",
      "Consistent and Quality code base following **Controller - Service - Repository** Pattern.",
      "Applied **Axios** for making HTTP requests and **CORS origin policy** to handle cross-origin requests.",
      "Implemented proper **error validation** to handle and log errors effectively.",
      "Got mentored by senior developers to ensure code quality and adherence to best practices.",
      "Implemented **unit testing with JEST** to ensure robustness and reliability of the backend system.",
      "Optimized performance through **caching strategies** and **Dockerized** the application for efficient deployment and scalability.",
      "Implemented **CRUD operations** for managing blog posts, comments, and user profiles.",
      "⭐ Frontend Development",
      "Developed the Blog Website Frontend using React, TypeScript, and Tailwind CSS.",
      "Integrated **React Tanstack Query** for efficient data fetching and caching.",
      "Built **reusable components** and implemented state management using **React Hooks and Context API**.",
      "Integrated features like route protection, lazy loading, **AI support** for Image & Story Generation.",
      "Added **multilingual language** (Norwegian) support to enhance accessibility for a global audience.",
      "Focused on **performance optimization** to improve load times and overall user satisfaction.",
      "Implemented **responsive design** and ensured cross-browser compatibility for an optimal user experience. **UI friendly design** to ensure an intuitive and engaging user experience",
      "Implemented features like **newsletters** for user engagement and **story statistics** for tracking user interactions.",
      "⭐ Collaboration & Knowledge Sharing",
      "Actively participated in team presentations on caching strategies and best practices, contributing to team growth and knowledge sharing.",
    ],
    technologies: [
      "React",
      "Node.js",
      "REST API",
      "Caching",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "Slack",
      "Axios",
      "CORS",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    duration: "2020 - Present",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Current CGPA: 3.85/4.00",
      "Consistently maintaining high academic performance",
      "Active participation in programming competitions and technical workshops",
      "Specialized in Software Engineering and Data Structures & Algorithms",
      "Member of competitive programming community",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Notre Dame College",
    duration: "2017 - 2019",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Achieved a perfect GPA: 5.00/5.00",
      "Specialized in the Science Group (Group - 5)",
      "Secured a Merit Position in College for outstanding academic performance",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Narayanganj Ideal School",
    duration: "2015 - 2017",
    location: "Narayanganj, Bangladesh",
    achievements: [
      "Achieved a perfect GPA: 5.00/5.00 (Golden A+)",
      "Ranked 2nd in the School and 4th in Narayanganj District",
      "Awarded 2nd place in Intra-School Dewalika/Poster Presentation Competition",
    ],
  },
];

export const stats = [
  { label: "Problems Solved", value: "900+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Competitions  & Achievements", value: "10+" },
  { label: "Years Experience", value: "1+" },
];

export const aboutData = {
  title: "About Me",
  subtitle: "Get to know me better",
  description:
    "I'm a passionate Software Engineering student at AIUB (American International University-Bangladesh) with a deep fascination for technology and problem-solving. Currently serving as a Junior Software Engineer, I thrive on tackling complex challenges through competitive programming on platforms like Codeforces, CodeChef, and AtCoder. My journey in software development is driven by curiosity, continuous learning, and the desire to create innovative solutions that make a meaningful impact.",

  stats: stats,

  skills: skills,

  education: education,

  interests: [
    "Web Development",
    "Open Source",
    "UI/UX Design",
    "Cloud Computing",
    "Photography",
    "Problem Solving",
  ],
};
