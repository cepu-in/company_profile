import Image from "next/image";
import FooterComponents from "../components/home/footer";
import HeaderComponents from "../components/home/header";

export default function About() {
    return (
        <main>
            <HeaderComponents />
            <div className="cep-about">
                <div className="container">
                    <div className="cep-about-welcome">
                        <Image src={"/about_screen.png"} alt="About Screen" width={"516"} height={"377"} className="mb-3" />
                        <h1>Better living with technology</h1>
                        <Image src={"/break_line.png"} alt="Break Line" width={"479"} height={"26"} className="mb-2" />
                        <p>
                            We are doing our best to participate in the technological reforms required by Indonesia, by providing the necessary technological solutions to various companies in order to embrace the future and address various challenges, aiming to realize an effective and efficient company in conducting business activities."
                        </p>
                    </div>

                    <div className="cep-about-vision">
                        <div className="cep-about-vision-overlay">
                            <img src={"/bg_vision.png"} alt="Background Vision" className="d-none d-sm-block" />
                            <img src={"/bg_vision_mobile.png"} alt="Background Vision Mobile" className="d-block d-sm-none" />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-5">
                                <Image src={"/screen_vision.png"} alt="Screen Vision" width={"425"} height={"425"} />
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="cep-about-vision-box mb-4">
                                    <h3>Vision</h3>
                                    <p>
                                        To be a global leader in web and mobile solutions, pioneering innovation, and excellence in digital experiences.
                                    </p>
                                </div>
                                <div className="cep-about-vision-box">
                                    <h3>Mission</h3>
                                    <p>
                                        shape the future of digital experiences by providing high-impact web and mobile solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cep-about-values">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-7">
                                <ul class="cep-about-values-step">
                                    <li class="cep-about-values-step-item">
                                        <h3>Innovation</h3>
                                        <p>
                                            We strive to be at the forefront of technological advancement, constantly pushing the boundaries of what's possible in web and mobile development. Our solutions are infused with creativity and innovation.
                                        </p>
                                    </li>
                                    <li class="cep-about-values-step-item">
                                        <h3>Agile Adaptation</h3>
                                        <p>
                                            We build solutions that are not just current but also adaptable to future demands. Our aim is to help our clients stay agile in the face of a dynamic digital landscape.
                                        </p>
                                    </li>
                                    <li class="cep-about-values-step-item">
                                        <h3>Community Involvement</h3>
                                        <p>
                                            We actively engage in community initiatives, sharing our expertise and resources to empower individuals and organizations in the digital space.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-5">
                                <h2>Our Values</h2>
                                <Image src={"/our_values.png"} alt="Our Values" width={"515"} height={"515"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponents />
        </main>
    )
}
