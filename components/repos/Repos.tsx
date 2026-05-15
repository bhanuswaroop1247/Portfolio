'use client';
import { useState } from 'react'
import { repo } from '@/types/main'
import SectionWrapper from '../SectionWrapper'
import RepoCard from './RepoCard'
import RepoModal from './RepoModal'
import ReposGallery from './ReposGallery'

interface Props {
    reposData: repo[]
}

const Repos = ({ reposData }: Props) => {
    const featured = reposData.filter(r => r.featured).slice(0, 6)
    const [selected, setSelected] = useState<repo | null>(null)
    const [galleryOpen, setGalleryOpen] = useState(false)

    return (
        <SectionWrapper id='repos' className='mx-4 md:mx-0 py-10 md:py-20'>
            <h2 className='text-3xl font-bold text-center text-[var(--text-primary)]'>GitHub Repos</h2>
            <p className='text-[var(--text-secondary)] text-center mt-2 text-sm'>
                Open source work &amp; personal projects
            </p>

            <div className='lg:w-11/12 2xl:w-4/5 mx-auto mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {featured.map((r, i) => (
                    <RepoCard key={r.id} repo={r} index={i} onClick={() => setSelected(r)} />
                ))}
            </div>

            {reposData.length > 0 && (
                <div className='text-center mt-8'>
                    <button
                        onClick={() => setGalleryOpen(true)}
                        className='px-6 py-2 rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-sm font-medium transition-colors'>
                        View All ({reposData.length})
                    </button>
                </div>
            )}

            {selected && (
                <RepoModal repo={selected} onClose={() => setSelected(null)} />
            )}

            {galleryOpen && (
                <ReposGallery
                    repos={reposData}
                    onClose={() => setGalleryOpen(false)}
                />
            )}
        </SectionWrapper>
    )
}

export default Repos
