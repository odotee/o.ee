import type {NextConfig} from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig)
