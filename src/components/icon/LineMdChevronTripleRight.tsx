import {SVGProps} from "react";

export function LineMdChevronTripleRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeDasharray="0" strokeDashoffset="12" strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="2">
                <path d="M22 12l-7 -7M22 12l-7 7"></path>
                <path d="M16 12l-7 -7M16 12l-7 7"></path>
                <path d="M10 12l-7 -7M10 12l-7 7"></path>
            </g>
        </svg>
    )
}