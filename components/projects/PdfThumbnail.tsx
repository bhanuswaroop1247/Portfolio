'use client';
import { useEffect, useState } from 'react'

interface Props {
    src: string
}

const PdfThumbnail = ({ src }: Props) => {
    const [dataUrl, setDataUrl] = useState<string | null>(null)

    useEffect(() => {
        if (!src) return
        let cancelled = false

        const render = async () => {
            try {
                const pdfjsLib = await import('pdfjs-dist')
                const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
                pdfjsLib.GlobalWorkerOptions.workerSrc = `${base}/pdf.worker.min.js`

                const pdf = await pdfjsLib.getDocument(src).promise
                const page = await pdf.getPage(1)
                const viewport = page.getViewport({ scale: 1.5 })

                const canvas = document.createElement('canvas')
                canvas.width = viewport.width
                canvas.height = viewport.height

                const ctx = canvas.getContext('2d')!
                await page.render({ canvasContext: ctx, viewport }).promise

                if (!cancelled) setDataUrl(canvas.toDataURL('image/jpeg', 0.85))
            } catch {
                // placeholder will show on failure
            }
        }

        render()
        return () => { cancelled = true }
    }, [src])

    if (!dataUrl) return null

    return (
        <img
            src={dataUrl}
            alt="PDF preview"
            className='absolute inset-0 w-full h-full object-cover'
        />
    )
}

export default PdfThumbnail
