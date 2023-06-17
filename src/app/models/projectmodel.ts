export type Project = {
    name: string,
    description: string,
    startYear: string,
    endYear: string,
    status: string,
    artworkurl: string,
    trailerurl: string,
    codeurl: string
}

export type ProjectList = {
    projects: Project[]
}