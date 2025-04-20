
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
};
