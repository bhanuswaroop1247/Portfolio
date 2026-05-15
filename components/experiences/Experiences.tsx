'use client';
import { experience } from '@/types/main'
import SectionWrapper from '../SectionWrapper'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'

interface Props {
    experienceData: experience[]
}

const Experiences = ({ experienceData }: Props) => {
    return (
        <SectionWrapper id='experience' className='mx-4 md:mx-0 py-20'>
            <h2 className='text-3xl font-bold text-center text-[var(--text-primary)]'>Experience</h2>

            <div className='lg:w-11/12 2xl:w-4/5 mx-auto mt-10'>
                {experienceData.map((exp, i) => (
                    <div key={i} className='flex gap-4 md:gap-6'>
                        {/* Timeline line + dot */}
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <div className='w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center'>
                                <FiBriefcase size={16} className='text-white' />
                            </div>
                            {i < experienceData.length - 1 && (
                                <div className='flex-1 w-px bg-[var(--border)] mt-2' />
                            )}
                        </div>

                        {/* Card */}
                        <div className='flex-1 pb-10'>
                            <div className='rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6'>
                                <div className='flex flex-wrap items-start justify-between gap-2 mb-3'>
                                    <div>
                                        <h3 className='text-lg font-bold text-[var(--text-primary)]'>{exp.position}</h3>
                                        <p className='text-[var(--text-secondary)] text-sm font-medium mt-0.5'>{exp.company}</p>
                                    </div>
                                    <div className='text-right flex-shrink-0'>
                                        <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[var(--accent)] border border-blue-200 dark:border-blue-800'>
                                            {exp.startDate} – {exp.endDate}
                                        </span>
                                        <div className='flex items-center gap-1 mt-1.5 justify-end text-[var(--text-secondary)] text-xs'>
                                            <FiMapPin size={11} />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                {exp.desc && exp.desc.length > 0 && (
                                    <ul className='mt-3 flex flex-col gap-2'>
                                        {exp.desc.map((point, j) => (
                                            <li key={j} className='flex gap-2 text-sm text-[var(--text-secondary)] leading-relaxed'>
                                                <span className='text-[var(--accent)] mt-1.5 flex-shrink-0'>•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}

export default Experiences
