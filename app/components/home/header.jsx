"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { ReactSVG } from "react-svg";

export default function HeaderComponents() {
    const [sideBar, setSideBar] = useState(0);
    const pathname = usePathname();

    const openSideBarMenu = () => {
        setSideBar(50);
    };

    const closeSideBarMenu = () => {
        setSideBar(0);
    };

    const MenuBar = () => {
        return (
            <>
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
            </>
        );
    }

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    return (
        <div className="cep-header container">
            <Image src={"/logo.png"} alt="Logo" width={"67"} height={"62"} priority={true} />
            <div className="cep-header-menu">
                <MenuBar />
            </div>
            <div className="cep-header-mobile" style={{ width: `${sideBar}%` }}>
                <Button variant="light" className="cep-close-button" onClick={() => closeSideBarMenu()}>&times;</Button>
                <MenuBar />
            </div>
            <ReactSVG src={"/svg/burger.svg"} className="cep-header-burger" onClick={() => openSideBarMenu()} />
        </div>
    )
}
