import type {Metadata} from "next";
import website_config from "@/lib/website_config";

type Props = {
    title?: string
    description?: string
    keywords?: string
    images?: string
    pageType: string
}

export const MetadataTool = ({
                                 title,
                                 description,
                                 keywords = website_config.website_keywords,
                                 images = '/og-logo.png',
                                 pageType
                             }: Props) => {
    const metadata: Metadata = {
        metadataBase: new URL(website_config.website_url),
        title: `${title} - ${website_config.website_name}`,
        description: description,
        keywords: keywords,
        other: {
            "fediverse:creator": '@ooo@c.im',
        },
        openGraph: {
            title: title,
            type: pageType === 'website' ? 'website' : 'article',
            description: description,
            images: [
                {
                    url: images,
                    width: 1400,
                    height: 800,
                    alt: website_config.website_name,
                }
            ],
            siteName: title,
        },
        icons: {
            icon: [
                {url: '/favicon/favicon.ico'},
                {url: '/favicon/android-chrome-512x512.png', sizes: '512x512'},
                {url: '/favicon/android-chrome-192x192.png', sizes: '192x192'},
                {url: '/favicon/favicon-32x32.png', sizes: '32x32'},
                {url: '/favicon/favicon-16x16.png', sizes: '16x16'},
            ],
            apple: [
                {url: '/favicon/apple-touch-icon.png'},
            ]
        }
    }
    return metadata;
}