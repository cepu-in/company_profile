"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Motion from "./motion";

const links = [["/", "Home"], ["/about", "About"], ["/service", "Service"], ["/contact", "Contact Us"]];

export default function HeaderComponents() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const toggle = useRef(null);
    const menu = useRef(null);

    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 16);
        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    useEffect(() => {
        if (!open) return;
        const dismiss = (event) => {
            if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
            if (event.type === "pointerdown" && !menu.current?.contains(event.target) && !toggle.current?.contains(event.target)) setOpen(false);
        };
        const desktop = window.matchMedia("(min-width: 768px)");
        const resize = () => { if (desktop.matches) setOpen(false); };
        document.addEventListener("keydown", dismiss);
        document.addEventListener("pointerdown", dismiss);
        desktop.addEventListener("change", resize);
        return () => {
            document.removeEventListener("keydown", dismiss);
            document.removeEventListener("pointerdown", dismiss);
            desktop.removeEventListener("change", resize);
        };
    }, [open]);

    const navigation = () => links.map(([href, label]) => (
        <Link key={href} href={href} className={pathname === href ? "active" : ""}
            aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>
            <span>{label}</span>
        </Link>
    ));

    return (
        <header className={`cep-header-shell${scrolled ? " is-scrolled" : ""}`}>
            <Motion />
            <div className="cep-header container" data-entrance="nav">
                <Image src="/logo.png" alt="Logo" width={67} height={62} priority />
                <nav className="cep-header-menu" aria-label="Main navigation">{navigation()}</nav>
                <button ref={toggle} type="button" className="cep-menu-toggle" aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
                <nav ref={menu} id="mobile-navigation" className={`cep-mobile-nav${open ? " is-open" : ""}`}
                    aria-label="Mobile navigation" inert={open ? undefined : ""}>{navigation()}</nav>
            </div>
        </header>
    );
}
