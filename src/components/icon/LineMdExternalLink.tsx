import {SVGProps} from "react";

export function LineMdExternalLink(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
             viewBox="0 0 24 24" {...props}>{/* Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt */}
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path strokeDasharray="0" strokeDashoffset="48" d="M11 5h-6v14h14v-6"></path>
                <path strokeDasharray="0" strokeDashoffset="12" d="M13 11l7 -7"></path>
                <path strokeDasharray="0" strokeDashoffset="8" d="M21 3h-6M21 3v6"></path>
            </g>
        </svg>
    )
}