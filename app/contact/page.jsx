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
            <div className="cep-contact" data-page-enter>
                <div className="container">
                    <div className="row align-items-center ps-4 pe-4">
                        <div className="col-12 col-md-7">
                            <div className="cep-contact-form">
                                <h2 data-entrance="heading">Get in Touch</h2>
                                <p data-entrance="description">You can get in touch with us via the contact information below</p>
                                <div className="cep-contact-form-control mb-4" data-reveal="contact">
                                    <label htmlFor="contact-name">Name</label>
                                    <input id="contact-name" autoComplete="name" type="text" placeholder="Ex. Rachel Joe" />
                                </div>
                                <div className="cep-contact-form-control mb-4" data-reveal="contact">
                                    <label htmlFor="contact-email">Email</label>
                                    <input id="contact-email" autoComplete="email" type="email" placeholder="Ex. Rachel@domain.com" />
                                </div>
                                <div className="cep-contact-form-control mb-5" data-reveal="contact">
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea id="contact-message" rows={3} placeholder="Type your query here....." />
                                </div>
                                <button data-entrance="cta" onClick={() => onSubmit()}>
                                    Send my message
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="cep-contact-img" data-entrance="image">
                                <Image src={"/form_contact.png"} alt="Form Contact" width={"516"} height={"500"} />
                            </div>
                        </div>
                    </div>
                    <div className="cep-contact-us" data-reveal="contact">
                        <Image src={"/contact_us.png"} layout='fill' objectFit='contain' alt="Contact Us" />
                    </div>
                </div>
            </div>
            <FooterComponents />
        </main>
    )
}
