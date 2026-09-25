import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2.5 font-bold">
            <Image
                src="/logo.png"
                width={34}
                height={34}
                alt="FitLog logo"
                priority
                className="h-8 w-8 object-contain"
            />

            <span className="text-xl font-bold uppercase tracking-tight">FitLog</span>
        </Link>
    );
};

export default Logo;