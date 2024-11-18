export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    notionUrl: string;
    liveUrl?: string;
}
