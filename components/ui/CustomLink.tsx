'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
interface CustomLinkProps{
    children: ReactNode;
    path: string;
}
const CustomLink = ({ children, path }: CustomLinkProps) => {
    const pathName = usePathname();
    const isSamePath = path === '/'? pathName === '/' || pathName.startsWith('/workouts') : pathName === path || pathName.startsWith(path);
    return (
        <Link
            href={path}
            className={`
        group relative inline-block font-semibold
        ${
            isSamePath
                ? 'lg:rounded-full bg-primary/10 px-3 py-1.5 text-primary'
                : 'text-secondary-content bg-base-100'
        }
    `}
        >
            <span
                className="
            relative
            after:absolute
            after:-bottom-1
            after:left-0
            after:h-0.5
            after:w-0
            after:bg-primary
            after:transition-all
            after:duration-500
            after:ease-in-out
            group-hover:after:w-full
        "
            >
                {children}
            </span>
        </Link>
    );
};

export default CustomLink;