import {getTagListArray} from '@/lib/post';
import type {Metadata} from "next";
import {MetadataTool} from "@/lib/MetadataTool";
import website_config from "@/lib/website_config";
import SectionHeading from "@/components/section/heading";
import TagLink from "@/app/tags/TagLink";
import React from "react";

export const metadata: Metadata = MetadataTool({
    title: website_config.seo.tags.title,
    description: website_config.seo.tags.description,
    pageType: 'article',
})

export default function  Page() {
    const tags = getTagListArray('blog');
    return (
        <>
            <SectionHeading title={website_config.seo.tags.title}/>
            <TagLink tags={tags}/>
        </>
    );
}
