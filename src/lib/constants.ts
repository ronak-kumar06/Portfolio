// ========== PERSONAL INFO ==========
export const PERSONAL = {
  name: "Ronak Kumar",
  title: "Software Engineer | Competitive Programmer | ML Enthusiast | Quant Explorer",
  description:
    "I build scalable applications, solve complex algorithmic problems, and explore intelligent systems through machine learning and quantitative research.",
  email: "ronak@ce.iitr.ac.in",
  resumeUrl: "/resume.pdf",
  location: "IIT Roorkee, India",
};

// ========== SOCIAL LINKS ==========
export const SOCIALS = {
  github: "https://github.com/ronak-kumar06",
  linkedin: "https://linkedin.com/in/ronak-kumar06",
  leetcode: "https://leetcode.com/ronak-kumar06",
  codeforces: "https://codeforces.com/profile/ronak-kumar06",
};

// ========== HERO METRICS ==========
export const METRICS = [
  { label: "Problems Solved", value: 300, suffix: "+" },
  { label: "LeetCode Rating", value: 1640, suffix: "" },
  { label: "Codeforces Rating", value: 1324, suffix: "" },
  { label: "IIT Roorkee", value: 0, suffix: "", isText: true, text: "IIT Roorkee" },
];

// ========== NAVIGATION ==========
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "CP", href: "#competitive-programming" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ========== EDUCATION ==========
export const EDUCATION_TIMELINE = [
  {
    institution: "Indian Institute of Technology Roorkee",
    degree: "B.Tech Civil Engineering",
    score: "CGPA: 7.39",
    duration: "2023 - 2026",
    highlights: [
      "Data Structures & Algorithms",
      "Software Development",
      "Machine Learning",
      "Competitive Programming",
    ],
    icon: "GraduationCap",
  },
  {
    institution: "Tagore Public School, Surajgarh (CBSE)",
    degree: "Class XII",
    score: "Percentage: 87.60%",
    duration: "2023",
    highlights: [],
    icon: "GraduationCap",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Kajra (CBSE)",
    degree: "Class X",
    score: "Percentage: 92.40%",
    duration: "2021",
    highlights: [],
    icon: "Award",
  },
];

// ========== SKILLS ==========
export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    title: "Core CS",
    icon: "Cpu",
    skills: [
      { name: "DSA", level: 90 },
      { name: "OOP", level: 85 },
      { name: "DBMS", level: 80 },
      { name: "Operating Systems", level: 78 },
    ],
  },
];

// ========== COMPETITIVE PROGRAMMING ==========
export const CP_STATS = {
  leetcode: {
    rating: 1640,
    problems: 235,
    topPercentage: 18.84,
    platform: "LeetCode",
    profileUrl: "https://leetcode.com/ronak-kumar06",
  },
  codeforces: {
    maxRating: 1324,
    rank: "Pupil",
    platform: "Codeforces",
    profileUrl: "https://codeforces.com/profile/ronak-kumar06",
  },
};

// ========== PROJECTS ==========
export interface Project {
  title: string;
  description: string;
  github: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "AutoJudge",
    description:
      "Machine learning pipeline for predicting programming problem difficulty using NLP and TF-IDF.",
    github: "https://github.com/ronak-kumar06/AutoJudge-Problem-Difficulty-Prediction",
    tags: ["Python", "Machine Learning", "NLP", "Scikit-Learn"],
    featured: true,
  },
  {
    title: "SSR E-Commerce Product Management Dashboard",
    description:
      "Server-side rendered admin dashboard with RBAC, authentication, and MongoDB integration.",
    github: "https://github.com/ronak-kumar06/SSR-E-Commerce-Product-Management-Dashboard",
    tags: ["Next.js", "MongoDB", "Authentication"],
    featured: true,
  },
  {
    title: "NGO Registration and Donation Management System",
    description:
      "Full-stack platform for NGO onboarding, donation management, analytics, and administration.",
    github: "https://github.com/ronak-kumar06/ngo-registration-and-donation-system",
    tags: ["Next.js", "MongoDB", "Full Stack"],
    featured: true,
  },
  {
    title: "Autonomous Trading & Portfolio Management Agent",
    description:
      "Quantitative finance platform featuring financial data pipelines, alpha factor generation, and research automation.",
    github: "https://github.com/ZethetaIntern/Jugaad-Quant-Pvt-Ltd",
    tags: ["Python", "Quantitative Finance", "Data Engineering"],
    featured: true,
  },
];

// ========== CURRENT FOCUS ==========
export const CURRENT_FOCUS = [
  {
    title: "Competitive Programming",
    description: "Mastering advanced algorithms and data structures",
    icon: "Trophy",
    color: "#3B82F6",
  },
  {
    title: "Building Full Stack Products",
    description: "Creating production-grade web applications",
    icon: "Layers",
    color: "#8B5CF6",
  },
  {
    title: "Machine Learning",
    description: "Exploring deep learning and NLP techniques",
    icon: "Brain",
    color: "#06B6D4",
  },
  {
    title: "Quantitative Research",
    description: "Financial modeling and algorithmic trading",
    icon: "TrendingUp",
    color: "#10B981",
  },
  {
    title: "Open Source",
    description: "Contributing to impactful open source projects",
    icon: "GitBranch",
    color: "#F59E0B",
  },
];

// ========== LEADERSHIP ==========
export const LEADERSHIP = [
  {
    role: "Cult Council Manager",
    organization: "IIT Roorkee",
    highlights: [
      "Managed institute-level cultural events",
      "Coordinated cross-functional teams",
      "Handled end-to-end logistics and execution",
    ],
  },
];

// ========== GITHUB STATS (Static) ==========
export const GITHUB_STATS = {
  totalRepos: 15,
  totalContributions: 450,
  longestStreak: 30,
  currentStreak: 12,
};
