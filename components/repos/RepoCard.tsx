'use client';
import { repo } from '@/types/main'
import { FiEye } from 'react-icons/fi'

interface Props {
    repo: repo
    index: number
    onClick: () => void
}

const accentBars = [
    'bg-slate-500',
    'bg-emerald-500',
    'bg-amber-500',
    'bg-sky-500',
    'bg-rose-500',
    'bg-violet-500',
]

const RepoCard = ({ repo, index, onClick }: Props) => {
    const { title, description, techStack } = repo
    const bar = accentBars[index % accentBars.length]

    return (
        <div
            onClick={onClick}
            className='group cursor-pointer flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden'>
            {/* Coloured accent bar */}
            <div className={`h-1 w-full ${bar}`} />

            <div className='flex flex-col flex-1 p-5 gap-3'>
                <h3 className='font-semibold text-[var(--text-primary)] text-base'>{title}</h3>

                <p className='text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 flex-1'>
                    {description}
                </p>

                {/* Tech stack badges */}
                <div className='flex flex-wrap gap-1.5'>
                    {techStack.map((tech, i) => (
                        <span key={i} className='font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]'>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Hint */}
                <span className='flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] mt-1'>
                    <FiEye size={13} />
                    View Details
                </span>
            </div>
        </div>
    )
}

export default RepoCard
