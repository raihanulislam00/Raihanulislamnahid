export const problemSolvingData = {
  title: "",
  subtitle: "Competitive Programming & Algorithm Mastery",
  description: "Demonstrating algorithmic prowess and problem-solving expertise across multiple competitive programming platforms with consistent performance and continuous growth.",
  
  platforms: [
    {
      id: 1,
      name: "LeetCode",
      logo: "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg",
      username: "raihanulislam00",
      profileUrl: "https://leetcode.com/raihanulislam00",
      stats: {
        problems: '50+',
        easy: '20+',
        medium: '20+',
        hard: '20+',
        rating: 1956,
        rank: "Guardian",
        contestRating: 1842,
        globalRank: "Top 15%"
      },
      icon: "FiCode",
      color: "from-orange-500 to-red-500",
      achievements: [
        "750+ Problems Solved", 
        "Guardian Rank Achieved", 
        "Weekly Contest Participant", 
        "100+ Day Streak",
        "Algorithm Expert Badge"
      ]
    },
    {
      id: 2,
      name: "Codeforces",
      logo: "https://codeforces.org/s/0/images/codeforces-logo-with-telegram.png",
      username: "Roll_Num_44",
      profileUrl: "https://codeforces.com/profile/Roll_Num_44",
      stats: {
        rating: 1577,
        maxRating: 1761,
        rank: "Expert",
        contests: 66,
        problems: 1166,
        contribution: "+15",
        friendsOf: 89
      },
      icon: "FiTarget",
      iconBg: "from-blue-500 to-indigo-600",
      color: "from-blue-500 to-purple-500",
      achievements: [
        "Expert Rating Achieved", 
        "1700+ Max Rating", 
        "Contest Regular (66 contests)", 
        "1100+ Problems Solved",
        "Top 25% in Division 2"
      ]
    },
    {
      id: 3,
      name: "CodeChef",
      logo: "https://www.codechef.com/misc/fb-image.jpg",
      username: "raihan44", 
      profileUrl: "https://codechef.com/users/raihanulislam00",
      stats: {
        rating: 1845,
        maxRating: 1967,
        rank: "4★ (Expert)",
        contests: '10+',
        problems: 387,
        globalRank: 15420,
        countryRank: 1205
      },
      icon: "FiZap",
      iconBg: "from-amber-500 to-orange-600",
      color: "from-amber-500 to-orange-500",
      achievements: [
        "4★ Expert Rating",
        "1900+ Max Rating",
        "Long Challenge Winner",
        "Top 20% Globally",
        "Cook-Off Participant"
      ]
    },
    {
      id: 4,
      name: "AtCoder",
      logo: "https://atcoder.jp/images/top/img_title.png",
      username: "raihanulislam00",
      profileUrl: "https://atcoder.jp/users/raihanulislam00",
      stats: {
        rating: 856,
        maxRating: 987,
        rank: "7 kyu (Brown)",
        contests: '10+',
        problems: 145,
        performance: 892
      },
      icon: "FiCpu",
      iconBg: "from-purple-500 to-pink-600",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Brown Coder (7 kyu)",
        "Regular ABC Participant", 
        "Problem Solving Expert",
        "Algorithm Implementation",
        "Mathematics Problem Solver"
      ]
    }
  ],

  skills: [
    {
      category: "Advanced Algorithms",
      items: [
        "Dynamic Programming (DP)",
        "Graph Algorithms (DFS/BFS)",
        "Greedy Algorithms", 
        "Divide & Conquer",
        "Backtracking & Recursion",
        "Binary Search Variants",
        "Two Pointers Technique",
        "Sliding Window"
      ]
    },
    {
      category: "Data Structures",
      items: [
        "Advanced Arrays & Strings",
        "Linked Lists & Variants",
        "Trees (BST, AVL, Segment)",
        "Graphs & Topological Sort",
        "Hash Tables & Maps",
        "Stacks & Queues",
        "Heaps & Priority Queues",
        "Disjoint Set Union (DSU)"
      ]
    },
    {
      category: "Problem Categories",
      items: [
        "Number Theory & Math",
        "String Algorithms (KMP, Z)",
        "Graph Theory & Traversal",
        "Optimization Problems",
        "Combinatorics & Probability",
        "Computational Geometry",
        "Network Flow",
        "Game Theory"
      ]
    },
    {
      category: "Programming Languages",
      items: [
        "C++ (Primary)",
        "Python (Secondary)",
        "Java (Competitive)",
        "JavaScript (Web)",
        "SQL (Database)",
        "Bash Scripting"
      ]
    }
  ],

  recentProblems: [
    {
      id: 1,
      title: "Maximum Subarray Product",
      platform: "LeetCode",
      difficulty: "Medium",
      solved: true,
      topics: ["Dynamic Programming", "Array"],
      solutionUrl: "#",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      solvedDate: "2025-07-01"
    },
    {
      id: 2,
      title: "Longest Increasing Subsequence",
      platform: "LeetCode", 
      difficulty: "Medium",
      solved: true,
      topics: ["Dynamic Programming", "Binary Search"],
      solutionUrl: "#",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      solvedDate: "2025-06-30"
    },
    {
      id: 3,
      title: "Chef and Polygon",
      platform: "CodeChef",
      difficulty: "Hard",
      solved: true,
      topics: ["Geometry", "Mathematics"],
      solutionUrl: "#",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(n)",
      solvedDate: "2025-06-29"
    },
    {
      id: 4,
      title: "Network Flow Optimization",
      platform: "Codeforces",
      difficulty: "Hard",
      solved: true,
      topics: ["Graph", "Max Flow", "Min Cut"],
      solutionUrl: "#",
      timeComplexity: "O(V²E)",
      spaceComplexity: "O(V²)",
      solvedDate: "2025-06-28"
    },
    {
      id: 5,
      title: "Shortest Path Queries",
      platform: "AtCoder",
      difficulty: "Medium",
      solved: true,
      topics: ["Graph", "Dijkstra", "Preprocessing"],
      solutionUrl: "#",
      timeComplexity: "O((V + E) log V)",
      spaceComplexity: "O(V)",
      solvedDate: "2025-06-27"
    },
    {
      id: 6,
      title: "Binary Tree Maximum Path Sum",
      platform: "LeetCode",
      difficulty: "Hard",
      solved: true,
      topics: ["Tree", "Dynamic Programming", "Recursion"],
      solutionUrl: "#",
      timeComplexity: "O(n)",
      spaceComplexity: "O(h)",
      solvedDate: "2025-06-26"
    }
  ],

  statistics: {
    totalProblems: 2448,
    totalContests: 144,
    averageRating: 1569,
    strongestTopics: ["Dynamic Programming", "Graph Algorithms", "Data Structures"],
    weeklyActivity: {
      problemsSolved: 15,
      contestsParticipated: 2,
      studyHours: 20
    }
  },

  contests: [
    {
      name: "LeetCode Weekly Contest 402",
      platform: "LeetCode",
      rank: 1247,
      rating: "+25",
      problems: "3/4",
      date: "2025-06-30"
    },
    {
      name: "Codeforces Round #892 (Div. 2)",
      platform: "Codeforces", 
      rank: 3456,
      rating: "+47",
      problems: "4/6",
      date: "2025-06-28"
    },
    {
      name: "CodeChef June Long Challenge",
      platform: "CodeChef",
      rank: 892,
      rating: "+38",
      problems: "6/8",
      date: "2025-06-25"
    }
  ]
};
