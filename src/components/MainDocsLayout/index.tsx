'use client';
import {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';

interface MainDocsLayoutProps {
    children: ReactNode;
}

const MainDocsLayout: FC<MainDocsLayoutProps> = ({children}) => {
    const pathname = usePathname();
    const excludedPaths = ['/', '/services', '/blog', '/tags'];
    const applyStyles = pathname
        ? !excludedPaths.some((path) =>
            path === '/' ? pathname === '/' : pathname.startsWith(path)
        )
        : false;

    return (
        <div id="scroll-container" className="h-[calc(100vh-167px)] py-10 px-5 overflow-auto">
            <div
                className={clsx(
                    'max-w-[1400px] mx-auto min-h-full',
                    applyStyles && 'bg-[#171717] border rounded-md border-[var(--borderColor)]'
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default MainDocsLayout;