export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl?: string;
}

export interface SkillProps {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'design' | 'tools';
}
