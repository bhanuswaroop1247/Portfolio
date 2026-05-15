'use client';
import './globals.css'
import { DM_Sans } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider attribute='class' defaultTheme='light'>
        <body className={`${dmSans.className} bg-[var(--bg)] text-[var(--text-primary)] overflow-x-hidden`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
