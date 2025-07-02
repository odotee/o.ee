import SectionContainer from "@/components/section/container";
import {loadMDXContent} from "@/lib/readMdxFile";
import SectionHeading from "@/components/section/heading";
import {getPostBySlug, getPostsList} from "@/lib/post";
import notFound from "@/app/not-found";
import {MetadataTool} from "@/lib/MetadataTool";

type Params = {
    params: Promise<{ slug: string }>;
};

async function ServicePost({params}: Params) {
    const {slug} = await params;

    try {
        const {mdContent, data} = await loadMDXContent(`${slug}.mdx`, "services");
        const {title} = data;

        if (!title) {
            throw new Error("MDX file is missing title in frontmatter");
        }

        return (
            <>
                <SectionHeading title={title}/>
                <SectionContainer>{mdContent}</SectionContainer>
            </>
        );
    } catch (error) {
        console.error("Error rendering ServicePost:", error);
        notFound();
    }
}

export default ServicePost;

export async function generateMetadata({params}: Params) {
    const {slug} = await params;
    const {title, cover, excerpt, tags} = getPostBySlug('services', slug, [
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
    return getPostsList('services', ['slug']);
}
