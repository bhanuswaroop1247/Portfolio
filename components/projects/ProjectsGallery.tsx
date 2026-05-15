'use client';
import { useEffect, useState } from 'react'
import { project } from '@/types/main'
import { FiX } from 'react-icons/fi'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

interface Props {
    projects: project[]
    onClose: () => void
}

const ProjectsGallery = ({ projects, onClose }: Props) => {
    const [selected, setSelected] = useState<project | null>(null)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !selected) onClose()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose, selected])

    return (
        <>
            <div
                className='fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4'
                onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
            >
                <div className='relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-2xl'>

                    {/* Header */}
                    <div className='flex items-center justify-between px-6 py-4 border-b border-[var(--border)]'>
                        <div>
                            <h2 className='text-xl font-bold text-[var(--text-primary)]'>All Projects</h2>
                            <p className='text-sm text-[var(--text-secondary)] mt-0.5'>{projects.length} case studies — click any to view</p>
                        </div>
                        <button
                            onClick={onClose}
                            className='p-1.5 rounded-md hover:bg-[var(--bg)] transition-colors text-[var(--text-secondary)]'>
                            <FiX size={20} />
                        </button>
                    </div>

                    {/* Grid */}
                    <div className='overflow-y-auto p-6'>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {projects.map((p, i) => (
                                <ProjectCard
                                    key={i}
                                    project={p}
                                    onClick={() => setSelected(p)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selected && (
                <ProjectModal project={selected} onClose={() => setSelected(null)} />
            )}
        </>
    )
}

export default ProjectsGallery
