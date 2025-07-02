import fs from 'fs';
import {Feed} from 'feed';
import {getPostsList} from '@/lib/post';
import website_config from '@/lib/website_config';

interface Post {
    title: string;
    excerpt: string;
    date: string;
    slug: string | string[];
    tags: string[];
    postType: string
}

export default function generateRSSFeed() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const posts: Post[] = ['blog', 'services'].flatMap((postType) => {
        return getPostsList(postType, ['title', 'excerpt', 'date', 'slug', 'tags']).map(
            ({title, excerpt, date, slug, tags}) => ({
                title,
                // 处理 excerpt：取第一个字符串或空字符串
                excerpt: Array.isArray(excerpt) ? excerpt[0] || '' : excerpt || '',
                // 处理 date：取第一个字符串并确保是有效日期
                date: Array.isArray(date) ? date[0] || currentDate.toISOString() : date || currentDate.toISOString(),
                slug,
                tags: Array.isArray(tags) ? tags : tags ? [tags] : [],
                postType,
            })
        );
    });

    const {
        website_url: baseUrl,
        website_name: title,
        website_description: description,
        website_author: author,
    } = website_config;

    const feed = new Feed({
        title,
        description,
        id: baseUrl,
        link: baseUrl,
        language: 'en',
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
            atom1: `${baseUrl}/atom.xml`,
        },
        author: {
            name: author,
            link: baseUrl,
        },
        copyright: `© ${currentYear} ${author}`,
    });

    posts.forEach(({title, excerpt, slug, date, postType}) => {
        const url = `${baseUrl}/${postType}/${slug}`;

        feed.addItem({
            title,
            id: url,
            link: url,
            description: excerpt,
            author: [
                {
                    name: author,
                    link: baseUrl,
                },
            ],
            date: new Date(date),
        });
    });

    try {
        fs.writeFileSync('public/rss.xml', feed.rss2());
        fs.writeFileSync('public/atom.xml', feed.atom1());
        console.log('RSS and Atom feeds generated successfully.');
    } catch (error) {
        console.error('Failed to write RSS/Atom feeds:', error);
        throw error;
    }
}