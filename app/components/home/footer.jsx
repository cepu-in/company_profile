"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterComponents() {
    return (
        <div className="cep-footer">
            <div className="container">
                <div className="cep-footer-about">
                    <div className="cep-footer-about-pt">
                        <Image src={"/logo.png"} alt="Logo" width={"67"} height={"62"} />
                        <h3>PT. Segen Digital Indonesia</h3>
                    </div>
                    <p>
                        We specialize in cutting-edge solutions in Innovative Web, Mobile & Blockchain Development. We transform ideas into impactful web platforms, seamless mobile applications, and secure blockchain solutions.
                    </p>
                </div>
                <div className="cep-footer-menu">
                    <h3>Menu</h3>
                    <Link href={"/"}>
                        <span>Home</span>
                    </Link>
                    <Link href={"/about"}>
                        <span>About</span>
                    </Link>
                    <Link href={"/service"}>
                        <span>Service</span>
                    </Link>
                    <Link href={"/contact"}>
                        <span>Contact Us</span>
                    </Link>
                </div>
                <div className="cep-footer-contact">
                    <h3>Contact Us :</h3>
                    <div className="cep-footer-contact-list">
                        <div className="cep-footer-contact-list-img">
                            <Image src={"/call.png"} alt="Call" width={"20"} height={"20"} />
                        </div>
                        <p>+62 852-8326-6184</p>
                    </div>
                    <div className="cep-footer-contact-list">
                        <div className="cep-footer-contact-list-img">
                            <Image src={"/message.png"} alt="Message" width={"20"} height={"20"} />
                        </div>
                        <Link href={"mailto:admin@segendigitalindonesia.id"}>
                            <p className="text-underline">admin@segendigitalindonesia.id</p>
                        </Link>
                    </div>
                    <div className="cep-footer-contact-list">
                        <div className="cep-footer-contact-list-img">
                            <Image src={"/location.png"} alt="Location" width={"20"} height={"20"} />
                        </div>
                        <p>Jakarta Timur<br />JL JATINEGARA BARAT NO 42, Desa/Kelurahan Kampung Melayu, Kec. Jatinegara<br />Kode Pos: 13320</p>
                    </div>
                </div>
                <div className="cep-footer-social">
                    <h3>Sosial Media</h3>
                    <div className="cep-footer-social-logo">
                        <Link href={"#"}>
                            <Image src={"/facebook.png"} alt="Facebook" width={"50"} height={"50"} />
                        </Link>
                        <Link href={"#"}>
                            <Image src={"/twiter.png"} alt="Twiter" width={"50"} height={"50"} />
                        </Link>
                        <Link href={"#"}>
                            <Image src={"/instagram.png"} alt="Instagram" width={"50"} height={"50"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
