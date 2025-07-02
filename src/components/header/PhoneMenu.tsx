'use client';
import Link from 'next/link';
import React, {useState} from "react";
import clsx from "clsx";
import HamburgerButton from "@/components/HamburgerButton";

export default function PhoneMenu() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <div className="block md:hidden">
            <HamburgerButton onClick={toggleNav} isOpen={isNavOpen}/>
            <div className={clsx('block md:hidden fixed bottom-0 left-0 right-0 z-[999]',
                isNavOpen ? 'active-left' : '')}>
                <div className="absolute inset-0 bg-neutral-950/40" onClick={() => setIsNavOpen(false)}></div>
                <aside
                    className={clsx('bg-white dark:bg-[#191919] relative z-10 h-full w-[80%] overflow-auto border-r-[1px] border-[#e5e5e5] dark:border-[#ffffff1c]')}>
                    <div className="overflow-auto p-4">
                        <nav className="flex space-x-4">
                            <Link href="/" className="text-white">Home</Link>
                            <Link href="/about" className="text-white">About</Link>
                            <Link href="/services" className="text-white">Services</Link>
                            <Link href="/blog" className="text-white">Blog</Link>
                            <Link href="/contact" className="text-white">Contact</Link>
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    );
}