export type TProject = {
    id: number;
    type: 'work' | 'personal';
    title: string;
    description: string;
    roles: string[];
    techstack: string[];
    contribution: number;
    links?: projectLink[];
    contents?: string[];
    period?: string;
    features?: string[];
    challenges?: string[];
    outcome?: string;
    thumbnail?: string;
}

type linkType =
    | 'notion'
    | 'github'
    | 'appstore'
    | 'other';

type projectLink = {
    type: linkType;     
    url: string;
    img: string;
};