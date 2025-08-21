type TProject = {
    type: 'work' | 'personal';
    title: string;
    description: string;
    role: string;
    techstack: string[];
    link: string;
    contribution: number;
    contents?: string[];
    period?: string;
    features?: string[];
    challenges?: string[];
    outcome?: string;
    image?: string;
}
