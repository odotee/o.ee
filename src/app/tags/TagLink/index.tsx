'use client';
import Link from 'next/link';
import {scroller} from 'react-scroll';
import {useEffect} from 'react';

interface TagLinkProps {
    tags: string[];
}

interface Tags {
    firstLetter: string;
    tags: {
        name: string;
        count: number;
    }[];
}

const TagLink = ({tags}: TagLinkProps) => {
    useEffect(() => {
        const id = window.location.hash.substring(1);
        if (id) {
            scroller.scrollTo(id, {
                duration: 0,
                delay: 0,
                smooth: 'easeOutCubic',
                containerId: 'scroll-container',
            });
        }
    }, []);

    const handleToLinkScrollToProducts = (id: string) => {
        scroller.scrollTo(id, {
            duration: 800,
            delay: 0,
            smooth: 'easeOutCubic',
            containerId: 'scroll-container',
        });
    };

    const tagsListPageArray = tags.reduce(
        (
            group: { firstLetter: string; tags: { name: string; count: number }[] }[],
            tag: string
        ) => {
            const firstLetter = tag.charAt(0).toUpperCase();
            const existingGroup = group.find((item) => item.firstLetter === firstLetter);

            if (!existingGroup) {
                group.push({firstLetter, tags: [{name: tag, count: 1}]});
            } else {
                const existingTag = existingGroup.tags.find((item) => item.name === tag);
                if (existingTag) {
                    existingTag.count += 1;
                } else {
                    existingGroup.tags.push({name: tag, count: 1});
                }
            }

            return group;
        },
        []
    );

    tagsListPageArray.sort((a: Tags, b: Tags) => (a.firstLetter > b.firstLetter ? 1 : -1));

    return (
        <div className="relative container mx-auto">
            <div className="flex justify-center gap-2 flex-wrap rounded p-4">
                {tagsListPageArray.map(({firstLetter}) => (
                    <a
                        href={`#${firstLetter}`}
                        onClick={() => handleToLinkScrollToProducts(firstLetter)}
                        className="w-10 h-10 flex justify-center items-center flex-wrap outline-0 cursor-pointer hover:bg-[#222] border-[var(--borderColor)] border-[1px] rounded text-white transition"
                        key={firstLetter}
                    >
                        {firstLetter}
                    </a>
                ))}
            </div>
            <div className="flex max-w-7xl mx-auto space-y-5 my-10">
                <div className="min-w-full">
                    <div className="flex-col">
                        {tagsListPageArray.map(({firstLetter, tags}) => (
                            <div
                                className="flex py-5 border-b-[1px] border-[var(--borderColor)]"
                                key={firstLetter}
                                id={firstLetter}
                            >
                                <div className="font-bold text-5xl w-[60px] md:mr-10 mr-5 text-center">
                                    {firstLetter}
                                </div>
                                <div className="font-bold flex-1 gap-4 flex flex-wrap items-center">
                                    {tags.map(({name, count}) => (
                                        <div className="md:w-[calc((100%-2rem)/3)]" key={name}>
                                            <Link
                                                className="text-[#dcdcdc] transition cs-link-1"
                                                href={`/tags/${name.toLocaleLowerCase().replace(/\s/g, '-')}/`}
                                            >
                                                #{name}
                                            </Link>
                                            <span className="text-sm ml-1 text-blue-500">[{count}]</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagLink;