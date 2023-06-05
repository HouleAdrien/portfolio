export class Project {
    name: string ;
    description: string;
    startYear: string;
    endYear: string;
    status: string;
    trailerurl: string;
    codeurl: string;

    constructor(name: string, description: string, startYear: string, endYear: string, status: string, trailerurl: string, codeurl: string) {
        this.name = name;
        this.description = description;
        this.startYear = startYear;
        this.endYear = endYear;
        this.status = status;
        this.trailerurl = trailerurl;
        this.codeurl = codeurl;
    }
}

export class ProjectList {
    projects: Project[];
    constructor(projects: Project[]) {
        this.projects = projects;
    }
}