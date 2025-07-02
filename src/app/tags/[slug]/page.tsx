import SectionHeading from "@/components/section/heading";
import {getPostsList} from "@/lib/post";
import notFound from "@/app/not-found";
import {MetadataTool} from "@/lib/MetadataTool";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

type Params = {
    params: Promise<{
        slug: string
    }>;
};

async function Tags({params}: Params) {
    const {slug: currentTag} = await params;

    try {
        const postsData = getPostsList('blog', [
            'title',
            'excerpt',
            'date',
            'slug',
            'tags'
        ])
            .filter((item) => item.tags?.some((tag) => tag.toLowerCase().replace(/[\s.]+/g, '-') === currentTag))
            .map(({title, cover, excerpt, date, slug, tags}) => ({
                title,
                cover,
                excerpt,
                date: date instanceof Date
                    ? date
                        .toLocaleDateString('en-CA', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })
                        .split('/')
                        .reverse()
                        .join('-')
                    : date || 'Unknown Date',
                slug,
                tags,
            }));

        if (postsData.length === 0) {
            notFound();
        }

        const originTag = postsData.map(({tags}) => {
            return tags.find((tag) => tag.toLowerCase().replace(/[\s.]+/g, '-') === currentTag);
        });
        
        return (
            <>
                <SectionHeading title={`A list about the tag "${originTag[0]}"`}/>
                <div className="max-w-7xl mx-auto space-y-5 my-10">
                    {
                        postsData.map(({title, excerpt, slug, date, tags}, index) => {
                            return (
                                <section
                                    key={index}
                                    className="border-b-[1px] border-[var(--borderColor)] mx-3 py-5"
                                >
                                    <Link
                                        className="w-full bg-none group text-white gap-10 flex relative mb-4"
                                        href={`/blog/${slug}/`}>
                                        <div className="w-full space-y-4">
                                            <h2 className="inline-block text-3xl font-bold bg-[linear-gradient(to_right,rgba(255,255,255)_0%,rgba(255,255,255)_100%)] bg-size-[0px_2px] bg-no-repeat transition-[background-size] duration-500 bg-right-bottom group-hover:bg-size-[100%_2px] group-hover:bg-left-bottom">{title}</h2>
                                            <p className="text-[#999999]">{excerpt}</p>
                                            <p className="text-sm leading-normal font-[300]">Published: {date}</p>
                                        </div>
                                    </Link>
                                    <div className="flex items-center flex-wrap gap-3">
                                        {tags.map((tag) => (
                                            <Link
                                                className={clsx('inline-block transition text-sm w-fit relative font-light cs-link-1',
                                                    currentTag === tag.toLowerCase().replace(/[\s.]/g, '-') ? 'cs-link-1-active' : ''
                                                )}
                                                href={`/tags/${tag.toLocaleLowerCase().replace(/[\s.]/g, '-')}/`}
                                                key={tag}
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            );
                        })
                    }
                </div>
            </>
        );
    } catch (error) {
        console.error("Error rendering Tags:", error);
        notFound();
    }
}

export default Tags;

export async function generateMetadata({params}: Params) {
    const {slug} = await params;
    return MetadataTool({
        title: 'Tags: ' + decodeURIComponent(slug),
        pageType: "article"
    })
}

export async function generateStaticParams() {
    const tags: { [key: string]: number } = {};

    getPostsList('blog', ['date', 'tags'])
        .map((post) => post.tags as string[])
        .forEach((item) => {
            item?.forEach((tag) => {
                tags[tag] = tags[tag] ? tags[tag] + 1 : 1;
            });
        });
    return Object.entries(tags).map(([tag]) => ({
        slug: tag.toLocaleLowerCase().replace(/[\s.]/g, '-'),
    }));
}