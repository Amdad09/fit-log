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
    const isSamePath = pathName === path;
    return (
        <Link
            href={path}
            className={`${isSamePath ? 'text-primary bg-primary/10 rounded-full border-none px-3 py-1.5' : 'text-secondary-content'} font-semibold`}
        >
            {children}
        </Link>
    );
};

export default CustomLink;