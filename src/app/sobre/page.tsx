'use client';
// import "./styles.css";
import { useSpring, animated, config, Transition } from "react-spring";
import blobshape from "blobshape";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

import Navbar from "../sections/Navbar";
import "@/src/app/scss/index.scss"
import { FluidValue } from "@react-spring/shared";
export default function App() {
  return (

    <main>
        <Navbar/>

      <div style={{padding:" 0 100px "}}>
        <Blob
          color="#FFFFFF"
          style={{ opacity: 0.2, position: "absolute", width: '315px', height: '315px' }} image={undefined}        />
        <Blob
          color="#FFFFFF"
          style={{ opacity: 0.4, position: "absolute", width: '315px', height: '315px' }} image={undefined}        />
        <Blob
          color="#FFFFFF"
          style={{ opacity: 0.5, position: "absolute", width: '315px', height: '315px' }} image={undefined}        />
        <Blob
          image
          style={{
            width: "300px",
            opacity: 0.95,
            position: "relative",
          }} color={undefined}        />
          
    </div>  

    <div className="about" >
    <h1 className="about-title">Sobre mim</h1>

        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text"> Bom dia/tarde/noite me chamo Matheus Santos Evangelista, amo desenvolver e gosto de jogar basquete alem de jogar jogos eletronicos, Meu interesse com desenvolvimento surgiu no ensino médio aos meus 14 anos.</p>
                <p className="about-grid-info-text">Pulando para hoje em dia, eu me tornei um estudante de Ciencia da Computação onde eu aprendi diversas coisas, e continuo aprendendo mais.</p>
                <p className="about-grid-info-text">Não possuo nenhum projeto pronto no momento mas estou desenvolvendo alguns projetos pessoais.</p>

            </div>
        </div>
    </div>

</main>
  );
}

function getRandomPath() {
  return blobshape({
    growth: 8,
    edges: 18
  }).path;
}

function Blob(props: { image: any; style: React.CSSProperties | undefined; color: string | FluidValue<string, any> | undefined; }) {
  const [flip, set] = useState(false);

  const { path } = useSpring({
    to: { path: getRandomPath() },
    from: { path: getRandomPath() },
    reverse: flip,
    config: {
      duration: props.image ? 9000 : 6000
    },
    onRest: (x) => {
      x.value.path = getRandomPath();
      // !props.image &&
      set(!flip);
    }
  });

  return (
    <svg viewBox="0 0 500 500" width="100%" style={props.style}>
      {!props.image && <animated.path fill={props.color} d={path} />}

      {props.image && (
        <>
          <defs>
            <clipPath id="a">
              <animated.path fill={props.color} d={path} />
            </clipPath>
          </defs>
          <image
            width="80%"
            height="80%"
            clip-path="url(#a)"
            xlinkHref="/images/perfil.jpg"
            preserveAspectRatio="xMidYMid slice"
          />
        </>
      )}
    </svg>
  );

}
