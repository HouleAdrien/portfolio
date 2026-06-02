export type WorkKind = 'pro' | 'perso';

export type Profile = {
    name: string;
    role: string;
    tagline: string;
    location: string;
    bio: string[];
    photo: string;
    email: string;
    links: { label: string; href: string }[];
};

export type TimelineEntry = {
    startYear: string;
    endYear: string;
    kind: WorkKind;
    title: string;
    org: string;
    summary: string;
    link?: string;
};

export type Project = {
    name: string;
    description: string;
    kind: WorkKind;
    year: string;
    stack: string[];
    thumbnail: string;
    demoUrl?: string;
    codeUrl?: string;
};

export type PortfolioData = {
    profile: Profile;
    timeline: TimelineEntry[];
    projects: Project[];
};
