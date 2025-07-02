import website_config from "@/lib/website_config";
import Link from "next/link";

const Footer = () => {
    return (
        <div
            className="flex flex-col gap-1 items-center justify-center text-sm bg-[#171717] border-t-[1px] border-[var(--borderColor)] h-[60px]">
            <nav className="flex space-x-4">
                <Link href="/privacy-policy/" className="text-white">Privacy Policy</Link>
                <Link href="/terms-of-service/" className="text-white">Terms of Service</Link>
            </nav>
            <p className="text-[#ffffff]/70">copyright &copy; {new Date().getFullYear()} {website_config.website_name}.
                All rights reserved.</p>
        </div>
    )
}
export default Footer