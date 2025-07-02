import React from "react";
import type {Metadata} from "next";
import website_config from "@/lib/website_config";
import {MetadataTool} from "@/lib/MetadataTool";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MainDocsLayout from "@/components/MainDocsLayout";
import generateRSSFeed from "@/lib/rss";
import "./globals.css";
import "./inter.css";

export const metadata: Metadata = MetadataTool({
    title: website_config.website_name,
    description: website_config.website_description,
    pageType: 'website',
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    generateRSSFeed();

    return (
        <html lang="en">
        <body>
        <main>
            <Header/>
            <MainDocsLayout>
                {children}
            </MainDocsLayout>
            <Footer/>
            <script defer data-domain="o.ee" src="https://stat.o.ee/js/script.js"></script>
        </main>
        </body>
        </html>
    );
}
