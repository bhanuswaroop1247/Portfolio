'use client';
import { useEffect } from 'react'
import { repo } from '@/types/main'
import { FiX, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

interface Props {
    repo: repo
    onClose: () => void
}

const accentBars = [
    'bg-slate-500',
    'bg-emerald-500',
    'bg-amber-500',
    'bg-sky-500',
    'bg-rose-500',
    'bg-violet-500',
]

const RepoModal = ({ repo, onClose }: Props) => {
    const { title, description, techStack, url } = repo

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
            <div className='relative w-full max-w-lg rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-2xl'>

                {/* Accent bar */}
                <div className={`h-1 w-full ${accentBars[0]}`} />

                {/* Header */}
                <div className='flex items-start justify-between p-5 border-b border-[var(--border)]'>
                    <div className='flex items-center gap-2'>
                        <FaGithub size={20} className='text-[var(--text-secondary)]' />
                        <h2 className='text-lg font-bold text-[var(--text-primary)]'>{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className='p-1.5 rounded-md hover:bg-[var(--bg)] transition-colors text-[var(--text-secondary)]'>
                        <FiX size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className='p-5 flex flex-col gap-4'>
                    <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                        {description}
                    </p>

                    {/* Tech stack */}
                    <div>
                        <p className='text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wide mb-2'>Tech Stack</p>
                        <div className='flex flex-wrap gap-1.5'>
                            {techStack.map((tech, i) => (
                                <span key={i} className='font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity mt-1'>
                        <FiExternalLink size={15} />
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RepoModal
