import {getPostsList} from "@/lib/post";
import React from "react";
import type {Metadata} from "next";
import {MetadataTool} from "@/lib/MetadataTool";
import website_config from "@/lib/website_config";
import PostsList from "@/components/PostsList";
import SectionHeading from "@/components/section/heading";

export const metadata: Metadata = MetadataTool({
    title: website_config.seo.services.title,
    description: website_config.seo.services.description,
    pageType: 'article',
})

export default async function Page() {
    const postsData = getPostsList('services', ['slug', 'title', 'cover', 'excerpt', 'date', 'visitLink'])

    return (
        <>
            <SectionHeading title={website_config.seo.services.title}/>
            <PostsList postsData={postsData} className="mx-auto max-w-7xl px-6 !mt-0"/>
        </>

    );
}