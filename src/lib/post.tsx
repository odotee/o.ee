import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';

const postTypes = ['blog', 'services'];


export const BLOG_PATH = join(process.cwd(), postTypes[0]);
export const SERVICES_PATH = join(process.cwd(), postTypes[1]);

export function getPostSlugs(PostType: string): string[] {
    const POSTS_PATH = join(process.cwd(), PostType);
    return fs.readdirSync(POSTS_PATH);
}

export interface PostItems {
    [key: string]: string | string[];

    visitLink: string;
    cover: string;
    title: string
    tags: string[];
}

export function getPostBySlug(PostType: string, slug: string, fields: string[] = []): PostItems {
    const POSTS_PATH = join(process.cwd(), PostType);
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);

    const items: PostItems = {
        visitLink: '',
        cover: '/default-cover.jpg',
        title: '',
        tags: []
    };

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }
        if (field === 'tags') {
            items[field] = data.tags || [];
        }

        if (field === 'thumb') {
            items[field] = data.thumb || '';
        }

        if (data[field]) {
            items[field] = data[field];
        }
        items.postType = PostType;
    });
    return items;
}

export function getPostsList(PostType: string, fields: string[] = []): PostItems[] {
    const slugs = getPostSlugs(PostType);
    return slugs
        .map((slug) => getPostBySlug(PostType, slug, fields))
        .sort((post1, post2) => {
            if (!post1.date && !post2.date) return 0;
            if (!post1.date) return 1;
            if (!post2.date) return -1;
            return post1.date > post2.date ? -1 : 1;
        });
}

export function getTagListArray(PostType: string) {
    const tags: string[] = getPostsList(PostType, ['date', 'tags'])
        .map((post) => post.tags as string[])
        .filter((item) => item)
        .reduce((acc, curr) => acc.concat(curr), []);

    return tags;
}