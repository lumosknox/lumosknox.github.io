import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description: "A full-featured e-commerce solution with product search, filtering, cart management and payment processing.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=300",
    category: ["Web", "Frontend"],
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking investments and financial data with data visualization.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400&h=300",
    category: ["Web", "Data"],
    technologies: ["TypeScript", "React", "Recharts", "API Integration"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A responsive social media application with real-time chat, post sharing, and user interactions.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=300",
    category: ["Mobile", "Web"],
    technologies: ["React Native", "Firebase", "GraphQL"],
    // liveUrl: "#",
    // sourceUrl: "#"
  },
  {
    id: 4,
    title: "Content Management System",
    description: "A custom CMS for bloggers and content creators with markdown support and image optimization.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300",
    category: ["Web", "Backend"],
    technologies: ["Node.js", "MongoDB", "Express", "React"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 5,
    title: "AI-Powered Language Tool",
    description: "A tool that uses machine learning to help improve writing clarity and grammar.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400&h=300",
    category: ["AI", "NLP"],
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 6,
    title: "Virtual Event Platform",
    description: "A platform for hosting virtual conferences with breakout rooms and networking features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300",
    category: ["Web", "Frontend"],
    technologies: ["Vue.js", "WebRTC", "Socket.io", "Node.js"],
    liveUrl: "#",
    sourceUrl: "#"
  }
];

// export const allCategories = ["All", ...new Set(projectsData.flatMap(project => project.category))];
// Manual ordering of categories
// export const allCategories = ["All", "Frontend", "Backend", "NLP", "Web", "Data", "AI"];
export const allCategories = ["All"];
