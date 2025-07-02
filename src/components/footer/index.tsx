import website_config from "@/lib/website_config";
import Link from "next/link";
import {Mastodon} from "@/components/icon/Mastodon";
import {Bluesky} from "@/components/icon/Bluesky";
import {Github} from "@/components/icon/Github";

const Footer = () => {
    return (
        <div className="text-center text-sm bg-[#171717] border-t-[1px] border-[var(--borderColor)] py-3 h-[107px]">
            <div
                className="text-center px-5 flex flex-col justify-center gap-3 items-center">
                <div className="flex gap-5">
                    <a className="hover:text-white" href="https://c.im/@ooo" rel="nofollow me" target="_blank"><Mastodon
                        className="w-7 h-7"/></a>
                    <a className="hover:text-white" href="https://bsky.app/profile/o.ee" target="_blank"><Bluesky
                        className="w-7 h-7"/></a>
                    <a className="hover:text-white" href="https://github.com/odotee/o.ee" target="_blank"><Github
                        className="w-7 h-7"/></a>
                </div>
                <nav className="flex gap-3 mb-1">
                    <Link href="/privacy-policy/" className="text-white">Privacy Policy</Link>
                    <Link href="/terms-of-service/" className="text-white">Terms of Service</Link>
                </nav>
            </div>
            <p className="text-[#ffffff]/70 text-[13px]">copyright &copy; {new Date().getFullYear()} {website_config.website_name}.
                All rights reserved.</p>
        </div>
    )
}
export default Footer