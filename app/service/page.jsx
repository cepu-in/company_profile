import Image from "next/image";
import FooterComponents from "../components/home/footer";
import HeaderComponents from "../components/home/header";

export default function About() {
    return (
        <main>
            <HeaderComponents />
            <div className="cep-service" data-page-enter>
                <div className="container">
                    <div className="cep-service-welcome">
                        <Image data-entrance="image" src={"/service_screen.png"} alt="Service Screen" width={"516"} height={"377"} className="mb-3" />
                        <h1 data-entrance="heading">Services</h1>
                        <Image src={"/break_line.png"} alt="Break Line" width={"479"} height={"26"} className="mb-2" />
                    </div>
                    <div className="cep-service-feature cep-service-grid">
                        <article className="cep-service-card" data-reveal="card" data-motion-delay="0">
                            <div className="cep-service-card-image">
                                <Image src="/website_development.png" alt="Website Development" width={502} height={406} sizes="(min-width: 1400px) 416px, (min-width: 992px) 33vw, 100vw" />
                            </div>
                            <div className="cep-service-feature-desc">
                                <h3>Website Development</h3>
                                <p>Web Development can range from developing a simple single static page of plain text to complex web application electronic busiesses</p>
                            </div>
                        </article>
                        <article className="cep-service-card" data-reveal="card" data-motion-delay="220">
                            <div className="cep-service-card-image">
                                <Image src="/mobile_development.png" alt="Mobile Development" width={502} height={406} sizes="(min-width: 1400px) 416px, (min-width: 992px) 33vw, 100vw" />
                            </div>
                            <div className="cep-service-feature-desc">
                                <h3>Mobile Development</h3>
                                <p>Mobile development is the process of designing, building, and implementing software application</p>
                            </div>
                        </article>
                        <article className="cep-service-card" data-reveal="card" data-motion-delay="440">
                            <div className="cep-service-card-image">
                                <Image src="/dev_ops.png" alt="Dev Ops & Maintenance" width={502} height={406} sizes="(min-width: 1400px) 416px, (min-width: 992px) 33vw, 100vw" />
                            </div>
                            <div className="cep-service-feature-desc">
                                <h3>Dev Ops & Maintenance</h3>
                                <p>Your digital journey doesn't end with project delivery. We provide ongoing maintenance and support to keep your digital assets running smoothly and securely.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <FooterComponents />
        </main>
    )
}
