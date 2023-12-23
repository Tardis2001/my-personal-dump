import React from "react";
import Image from "next/image";
import Navbar from "../sections/Navbar";
import "@/src/app/scss/index.scss"

export default function About() {
    return(
        <main>
            <Navbar/>
            <div className="about" >
                <h1 className="about-title">Sobre mim</h1>
                <div className="hero-img" style={{borderRadius: '50%', overflow: 'hidden'}}>
                    <Image src="/images/perfil.jpg" alt="Minha foto de perfil" width={200} height={200} />
                </div>
                <div className="about-grid">
                    <div className="about-grid-info">
                        <p className="about-grid-info-text"> Bom dia/tarde/noite me chamo Matheus Santos Evangelista, amo desenvolver e gosto de jogar basquete alem de jogar jogos eletronicos, Meu interesse com desenvolvimento surgiu no ensino médio aos meus 14 anos.</p>
                        <p className="about-grid-info-text">Pulando para hoje em dia, eu me tornei um estudante de Ciencia da Computação onde eu aprendi diversas coisas, e continuo aprendendo mais.</p>
                        <p className="about-grid-info-text">Não possuo nenhum projeto pronto no momento mas estou desenvolvendo alguns projetos pessoais.</p>
    
                    </div>
                </div>

            </div>
        </main>
    )
}