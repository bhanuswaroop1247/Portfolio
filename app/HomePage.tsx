'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import Repos from "@/components/repos/Repos";
import Experiences from "@/components/experiences/Experiences";
import Education from "@/components/education/Education";
import Contact from "@/components/Contact";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    return (
        <>
            <Header logo={data.main.name} />
            <Hero mainData={data.main} />
            <Projects projectsData={data.projects} />
            <Repos reposData={data.repos} />
            <Experiences experienceData={data.experiences} />
            <Education educationData={data.educations} />
            <Contact mainData={data.main} />
            <Footer socials={data.socials} name={data.main.name} />
        </>
    )
}

export default HomePage
