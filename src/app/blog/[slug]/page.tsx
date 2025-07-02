import SectionContainer from "@/components/section/container";
import {loadMDXContent} from "@/lib/readMdxFile";
import SectionHeading from "@/components/section/heading";
import {getPostBySlug, getPostsList} from "@/lib/post";
import notFound from "@/app/not-found";
import {MetadataTool} from "@/lib/MetadataTool";
import React from "react";
import Link from "next/link";

type Params = {
    params: Promise<{ slug: string }>;
};

async function BlogPost({params}: Params) {
    const {slug} = await params;

    try {
        const {mdContent, data} = await loadMDXContent(`${slug}.mdx`, "blog");
        const {title, tags} = data;

        if (!title) {
            throw new Error("MDX file is missing title in frontmatter");
        }

        return (
            <>
                <SectionHeading title={title}/>
                <SectionContainer>
                    {mdContent}
                    <div className="flex items-center flex-wrap gap-3 mt-10">
                        {tags.map((tag: string) => (
                            <Link
                                className="inline-block transition text-sm w-fit relative font-light"
                                key={tag}
                                href={`/tags/${tag.toLocaleLowerCase().replace(/\s/g, '-')}/`}
                            >#{tag}</Link>
                        ))}
                    </div>
                </SectionContainer>
            </>
        );
    } catch (error) {
        console.error("Error rendering BlogPost:", error);
        notFound();
    }
}

export default BlogPost;

export async function generateMetadata({params}: Params) {
    const {slug} = await params;
    const {title, cover, excerpt, tags} = getPostBySlug('blog', slug, [
        'title',
        'cover',
        'excerpt',
        'tags',
    ]);

    return MetadataTool({
        title: title.toString(),
        description: excerpt.toString(),
        keywords: tags.toString(),
        images: cover.toString(),
        pageType: 'article',
    });
}

export async function generateStaticParams() {
    return getPostsList('blog', ['slug']);
}
