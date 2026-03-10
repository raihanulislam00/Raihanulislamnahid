export const problemSolvingData = {
  title: "",
  subtitle: "Competitive Programming & Algorithm Mastery",
  description: "Demonstrating algorithmic prowess and problem-solving expertise across multiple competitive programming platforms with consistent performance and continuous growth.",
  
  platforms: [
    {
      id: 1,
      name: "LeetCode",
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
        "50+ Problems Solved", 
        "Guardian Rank Achieved", 
        "Weekly Contest Participant", 
        "50+ Day Streak",
      ]
    },
    {
      id: 2,
      name: "Codeforces",
      username: "StillUnknown",
      profileUrl: "https://codeforces.com/profile/StillUnknown",
      stats: {
        rating: 1751,
        maxRating: 1781,
        rank: "Expert",
        contests: "100+",
        problems: 1166,
        contribution: "+5",
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
      username: "raihanulislam0", 
      profileUrl: "https://codechef.com/users/raihanulislam0",
      stats: {
        rating: 2169,
        maxRating: 2169,
        rank: "5★ (Expert)",
        contests: '10+',
        problems: 387,
        globalRank: 584,
        countryRank: 17
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
      username: "StillUnknown",
      profileUrl: "https://atcoder.jp/users/StillUnknown",
      stats: {
        rating: 1526,
        maxRating: 1710,
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
    /* ── Codeforces ── */
    {
      id: 1,
      title: "Colorful Graph",
      platform: "Codeforces",
      difficulty: "Hard",
      solved: true,
      topics: ["Graph", "DSU", "Greedy"],
      solutionUrl: "https://codeforces.com/profile/Roll_Num_44",
      timeComplexity: "O(n α(n))",
      spaceComplexity: "O(n)",
      solvedDate: "2026-03-09"
    },
    {
      id: 2,
      title: "Segment Tree Beats",
      platform: "Codeforces",
      difficulty: "Hard",
      solved: true,
      topics: ["Segment Tree", "Range Update"],
      solutionUrl: "https://codeforces.com/profile/Roll_Num_44",
      timeComplexity: "O(n log² n)",
      spaceComplexity: "O(n)",
      solvedDate: "2026-03-08"
    },
    {
      id: 3,
      title: "K-Beautiful Strings",
      platform: "Codeforces",
      difficulty: "Medium",
      solved: true,
      topics: ["String", "Greedy", "Brute Force"],
      solutionUrl: "https://codeforces.com/profile/Roll_Num_44",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      solvedDate: "2026-03-07"
    },
    /* ── CodeChef ── */
    {
      id: 4,
      title: "Chef and Inversions",
      platform: "CodeChef",
      difficulty: "Hard",
      solved: true,
      topics: ["BIT", "Merge Sort", "Inversions"],
      solutionUrl: "https://codechef.com/users/raihanulislam0",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      solvedDate: "2026-03-09"
    },
    {
      id: 5,
      title: "Subtree Queries",
      platform: "CodeChef",
      difficulty: "Medium",
      solved: true,
      topics: ["Tree", "Euler Tour", "Segment Tree"],
      solutionUrl: "https://codechef.com/users/raihanulislam0",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      solvedDate: "2026-03-08"
    },
    {
      id: 6,
      title: "Chef and Primes",
      platform: "CodeChef",
      difficulty: "Medium",
      solved: true,
      topics: ["Number Theory", "Sieve", "DP"],
      solutionUrl: "https://codechef.com/users/raihanulislam0",
      timeComplexity: "O(n log log n)",
      spaceComplexity: "O(n)",
      solvedDate: "2026-03-06"
    },
    /* ── AtCoder ── */
    {
      id: 7,
      title: "ABC 394 - E: Dice Product",
      platform: "AtCoder",
      difficulty: "Medium",
      solved: true,
      topics: ["DP", "Probability", "Math"],
      solutionUrl: "https://atcoder.jp/users/raihanulislam0",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(n)",
      solvedDate: "2026-03-08"
    },
    {
      id: 8,
      title: "ABC 390 - D: Edge Deletion",
      platform: "AtCoder",
      difficulty: "Medium",
      solved: true,
      topics: ["Graph", "BFS", "Shortest Path"],
      solutionUrl: "https://atcoder.jp/users/raihanulislam0",
      timeComplexity: "O((V + E) log V)",
      spaceComplexity: "O(V)",
      solvedDate: "2026-03-07"
    },
    {
      id: 9,
      title: "ABC 388 - F: Preset Query",
      platform: "AtCoder",
      difficulty: "Hard",
      solved: true,
      topics: ["Offline Query", "Segment Tree", "Bitset"],
      solutionUrl: "https://atcoder.jp/users/raihanulislam0",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      solvedDate: "2026-03-05"
    },
    /* ── LeetCode ── */
    {
      id: 10,
      title: "Maximum Subarray Product",
      platform: "LeetCode",
      difficulty: "Medium",
      solved: true,
      topics: ["Dynamic Programming", "Array"],
      solutionUrl: "https://leetcode.com/raihanulislam00",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      solvedDate: "2026-03-07"
    },
    {
      id: 11,
      title: "Binary Tree Maximum Path Sum",
      platform: "LeetCode",
      difficulty: "Hard",
      solved: true,
      topics: ["Tree", "DFS", "Recursion"],
      solutionUrl: "https://leetcode.com/raihanulislam00",
      timeComplexity: "O(n)",
      spaceComplexity: "O(h)",
      solvedDate: "2026-03-06"
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
