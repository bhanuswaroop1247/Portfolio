'use client';
import { useState } from 'react'
import { project } from '@/types/main'
import SectionWrapper from '../SectionWrapper'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

interface Props {
    projectsData: project[]
}

const Projects = ({ projectsData }: Props) => {
    const featured = projectsData.filter(p => p.featured)
    const [viewAll, setViewAll] = useState(false)
    const [selected, setSelected] = useState<project | null>(null)

    const displayed = viewAll ? projectsData : featured

    return (
        <SectionWrapper id='projects' className='mx-4 md:mx-0 py-20'>
            <h2 className='text-3xl font-bold text-center text-[var(--text-primary)]'>Projects</h2>
            <p className='text-[var(--text-secondary)] text-center mt-2 text-sm'>
                PM case studies &amp; product teardowns
            </p>

            <div className='lg:w-11/12 2xl:w-4/5 mx-auto mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {displayed.map((p, i) => (
                    <ProjectCard key={i} project={p} onClick={() => setSelected(p)} />
                ))}
            </div>

            {projectsData.length > 3 && (
                <div className='text-center mt-8'>
                    <button
                        onClick={() => setViewAll(!viewAll)}
                        className='px-6 py-2 rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-sm font-medium transition-colors'>
                        {viewAll ? 'Show Less' : `View All (${projectsData.length})`}
                    </button>
                </div>
            )}

            {selected && (
                <ProjectModal project={selected} onClose={() => setSelected(null)} />
            )}
        </SectionWrapper>
    )
}

export default Projects
