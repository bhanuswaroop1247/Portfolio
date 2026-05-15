'use client';
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'
import { main } from '@/types/main'

interface HeroProps {
    mainData: main
}

const Hero = ({ mainData }: HeroProps) => {
    const { name, tagline, intro, status, heroImage, resumeUrl, linkedinUrl, githubUrl } = mainData

    return (
        <section id='home' className='relative min-h-screen w-full flex items-center'>
            {/* Subtle dot-grid background */}
            <div
                className='absolute inset-0 -z-10 opacity-40 dark:opacity-20'
                style={{
                    backgroundImage: 'radial-gradient(circle, #6B6B68 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }}
            />

            <div className='lg:w-11/12 2xl:w-4/5 w-full mx-auto px-6 2xl:px-0 py-32 lg:py-0'>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8'>

                    {/* Text side */}
                    <div className='flex flex-col gap-5 lg:w-1/2'>
                        {/* Status badge */}
                        <span className='w-fit text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[var(--accent)] border border-blue-200 dark:border-blue-800'>
                            {status}
                        </span>

                        <div>
                            <p className='text-[var(--text-secondary)] text-base mb-1'>Hi, I&apos;m</p>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight'>
                                {name}
                            </h1>
                        </div>

                        <p className='text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-lg'>
                            {intro}
                        </p>

                        {/* CTA buttons */}
                        <div className='flex flex-wrap gap-3 mt-2'>
                            <a
                                href={resumeUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors'>
                                <FaFileAlt size={14} />
                                Resume
                            </a>
                            <a
                                href={linkedinUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] text-[var(--text-primary)] text-sm font-medium transition-colors'>
                                <FaLinkedin size={14} className='text-blue-600' />
                                LinkedIn
                            </a>
                            <a
                                href={githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] text-[var(--text-primary)] text-sm font-medium transition-colors'>
                                <FaGithub size={14} />
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Photo side */}
                    <div className='flex-shrink-0'>
                        <div className='w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[var(--border)] shadow-lg bg-[var(--surface)]'>
                            <Image
                                alt={name}
                                width={256}
                                height={256}
                                src={heroImage}
                                className='w-full h-full object-cover'
                                priority
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = 'none'
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
