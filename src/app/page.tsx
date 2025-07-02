import React from "react";
import {EosIconsBlockchain} from "@/components/icon/EosIconsBlockchain";
import {Fa6SolidMasksTheater} from "@/components/icon/Fa6SolidMasksTheater";
import {TablerBrandOpenSource} from "@/components/icon/TablerBrandOpenSource";
import PostsList from "@/components/PostsList";
import {getPostsList} from "@/lib/post";
import type {Metadata} from "next";
import {MetadataTool} from "@/lib/MetadataTool";
import website_config from "@/lib/website_config";

export const metadata: Metadata = MetadataTool({
    title: website_config.seo.home.title,
    description: website_config.seo.home.description,
    pageType: 'website',
})

export default function Page() {
    const postsData = getPostsList('services', ['slug', 'title', 'cover', 'excerpt', 'date', 'visitLink']);

    return (
        <>
            <h1 className="font-bold text-3xl sm:text-5xl text-center mb-10">Building Independent, Privacy-First
                Internet Services</h1>

            <p className="text-center text-sm sm:text-lg max-w-5xl mx-auto">Owl Owl OÜ is an Estonia-based company focused on creating
                decentralized, user-respecting online platforms.
                We operate services like Mastodon, PeerTube, and Lemmy with a commitment to openness, privacy, and
                long-term sustainability — without ads, tracking, or corporate interference.</p>

            <div className="mt-10">
                <ul className="flex flex-col md:flex-row mt-5 rounded-md text-white bg-[#171717] border-[1px] border-[var(--borderColor)]">
                    <li className="flex gap-3 flex-col items-center justify-center p-5 border-b-[1px] md:border-b-0 md:border-r-[1px] border-[var(--borderColor)]">
                        <TablerBrandOpenSource className="w-10 h-10"/>
                        <h3 className="font-bold text-xl">Open Source</h3>
                        <p className="text-md font-[300]">We build on transparent, community-driven technologies. All our platforms
                            are powered by open-source software — audited, adaptable, and accountable.</p>
                    </li>

                    <li className="flex gap-3 flex-col items-center justify-center p-5 border-b-[1px] md:border-b-0 md:border-r-[1px] border-[var(--borderColor)]">
                        <Fa6SolidMasksTheater className="w-10 h-10"/>
                        <h3 className="font-bold text-xl">Decentralized</h3>
                        <p className="text-md font-[300]">We believe in a web without gatekeepers. Our services run on federated
                            protocols like ActivityPub, giving users more control, and making censorship harder.</p>
                    </li>

                    <li className="flex gap-3 flex-col items-center justify-center p-5">
                        <EosIconsBlockchain className="w-10 h-10"/>
                        <h3 className="font-bold text-xl">Privacy Comes First</h3>
                        <p className="text-md font-[300]">Your data is yours. We don’t track, profile, or sell your information —
                            ever. Our infrastructure is EU-hosted, GDPR-compliant, and built with privacy in mind.</p>
                    </li>
                </ul>
            </div>
            <PostsList postsData={postsData}/>
        </>
    )
}
