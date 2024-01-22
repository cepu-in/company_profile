'use client';

import Image from "next/image";
import FooterComponents from "../components/home/footer";
import HeaderComponents from "../components/home/header";

export default function About() {
    const onSubmit = () => {
        alert("Click!");
    }

    return (
        <main>
            <HeaderComponents />
            <div className="cep-contact">
                <div className="container">
                    <div className="row align-items-center ps-4 pe-4">
                        <div className="col-12 col-md-7">
                            <div className="cep-contact-form">
                                <h2>Get in Touch</h2>
                                <p>You can get in touch with us via the contact information below</p>
                                <div className="cep-contact-form-control mb-4">
                                    <label>Name</label>
                                    <input type="text" placeholder="Ex. Rachel Joe" />
                                </div>
                                <div className="cep-contact-form-control mb-4">
                                    <label>Email</label>
                                    <input type="email" placeholder="Ex. Rachel@domain.com" />
                                </div>
                                <div className="cep-contact-form-control mb-5">
                                    <label>Message</label>
                                    <textarea rows={3} placeholder="Type your query here....." />
                                </div>
                                <button onClick={() => onSubmit()}>
                                    Send my message
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="cep-contact-img">
                                <Image src={"/form_contact.png"} alt="Form Contact" width={"516"} height={"500"} />
                            </div>
                        </div>
                    </div>
                    <div className="cep-contact-us">
                        <Image src={"/contact_us.png"} layout='fill' objectFit='contain' alt="Contact Us" />
                    </div>
                </div>
            </div>
            <FooterComponents />
        </main>
    )
}
