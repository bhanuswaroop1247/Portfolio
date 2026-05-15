'use client';
import { useState } from 'react'
import { project } from '@/types/main'
import { FiEye } from 'react-icons/fi'
import PdfThumbnail from './PdfThumbnail'

interface Props {
    project: project
    onClick: () => void
    compact?: boolean
}

const accentColors: Record<string, string> = {
    'AI Workflow': 'bg-violet-500',
    'Analytics': 'bg-emerald-500',
    'Product Strategy': 'bg-blue-500',
}

const accentBg: Record<string, string> = {
    'AI Workflow': 'bg-violet-500/20',
    'Analytics': 'bg-emerald-500/20',
    'Product Strategy': 'bg-blue-500/20',
}

const ProjectCard = ({ project, onClick, compact = false }: Props) => {
    const { title, shortDesc, category, tags, image, pdfPath } = project
    const [imgError, setImgError] = useState(false)

    const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

    const initials = title
        .split(' ')
        .slice(0, 2)
        .map((w: string) => w[0])
        .join('')
        .toUpperCase()

    const accent = accentColors[category] ?? 'bg-slate-500'
    const accentBgClass = accentBg[category] ?? 'bg-slate-500/20'
    const showImage = image && !imgError

    return (
        <div
            onClick={onClick}
            className='group cursor-pointer rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200'
        >
            {/* Thumbnail */}
            <div className={`relative ${compact ? 'aspect-video' : 'aspect-video'} overflow-hidden ${accentBgClass}`}>
                {/* Placeholder — shown only when image is missing or failed to load */}
                {!showImage && (
                    <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
                        <span className='text-5xl font-bold text-white/40'>{initials}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white/70 ${accent}`}>{category}</span>
                    </div>
                )}

                {showImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={`${base}${image}`}
                        alt={title}
                        onError={() => setImgError(true)}
                        className='absolute inset-0 w-full h-full object-cover'
                    />
                )}

                {!showImage && pdfPath && (
                    <PdfThumbnail src={`${base}${pdfPath}`} />
                )}

                {/* Hover overlay */}
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10'>
                    <span className='flex items-center gap-2 text-white text-sm font-medium'>
                        <FiEye size={16} />
                        View Details
                    </span>
                </div>
            </div>

            {/* Content */}
            {!compact && (
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
                    <div className='flex flex-wrap gap-1.5 mt-4'>
                        {tags.slice(0, 3).map((tag: string, i: number) => (
                            <span key={i} className='text-xs px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-secondary)]'>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {compact && (
                <div className='px-3 py-2.5'>
                    <h3 className='font-semibold text-[var(--text-primary)] text-sm leading-snug truncate'>{title}</h3>
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full text-white mt-1 ${accent}`}>{category}</span>
                </div>
            )}
        </div>
    )
}

export default ProjectCard
