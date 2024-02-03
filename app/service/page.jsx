import Image from "next/image";
import FooterComponents from "../components/home/footer";
import HeaderComponents from "../components/home/header";

export default function About() {
    return (
        <main>
            <HeaderComponents />
            <div className="cep-service">
                <div className="container">
                    <div className="cep-service-welcome">
                        <Image unoptimized src={"/images/service_screen.png"} alt="Service Screen" width={"516"} height={"377"} className="mb-3" />
                        <h1>Services</h1>
                        <Image unoptimized src={"/images/break_line.png"} alt="Break Line" width={"479"} height={"26"} className="mb-2" />
                    </div>
                    <div className="cep-service-feature">
                        <div className="row mb-4">
                            <div className="col-4 col-md-4">
                                <div className="cep-service-feature-img">
                                    <Image unoptimized src={"/images/website_development.png"} layout="fill" objectFit="contain" alt="Website Development" />
                                </div>
                            </div>
                            <div className="col-8 col-md-8">
                                <div className="cep-service-feature-desc">
                                    <h3>Website Development</h3>
                                    <p>
                                        Web Development can range from developing a simple single static page of plain text to complex web application electronic busiesses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-8 col-md-8">
                                <div className="cep-service-feature-desc">
                                    <h3>Mobile Development</h3>
                                    <p>
                                        Mobile development is the process of designing, building, and implementing software application
                                    </p>
                                </div>
                            </div>
                            <div className="col-4 col-md-4">
                                <div className="cep-service-feature-img">
                                    <Image unoptimized src={"/images/mobile_development.png"} layout="fill" objectFit="contain" alt="Mobile Development" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-4 col-md-4">
                                <div className="cep-service-feature-img">
                                    <Image unoptimized src={"/images/blockchain.png"} layout="fill" objectFit="contain" alt="Blockchain" />
                                </div>
                            </div>
                            <div className="col-8 col-md-8">
                                <div className="cep-service-feature-desc">
                                    <h3>Blockchain</h3>
                                    <p>
                                        We strive to make blockchain accessible, secure, and efficient, paving the way for a more transparent and decentralized future.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 col-md-8">
                                <div className="cep-service-feature-desc">
                                    <h3>Dev Ops & Maintenance</h3>
                                    <p>
                                        Your digital journey doesn't end with project delivery. We provide ongoing maintenance and support to keep your digital assets running smoothly and securely.
                                    </p>
                                </div>
                            </div>
                            <div className="col-4 col-md-4">
                                <div className="cep-service-feature-img">
                                    <Image unoptimized src={"/images/dev_ops.png"} layout="fill" objectFit="contain" alt="Dev Ops & Maintenance" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponents />
        </main>
    );
}
