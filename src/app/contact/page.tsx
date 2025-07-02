import {MetadataTool} from '@/lib/MetadataTool';
import website_config from '@/lib/website_config';
import SectionContainer from '@/components/section/container';
import SectionHeading from '@/components/section/heading';
import {loadMDXContent} from '@/lib/readMdxFile';
import {Metadata} from "next";

export const metadata: Metadata = MetadataTool({
    title: website_config.seo.contact.title,
    description: website_config.seo.contact.description,
    pageType: 'article',
})

export default async function Page() {
    const {mdContent, data: {title}} = await loadMDXContent('./contact/index.mdx');

    return (
        <>
            <SectionHeading title={title}/>
            <SectionContainer>
                {mdContent}
            </SectionContainer>
        </>
    );
}