export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  engineering: string;
  keyFeatures: string[];
  engineeringHighlights: string[];
  workflowSteps?: {
    step: string;
    title: string;
    description: string;
    tech: string;
  }[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    category: string;
  }[];
}

export interface Achievement {
  title: string;
  organizer: string;
  focus: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization?: string;
  timeline: string;
  score: string;
  location: string;
  highlights?: string[];
}
