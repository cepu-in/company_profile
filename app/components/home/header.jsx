"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HeaderComponents() {
    const pathname = usePathname()

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    return (
        <div className="cep-header container">
            <Image src={"/logo.png"} alt="Logo" width={"67"} height={"62"} priority={true} />
            <div className="cep-header-menu">
                <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>
                    <span>Home</span>
                </Link>
                <Link href={"/about"} className={`${pathname === "/about" ? "active" : ""}`}>
                    <span>About</span>
                </Link>
                <Link href={"/service"} className={`${pathname === "/service" ? "active" : ""}`}>
                    <span>Service</span>
                </Link>
                <Link href={"/contact"} className={`${pathname === "/contact" ? "active" : ""}`}>
                    <span>Contact Us</span>
                </Link>
            </div>
        </div>
    )
}
