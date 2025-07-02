'use client';
import Mask from "@/components/icon/Mask";
import Link from "next/link";
import {LineMdExternalLink} from "@/components/icon/LineMdExternalLink";
import {LineMdChevronTripleRight} from "@/components/icon/LineMdChevronTripleRight";
import React, {useRef} from "react";
import {PostItems} from "@/lib/post";
import clsx from "clsx";
import Image from "next/image";

interface PostsListProps {
    postsData: PostItems[];
    className?: string | undefined;
}

const PostsList = ({postsData, className}: PostsListProps) => {

    const cardRefs = useRef(new Map<number, HTMLDivElement | null>());
    const cardBorder = (e: React.MouseEvent<HTMLDivElement>) => {
        cardRefs.current.forEach((el) => {
            if (el) {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                el.style.setProperty('--card-x', `${x}px`);
                el.style.setProperty('--card-y', `${y}px`);
            }
        })
    }
    return (
        <div className={clsx('grid md:grid-cols-2 gap-4 mt-10', className)}
             onMouseMove={(e) => cardBorder(e)}>
            {
                postsData.map(({
                                   slug,
                                   title,
                                   excerpt,
                                   cover,
                                   visitLink
                               }, index) => (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            cardRefs.current.set(index, el);
                        }}
                        className="group text-white overflow-hidden bg-[#ffffff]/10 border-[1px] rounded-md border-[var(--borderColor)] relative before:content-[''] before:absolute before:w-full before:h-full before:z-[2] before:left-[var(--card-x)] before:top-[var(--card-y)] before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-md before:bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,.5)_50%,rgba(255,255,255,0)_100%)]">
                        <div
                            className="relative m-[1px] z-[3] py-5 px-5 bg-[#171717] rounded-md flex flex-col">
                            <Mask className="absolute -translate-x-1/3 w-88 h-88 ml-2 opacity-9 text-white z-[-1]"/>
                            <div className="flex justify-between items-center mb-5">
                                <h1 className="font-bold text-xl">{title}</h1>
                                <div className="flex gap-5">
                                    <Link href={visitLink}
                                          className={clsx('w-[30px] h-[30px] px-[5px] transition-all overflow-hidden text-[14px] font-bold flex items-center justify-end text-white no-underline bg-[#2c2c2c] hover:shadow-[rgba(255,255,255,.5)] shadow-[1px_1px_0_0,-1px_-1px_0_0] shadow-[rgba(255,255,255,.25)]',
                                              'group-hover:w-[83px]'
                                          )}>
                                        <span
                                            className={clsx('text-nowrap opacity-0 mr-5 transition-all -translate-x-full group-hover:opacity-100 translate-x-0')}>Visit</span>
                                        <LineMdExternalLink className="inline-block shrink-0 w-5 h-5"/>
                                    </Link>
                                    <Link href={`/services/${slug}`}
                                          className={clsx('w-[30px] h-[30px] px-[5px] transition-all overflow-hidden text-[14px] font-bold flex items-center justify-end text-white no-underline bg-[#6c3ed6] hover:shadow-[rgba(255,255,255,.7)] shadow-[1px_1px_0_0,-1px_-1px_0_0] shadow-[rgba(255,255,255,.5)]',
                                              'group-hover:w-[125px]'
                                          )}>
                                        <span
                                            className={clsx('text-nowrap opacity-0 mr-5 transition-all -translate-x-full group-hover:opacity-100 translate-x-0')}>Read More</span>
                                        <LineMdChevronTripleRight className="inline-block shrink-0 w-5 h-5"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-5">
                                <div
                                    className="border-[1px] border-[var(--borderColor)] rounded-md overflow-hidden">
                                    <Image src={cover} alt={title} width={800} height={614}/>
                                </div>
                                <div
                                    className="flex items-end justify-center">
                                    <p className="text-[16px] cs-excerpt flex-1 text-md font-[300]">{excerpt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default PostsList