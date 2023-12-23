'use client';
import React from "react";
import Image from "next/image";

import Navbar from "../sections/Navbar";
import "@/src/app/scss/index.scss"
export default function App() {
  return (

    <main>
        <Navbar/>

  


    <div className="about" >
    <Image src={"/images/perfil.jpg"} alt="Minha foto de perfil" width={200} height={200} style={{borderRadius:"50%"}}/>

    <h1 className="about-title">Sobre mim</h1>

        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text"> Bom dia/tarde/noite me chamo Matheus Santos Evangelista, amo desenvolver e gosto de jogar basquete alem de jogar jogos eletronicos, Meu interesse com desenvolvimento surgiu no ensino médio aos meus 14 anos.</p>
                <p className="about-grid-info-text">Pulando para hoje em dia, eu me tornei um estudante de Ciencia da Computação onde eu aprendi diversas coisas, e continuo aprendendo mais.</p>
                <p className="about-grid-info-text">Não possuo nenhum projeto pronto no momento mas estou desenvolvendo alguns projetos pessoais.</p>

            </div>
        </div>
        <div className="about-skills">
          <div className="about-title"><h4>Habilidades que estou desenvolvendo</h4></div>
            <div className="about-skills-grid">
              <div className="tag">HTML</div>
              <div className="tag">CSS3</div>
              <div className="tag">JS</div>
              <div className="tag">Java</div>
              <div className="tag">Springboot</div>
              <div className="tag">C</div>
              <div className="tag">React</div>
              <div className="tag">TS</div>
              <div className="tag">Next</div>
      


            </div>  
        </div>
    </div>
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
  );
}

