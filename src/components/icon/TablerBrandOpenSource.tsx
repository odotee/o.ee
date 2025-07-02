import {SVGProps} from "react";

export function TablerBrandOpenSource(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
             viewBox="0 0 24 24" {...props}>{/* Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE */}
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 3a9 9 0 0 1 3.618 17.243l-2.193-5.602a3 3 0 1 0-2.849 0l-2.193 5.603A9 9 0 0 1 12 3"/>
        </svg>
    )
}