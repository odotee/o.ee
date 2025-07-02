import {getPostsList} from "@/lib/post";
import React from "react";
import type {Metadata} from "next";
import {MetadataTool} from "@/lib/MetadataTool";
import website_config from "@/lib/website_config";
import Link from "next/link";
import SectionHeading from "@/components/section/heading";
import clsx from "clsx";

export const metadata: Metadata = MetadataTool({
    title: website_config.seo.blog.title,
    description: website_config.seo.blog.description,
    pageType: 'article',
})

export default async function Page() {
    const postsData = getPostsList('blog', ['title', 'excerpt', 'date', 'slug', 'tags'])

    return (
        <>
            <SectionHeading title={website_config.seo.blog.title}/>
            <div className="max-w-7xl mx-auto space-y-5 my-10">
                {
                    postsData.map(({title, excerpt, slug, date, tags}, index) => {
                        const formattedDate = date instanceof Date
                            ? date.toLocaleDateString('en-CA', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            }).split('/').reverse().join('-')
                            : date || 'Unknown Date';
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
                                        <p className="text-sm leading-normal font-bold">Published: {formattedDate}</p>
                                    </div>
                                </Link>
                                <div className="flex items-center flex-wrap gap-3">
                                    {tags.map((tag) => (
                                        <Link
                                            className={clsx('inline-block transition text-sm w-fit relative font-light cs-link-1')}
                                            href={`/tags/${tag.toLocaleLowerCase().replace(/\s/g, '-')}/`}
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
}