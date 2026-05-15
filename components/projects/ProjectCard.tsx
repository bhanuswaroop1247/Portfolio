'use client';
import Image from 'next/image'
import { project } from '@/types/main'
import { FiEye } from 'react-icons/fi'

interface Props {
    project: project
    onClick: () => void
}

const accentColors: Record<string, string> = {
    'AI Workflow': 'bg-violet-500',
    'Analytics': 'bg-emerald-500',
    'Product Strategy': 'bg-blue-500',
}

const ProjectCard = ({ project, onClick }: Props) => {
    const { title, shortDesc, category, tags, image } = project

    const initials = title
        .split(' ')
        .slice(0, 2)
        .map((w: string) => w[0])
        .join('')
        .toUpperCase()

    const accent = accentColors[category] ?? 'bg-slate-500'

    return (
        <div
            onClick={onClick}
            className='group cursor-pointer rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200'
        >
            {/* Thumbnail */}
            <div className='relative aspect-video bg-[var(--bg)] overflow-hidden'>
                {/* Fallback placeholder shown by default */}
                <div className={`absolute inset-0 flex items-center justify-center ${accent} bg-opacity-10`}>
                    <span className='text-4xl font-bold text-white/30'>{initials}</span>
                </div>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover'
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                    }}
                />
                {/* Hover overlay */}
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                    <span className='flex items-center gap-2 text-white text-sm font-medium'>
                        <FiEye size={16} />
                        View Details
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className='p-5'>
                <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full text-white mb-3 ${accent}`}>
                    {category}
                </span>
                <h3 className='font-semibold text-[var(--text-primary)] text-base leading-snug mb-1.5'>
                    {title}
                </h3>
                <p className='text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2'>
                    {shortDesc}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-1.5 mt-4'>
                    {tags.slice(0, 3).map((tag: string, i: number) => (
                        <span key={i} className='text-xs px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-secondary)]'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
