import { ReactNode } from 'react';

const SectionWrapper = ({ children, id, className }: { children: ReactNode, id: string, className: string }) => {
    return (
        <section id={id} className={className}>
            {children}
        </section>
    )
}

export default SectionWrapper
