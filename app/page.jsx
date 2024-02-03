import Image from "next/image";
import FooterComponents from "./components/home/footer";
import HeaderComponents from "./components/home/header";

export default function Home() {
    return (
        <main>
            <HeaderComponents />
            <div className="cep-content">
                <div className="cep-content-welcome container">
                    <div className="cep-content-welcome-left">
                        <h1>
                            Innovative Web, Mobile & Blockchain Development
                        </h1>
                        <Image unoptimized src={"/images/break_line.png"} alt="Break Line" width={"479"} height={"26"} />
                        <p>Blazing fast web development for individuals and businesses of all sizes.</p>
                    </div>
                    <div className="cep-content-welcome-right">
                        <Image unoptimized src={"/images/develop_screen.png"} alt="Develop Screen" width={"552"} height={"431"} />
                    </div>
                </div>
                <div className="cep-content-feature container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="cep-content-feature-item">
                                <Image unoptimized src={"/images/uptime.png"} alt="Uptime" width={"85"} height={"85"} />
                                <h3>99.9% Uptime</h3>
                                <p>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="cep-content-feature-item">
                                <Image unoptimized src={"/images/assurance.png"} alt="Assurance" width={"85"} height={"85"} />
                                <h3>Quality Assurance</h3>
                                <p>We guarantee 99.9% uptime, ensuring your digital presence remains consistently available. Trust us to keep your business running smoothly, day after day.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="cep-content-feature-item">
                                <Image unoptimized src={"/images/reliability.png"} alt="Reliability" width={"85"} height={"85"} />
                                <h3>Reliability</h3>
                                <p>Trust is paramount in technology. We guarantee reliability, so you can focus on growing your business with peace of mind. Experience the power of reliability with our services. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cep-content-partner container">
                    <h1>Our Partner</h1>
                    <p>"We are doing our best to participate in the technological reforms required in Indonesia, by providing the necessary technological solutions to various companies in order to embrace the future and address various challenges, aiming to realize an effective and efficient company in conducting business activities."</p>
                    <div className="cep-content-partner-logo">
                        <Image unoptimized src={"/images/sthiragita.png"} alt="Sthiragita" width={"248"} height={"70"} />
                        <Image unoptimized src={"/images/hergana.png"} alt="Hergana" width={"155"} height={"155"} />
                        <Image unoptimized src={"/images/cepuin.png"} alt="Cepuin" width={"89"} height={"83"} />
                    </div>
                </div>
            </div>
            <FooterComponents />
        </main>
    );
}
