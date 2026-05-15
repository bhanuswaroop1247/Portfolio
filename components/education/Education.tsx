'use client';
import { education } from '@/types/main'
import SectionWrapper from '../SectionWrapper'
import { FiBook } from 'react-icons/fi'

interface Props {
    educationData: education[]
}

const Education = ({ educationData }: Props) => {
    return (
        <SectionWrapper id='education' className='mx-4 md:mx-0 py-20'>
            <h2 className='text-3xl font-bold text-center text-[var(--text-primary)]'>Education</h2>

            <div className='lg:w-11/12 2xl:w-4/5 mx-auto mt-10 grid md:grid-cols-2 gap-6'>
                {educationData.map((edu, i) => (
                    <div key={i} className='rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col gap-4'>
                        <div className='flex items-start gap-3'>
                            <div className='w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0'>
                                <FiBook size={16} className='text-white' />
                            </div>
                            <div>
                                <h3 className='font-bold text-[var(--text-primary)] text-base leading-snug'>{edu.degree}</h3>
                                <p className='text-[var(--text-secondary)] text-sm mt-0.5'>{edu.institute}</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pt-2 border-t border-[var(--border)]'>
                            <span className='text-sm text-[var(--text-secondary)]'>
                                {edu.startDate} – {edu.endDate}
                            </span>
                            <span className='text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[var(--accent)] border border-blue-200 dark:border-blue-800'>
                                CGPA {edu.cgpa}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}

export default Education
