'use client';
import { social } from '@/types/main'
import Link from 'next/link'
import React from 'react'
import * as Fa from 'react-icons/fa'

export default function Footer({ socials, name }: { socials: social[], name: string }) {
    return (
        <footer className='w-full border-t border-[var(--border)] bg-[var(--surface)]'>
            <div className='lg:w-11/12 2xl:w-4/5 mx-auto px-6 2xl:px-0 py-6 flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between items-center'>
                <p className='text-sm text-[var(--text-secondary)]'>
                    © {new Date().getFullYear()} <span className='font-medium text-[var(--text-primary)]'>{name}</span>
                </p>

                <div className='flex items-center gap-1'>
                    {socials.map((s: social) => (
                        <Link
                            href={s.link}
                            target='_blank'
                            rel='noreferrer'
                            key={s.icon}
                            className='p-2.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg)] transition-colors'>
                            {/* @ts-ignore */}
                            {React.createElement(Fa[s.icon as keyof typeof Fa] as React.ElementType, { size: 18 })}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
