import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-[120px] uppercase mb-10">
                <h1 className="font-bold">404</h1>
            </div>
            <div className="text-left text-xl">
                <p>The page you are looking for could not be found.</p>
            </div>

            <div className="flex flex-row justify-center md:gap-10 gap-4 mt-10">
                <Link
                    className="flex items-center justify-center whitespace-nowrap gap-2 sm:text-[24px] sm:w-52 w-32 text-[16px] text-center sm:py-5 py-3 md:px-2"
                    href="/contact">
                    <div
                        className="flex justify-between items-center sm:w-10 w-7">
                    </div>
                    Contact Us
                </Link>
                <div className="p-2">
                    <Link
                        href="/"
                        className="flex items-center justify-center whitespace-nowrap gap-2 sm:text-[24px] sm:w-52 w-36 text-[16px] text-center sm:py-5 py-3 md:px-2 cursor-pointer"
                    >
                        <div
                            className="flex justify-between items-center sm:w-10 w-7">

                        </div>
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NotFound