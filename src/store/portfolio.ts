import { proxy } from "valtio";

interface PortfolioState {
  stats: {
    projects: string;
    clients: string;
    experience: string;
  };
  featuredProjects: Array<{
    id: number;
    title: string;
    category: string;
    image: string;
  }>;
  services: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export const portfolioState = proxy<PortfolioState>({
  stats: {
    projects: "5M+",
    clients: "3K+",
    experience: "24+",
  },
  featuredProjects: [
    {
      id: 1,
      title: "Mobile App",
      category: "Development",
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Web Design",
      category: "Design",
      image: "/placeholder.svg?height=300&width=200",
    },
  ],
  services: [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Creating beautiful and functional interfaces",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building responsive and scalable web applications",
    },
  ],
});
