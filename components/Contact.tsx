'use client';
import { main } from '@/types/main'
import SectionWrapper from './SectionWrapper'
import { FiMail, FiDownload } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

interface Props {
    mainData: main
}

const Contact = ({ mainData }: Props) => {
    const { linkedinUrl, githubUrl, resumeUrl } = mainData
    const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

    return (
        <SectionWrapper id='contact' className='mx-4 md:mx-0 py-20'>
            <h2 className='text-3xl font-bold text-center text-[var(--text-primary)]'>Get In Touch</h2>
            <p className='text-[var(--text-secondary)] text-center mt-2 text-sm'>
                Open to opportunities, collaborations, and conversations
            </p>

            <div className='lg:w-11/12 2xl:w-4/5 mx-auto mt-10'>
                <div className='flex flex-col items-center gap-6'>

                    {/* Email CTA */}
                    <a
                        href='mailto:p.b.swaroop@gmail.com'
                        className='flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200 text-[var(--text-primary)] font-medium'>
                        <FiMail size={20} className='text-[var(--accent)]' />
                        p.b.swaroop@gmail.com
                    </a>

                    {/* Icon links row */}
                    <div className='flex items-center gap-4'>
                        <a
                            href={linkedinUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-secondary)] text-sm font-medium transition-all duration-200'>
                            <FaLinkedin size={17} />
                            LinkedIn
                        </a>

                        <a
                            href={githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-secondary)] text-sm font-medium transition-all duration-200'>
                            <FaGithub size={17} />
                            GitHub
                        </a>

                        <a
                            href={`${base}${resumeUrl}`}
                            download
                            className='flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity'>
                            <FiDownload size={15} />
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Contact
