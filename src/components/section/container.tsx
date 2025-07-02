import React from 'react';

function SectionContainer({children}: { children: React.ReactNode }) {
    return (
        <div className="mdx-article mx-auto max-w-7xl px-6 lg:px-8 pb-10">
            {children}
        </div>
    );
}

export default SectionContainer;
