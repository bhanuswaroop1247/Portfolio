type project = {
    id: string
    title: string
    shortDesc: string
    category: string
    tags: string[]
    image: string
    pdfPath: string
    githubUrl: string
    featured: boolean
}

type repo = {
    id: string
    title: string
    description: string
    techStack: string[]
    url: string
    featured: boolean
}

type experience = {
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    desc?: string[]
}

type education = {
    institute: string
    degree: string
    startDate: string
    endDate: string
    cgpa: string
}

type main = {
    name: string
    tagline: string
    intro: string
    status: string
    heroImage: string
    resumeUrl: string
    linkedinUrl: string
    githubUrl: string
}

type social = {
    icon: string
    link: string
}

type data = {
    main: main
    projects: project[]
    repos: repo[]
    experiences: experience[]
    educations: education[]
    socials: social[]
}

export type { data, main, project, repo, experience, education, social }
