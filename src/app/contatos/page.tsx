import React from "react";
import Image from "next/image";
import Navbar from "../sections/Navbar";
import "@/src/app/scss/index.scss"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Contatos() {

    return(
        < >
        <Navbar/>
        <h1 className="contact-title">Como entrar em contato comigo?</h1>
        <ul className="contacts">
            <div className="wrapper">
                <FaGithub size={40}/>
                <li className="contact-list"><a href="https://github.com/Tardis2001">Github</a></li>
            </div>
            <div className="wrapper">
                <FaInstagram size={40} />
                <li className="contact-list"><a href="https://github.com/Tardis2001">Instagram</a></li>
            </div>
            <div className="wrapper">
                <FaLinkedin size={40} />
                <li className="contact-list"><a href="https://github.com/Tardis2001">Linkendin</a></li>
            </div>
            <div className="wrapper">
                <FaWhatsapp size={40} />
                <li className="contact-list"><a href="https://wa.me/5541992582201?text=Olá">Whatsapp</a></li>
            </div>
       </ul>
       </>
    )
    
}
    