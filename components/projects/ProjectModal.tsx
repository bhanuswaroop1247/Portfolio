'use client';
import { useEffect } from 'react'
import { project } from '@/types/main'
import { FiX, FiDownload } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

interface Props {
    project: project
    onClose: () => void
}

const ProjectModal = ({ project, onClose }: Props) => {
    const { title, tags, pdfPath, githubUrl } = project
    const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
    const fullPdfPath = `${base}${pdfPath}`

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose])

    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <div className='relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-2xl'>

                {/* Header */}
                <div className='flex items-start justify-between p-5 border-b border-[var(--border)]'>
                    <div>
                        <h2 className='text-xl font-bold text-[var(--text-primary)]'>{title}</h2>
                        <div className='flex flex-wrap gap-1.5 mt-2'>
                            {tags.map((tag, i) => (
                                <span key={i} className='text-xs px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-secondary)]'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center gap-2 ml-4 flex-shrink-0'>
                        <a
                            href={fullPdfPath}
                            download
                            className='flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-sm transition-colors'>
                            <FiDownload size={14} />
                            Download
                        </a>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-sm transition-colors'>
                                <FaGithub size={14} />
                                GitHub
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            className='p-1.5 rounded-md hover:bg-[var(--bg)] transition-colors text-[var(--text-secondary)]'>
                            <FiX size={20} />
                        </button>
                    </div>
                </div>

                {/* PDF viewer */}
                <div className='flex-1 overflow-hidden bg-[var(--bg)]'>
                    <iframe
                        src={`${fullPdfPath}#toolbar=0`}
                        className='w-full h-full min-h-[60vh]'
                        title={title}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
