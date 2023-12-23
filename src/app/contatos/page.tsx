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
        <main>
        <Navbar/>
        <h1 className="contact-title">Como entrar em contato comigo?</h1>
        <ul className="contacts">
            <div className="wrapper">
            <a href="https://github.com/Tardis2001">
                <FaGithub size={40}/>
                <li className="contact-list">Github</li>
            </a>
            </div>
            <div className="wrapper">
                <a href="https://www.instagram.com/matheuevangelista/">
                    <FaInstagram size={40} />
                    <li className="contact-list">Instagram</li>
                </a>
            </div>
            <div className="wrapper">
            <a href="https://www.linkedin.com/in/matheus-santos-evangelista-610b58181/">
                <FaLinkedin size={40} />
                <li className="contact-list">Linkendin</li>
            </a>
            </div>
            <div className="wrapper">
            <a href="https://wa.me/5541992582201?text=Olá!">
                <FaWhatsapp size={40} />
                <li className="contact-list">Whatsapp</li>
            </a>
            </div>
            
       </ul>
       
    <div className="stars">
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
</div>
       </main>
    )
    
}
    