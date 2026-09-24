import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link className="flex items-center gap-2 font-bold" href="/">
            <Image src="/logo.png" width={30} height={20} alt="logo" />
            <span className="text-xl uppercase tracking-tighter">
                Fitlog
            </span>
        </Link>
    );
};

export default Logo;