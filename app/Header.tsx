'use client';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FiSun, FiMoon } from 'react-icons/fi'
import { CgClose, CgMenuRight } from 'react-icons/cg'

export default function Header({ logo }: { logo: string }) {

    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const updateScroll = () => {
            window.scrollY >= 90 ? setScroll(true) : setScroll(false)
        }
        window.addEventListener('scroll', updateScroll)
        return () => window.removeEventListener('scroll', updateScroll)
    }, [])

    const navs = [
        { label: 'Home', target: 'home' },
        { label: 'Projects', target: 'projects' },
        { label: 'Repos', target: 'repos' },
        { label: 'Experience', target: 'experience' },
        { label: 'Education', target: 'education' },
    ]

    return (
        <header className={`backdrop-filter backdrop-blur-lg ${scroll ? 'border-b bg-[var(--surface)] bg-opacity-80' : 'border-b-0'} border-[var(--border)] z-30 min-w-full flex flex-col fixed`}>
            <nav className='lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center justify-between'>

                <Link href={'/'} className='2xl:ml-6 font-semibold text-lg hover:text-[var(--accent)] transition-colors duration-300'>
                    {logo.split(' ')[0]}
                </Link>

                <ul className='flex items-center gap-7'>
                    {navs.map((nav, i) => (
                        <li key={i}>
                            <ScrollLink
                                className='hover:text-[var(--accent)] transition-colors cursor-pointer text-sm font-medium text-[var(--text-secondary)]'
                                to={nav.target}
                                offset={-60}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                {nav.label}
                            </ScrollLink>
                        </li>
                    ))}
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='hover:bg-[var(--border)] p-1.5 rounded-full cursor-pointer transition-colors'>
                        {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </span>
                </ul>
            </nav>

            <nav className='p-4 flex sm:hidden items-center justify-between'>
                <span className='text-lg font-semibold'>{logo.split(' ')[0]}</span>
                <div className='flex items-center gap-4'>
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='bg-[var(--border)] p-1.5 rounded-full cursor-pointer transition-colors'>
                        {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
                    </span>
                    <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
                </div>
            </nav>

            <div className={`flex min-h-screen w-screen absolute md:hidden top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

                <div className="flex flex-col p-4 gap-5 bg-[var(--surface)] backdrop-filter backdrop-blur-sm w-3/4">
                    <CgClose className='self-end my-2' size={20} onClick={() => setNavCollapse(true)} />

                    {navs.map((nav) => (
                        <ScrollLink
                            key={nav.target}
                            className='hover:text-[var(--accent)] py-1.5 px-4 rounded transition-colors cursor-pointer font-medium'
                            to={nav.target}
                            offset={-60}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                            onClick={() => setNavCollapse(true)}
                        >
                            {nav.label}
                        </ScrollLink>
                    ))}
                </div>
            </div>

        </header>
    )
}
