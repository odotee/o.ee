import {compileMDX} from "next-mdx-remote/rsc";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";

export const loadMDXContent = async (filePath: string, type?: string) => {
    try {

        let fullPath = ''
        if (type === 'services') {
            fullPath = path.resolve(`${process.cwd()}/services/`, filePath);
        } else if (type === 'blog') {
            fullPath = path.resolve(`${process.cwd()}/blog/`, filePath);
        } else {
            fullPath = path.resolve(`${process.cwd()}/src/app/`, filePath);
        }
        const sourceBuffer = fs.readFileSync(fullPath);
        const {content, data} = matter(sourceBuffer);

        const {content: mdContent} = await compileMDX({
            source: content,
            options: {
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                },
            },
        });

        return {mdContent, data};
    } catch (error) {
        console.error("Error loading MDX file:", error);
        throw new Error(`Failed to load MDX content from ${filePath}`);
    }
};