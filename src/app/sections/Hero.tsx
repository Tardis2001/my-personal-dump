'use client'
import React from "react";
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
  
  return(
        <main>
            <div className="hero">
                <h1 className="hero-title">Olá eu sou</h1>
                <h2 className="hero-title-large glitch">Matheus Evangelista</h2>
                <p className="hero-title-large hero-subtitle ">
      <TypeAnimation
        sequence={[
          "Eu sou um desenvolvedor",
          1000,
          "Eu sou um estudante de Ciencia da Computação",
          1000,
          "Eu sou um jogador de basquete",
          1000
        ]}
        speed={20}
        repeat={Infinity}
        style={{ fontSize: '1em' }}
      />
                </p>
            
                <p className="hero-text"> Bem vindo ao meu site pessoal!,Sou um desenvolvedor e meu foco atual é em sempre aprender tecnologias novas, para saber mais clique acima</p>
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
    )
}

function userTranslations(arg0: string) {
  throw new Error("Function not implemented.");
}
    