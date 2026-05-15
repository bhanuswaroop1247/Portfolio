'use client';
import { useState } from 'react'
import { repo } from '@/types/main'
import SectionWrapper from '../SectionWrapper'
import RepoCard from './RepoCard'

interface Props {
    reposData: repo[]
}

const Repos = ({ reposData }: Props) => {
    const featured = reposData.filter(r => r.featured)
    const [viewAll, setViewAll] = useState(false)
    const displayed = viewAll ? reposData : featured.slice(0, 6)

    return (
        <SectionWrapper id='repos' className='mx-4 md:mx-0 py-20'>
            <h2 className='text-3xl font-bold text-center text-[var(--text-primary)]'>GitHub Repos</h2>
            <p className='text-[var(--text-secondary)] text-center mt-2 text-sm'>
                Open source work &amp; personal projects
            </p>

            <div className='lg:w-11/12 2xl:w-4/5 mx-auto mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {displayed.map((r, i) => (
                    <RepoCard key={r.id} repo={r} index={i} />
                ))}
            </div>

            {reposData.length > 6 && (
                <div className='text-center mt-8'>
                    <button
                        onClick={() => setViewAll(!viewAll)}
                        className='px-6 py-2 rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-sm font-medium transition-colors'>
                        {viewAll ? 'Show Less' : `View All (${reposData.length})`}
                    </button>
                </div>
            )}
        </SectionWrapper>
    )
}

export default Repos
