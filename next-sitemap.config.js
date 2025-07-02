module.exports = {
    siteUrl: 'https://o.ee',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 7000,
    outDir: './out',
    transform: async (config, url) => {
        return {
            loc: url,
            changefreq: 'weekly',
            priority: 0.7,
        };
    },
};